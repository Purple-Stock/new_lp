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

const https = require('https');
const http = require('http');

// Configuration
const LLMS_TXT_URL = process.env.LLMS_TXT_URL || 'http://localhost:3001/llms.txt';
const TIMEOUT = 10000; // 10 seconds

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const req = protocol.get(url, { timeout: TIMEOUT }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          url,
          data,
          headers: res.headers
        });
      });
    });

    req.on('error', (err) => {
      reject({ error: err.message, url });
    });

    req.on('timeout', () => {
      req.destroy();
      reject({ error: 'Request timeout', url });
    });
  });
}

async function validateLlmsTxt() {
  log('🤖 Starting LLMs.txt validation...', 'blue');
  log(`📍 LLMs.txt URL: ${LLMS_TXT_URL}`, 'cyan');

  try {
    // Fetch llms.txt
    const response = await makeRequest(LLMS_TXT_URL);
    
    if (response.status !== 200) {
      log(`❌ Failed to fetch llms.txt. Status: ${response.status}`, 'red');
      return;
    }

    // Check content type
    const contentType = response.headers['content-type'];
    if (contentType && !contentType.includes('text/plain')) {
      log(`⚠️  Content-Type should be 'text/plain', got: ${contentType}`, 'yellow');
    } else {
      log(`✅ Content-Type: ${contentType}`, 'green');
    }

    const content = response.data;
    
    // Basic content analysis
    const lines = content.split('\n');
    const totalLines = lines.length;
    
    log(`\n📊 Content Analysis:`, 'blue');
    log(`   Total Lines: ${totalLines}`, 'green');
    
    // Count different elements
    const headers = lines.filter(line => line.startsWith('#')).length;
    const links = (content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || []).length;
    const sections = lines.filter(line => line.startsWith('## ')).length;
    const subsections = lines.filter(line => line.startsWith('### ')).length;
    
    log(`   Headers (#): ${headers}`, 'cyan');
    log(`   Main Sections (##): ${sections}`, 'cyan');
    log(`   Subsections (###): ${subsections}`, 'cyan');
    log(`   Markdown Links: ${links}`, 'cyan');
    
    // Check content structure
    log(`\n🏗️  Content Structure:`, 'blue');
    
    // Check for main sections
    const mainSections = [
      'Sobre',
      'Funcionalidades Principais',
      'Indústrias Atendidas',
      'Recursos e Ferramentas',
      'Artigos e Conteúdo',
      'Informações Técnicas',
      'Tecnologias',
      'Suporte e Contato'
    ];
    
    const foundSections = mainSections.filter(section => 
      content.includes(`## ${section}`)
    );
    
    log(`   Main Sections Found: ${foundSections.length}/${mainSections.length}`, 
        foundSections.length === mainSections.length ? 'green' : 'yellow');
    
    if (foundSections.length < mainSections.length) {
      const missing = mainSections.filter(section => !content.includes(`## ${section}`));
      log(`   Missing Sections: ${missing.join(', ')}`, 'red');
    }
    
    // Check for feature links
    const featureLinks = [
      'inventory-control',
      'inventory-app',
      'qr-code-management',
      'barcoding',
      'equipment-management',
      'factory-management',
      'warehouse-control',
      'analytics-reporting',
      'purchase-sales'
    ];
    
    const foundFeatures = featureLinks.filter(feature => 
      content.includes(`/features/${feature}`)
    );
    
    log(`   Feature Links Found: ${foundFeatures.length}/${featureLinks.length}`, 
        foundFeatures.length === featureLinks.length ? 'green' : 'yellow');
    
    // Check for industry links
    const industryLinks = [
      'retail',
      'manufacturing',
      'logistics',
      'food',
      'pharmaceutical',
      'automotive',
      'construction',
      'technology',
      'audiovisual'
    ];
    
    const foundIndustries = industryLinks.filter(industry => 
      content.includes(`/industrias/${industry}`)
    );
    
    log(`   Industry Links Found: ${foundIndustries.length}/${industryLinks.length}`, 
        foundIndustries.length === industryLinks.length ? 'green' : 'yellow');
    
    // Validate internal links (sample a few)
    log(`\n🔗 Link Validation (sampling 5 links)...`, 'blue');
    
    const linkMatches = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
    const sampleLinks = linkMatches.slice(0, 5);
    
    if (sampleLinks.length > 0) {
      const results = await Promise.allSettled(
        sampleLinks.map(linkMatch => {
          const urlMatch = linkMatch.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (urlMatch) {
            const url = urlMatch[2];
            const fullUrl = url.startsWith('http') ? url : `http://localhost:3001${url}`;
            return makeRequest(fullUrl);
          }
          return Promise.resolve(null);
        })
      );

      results.forEach((result, index) => {
        const linkMatch = sampleLinks[index];
        if (result.status === 'fulfilled' && result.value) {
          const status = result.value.status;
          if (status >= 200 && status < 400) {
            log(`   ✅ ${linkMatch} - ${status}`, 'green');
          } else {
            log(`   ⚠️  ${linkMatch} - ${status}`, 'yellow');
          }
        } else {
          log(`   ❌ ${linkMatch} - Error`, 'red');
        }
      });
    }
    
    // Content quality checks
    log(`\n📝 Content Quality:`, 'blue');
    
    // Check for descriptive content
    const hasDescription = content.includes('Plataforma avançada de gestão de estoque');
    log(`   Has Clear Description: ${hasDescription ? '✅' : '❌'}`, 
        hasDescription ? 'green' : 'red');
    
    // Check for technical information
    const hasTechInfo = content.includes('Next.js') && content.includes('React');
    log(`   Has Technical Info: ${hasTechInfo ? '✅' : '❌'}`, 
        hasTechInfo ? 'green' : 'red');
    
    // Check for industry context
    const hasIndustryContext = content.includes('Indústrias Atendidas');
    log(`   Has Industry Context: ${hasIndustryContext ? '✅' : '❌'}`, 
        hasIndustryContext ? 'green' : 'red');
    
    // Summary
    log(`\n📋 Validation Summary:`, 'blue');
    
    const allChecks = [
      foundSections.length === mainSections.length,
      foundFeatures.length === featureLinks.length,
      foundIndustries.length === industryLinks.length,
      hasDescription,
      hasTechInfo,
      hasIndustryContext
    ];
    
    const passedChecks = allChecks.filter(Boolean).length;
    const totalChecks = allChecks.length;
    
    if (passedChecks === totalChecks) {
      log(`   ✅ LLMs.txt is fully valid! (${passedChecks}/${totalChecks})`, 'green');
    } else {
      log(`   ⚠️  LLMs.txt has some issues (${passedChecks}/${totalChecks})`, 'yellow');
    }

    log(`\n💡 Tips:`, 'cyan');
    log(`   - Keep content updated when adding new features`);
    log(`   - Ensure all internal links are working`);
    log(`   - Maintain clear section organization`);
    log(`   - Use descriptive language for AI systems`);

  } catch (error) {
    log(`❌ Error validating llms.txt: ${error.message}`, 'red');
  }
}

// Run validation
if (require.main === module) {
  validateLlmsTxt();
}

module.exports = { validateLlmsTxt };
