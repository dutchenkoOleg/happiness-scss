'use strict';

/**
 * @module happiness-scss
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const Linter = require('./linter');
const path = require('path');

// ----------------------------------------
// Private
// ----------------------------------------

const configPath = path.join(__dirname, './.sass-lint.yml');
const happinessScss = new Linter(configPath);

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = happinessScss;
