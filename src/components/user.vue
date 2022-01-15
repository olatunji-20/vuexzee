<template>
    <div v-if="user.firstName">
        <img class="user" src="../../public/assets/picc.png" />
        <p>{{ user.firstName }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "user",
    data() {
        return {}
    },
    computed: {
        ...mapGetters("users", ["user"])
    },
    methods: {}



}
</script>

<style scoped>
div {
    width: 170px;
    height: 59px;
    margin: 0px;
    text-align: left;
    padding: 2px;
    position: absolute;
}
p {
    display: inline-block;
    color: tomato;
    line-height: 0px;
    position: relative;
    bottom: 18px;
    left: 7px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}
h5 {
    line-height: 0px;
}
.user {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid tomato;
    display: inline-block;
}
</style>