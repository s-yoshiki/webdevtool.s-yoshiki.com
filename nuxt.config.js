/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */
// const webpack = require('webpack');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// import webpack from 'webpack'
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'

// export default {
module.exports = {
  // mode: 'spa', // or 'universal'
  ssr: false,
  head: {
    titleTemplate: '%s - WebDevTool',
  },
  loading: false,
  plugins: [
  ],
  buildModules: [

  ],
  modules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1867c0',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    }
  },
};
