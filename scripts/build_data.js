/**
 * Builder script to compile modular health data files into single data.js
 */
const fs = require('fs');
const path = require('path');

const categories = require('../data/categories.js');
const lifestyle = require('../data/lifestyle.js');
const respiratory = require('../data/respiratory.js');
const digestive = require('../data/digestive.js');
const neurological = require('../data/neurological.js');
const mental_health = require('../data/mental_health.js');
const bone_joint = require('../data/bone_joint.js');
const infectious = require('../data/infectious.js');
const cancer = require('../data/cancer.js');
const other = require('../data/other.js');
const preventionGuides = require('../data/prevention.js');
const nutrition = require('../data/nutrition.js');
const articles = require('../data/articles.js');
const i18n = require('../data/i18n.js');

const allDiseases = [
  ...lifestyle,
  ...respiratory,
  ...digestive,
  ...neurological,
  ...mental_health,
  ...bone_joint,
  ...infectious,
  ...cancer,
  ...other
];

console.log(`Compiling HEALTH_DATA:`);
console.log(`- Categories: ${categories.length}`);
console.log(`- Total Diseases: ${allDiseases.length}`);
console.log(`- Prevention Guides: ${preventionGuides.length}`);
console.log(`- Articles: ${articles.length}`);
console.log(`- i18n Languages: ${Object.keys(i18n).join(', ')}`);

const healthData = {
  categories,
  diseases: allDiseases,
  preventionGuides,
  nutrition,
  articles,
  i18n
};

const fileContent = `/**
 * HEALTHCARE FOR YOU - Complete Health & Disease Prevention Platform
 * Authoritative Medical & Lifestyle Education Repository
 * Medically referenced from WHO, CDC, NHS, and Mayo Clinic Guidelines.
 * Generated: ${new Date().toISOString()}
 */

const HEALTH_DATA = ${JSON.stringify(healthData, null, 2)};

// Export for Node/CommonJS or attach to global window for browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = HEALTH_DATA;
}
if (typeof window !== "undefined") {
  window.HEALTH_DATA = HEALTH_DATA;
}
`;

const outputPath = path.join(__dirname, '..', 'data.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully generated ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
