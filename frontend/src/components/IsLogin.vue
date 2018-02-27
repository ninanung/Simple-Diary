<template>
    <div class="main">
        <img @click="changePhoto()" :src="this.user.src" />
        <h1>Your ID :</h1>
        <h2>{{ user.id }}</h2>
        <h1>Your Email :</h1>
        <h2>{{ user.email }}</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PhotoPopUp from './PhotoPopUp.vue';
import constant from '../constant.js';

export default {
    name: 'islogin',
    computed: mapState([ "user" ]),
    methods: {
        changePhoto: function() {
            return this.$store.dispatch(constant.PHOTOPOPUP);
        }
    }
}
</script>
<style scoped>
    .main {
        margin: 0 auto; width: 100%;
    }
    h1 {
        width: 100%; height: 200px; margin: 0 auto; text-align: left;
        padding: 30px; font-weight: bold;
    }
    h2 {
        width: 100%; height: 100px; margin: 0 auto; text-align: center;
        padding: 20px; font-weight: bold;
    }
    img {
        float: right; width: 300px; height: 300px;
        margin: 0 auto; padding: 10px; margin-right: 20px;
        margin-bottom: 300px;
    }
</style>
