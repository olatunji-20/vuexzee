<template>
  <section>
    <div>
      <p><i class="fi fi-copyright"></i>ZEE KOLLECTIONS, 2023</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "footer2",
};
</script>

<style scoped>
section {
  margin-top: 1px;
}
div {
  width: 100%;
  height: auto;
  background: hotpink;
  padding: 10px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 400px) {
  div {
    font-size: 12px;
  }
}
</style>