<template>
  <div class="login-background" id="login">
    <HomeHeader/>
    <div class="login-page-body">
      <div class="login-page-left-nav"></div>
      <div class="login-page-centre-nav">

        <div class="login-box">
          <div class="form-container">
            <p class="title">Login</p>
            <form class="form">
              <div class="input-group">
                <label for="username">Username</label>
                <input v-model="email" type="text" name="username" id="username" placeholder="">
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="">
              </div>
              <button @click="login" class="sign">Sign in</button>
            </form>
          </div>
        </div>

      </div>
      <div class="login-page-right-nav"></div>
    </div>

    <InfoFooter/>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import InfoFooter from "@/components/InfoFooter";

export default {
  name: 'LogInView',
  components: {InfoFooter, HomeHeader},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$http
          .post("/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const {id: userId} = response.data;
            localStorage.setItem("userId", userId);
            this.$router.push({name: 'home'});
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}
</script>

<style>
/*BACKGROUND*/
.login-background {
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-color: #000014;
  background-position: center;
}

.login-page-body {
  display: flex;
  overflow: hidden;
  height: 100vh;

}

.login-page-left-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 100vh;

}

.login-page-right-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 100vh;
}

.login-page-centre-nav {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

}

.login-box {
  display: flex;
  width: 400px;
  padding: 50px;
  margin-bottom: 150px;
}

.form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: #001428;
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
  box-shadow: 0px 6px 24px 0px #183153;
}

.title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 25px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;

}

.input-group label {
  display: block;
  color: white;
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border: 1px solid #3c78b4;
  outline: 0;
  background-color: #001428;
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
  border-radius: 5px;
}

.input-group input:focus {
  border-color: #3c78b4;
}

.forgot a, .signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline #3c78b4;
}

.sign {
  display: block;
  width: 100%;
  background-color: #3c78b4;
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
}

</style>