<template>
  <div class="main">
    <div v-for="material in materials" :key="material.id" class="tray">
      <router-link :to="'/stand/' + material.id">
        <img :src="material.imageUrl" :alt="material.materialName" />
      </router-link>
      <p class="name">{{ material.materialName }}</p>
      <p class="price">
        <span style="text-decoration: line-through">N</span
        >{{ material.materialPrice }}
      </p>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "display",
  data() {
    return {
      topic: "WHAT WOULD YOU LIKE TO BUY FROM US?",
    };
  },
  components: {},
  computed: {
    ...mapGetters("materials", ["materials"]),
  },
  methods: {
    ...mapActions("materials", ["getMaterials"])
  },
  async created() {
    this.materials = await this.getMaterials();
  },
};
</script>



<style scoped>
div {
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px auto;
  display: block;
}

.main {
  width: 90%;
  height: auto;
  background: #ffffff;
  margin: 100px auto;
  /* border: 1px solid hotpink; */
  display: flex;
  flex-wrap: wrap;
}
.tray {
  width: 270px;
  height: auto;
  justify-content: center;
  background-color: #f2f2f222;
  border: 0px solid white;
  border-radius: 3px;
  margin: 40px auto;
  box-shadow: 0 0 4px pink;
  font-family: 'Montserrat', sans-serif;
}
img {
  width: 100%;
  height: 220px;
  border-radius: 3px;
}
img:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
.name {
  font-size: 20px;
  text-align: left;
  font-weight: bolder;
}
.price {
  font-size: 16px;
  text-align: left;
  line-height: 0px;
}

@media screen and (max-width: 400px) {
  .main {
    width: 95%;
    margin: 50px auto;
  }
  .tray {
    margin: 20px auto;
  }
}
</style>