<template>
  <section>
    <div class="board">
      <router-link to="/cart">
        <span class="material-icons">shopping_cart</span>
        <div class="length">
          <p>{{ cart.length }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cartboard",
  data() {
    return {

    }
  },
  computed: {
    ...mapState("materials", ["cart"]),
  }
};
</script>

<style scoped>
.board {
  width: 70px;
  height: 70px;
  background: pink;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 70px;
  font-family: 'Montserrat', sans-serif;
}
.material-icons {
  color: white;
  font-size: 30px;
  font-weight: normal;
  display: inline-block;
  position: relative;
  top: 20px;
  left: 10px;
}
.length {
  width: 30px;
  height: 30px;
  background: #ffffff88;
  border-radius: 50%;
  padding: 1px;
  line-height: 0px;
  display: inline-block;
  color: green;
  position: relative;
  top: 0px;
  left: 0px;
  font-weight: bold;
}

@media screen and (max-width: 400px) {
  .board {
    width: 50px;
    height: 50px;
    padding: 1px;
  }
  .material-icons {
    font-size: 20px;
    position: relative;
    bottom: 10px;
    right: 40px;
  }
  .length {
    width: 23px;
    height: 23px;
    padding: 2px;
    position: relative;
    right: 0px;
    bottom: 0px;
    font-size: 14px;
  }
}

</style>