<template>
  <div>
    <button v-on:click="addToCart(material, numb)" v-if="!isInCartProp">
      Add To Shopping Bag
      <i style="margin-left: 10px" class="fi fi-shopping-bag"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "cartAdd",
  data() {
    return {
      
    }
  },
  props: {
    material: Object,
    numb: Number
  },
  methods: {
    addToCart(material, numb) {
      this.$emit("add-to-cart", material, numb);
    }
  },
  // watch: {  
  //   material(val) {
  //     this.isInCartProp = this.isInCart(val.id);
  //   },
  //   cart() {
  //     this.isInCartProp = this.isInCart(this.material.id);
  //   },
  // },
  emits: ["add-to-cart"],
};
</script>

<style scoped>
button {
  background: hotpink;
  color: white;
  width: 70%;
  height: 50px;
  margin: 50px auto 0px;
  border: 2px solid #f2f2f2;
  border-radius: 5px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 800px) {
  button {
    width: 90%;
    font-size: 12px;
  }
}
</style>