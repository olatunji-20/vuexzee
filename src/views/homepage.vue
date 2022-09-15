<template>
  <div>
    <section class="signboard">
      <h1>{{ head }}</h1>
      <div class="nav">
        <ul>
          <li><router-link class="link" to="/">HOME</router-link></li>
          <li><router-link class="link" to="#">ABOUT US</router-link></li>
          <li><router-link class="link" to="/cart">CART</router-link></li>
          <li><router-link class="link" to="/login">LOG IN</router-link></li>
          <li><router-link class="link" to="/signup">SIGN UP</router-link></li>
        </ul>
      </div>
    </section>
    
    <section class="new">
      <div class="write"><p>Welcome to Zee Kollections.</p> <p>What are you buying from us today?</p></div>
      <div class="lander"></div>
      <user />
    </section>
    <h1>You can get any of these and more from our store.</h1>
    <display />
    <h1>Be the main figure at your events with our frequent style inspos.</h1>
    <styleinspos />
    <footers />
    <footer2 />
  </div>
</template>

<script>
import display from "../components/display.vue";
import styleinspos from '../components/styleinspos.vue'
import footers from '../components/footer.vue'
import footer2 from '../components/footer2.vue'
import user from '../components/user.vue'

export default {
  name: "homepage",
  data() {
    return {
      head: "ZEE KOLLECTIONS",
    };
  },
  components: {
    display,
    styleinspos,
    footers,
    footer2,
    user
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}
div {
  margin: 0px;
  padding: 0px;
}


.signboard {
  width: 100%;
  height: 20vh;
  background-color: hotpink;
  text-align: left;
  color: white;
}
.new {
  height: 80vh;
  width: 100%;
  background-color: floralwhite;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
}
.write {
  padding: 30px 40px;
  width: 400px;
  height: 400px;
  display: inline-block;
  font-size: 35px;
  color: hotpink;
  font-family: 'Montserrat', sans-serif;
}
.lander {
  width: 400px;
  height: 400px;
  padding: 1px;
  background: #a6a6a622;
  background-image: url('../../public/assets/mix n match.jpg');
  background-size: 25vw 100%;
  animation-name: backeffect;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(1);
  border: 1px solid red;
  display: inline-block;
  border-radius: 50%;
}
.signboard h1 {
  font-size: 40px;
  display: inline-block;
  color: white;
  font-family: 'Kaushan Script', cursive;
  padding: 10px 40px;
}
h1 {
  color: hotpink;
  font-size: 40px;
  padding: 0px 20px;
  font-family: 'Kaushan Script', cursive;
}
h2 {
  font-size: 30px;
  width: 400px;
  position: relative;
  left: 50px;
  top: 50px;
}
.signboard .nav {
  text-align: left;
  position: relative;
  float: right;
  top: 35px;
  right: 40px;
}
.signboard .nav ul {
  list-style-type: none;
  position: relative;
}
.signboard .nav ul li {
  display: inline-block;
  padding: 5px 20px;
  font-family: 'Montserrat', sans-serif;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 15px;
}
.link:hover {
  color: green;
  transition: 0.4s;
}
@keyframes backeffect {
  0% {
    background-image: url("../../public/assets/flowered_crepe.jpg");
  }
  50% {
    background-image: url("../../public/assets/checkers.jpg");
  }
  100% {
    background-image: url("../../public/assets/mix n match.jpg");
  }
}

@media screen and (max-width: 1000px) {
  .signboard .nav {
    width: 100%;
  }
  .signboard .nav ul li{
    background: greenyellow;
    font-size: 13px;
    padding: 1px 0px;
    margin: 0px 2px;
  }
  .link {
    font-size: 11px;
    color: black;
  }
}

@media screen and (max-width: 500px) {
  .signboard h1 {
    padding: 20px 10px;
    font-size: 27px;
  }
  .signboard .nav ul li {
    font-size: 10px;
  }
  .new {
    flex-direction: column;
    padding-top: 30px;
  }
  .write {
    font-size: 25px;
    height: auto;
    margin: 0px auto;
    padding: 10px 20px;
  }
  .lander {
    background-repeat: no-repeat;
    background-size: 60vw 100%;
    width: 300px;
    height: 300px;
    margin: 0px auto;
  }
  h1 {
    font-size: 30px;
  }
}
</style>