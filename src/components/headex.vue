<template>
    <section>
        <div class="headd">
            <div class="icon" v-on:click="$router.go(-1)"><span class="material-icons">west</span></div><router-link to="/" class="home"><h1> {{name}} </h1></router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'headers',
    data() {
        return {
            name: 'ZEE KOLLECTIONS'
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.headd {
    background: hotpink;
    width: 100%;
    height: 20vh;
    color: white;
    text-align: left;
    padding: 30px;
}
.icon {
    height: 50px;
    width: 50px;
    display: inline;
    cursor: pointer;
}
.material-icons {
    font-size: 35px;
    position: relative;
    top: 10px;
}
h1 {
    font-size: 40px;
    padding: 0px;
    font-family: 'Kaushan Script', cursive;
    display: inline;
    position: relative;
    left: 15px;
    top: 10px;
}
.home {
    color: white;
    text-decoration: none;
}
@media screen and (max-width: 900px) {
    h1 {
        font-size: 30px;
    }
}

@media screen and (max-width: 400px) {
    .headd {
        padding: 30px 10px;
    }
    .icon {
        height: 30px;
        width: 30px;
        padding: 2px;
        font-size: 15px;
        top: 8px;
    }
    h1 {
        font-size: 20px;
        left: 5px;
    }
    .material-icons {
        font-size: 24px;
        top: 15px;
    }

}

</style>