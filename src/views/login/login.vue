<template>
<section>
    <headers />
    <div class="main">
        <form v-on:submit.prevent="submit">
            <img class="image" src="../../../public/assets/picc.png" />
            <h5 v-show="showee">Login unsuccessful</h5>
            <input type="email" placeholder="E-mail" name="email" v-model="userData.email" >
            <input type="password" placeholder="Password" name="password" v-model="userData.password">
            <button v-on:click="login(userData)">Login</button>
        </form>
    </div>
    <p>Don't have an account?, <router-link to="signup">sign up here</router-link>.</p>
    <footer2 />
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import headers from '../../components/headex.vue'
import footer2 from '../../components/footer2.vue'

export default {
    name: 'login',
    data() {
        return {
            userData: {
                email: "",
                password: ""
            }
        }
    },
    components: {
        headers,
        footer2
    },
    computed: {
        ...mapGetters("users", ["showee"])
    },
    methods: {
        ...mapActions("users", ["login"])
    }
    
}
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
.main {
    background: #ffe6ff22;
    width: 40%;
    height: auto;
    text-align: center;
    margin: 50px auto 10px;
    padding: 40px 25px;
    border-radius: 5px;
}
.image {
    width: 180px;
    height: 180px;
    margin: 30px auto;
    border: 1px solid #ffe6ff99;
    border-radius: 50%;
}
input {
    width: 80%;
    height: 35px;
    border: 1px solid #ffe6ff99;
    margin: 15px auto 10px;
    text-indent: 20px;
    border-radius: 5px;
}
input:focus {
    outline: none;
}
button {
    width: 60%;
    height: 30px;
    margin-top: 30px;
    background: hotpink;
    color: white;
    border: 0px solid black;
    border-radius: 5px;
}
p {
    font-size: 14px;
    margin-bottom: 80px;
}
h5 {
    color: red;
    font-family: 'Montserrat', sans-serif
}
@media screen and (max-width: 900px) {
    .main {
        width: 60%;
    }
    .image {
        width: 150px;
        height: 150px;
    }
}

@media screen and (max-width: 600px) {
    .main {
        width: 90%;
    }
    .image {
        width: 100px;
        height: 100px;
    }
    input {
        width: 95%;
    }
    button {
        width: 90%;
    }
}

</style>