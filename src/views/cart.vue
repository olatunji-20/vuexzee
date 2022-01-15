<template>
  <section>
    <headers />
    <cartboard />
    <h1>{{ head }}</h1>
    <div class="container">
      <div class="show" v-for="item in cart" :key="item.id">
        <div class="img-cont">
            <img :src="item.imageUrl" :alt="item.materialName" />
        </div>
        <div class="numb-cont">
          <div class="unit">
            <h3>{{ item.materialName }}</h3>
          </div>
          <div class="unit">
            <p>Unit Price: <span>N</span>{{ item.materialPrice }}</p>
          </div>
          <div class="unit">
            <p>Quantity: {{ item.numb }} yard(s)</p>
          </div>
          <div class="total">
            <p>
              Total: <span>N</span>{{ item.materialPrice }} *
              {{ item.numb }} = <span>N</span
              >{{ item.materialPrice * item.numb }}
            </p>
          </div>
        </div>
         <remove v-on:remove-cart="removeCart(item.id)" :item="item" />
      </div>
    <checkout />

    </div>
    <footer2 />
  </section>
</template>



<script>
import { mapState, mapActions } from "vuex";
import cartboard from "../components/cartboard.vue";
import remove from '../components/removes.vue'
import headers from '../components/headex.vue'
import footer2 from '../components/footer2.vue'
import checkout from '../components/checkout.vue'

export default {
  name: "cartt",
  data() {
    return {
      head: "SHOPPING BAG",
    };
  },
  components: {
    cartboard,
    remove,
    headers,
    checkout,
    footer2
  },
  computed: {
    ...mapState("materials", ["cart"])
  },
  methods: {
    ...mapActions("materials", ["removeCart"])
  }
};
</script>



<style scoped>
h1 {
  font-size: 40px;
  margin: 70px auto;
  font-family: 'Kaushan Script', cursive;
}
.container {
  width: 95%;
  height: auto;
  padding: 20px;
  margin: 20px auto 50vh;
  /* border: 1px solid hotpink; */
  font-family: 'Montserrat', sans-serif;
}
.show {
  width: 80%;
  height: auto;
  background: #f2f2f233;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0 0 5px gray;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #000077;
}
img {
  width: 120px;
  height: 120px;
}
.img-cont {
  width: 120px;
  height: 120px;
}
.numb-cont {
  width: 350px;
  height: 120px;
  padding-top: 0px;
  text-indent: 5px;
}
span {
  text-decoration: line-through;
}
.unit {
  width: auto;
  height: auto;
  text-align: left;
  font-size: 14px;
  line-height: 10px;
  margin: 0px;
}
.total {
  width: auto;
  height: auto;
  text-align: left;
  font-size: 15px;
  color: green;
}
@media screen and (max-width: 400px) {
  h1 {
    font-size: 25px;
    margin: 30px auto;
  }
  .container {
    width: 98%;
    padding: 1px;
  }
  .show {
    width: 98%;
    padding: 1px;
    box-shadow: 0 0 3px gray;
  }
  .img-cont {
    width: 80px;
    height: 80px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .image {
    width: 100%;
  }
  .numb-cont {
    width: 170px;
    height: 80px;
    text-indent: 1px;
    font-size: 12px;
  }
  .unit {
    font-size: 12px;
    line-height: 5px;
  }
  .total {
    font-size: 12px;
    line-height: 5px;
  }
}
</style>