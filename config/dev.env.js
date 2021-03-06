'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  defaultDateUrl: '"http://192.168.10.223"',
  searchUrl: '"http://192.168.10.24"',
  defaultPort: 8282,
  searchPort: 9200
})
