<template>
    <div class="body">
        <div class="title">
            <div class="span">
                <span v-if="islogin"><router-link :to="{ name: 'logout' }">Logout</router-link></span>
                <template v-else>
                    <span><router-link class="btn btn-default" :to="{ name: 'login' }">Login</router-link></span>
                    <span><router-link class="btn btn-default" :to="{ name: 'signin' }">Signin</router-link></span>
                </template>
                <br/>
                <span v-if="islogin">Hello, { user.id }</span>
                <span v-else>Please Login!</span>
            </div>
            <h1 id="title"><a href="/">Siary</a></h1>
        </div>
        <div class="nav">
            <nav>
                <ul v-if="islogin">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'main' }">Main</router-link></li>
                    <li><router-link :to="{ name: 'read' }">Read</router-link></li>
                    <li><router-link :to="{ name: 'write' }">Write</router-link></li>
                    <li><router-link :to="{ name: 'my' }">My</router-link></li>
                    <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
                </ul>
            </nav>
        </div>
        <div>
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
    computed: mapState([ 'islogin', 'user' ]),
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
    #title {
        font-size: 50px; margin-left: 20px; margin-bottom: 20px;
        font-weight: bold; color: #3792EC;
    }
    .body {
        width: 1050px; margin: 0 auto;
    }
    .title {
        background: white; padding: 10px 0 0 0; color: EE6767;
        font-size: 20px; height: 150px;
    }
    .footer {
        background: white; padding: 10px 0 0 0; color: black;
        margin-bottom: 20px; margin-top: 20px;
    }
    ul {
        list-style-type: none; margin: 0; padding: 0; 
        overflow: hidden; background: #37EC97;
    }
    li {
        float: left;
    }
    li a {
        display: block; color: #376bec; text-align: center;
        padding: 14px 16px; text-decoration: none;
        font-weight: bold; font-size: 20px
    }
    li a:hover {
        background: white; color: #376bec; text-decoration: none;
    }
    .btn {
        color: #376bec; font-weight: bold;
    }
    .btn:hover {
        background: #376bec; color: white;
    }
    .span {
        float: right; margin-right: 10px;
    }
</style>
