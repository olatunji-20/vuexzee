<template>
  <div>
    <headers />
    <div class="main">
      <img class="sh" src="../../../public/assets/picc.png" />
      <form v-on:submit.prevent="submit">
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          v-model="userData.firstName"
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          v-model="userData.surname"
        />
        <input type="email" placeholder="E-mail" name="email" v-model="userData.email" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          v-model="userData.password"
        />
        <button v-on:click="signUp(userData)">Submit</button>
      </form>
    </div>
    <p>
      Already have an account?
      <router-link to="/login">Login here.</router-link>
    </p>
    <footer2 />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import headers from '../../components/headex.vue'
import footer2 from '../../components/footer2.vue'

export default {
  name: "signup",
  data() {
    return {
      userData: {
        id: Math.ceil(Math.random() * 10000),
        firstName: "",
        surname: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {},
  components: {
    headers,
    footer2
  },
  methods: {
    ...mapActions("users", ["signUp"])
  },
};
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
.main {
  width: 45%;
  height: auto;
  background: #ffe6ff22;
  margin: 50px auto 10px;
  padding: 20px 10px;
  border-radius: 3px;
}
.sh {
  width: 170px;
  height: 170px;
  border: 1px solid #ffe6ff99;
  margin: 30px auto 40px;
  border-radius: 50%;
}
input {
  width: 43%;
  height: 35px;
  margin: 10px 10px;
  text-indent: 15px;
  border-radius: 5px;
  border: 1px solid #ffe6ff99;
}
input:focus {
  outline: none;
  border: 1px solid hotpink;
}
button {
  height: 30px;
  width: 50%;
  background: hotpink;
  color: white;
  border: 1px;
  margin: 40px auto;
  border-radius: 5px;
}
p {
  font-size: 14px;
  margin-bottom: 80px;
}
span {
  color: teal;
}

@media screen and (max-width: 900px) {
  .main {
    width: 60%;
  }
}

@media screen and (max-width: 450px) {
  .sh {
    width: 100px;
    height: 100px;
  }
  .main {
    width: 90%;
  }
  input {
    width: 80%;
  }
}
</style>