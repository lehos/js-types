<template>
  <div class="types-sub">
    <TypesTable 
      :types="types" 
      :func="func" 
      operator="-"
    />
  </div>
</template>

<script>
import * as typesService from '../services/typesService'
import TypesTable from '../components/TypesTable'

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
      return typesService.normalizeResult(val1 - val2)
    },
  }
}
</script>
