<template>
  <table>
    <tr>
      <th>{{operand}}</th>
      <th v-for="typeCol in types" :key="typeCol.key">{{typeCol.key}}</th>
    </tr>
    <tr v-for="typeRow in types" :key="typeRow.key">
      <th>{{typeRow.key}}</th>
      <td v-for="typeCol in types" 
        :key="typeCol.key" 
        :title="`${typeRow.key} ${operand} ${typeCol.key}`"
      >
        {{calc(typeRow.val, typeCol.val)}}
      </td>
    </tr>
  </table>
</template>

<script>
import * as typesService from '../services/typesService'

export default {
  name: 'TypesTable',

  props: {
    types: Array,
    wrapClass: String,
    operand: String,
    func: Function,
  },

  methods: {
    calc(val1, val2) {
      let result = this.func(val1, val2)
      return typesService.normalizeResult(result)
    },
  },
}
</script>
