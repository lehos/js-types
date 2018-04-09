<template>
    <h1>
        JS types:

        <nav class="nav">
            <div class="nav-inner">
                <router-link to="/sum">+</router-link>
                <router-link to="/subtract">-</router-link>
                <router-link to="/multiply">*</router-link>
                <router-link to="/divide">/</router-link>
                <router-link to="/compare">==</router-link>
            </div>
        </nav>
    </h1>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
h1 {
    font-weight: normal;
    font-size: 20px;
}

.nav {
    display: inline-block;
}

.nav a {
    text-decoration: none;
    color: #333;
    display: inline-block;
    text-align: center;
    width: 50px;
}

.nav a:hover {
    background: #eee;
}

.nav a.router-link-active {
    cursor: default;
    background: #eee;
}
</style>

