<template>
  <section class="see">
    <div v-if="material.extras">
      <div class="extra">
        <p>
          OVERVIEW<span v-on:click="showPropertyA"
            ><i class="fi fi-angle-down" v-show="!isShowA"></i
            ><i class="fi fi-angle-up" v-show="isShowA"></i
          ></span>
        </p>
      </div>
      <div class="property" v-show="isShowA">
        <p>{{ material.extras.overview }}</p>
      </div>
    </div>
    <div v-if="material.extras">
      <div class="extra">
        <p>
          DESCRIPTION<span v-on:click="showPropertyB"
            ><i class="fi fi-angle-down" v-show="!isShowB"></i
            ><i class="fi fi-angle-up" v-show="isShowB"></i
          ></span>
        </p>
      </div>
      <div class="property" v-show="isShowB">
        <p>{{ material.extras.description }}</p>
      </div>
    </div>
    <div v-if="material.extras">
      <div class="extra">
        <p>
          SHIPPING<span v-on:click="showPropertyC"
            ><i class="fi fi-angle-down" v-show="!isShowC"></i
            ><i class="fi fi-angle-up" v-show="isShowC"></i
          ></span>
        </p>
      </div>
      <div class="property" v-show="isShowC">
        <p>{{ material.extras.shipping }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      isShowA: false,
      isShowB: false,
      isShowC: false,
    };
  },
  props: {
    material: Object,
  },
  methods: {
    showPropertyA() {
      this.isShowA = !this.isShowA;
    },
    showPropertyB() {
      this.isShowB = !this.isShowB;
    },
    showPropertyC() {
      this.isShowC = !this.isShowC;
    },
  },
};
</script>

<style scoped>
.see {
  width: 70%;
  height: auto;
  margin: 150px auto;
  background: #e6e6e6;
  padding: 2px;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
}
div {
  width: 100%;
  height: auto;
  text-align: left;
  margin: 0px auto;
  padding: 1px;
}
span {
  color: green;
  float: right;
  font-weight: bolder;
  cursor: pointer;
}
.extra {
  width: 100%;
  height: auto;
  background: white;
  padding: 1px 20px;
  border-radius: 3px;
  z-index: 4;
}
.property {
  width: 100%;
  height: auto;
  background: white;
  padding: 1px 20px;
  border-radius: 3px;
  margin: 0px auto;
}
p {
  font-size: 13px;
}

@media screen and (max-width: 800px) {
  .see {
    width: 90%;
    margin: 80px auto;
  }
  .see .extra p {
    font-size: 12px;
  }
}
</style>