export function normalizeResult(result) {
  return typeof(result) == 'string' && result.length == 0 
    ? `''` 
    : result
}

export const types = [
  { val: true, key: 'true' },
  { val: false, key: 'false' },
  { val: 0, key: '0' },
  { val: '0', key: `'0'` },
  { val: '', key: `''` },
  { val: null, key: 'null' },
  { val: undefined, key: 'undefined' }, 
  { val: {}, key: '{}' },
  { val: [], key: '[]' },
  { val: NaN, key: 'NaN' },
  { val: Infinity, key: 'Infinity' },
  { val: -Infinity, key: '-Infinity' }
]

export function getTypes() {
    Object.freeze(types)
    return types
}