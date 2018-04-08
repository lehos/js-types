<template>
  <table>
    <tr>
      <th>{{operand}}</th>
      <th v-for="typeCol in types" :key="typeCol.key">
        {{typeCol.key}}
      </th>
    </tr>
    
    <tr v-for="typeRow in types" :key="typeRow.key">
      <th>{{typeRow.key}}</th>
      <td v-for="typeCol in types" 
        :key="typeCol.key" 
        :title="`${typeRow.key} ${operand} ${typeCol.key}`"
        v-html="calc(typeRow.val, typeCol.val)"
      />
    </tr>
  </table>
</template>

<script>
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
      return this.func(val1, val2)
    },
  },
}
</script>
