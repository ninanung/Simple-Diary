<template>
    <div class="modal">
        <div @keyup.esc="cancel" @keyup.enter="login" class="form">
            <h1 class="inputhead">Login</h1>
            <hr>
            <div class="input">
                <label>ID</label>
                <input class="id" type="text" v-model="id" placeholder="ID" autofocus />
            </div>
            <div class="input">
                <label>Password</label>
                <input class="password" type="password" v-model="password" placeholder="Password" /> 
            </div>
            <div class="input">
                <button @click="login()">Login</button>
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
        }
    },
    methods: {
        login: function() {
            let words = "";
            let error;
            contactapi.login(this.id, this.password)
            .then((res) => {
                error = res.data.error;
                words = res.data.words;
                if(error === "false") {
                    this.$store.dispatch(constant.LOGIN, { id: this.id, email: res.data.email, src: res.data.src });
                    this.id = "";
                    this.password = "";
                    console.log("get login");
                    this.$store.dispatch(constant.LOGINCANCEL);
                    window.location.reload(false);
                    return this.$router.push({ name: "home" });
                }
                else {
                    return alert(res.data.words);
                }
            });
        },
        cancel: function() {
            this.$store.dispatch(constant.LOGINCANCEL);
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
