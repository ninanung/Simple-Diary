<template>
    <div class="modal">
        <div @keyup.esc="cancel" @keyup.enter="signin()" class="form">
            <h1 class="inputhead">Signin</h1>
            <hr>
            <div class="input">
                <label>ID</label>
                <input type="text" v-model="id" placeholder="ID" autofocus />
            </div>
            <div class="input">
                <label>Password</label>
                <input type="password" v-model="password" placeholder="Password" /> 
            </div>
            <div class="input">
                <label>Repeat Password</label>
                <input type="password" v-model="repeatPassword" placeholder="Repeat Password" /> 
            </div>
            <div class="input">
                <label>Email</label>
                <input type="email" v-model="email" placeholder="Email" />
            </div>
            <div class="input">
                <label>Repeat Email</label>
                <input type="email" v-model="repeatEmail" placeholder="Repeat Email" />
            </div>
            <div class="input">
                <button @click="signin()">Signin</button>
                <button @click="cancel()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import constant from '../constant.js';
import contactapi from '../contactapi.js';

export default {
    name: "login",
    data: function() {
        return {
            id: "",
            password: "",
            repeatPassword: "",
            email: "",
            repeatEmail: "",
            isWrong: false
        }
    },
    computed: mapState([ "IDs" ]),
    watch: {
        id: function() {
            if(this.id.length > 10) {
                alert("ID can't be longer then 10 digits");
                this.id = "";
            }
        }
    },
    methods: {
        signin: function() {
            if(this.id.length < 3) {
                return alert("ID must be longer then 3 digits");
            }
            else if(!this.id || !this.password || !this.email || !this.repeatEmail || !this.repeatPassword) {
                return alert("Please write all information");
            }
            else if(this.password !== this.repeatPassword) {
                return alert("Password is not match with repeated one");
            }
            else if(this.email !== this.repeatEmail) {
                return alert("Email is not match with repeated one");
            }
            else {
                let words = "";
                let error;
                contactapi.signin(this.id, this.password, this.email)
                .then((res) => {
                    words = res.data.words;
                    error = res.data.error;
                    if(res.data.error == "true") {
                        console.log(words);
                    }
                    else {
                        console.log(res.data);
                    }
                    if(error == "false") {
                        this.id = "";
                        this.password = "";
                        this.email = "";
                        console.log("get signin");
                        alert('We send email to your address, Please check "Confirm Code". If you do not confirm account, it will deleted next day.');
                        return this.$store.dispatch(constant.SIGNINCANCEL);
                    }
                    else {
                        return alert(words);
                    }
                });
            }
        },
        cancel: function() {
            this.$store.dispatch(constant.SIGNINCANCEL);
        }
    }
}
</script>

<style scoped>
    .modal {
        display: block; position: fixed; width: 100%; height: 100%;
        left: 0; top: 0; overflow: auto; z-index: 1;
        background: rgb(0, 0, 0); background: rgba(0, 0, 0, 0.4);
    }
    .form {
        background-color: white; margin: 100px auto;
        max-width: 500px; min-width: 200px;
        font: 13px "verdana"; padding: 10px 10px 10px 10px;
    }
    button {
        width: 100px; height: 40px; background: white;
        border: white; color: #376bec; font-size: 20px;
        font-weight: bold;
    }
    button:hover {
        background: #376bec; color: white;
    }
    .form label {
        text-align: left; margin: 5px; padding: 5px;
        display: block;
        display: black; font-weight: bold;
    }
    .form input {
        box-sizing: border-box; outline: none; padding: 5px;
        display: block; margin: 5px;
    }
    .inputhead {
        color: #376bec; font-weight: bold;
        width: 400px; height: 40px; text-align: left;
    }
</style>
