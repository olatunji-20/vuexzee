<template>
    <section>
        <button v-on:click="final(user.firstName), submitCart(user)">Checkout</button>
        <span v-for="item in cart" :key="item.id"> {{item.materialName}} </span>
        <h1>{{ user.surname }}</h1>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'checkout',
    computed: {
        ...mapGetters("users", ["user"])
    },
    methods: {
        ...mapActions("materials", ["submitCart"]),
        final(name) {
            setTimeout(() => {
                alert("Your purchase was successful," + " " + name);
                this.$router.push("/")
            }, 1000)
        }
    }
}
</script>

<style scoped>
button {
    background: green;
    width: 60%;
    height: 40px;
    color: white;
    border: 0px;
    border-radius: 3px;
    margin: 50px auto 0px;
    font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 450px) {
    button {
        width: 80%;
    }
}
</style>