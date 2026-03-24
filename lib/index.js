"use strict";

const IGNORE_STATIC = {
    name: true,
    length: true,
    prototype: true
};

function getStaticMethods (input) {
    const names = Object.getOwnPropertyNames(input);
    const output = [];

    for (let i = 0; i < names.length; ++i) {
        const name = names[i];
        if (!IGNORE_STATIC[name] && typeof input[name] === "function") {
            output.push(name);
        }
    }

    return output;
}

/**
 * classMethods
 * Get the methods of a JavaScript class.
 *
 * @name classMethods
 * @function
 * @param {Class} input The class you want to get the methods of.
 * @param {Object} options An object containing the following fields:
 *
 *  - `deep` (Boolean): If `false` the parent classes will not be iterated.
 *  - `includeStatic` (Boolean): If `true`, the static methods will be included too.
 *
 * @return {Array} The class methods.
 */
module.exports = function classMethods (input, options) {

    options = {
        deep: true,
        includeStatic: false,
        ...options
    }

    const deep = options.deep !== false;
    const includeStatic = options.includeStatic === true;
    const methods = [];

    for (let current = input; current; current = deep ? Object.getPrototypeOf(current) : null) {
        if (current.prototype) {
            const ownMethods = Object.getOwnPropertyNames(current.prototype);
            for (let i = 0; i < ownMethods.length; ++i) {
                const name = ownMethods[i];
                if (name !== "constructor") {
                    methods.push(name);
                }
            }
        }

        if (includeStatic && current.name) {
            const ownStaticMethods = getStaticMethods(current);
            for (let i = 0; i < ownStaticMethods.length; ++i) {
                methods.push(ownStaticMethods[i]);
            }
        }
    }

    return methods;
};
