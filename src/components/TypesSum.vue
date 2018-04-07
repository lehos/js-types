<template>
  <div class="types-sum">
    <h1>JS types summation</h1>
    <table>
      <tr>
        <th>+</th>
        <th v-for="typeCol in types" :key="typeCol.key">{{typeCol.key}}</th>
      </tr>
      <tr v-for="typeRow in types" :key="typeRow.key">
        <th>{{typeRow.key}}</th>
        <td v-for="typeCol in types" 
          :key="typeCol.key" 
          :title="`${typeRow.key} + ${typeCol.key}`"
        >
          {{sum(typeRow.val, typeCol.val)}}
        </td>
      </tr>
    </table>

    <p>
      This table represents honest JS types summation result.
    </p>
    <p>
      For example, <code>{} + null</code> in console returns <code>0</code>,
      but more real-world example <code>console.log({} + null)</code> 
      (or <code>let a = {} + null; console.log(a)</code>) returns <code>[object Object]null</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TypesSum',

  data() {
    const types = [
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

    Object.freeze(types)
    return {
      types,
    }
  },

  methods: {
    sum(val1, val2) {
      let result = val1 + val2
      return this.normalizeResult(result)
    },

    normalizeResult(result) {
      return typeof(result) == 'string' && result.length == 0 ? `''` : result
    }
  },

  created() {

  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  overflow: hidden;
}
tr:hover {
  background-color: #ffa;
}
td, th {
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
  position: relative;
}
td:hover::after,
th:hover::after {
  content: "";
  position: absolute;
  background-color: #ffa;
  left: 0;
  top: -5000px;
  height: 10000px;
  width: 100%;
  z-index: -1;
}
code {
  background: #eee;
  padding: 3px;
  border-radius: 5px 3px;
}
</style>
