<template>
    <div class="modal">
        <div class="form" @keyup.esc="cancel()">
            <h1 class="inputhead">Change Photo</h1>
            <hr>
            <div class="image">
                <label>Now</label>
                <img :src="this.src" />
            </div>
            <div class="input">
                <label>Select Photo</label>
                <form method="post" enctype="multipart/form-data">
                    <input ref="photofile" type="file" name="photo" accept=".jpeg, .jpg, .png" /> 
                </form>
            </div>
            <div class="input">
                <button @click="changePhoto()">Update</button>
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
    name: "photopopup",
    data: function() {
        return {
            id: "",
            src: ""
        }
    },
    mounted: function() {
        const user = JSON.parse(window.sessionStorage.user);
        this.id = user.id;
        this.src = user.src;
    },
    methods: {
        changePhoto: function() {
            if(!this.$refs.photofile.files[0]) {
                return alert("Please select Photo first");
            }
            let formdata = new FormData();
            formdata.append("file", this.$refs.photofile.files[0]);
            formdata.append("id", this.id);
            contactapi.changePhoto(formdata)
            .then((res) => {
                if(res.data.error == "true") {
                    return alert(res.data.word);
                }
                else {
                    this.$store.dispatch(constant.LOGIN, { id: res.data.id, email: res.data.email, src: res.data.src });
                    this.$store.dispatch(constant.PHOTOCANCEL);
                    window.location.reload(false);
                    return this.$router.push({ name: "profile" });
                }
            })
        },
        cancel: function() {
            this.$store.dispatch(constant.PHOTOCANCEL);
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
        border: white; color: #997053; font-size: 20px;
        font-weight: bold;
    }
    button:hover {
        background: #997053; color: white;
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
        color: #997053; font-weight: bold;
        width: 400px; height: 40px; text-align: left;
    }
    .image {
        width: 100%; height: 100%;
    }
    .image img {
        width: 100%; height: 100%;
    }
</style>
