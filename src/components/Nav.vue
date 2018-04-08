<template>
    <h1>
        JS types:

        <nav class="nav">
            <div class="nav-inner">
                <router-link to="/sum">summation</router-link>
                <router-link to="/sub">subtraction</router-link>
                <router-link to="/mult">multiplication</router-link>
                <router-link to="/div">division</router-link>
            </div>
        </nav>
    </h1>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="postcss">

h1 {
    font-weight: normal;
    font-size: 20px;
}

.nav {
    display: inline-block;
    // position: relative;
    // vertical-align: top;
}

.nav-inner {
    // position: absolute;
    // left: -3px;
    // top: -5px;
    // background: #fff;
    // border: 1px solid transparent;
    // z-index: 1;
    // padding: 5px 7px;
}

.nav:hover .nav-inner {
    // border-color: #ccc;
}

.nav a {
    text-decoration: none;
    border-bottom: 1px dotted;
    color: cornflowerblue;
    margin-right: 5px;
}

.nav a:hover {
    color: dodgerblue;
}

.nav a:not(.router-link-active) {
    // display: none;
}

.nav a.router-link-active {
    color: #000;
    cursor: default;
    border: none;
}

.nav:hover a {
    // display: inline-block !important;
}
</style>

