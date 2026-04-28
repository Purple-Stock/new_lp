#!/usr/bin/env node

/**
 * LLMs.txt Validation Script
 *
 * This script validates your llms.txt file by:
 * 1. Checking content structure and formatting
 * 2. Validating internal links
 * 3. Checking content length and organization
 * 4. Verifying Markdown syntax
 */

const https = require("https");
const http = require("http");
const { analyzeLlmsContent } = require("./lib/validators");

// Configuration
const LLMS_TXT_URL =
  process.env.LLMS_TXT_URL || "http://localhost:3001/llms.txt";
const TIMEOUT = 10000; // 10 seconds

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
          headers: res.headers,
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

async function validateLlmsTxt() {
  log("🤖 Starting LLMs.txt validation...", "blue");
  log(`📍 LLMs.txt URL: ${LLMS_TXT_URL}`, "cyan");

  try {
    // Fetch llms.txt
    const response = await makeRequest(LLMS_TXT_URL);

    if (response.status !== 200) {
      log(`❌ Failed to fetch llms.txt. Status: ${response.status}`, "red");
      return;
    }

    // Check content type
    const contentType = response.headers["content-type"];
    if (contentType && !contentType.includes("text/plain")) {
      log(
        `⚠️  Content-Type should be 'text/plain', got: ${contentType}`,
        "yellow"
      );
    } else {
      log(`✅ Content-Type: ${contentType}`, "green");
    }

    const result = analyzeLlmsContent(response.data);

    log(`\n📊 Content Analysis:`, "blue");
    log(`   Total Lines: ${result.totalLines}`, "green");
    log(`   Headers (#): ${result.headers}`, "cyan");
    log(`   Main Sections (##): ${result.sections}`, "cyan");
    log(`   Subsections (###): ${result.subsections}`, "cyan");
    log(`   Markdown Links: ${result.links.length}`, "cyan");

    // Check content structure
    log(`\n🏗️  Content Structure:`, "blue");

    const sectionCount = 8 - result.missingSections.length;
    log(
      `   Main Sections Found: ${sectionCount}/8`,
      result.missingSections.length === 0 ? "green" : "yellow"
    );

    if (result.missingSections.length > 0) {
      log(`   Missing Sections: ${result.missingSections.join(", ")}`, "red");
    }

    log(
      `   Feature Links Found: ${9 - result.missingFeatures.length}/9`,
      result.missingFeatures.length === 0 ? "green" : "yellow"
    );

    log(
      `   Industry Links Found: ${9 - result.missingIndustries.length}/9`,
      result.missingIndustries.length === 0 ? "green" : "yellow"
    );

    // Validate internal links (sample a few)
    log(`\n🔗 Link Validation (sampling 5 links)...`, "blue");

    const sampleLinks = response.data.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
    const sampledLinks = sampleLinks.slice(0, 5);

    if (sampledLinks.length > 0) {
      const results = await Promise.allSettled(
        sampledLinks.map((linkMatch) => {
          const urlMatch = linkMatch.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (urlMatch) {
            const url = urlMatch[2];
            const fullUrl = url.startsWith("http")
              ? url
              : `http://localhost:3001${url}`;
            return makeRequest(fullUrl);
          }
          return Promise.resolve(null);
        })
      );

      results.forEach((result, index) => {
        const linkMatch = sampledLinks[index];
        if (result.status === "fulfilled" && result.value) {
          const status = result.value.status;
          if (status >= 200 && status < 400) {
            log(`   ✅ ${linkMatch} - ${status}`, "green");
          } else {
            log(`   ⚠️  ${linkMatch} - ${status}`, "yellow");
          }
        } else {
          log(`   ❌ ${linkMatch} - Error`, "red");
        }
      });
    }

    // Content quality checks
    log(`\n📝 Content Quality:`, "blue");

    log(
      `   Has Clear Description: ${result.hasDescription ? "✅" : "❌"}`,
      result.hasDescription ? "green" : "red"
    );

    log(
      `   Has Technical Info: ${result.hasTechInfo ? "✅" : "❌"}`,
      result.hasTechInfo ? "green" : "red"
    );

    log(
      `   Has Industry Context: ${result.hasIndustryContext ? "✅" : "❌"}`,
      result.hasIndustryContext ? "green" : "red"
    );

    // Summary
    log(`\n📋 Validation Summary:`, "blue");

    const allChecks = [
      result.missingSections.length === 0,
      result.missingFeatures.length === 0,
      result.missingIndustries.length === 0,
      result.hasDescription,
      result.hasTechInfo,
      result.hasIndustryContext,
    ];

    const passedChecks = allChecks.filter(Boolean).length;
    const totalChecks = allChecks.length;

    const isValid = passedChecks === totalChecks;

    if (isValid) {
      log(
        `   ✅ LLMs.txt is fully valid! (${passedChecks}/${totalChecks})`,
        "green"
      );
    } else {
      log(
        `   ⚠️  LLMs.txt has some issues (${passedChecks}/${totalChecks})`,
        "yellow"
      );
    }

    log(`\n💡 Tips:`, "cyan");
    log(`   - Keep content updated when adding new features`);
    log(`   - Ensure all internal links are working`);
    log(`   - Maintain clear section organization`);
    log(`   - Use descriptive language for AI systems`);

    return isValid;
  } catch (error) {
    log(`❌ Error validating llms.txt: ${error.message}`, "red");
    return false;
  }
}

// Run validation
if (require.main === module) {
  validateLlmsTxt().then((isValid) => {
    process.exitCode = isValid ? 0 : 1;
  });
}

module.exports = { validateLlmsTxt };
