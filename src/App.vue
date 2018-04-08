<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>

    -- <br>
    <a href="https://github.com/lehos/js-types">github</a>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',

  components: {
    Nav
  },
}
</script>

<style>
body {
  font-family: Helvetica;
  font-size: 12px;
}
table {
  border-collapse: collapse;
  overflow: hidden;
}
tr:hover {
  background-color: #ffa;
}
td, th {
  border: 1px solid #ccc;
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
