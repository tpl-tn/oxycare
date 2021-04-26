module.exports = function ensureArray(a, b, n) {
  if (arguments.length === 0) return [];            // no args, ret []
  if (arguments.length === 1) {                     // single argument
    if (a === undefined || a === null) return [];   // undefined or null, ret []
    if (Array.isArray(a)) return a;                 // isArray, return it
  }
  return Array.prototype.slice.call(arguments);     // return array with copy of all arguments
}
