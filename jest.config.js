/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig')

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: {
     ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
        "^.+\\.(css|less|scss)$": "babel-jest",
    },
  
    testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)',
    ],

    transform: {
      "^.+\\.(ts|tsx)$": ["ts-jest", {
        tsconfig: "./tsconfig.test.json",
      }]
    },
    
  };