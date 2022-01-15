<template>
  <section>
    <headers />
    <cartboard />
    <div class="main1">
      <h3>{{ material.materialName }}</h3>
      <div class="showw">
        <img :src="material.imageUrl" :alt="material.materialName" />
        <h3>
          <span style="text-decoration: line-through">N</span
          >{{ material.materialPrice }}
        </h3>
      </div>
      <div class="container">
        <span class="chg" v-on:click="decrement">-</span
        ><input type="number" :placeholder="numb" v-model="numb" /><span
          class="chg"
          v-on:click="increment"
          >+</span
        >
      </div>
      <cartAdd
        :numb="numb"
        :material="material"
        v-on:add-to-cart="addCart({ material, numb })"
      />
      <detail :material="material" />
    </div>
    <p class="vvv"><router-link to="/cart">view cart</router-link></p>
    <footers />
    <footer2 />
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import cartAdd from "../components/push.vue";
import detail from "../components/details.vue";
import cartboard from "../components/cartboard.vue";
import footers from "../components/footer.vue";
import footer2 from "../components/footer2.vue";
import headers from "../components/headex.vue";

export default {
  name: "stand",
  data() {
    return {
      topic: "ZEE KOLLECTIONS",
      numb: 1
    };
  },
  components: {
    cartAdd,
    detail,
    cartboard,
    footers,
    footer2,
    headers,
  },
  computed: {
    ...mapState("materials", ["material", "cart"]),
  },
  methods: {
    ...mapActions("materials", ["getMaterial", "addCart"]),
    
    increment() {
      this.numb++;
    },
    decrement() {
      this.numb--;
    }
  },
  mounted() {
    this.getMaterial(this.$route.params.materialId);
  },
  watch: {
    numb(val) {
      if (val <= 0) {
        this.numb = 1;
      }
    },
  },
};
</script>

<style scoped>
.main1 {
  width: 95%;
  height: auto;
  padding-top: 50px;
  margin: 100px auto;
  /* border: 1px solid hotpink; */
  font-family: "Montserrat", sans-serif;
}
.showw {
  background: #e6e6e622;
  width: 50%;
  height: auto;
  margin: 0px auto;
  border: 1px solid pink;
  border-radius: 2px;
  padding-top: 50px;
}
img {
  width: 90%;
  height: 300px;
}

.container {
  margin-top: 50px;
}
.chg {
  width: 30px;
  height: 30px;
  outline: 1px solid black;
  padding: 5px;
  margin: 0px;
  cursor: pointer;
}
input {
  width: 40px;
  height: 30px;
  text-align: center;
  padding: 5px;
  margin: 0px;
}
.vvv {
  color: black;
  text-decoration: none;
  font-size: 12px;
  font-family: 'Monserrat', cursive;
  text-align: left;
  margin-left: 20px;
}
@media screen and (max-width: 900px) {
  .showw {
    width: 70%;
    height: auto;
  }
}

@media screen and (max-width: 600px) {
  .showw {
    width: 90%;
    height: auto;
  }
}

@media screen and (max-width: 400px) {
  .main1 {
    width: 100%;
    margin: 20px auto;
    padding-top: 30px;
  }
  .showw {
    width: 90%;
    height: auto;
    padding-top: 20px;
  }
  img {
    height: 250px;
  }
}
</style>