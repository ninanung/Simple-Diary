<template>
    <div class="body">
        <h1 id="title">What happen to your day?</h1>
        <textarea v-model="text"></textarea>
        <h2 id="phototitle">If you have photos to show!</h2>
        <form class="form" method="post" enctype="multipart/form-data">
            <input ref="photos" type="file" accept=".jpg, .jpeg, .png" />
        </form>
        <div class="buttons">
            <button class="btn btn-default" @click="write()" id="public">Show All</button>
            <button class="btn btn-default" @click="write()" id="private">Just For Me</button>
        </div>
    </div>
</template>

<script>
import constant from '../constant.js';
import contactapi from '../contactapi.js';
import { mapState } from 'vuex';

export default {
    name: "write",
    computed: mapState([ "user" ]),
    data: function() {
        return {
            id: "",
            text: ""
        }
    },
    mounted: function() {
        this.id = this.user.id;
    },
    methods: {
        write: function() {
            let formdata = new FormData();
            if(this.$refs.photofile.files.length > 0) {
                formdata.append("files", this.$refs.photofile.files);
            }
            formdata.append("id", this.user.id);
            contactapi.write(formdata);
            .then((res) => {
                if(res.data.error == "true") {
                    return alert(res.data.word);
                }
                else {
                    return this.$router.push({ name: "main" });
                }
            })
        }
    }
}
</script>

<style scoped>
    #title {
        color: white; background: #376bec; font-weight: bold;
        text-align: center; width: 70%; padding: 10px;
        margin-left: 15%; margin-right: 15%;
    }
    #phototitle {
        color: white; background: #376bec; font-weight: bold;
        text-align: center; width: 50%; padding: 10px;
        margin-left: 25%; margin-right: 25%;
    }
    .form {
        text-align: center;
    }
    .form input {
        display: inline-block; margin: 20px 0 20px 60px;
    }
    .buttons {
        text-align: center;
    }
    .buttons button {
        background: white; color: #376bec; font-weight: bold;
        margin-right: 10px; display: inline-block;
    }
    .buttons button:hover {
        background: #376bec; color: white;
    }
    textarea {
        width: 50%; margin-left: 25%; margin-right: 25%;
        min-width: 300px; height: 400px; border: 2px solid #376bec;
    }
    .body {
        margin: 0 auto;
    }
</style>