<template>
    <div>
        <h1>{{ topic }}</h1>
    </div>
</template>

<script>
export default {
    name: "errorpage",
    data() {
        return {
            topic: "YOU'VE BEEN REDIRECTED TO THE LOGIN-ERROR PAGE"
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: red;
}
</style>