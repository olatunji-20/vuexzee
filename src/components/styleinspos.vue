<template>
    <div class="container">
        <div class="min">
            <div v-for="inspo in inspos"  :key="inspo.id" class="pics">
                <img :src="inspo.image" :alt="inspo.name" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'styleinspos',
    data() {
        return {
            head: 'daily style inspo'
        }
    },
    computed: {
        ...mapGetters("inspos", ["inspos"])
    },
    methods: {
        ...mapActions("inspos", ["getInspos"])
    },
    async created() {
        this.inspos = await this.getInspos()
    }

}
</script>

<style scoped>
.container {
    width: 95%;
    height: auto;
    /* border: 2px solid red; */
    padding: 10px 0px;
    margin: 100px auto;
    overflow: hidden;
}
.min {
    width: 2600px;
    height: auto;
    background: white;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    left: 0px;
    animation-name: slider;
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 3s;
}

@keyframes slider {
    0% {
        left: 0px;
    }
    17% {
        left: -300px;
    }
    21% {
        left: -300px;
    }
    38% {
        left: -600px;
    }
    42% {
        left: -600px;
    }
    59% {
        left: -900px;
    }
    63% {
        left: -900px;
    }
    80% {
        left: -1200px;
    }
    84% {
        left: -1200px;
    }
    100% {
        left: -1500px;
    }
}

.pics {
    width: 260px;
    height: 450px;
    border: 2px solid pink;
    margin: 10px 20px;
    border-radius: 3px;
}
img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}

@media screen and (max-width: 400px) {
    .container {
        margin: 50px auto;
    }
}
</style>