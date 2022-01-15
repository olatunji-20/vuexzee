<template>
  <section>
    <div v-on:click="removeFromCart(item.id)" class="close"><span class="material-icons">close</span><p class="rmv">remove from cart</p></div>
  </section>
</template>

<script>
export default {
  name: "remove",
  methods: {
      removeFromCart(id) {
          this.$emit("remove-cart", id)
      }
  },
  props: {
      item: Object
  },
  emits: ["remove-cart"]
};
</script>

<style scoped>
.close {
    width: 150px;
    height: 20px;
    padding: 2px;
    margin-top: 50px;
    font-size: 14px;
    color: red;
    background: #f2f2f266;
    box-shadow: 0 0 3px gray;
    border-radius: 2px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
}
.material-icons {
  font-size: 18px;
  display: inline-block;
  position: relative;
  bottom: 11px;
}
.rmv {
  display: inline-block;
  position: relative;
  bottom: 15px;
}
@media screen and (max-width: 400px) {
  .rmv {
    display: none;
  }
  .close {
    width: 20px;
    height: 20px;
    padding: 3px;
    margin-top: 30px;
  }
  .material-icons {
    bottom: 2px;
    right: 2px;
  }
}
</style>