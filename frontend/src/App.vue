<template>
    <div class="body">
        <div class="title">
            <h1>Siary</h1>
        </div>
        <div class="nav">
            <nav v-if="!islogin">
                <ul>
                    <li><router-link :to="{ name: 'login' }">Login</router-link></li>
                    <li><router-link :to="{ name: 'signin' }">Signin</router-link></li>
                    <li><router-link :to="{ name: 'islogin' }">AmILogin?</router-link></li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="footer">
            <p>Developer: Seungje Jun</p>
            <p>Contact: ninanung@naver.com</p>
            <p>Github: https://github.com/ninanung</p>
        </div>
    </div> 
</template>

<script>
import { mapState } from 'vuex'
import constant from './constant.js';

export default {
    name: 'app',
    computed: mapState([ 'islogin' ]),
    methods: {
        logout: function() {
            this.$store.dispatch(constant.LOGOUT);
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    .body {
        width: 960px; margin: 0 auto;
    }
    .title {
        background: white; padding: 10px 0 0 0; color: EE6767;
        font-size: 20px;
    }
    .footer {
        background: white; padding: 10px 0 0 0; color: black;
    }
    ul {
        list-style-type: none; margin: 0; padding: 0; 
        overflow: hidden; background: black;
    }
    li {
        float: left;
    }
    li a {
        display: block; color: white; text-align: center;
        padding: 14px 16px; text-decoration: none;
    }
    li a:hover {
        background: white; color: black; text-decoration: none;
    }
</style>
