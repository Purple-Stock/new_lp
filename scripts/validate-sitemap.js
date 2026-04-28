#!/usr/bin/env node

/**
 * Sitemap Validation Script
 *
 * This script validates your sitemap by:
 * 1. Checking if all URLs are accessible
 * 2. Validating XML structure
 * 3. Checking for duplicate URLs
 * 4. Verifying priority and change frequency values
 */

const https = require("https");
const http = require("http");
const { analyzeSitemapXml } = require("./lib/validators");

// Configuration
const SITEMAP_URL =
  process.env.SITEMAP_URL || "http://localhost:3000/sitemap.xml";
const TIMEOUT = 10000; // 10 seconds
const CONCURRENT_REQUESTS = 5;

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https:") ? https : http;
    const req = protocol.get(url, { timeout: TIMEOUT }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          url,
          data,
        });
      });
    });

    req.on("error", (err) => {
      reject({ error: err.message, url });
    });

    req.on("timeout", () => {
      req.destroy();
      reject({ error: "Request timeout", url });
    });
  });
}

async function validateSitemap() {
  log("🔍 Starting sitemap validation...", "blue");
  log(`📍 Sitemap URL: ${SITEMAP_URL}`, "cyan");

  try {
    // Fetch sitemap
    const response = await makeRequest(SITEMAP_URL);

    if (response.status !== 200) {
      log(`❌ Failed to fetch sitemap. Status: ${response.status}`, "red");
      return;
    }

    const result = analyzeSitemapXml(response.data);

    if (result.urls.length === 0) {
      log("❌ No URLs found in sitemap", "red");
      return false;
    }

    log(`\n📊 Sitemap Statistics:`, "blue");
    log(`   Total URLs: ${result.urls.length}`, "green");
    log(`   Unique URLs: ${result.uniqueUrlCount}`, "green");
    log(
      `   Duplicate URLs: ${result.duplicates.length}`,
      result.duplicates.length > 0 ? "red" : "green"
    );
    log(`   Priorities used: ${result.priorities.join(", ")}`, "cyan");
    log(`   Change frequencies: ${result.changeFreqs.join(", ")}`, "cyan");

    // Check for duplicates
    if (result.duplicates.length > 0) {
      log("\n⚠️  Duplicate URLs found:", "yellow");
      result.duplicates.forEach((url) => log(`   ${url}`, "red"));
    }

    if (result.invalidPriorities.length > 0) {
      log("\n⚠️  Invalid priorities found:", "yellow");
      result.invalidPriorities.forEach((p) => log(`   ${p}`, "red"));
    }

    if (result.invalidChangeFreqs.length > 0) {
      log("\n⚠️  Invalid change frequencies found:", "yellow");
      result.invalidChangeFreqs.forEach((f) => log(`   ${f}`, "red"));
    }

    // Test URL accessibility (sample a few URLs)
    log("\n🔗 Testing URL accessibility (sampling 5 URLs)...", "blue");
    const sampleUrls = result.urls.slice(0, 5);

    const results = await Promise.allSettled(
      sampleUrls.map((url) => makeRequest(url))
    );

    results.forEach((result, index) => {
      const url = sampleUrls[index];
      if (result.status === "fulfilled") {
        const status = result.value.status;
        if (status >= 200 && status < 400) {
          log(`   ✅ ${url} - ${status}`, "green");
        } else {
          log(`   ⚠️  ${url} - ${status}`, "yellow");
        }
      } else {
        log(`   ❌ ${url} - ${result.reason.error}`, "red");
      }
    });

    // Summary
    log("\n📋 Validation Summary:", "blue");
    const isValid =
      result.duplicates.length === 0 &&
      result.invalidPriorities.length === 0 &&
      result.invalidChangeFreqs.length === 0;

    if (isValid) {
      log("   ✅ Sitemap is valid!", "green");
    } else {
      log("   ⚠️  Sitemap has some issues that should be addressed", "yellow");
    }

    log("\n💡 Tips:", "cyan");
    log("   - Submit your sitemap to Google Search Console");
    log("   - Submit your sitemap to Bing Webmaster Tools");
    log("   - Keep your sitemap updated when adding new pages");
    log(
      "   - Use appropriate priorities (1.0 for homepage, 0.8-0.9 for important pages)"
    );

    return isValid;
  } catch (error) {
    log(`❌ Error validating sitemap: ${error.message}`, "red");
    return false;
  }
}

// Run validation
if (require.main === module) {
  validateSitemap().then((isValid) => {
    process.exitCode = isValid ? 0 : 1;
  });
}

module.exports = { validateSitemap };
