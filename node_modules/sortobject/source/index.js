'use strict'

/**
 * A typical comparator for sorting.
 * @callback Comparator
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */

/**
 * Returns a copy of an object, sorted deeply by its keys, without mangling any arrays inside of it.
 * @param {object} obj The unsorted object.
 * @param {Comparator} [comparator] An optional comparator to use to sort the keys.
 * @returns {object} The new sorted object.
 */
function sortObject(obj, comparator) {
	// Arrays
	if (Array.isArray(obj)) {
		const result = []
		for (let i = 0; i < obj.length; ++i) {
			// Fetch
			let value = obj[i]

			// Recurse if object or array
			if (value != null && typeof value === 'object') {
				value = sortObject(value, comparator)
			}

			// Push
			result.push(value)
		}
		return result
	}

	// Objects
	else {
		const result = {}
		const sortedKeys = Object.keys(obj).sort(comparator)
		for (let i = 0; i < sortedKeys.length; ++i) {
			// Fetch
			const key = sortedKeys[i]
			let value = obj[key]

			// Recurse if object or array
			if (value != null && typeof value === 'object') {
				value = sortObject(value, comparator)
			}

			// Push
			result[key] = value
		}
		return result
	}
}

module.exports = sortObject
