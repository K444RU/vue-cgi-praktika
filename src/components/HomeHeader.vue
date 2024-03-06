<template>
  <div class="home-page-header">
    <img @click="goToHomePage" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo" class="logo">
    <div class="header-left-side-row">
      <div class="header-left-side-cols">
        <p @click="goToHomePage" class="active" type="button" >Nadala kinokava</p>
      </div>

    </div>
    <div class="header-right-side-row">
      <div class="header-right-side-cols">
      </div>
      <div class="header-right-side-cols" @click="goToLogin">
        <font-awesome-icon class="icons" :icon="['fas', 'circle-user']"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToHomePage(){
      this.$router.push({name: 'home'})
    }
  },
}
</script>
<style>
/*HEADER CSS*/

.home-page-header {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 110px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #001428;
  justify-content: space-between;
  /*background-image: linear-gradient(*/
  /*    to bottom,*/
  /*    rgba(0, 0, 0, 0) 80%,*/
  /*    rgba(0, 0, 0, 0) 90%,*/
  /*    rgba(0, 0, 0, 0.6) 95%,*/
  /*    rgba(0, 0, 0, 0.8) 100%*/
  /*);*/
}

.logo {
  height: 80%;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 160px;
}

.icons {
  color: #3c78b4;
  font-size: 25px;
  cursor: pointer;
}

.header-left-side-row {
  flex: 8;
  height: 100%;
  display: flex;
  /*border: 1px solid white;*/
}

.header-left-side-cols {
  width: 20%;
  padding: 5px;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  font-size: 20px;
  color: #3c78b4;
  /*border: 1px solid white;*/
}

.header-right-side-row {
  flex: 2;
  height: 100%;
  display: flex;
  /*border: 1px solid white;*/
  margin-right: 160px;
}

.header-right-side-cols {
  width: 50%;
  padding: 5px;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  /*border: 1px solid white;*/
}

/*BODY CSS*/

</style>