<template>
  <div class="types-comp">
    <TypesTable 
      :types="types" 
      :func="func" 
      operator="=="
    />
  </div>
</template>

<script>
import * as typesService from '../services/typesService'
import TypesTable from '../components/TypesTable'

export default {
  name: 'TypesComp',

  components: {
    TypesTable
  },

  data() {
    return {
      types: typesService.getExtendedTypes(),
    }
  },

  methods: {
    func(val1, val2) {
      return val1 == val2 ? '<span class="box"></span>' : ''
    },
  },
}
</script>

<style>
.box {
  display: inline-block;
  background-color: forestgreen;
  width: 10px;
  height: 10px;
}

</style>

