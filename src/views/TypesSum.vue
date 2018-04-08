<template>
  <div class="types-sum">
    <TypesTable 
      :types="types" 
      :func="func" 
      operand="+"
    />

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
import * as typesService from '../services/typesService'
import TypesTable from '../components/TypesTable'

export default {
  name: 'TypesSum',

  components: {
    TypesTable
  },

  data() {
    return {
      types: typesService.getTypes(),
    }
  },

  methods: {
    func(val1, val2) {
      return val1 + val2
    },
  },
}
</script>
