<template>
    <div class="modal">
        <div class="form" @keyup.esc="cancel()">
            <h1 class="inputhead">Change Photo</h1>
            <hr>
            <div class="input">
                <label>Now</label>
                <img :src="this.user.src" />
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
    computed: mapState([ "user" ]),
    methods: {
        changePhoto: function() {
            if(!this.$refs.photofile.files[0]) {
                return alert("Please select Photo first");
            }
            let formdata = new FormData();
            formdata.append("file", this.$refs.photofile.files[0]);
            formdata.append("id", this.user.id);
            contactapi.changePhoto(formdata)
            .then((res) => {
                if(res.data.error == "true") {
                    return alert(res.data.word);
                }
                else {
                    this.$store.dispatch(constant.LOGIN, { id: res.data.id, email: res.data.email, src: res.data.src });
                    this.$store.dispatch(constant.PHOTOCANCEL);
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
