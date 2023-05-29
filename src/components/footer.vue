<template>
  <section class="main">
    <div class="foot1">
      <div class="head">
        <img src="../../public/assets/zeekolls.jpg" class="logo" />
        <h1>ZEE KOLLECTIONS</h1>
      </div>
      <div class="write">
        <p>
          ...for your everyday wear and events with a special focus on
          simplicity and uniqueness. We specialize in creating and offering a
          variety of classy and unique designs for formal and casual events.
        </p>
      </div>
      <div class="social">
        <div class="subsocial"><a href="https://google.com.ng"><i class="fi fi-whatsapp"></i></a></div>
        <div class="subsocial"><a href="https://google.com.ng"><i class="fi fi-facebook"></i></a></div>
        <div class="subsocial"><a href="https://google.com.ng"><i class="fi fi-instagram"></i></a></div>
        <div class="subsocial"><a href="https://google.com.ng"><i class="fi fi-twitter"></i></a></div>
      </div>
    </div>
    <div class="foot2">
      <h4>Company</h4>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact US</li>
        <li>Services</li>
        <li>Menu</li>
      </ul>
    </div>
    <div class="foot2">
      <h4>Services</h4>
      <ul>
        <li>Buy from Us</li>
        <li>Place an order</li>
        <li>Style inspos</li>
        <li>Advertise with Us</li>
        <li>Menu</li>
      </ul>
    </div>
    <div class="foot4">
      <h3>Newletters</h3>
      <p>For latest updates, please sign up here.</p>
      <form>
        <input placeholder="Email-address" type="email" required />
        <button>Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "footers",
};
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: hotpink;
  font-family: 'Montserrat', sans-serif;
}
.foot1 {
  width: 33%;
  height: 350px;
  padding: 30px 0px;
  color: white;
}
.head {
  width: 98%;
  height: auto;
  margin: 0px auto;
  padding: 0px 15px;
  display: flex;
  flex-wrap: wrap;
}
.logo {
  width: 70px;
  height: 70px;
  display: inline-block;
  border-radius: 50%;
}
.head h1 {
  font-size: 25px;
  margin-left: 5px;
}
.write {
  width: 90%;
  height: auto;
  padding: 0px 20px;
  text-align: left;
  font-size: 15px;
}
.social {
  width: 90%;
  height: auto;
  margin-top: 20px;
  padding: 10px 0px 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.subsocial {
  height: 40px;
  width: 40px;
  color: darkblue;
  margin: 0px 15px;
  border: 1px solid white;
  border-radius: 50%;
  padding: 8px;
  font-size: 20px;
}
.subsocial:hover {
  border: 1px solid darkblue;
}

.foot2 {
  width: 16%;
  height: 350px;
  padding: 40px 5px;
  text-align: left;
  color: white;
}
h4 {
  font-size: 17px;
  text-indent: 20px;
}
li {
  list-style-type: none;
  font-size: 15px;
  padding: 10px 0px;
  position: relative;
  left: 0px;
  transition: 0.3s;
  cursor: pointer;
}
li:hover {
  left: 10px;
}
.foot4 {
  width: 35%;
  height: 350px;
  padding: 40px 20px;
  text-align: left;
}
.foot4 h3 {
  font-size: 20px;
  color: white;
}
.foot4 p {
  font-size: 15px;
  color: white;
}
.foot4 button {
  width: 90%;
  height: 40px;
  margin-top: 40px;
  background: green;
  color: white;
  border-radius: 3px;
  border: 0px solid red;
}
.foot4 input {
  width: 90%;
  height: 40px;
  text-indent: 20px;
  border-radius: 3px;
  border: 0px;
  margin-top: 30px;
}

@media screen and (max-width: 900px) {
  .foot1 {
    width: 50%;
  }
  .foot2 {
    width: 25%;
  }
  .foot4 {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .foot1 {
    width: 100%;
    height: 300px;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .write {
    width: 100%;
    font-size: 13px;
  }
  .social {
    width: 100%;
  }
  .subsocial {
    height: 30px;
    width: 30px;
    font-size: 12px;
  }
  .foot1 .head h1 {
    font-size: 17px;
  }
  .foot2 {
    width: 100%;
    padding-top: 20px;
    height: 300px;
  }
  .foot2 ul li {
    font-size: 13px;
  }
  .foot4 {
    width: 100%;
    padding-top: 20px;
    height: 300px;
  }
  .foot4 input,
  .foot4 button {
    width: 100%;
  }
}
</style>