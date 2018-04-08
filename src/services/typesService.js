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

export const additionalTypes = [
  { val: 1, key: '1' },
  { val: '1', key: `'1'` },
]

export function getTypes() {
    return Object.freeze(types)
}

export function getExtendedTypes() {
    return Object.freeze([...additionalTypes, ...types])
}