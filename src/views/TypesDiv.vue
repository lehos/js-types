<template>
  <div class="types-mult">
    <TypesTable 
      :types="types" 
      :func="func" 
      operand="/"
    />
  </div>
</template>

<script>
import * as typesService from '../services/typesService'
import TypesTable from '../components/TypesTable'

export default {
  name: 'TypesDiv',

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
      return val1 / val2
    },
  },
}
</script>
