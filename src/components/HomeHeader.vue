<template>
  <div class="home-page-header">
    <img @click="navigateToHomePage" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo"
         class="logo">
    <div class="header-left-side-row">
      <div class="header-left-side-cols">
        <h3 @click="navigateToHomePage" class="active" type="button">Nadala kinokava</h3>
      </div>
    </div>
    <div class="header-right-side-row">
      <div class="header-right-side-cols" @click="isUserLoggedIn ? toggleDropdown() : navigateToLogin()">
        <font-awesome-icon class="icons" :icon="['fas', 'circle-user']"/>
        <div v-if="isDropdownOpen" class="dropdown">
          <button class="logout-button" @click="logout">Log Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      isUserLoggedIn: false,
      isDropdownOpen: false,
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push({name: 'login'});
    },
    navigateToHomePage() {
      this.$router.push({name: 'home'});
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      if (confirm('Sure you want to log out?')) {
        localStorage.removeItem('userId');
        this.isUserLoggedIn = false;
        this.isDropdownOpen = false;
        this.$router.push('/').catch(() => {
        });
      }
    },
  },
  mounted() {
    const userId = localStorage.getItem('userId');
    this.isUserLoggedIn = !!userId;
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&family=Permanent+Marker&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Smooch&display=swap');

/*HEADER CSS*/
.logout-button {
  margin-left: 15px;
  background-color: #3c78b4;
  color: #000014;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 0px 6px 24px 0px #183153;
}

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
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
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
  align-items: center;
  /*border: 1px solid white;*/
}

.header-left-side-cols {
  width: 25%;
  height: 40%;
  display: flex;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  font-size: 20px;
  color: #3c78b4;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  /*border: 1px solid white;*/
}

.header-left-side-cols:hover {
  color: white;
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
</style>