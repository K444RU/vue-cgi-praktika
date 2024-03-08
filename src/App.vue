<template>
  <div>
    <!--    <nav>-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->

    <!--    </nav>-->
    <router-view/>
  </div>
</template>

<style>

body{
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;
  border: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {

  }
}
</script>