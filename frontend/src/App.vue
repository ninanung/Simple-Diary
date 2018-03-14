<template>
    <div class="body">
        <login v-if="Login"></login>
        <signin v-if="Signin"></signin>
        <photo-pop-up v-if="Photo"></photo-pop-up>
        <div class="title">
            <div class="span">
                <span v-if="islogin"><button class="btn btn-default" @click="logout()">Logout</button></span>
                <template v-else>
                    <span><button class="btn btn-default" @click="loginPage()">Login</button></span>
                    <span><button class="btn btn-default" @click="signinPage()">Signin</button></span>
                </template>
                <br/>
                <span v-if="islogin">Hello, {{ user.id }}</span>
                <span v-else>Please Login!</span>
            </div>
            <router-link id="title" :to="{ name: 'home' }">Siary</router-link>
        </div>
        <div class="nav">
            <nav>
                <ul v-if="islogin">
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'main' }">Main</router-link></li>
                    <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
                    <li><router-link :to="{ name: 'write', params: { id: this.user.id } }">Write</router-link></li>
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
import Login from './components/Login.vue';
import Signin from './components/Signin.vue';
import PhotoPopUp from './components/PhotoPopUp.vue';

export default {
    name: 'app',
    computed: mapState([ 'Login', 'Signin', 'Photo' ]),
    components: { Signin, Login, PhotoPopUp },
    data: function() {
        return {
            titleText: "Siary",
            islogin: "",
            user: {
                id: "",
                email: ""
            }
        }
    },
    mounted: function() {
        if(window.sessionStorage.user) {
            const user = JSON.parse(window.sessionStorage.user);
            if(window.sessionStorage.islogin == "true") {
                this.islogin = window.sessionStorage.islogin;
            }
            this.user.id = user.id;
        }
    },
    methods: {
        logout: function() {
            this.$store.dispatch(constant.LOGOUT);
            window.location.reload(false);
            this.$router.push({ name: 'home' });
        },
        loginPage: function() {
            this.$store.dispatch(constant.LOGINPOPUP);
        },
        signinPage: function() {
            this.$store.dispatch(constant.SIGNINPOPUP);
        }
    }
}
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    #title {
        font-size: 50px; margin-left: 20px; margin-bottom: 20px;
        font-weight: bold; color: #997053; text-decoration: none;
    }
    #title:hover {
        text-decoration: none;
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
        overflow: hidden; background: #997053;
    }
    li {
        float: left;
    }
    li a {
        display: block; color: white; text-align: center;
        padding: 14px 16px; text-decoration: none;
        font-weight: bold; font-size: 20px
    }
    li a:hover {
        background: white; color: #997053; text-decoration: none;
    }
    .btn {
        color: #997053; font-weight: bold;
    }
    .btn:hover {
        background: #997053; color: white;
    }
    .span {
        float: right; margin-right: 10px;
    }
</style>
