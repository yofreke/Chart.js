'use strict';

/**
 * @namespace Chart.helpers
 */
var window = {
	/**
	 * Safe in browser or node
	 */
	get: function(extensions) {
		if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('Could not find "window" or "global"');
	}
};

module.exports = window;
