<template>
  <div class="types-sub">
    <TypesTable 
      :types="types" 
      :func="func" 
      operand="-"
    />
  </div>
</template>

<script>
import * as typesService from '../services/typesService'
import TypesTable from './TypesTable'

export default {
  name: 'TypesSub',

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
      return val1 - val2
    },
  }
}
</script>
