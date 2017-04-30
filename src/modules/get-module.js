/**
 * Dependencies
 */
const debug = require('debug')('aurora-frontend:get-module');

/**
 * Shim require.ensure in node.js
 * (check the webpack docs - async chunking)
 */
if (typeof require.ensure !== 'function') {
  require.ensure = require('isomorphic-ensure')({
    dirname: __dirname,
  });
}

/**
 * The map of modules available to resolve to
 */
const moduleMap = {
  'grisefest-app': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./Grisefest2017App/Grisefest2017App.jsx'));
    });
  },
  'does-not-exist': (callback) => {
    require.ensure([], (require) => {
      callback(null, require('./DoesNotExist/DoesNotExist.jsx'));
    });
  },
};

/**
 * Export a function that can resolve
 * a module from a string representation
 * to a React component / Aurora module
 * (asynchronously)
 */
module.exports = (type) => {
  /**
   * Return a Promise of the React component
   * resolved from the string type definition
   */
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      console.log('MODULE: ', type);
      if (!moduleMap[type]) {
        debug(`You are trying to render a module with type *${type}* which does not exist`);
      }

      /**
       * Pull out the specified component getter function
       * (or default gracefully)
       */
      const getModule = moduleMap[type] || moduleMap['does-not-exist'];

      /**
       * Fetch the specified component and the promise to it
       */
      getModule((err, module) => {
        return err ? reject(err) : resolve(module);
      });
    });
  });
};
