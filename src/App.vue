<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact {
  margin: 50px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
