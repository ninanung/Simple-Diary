<template>
    <div class="body">
        <h1 id="title">What happen to your day?</h1>
        <textarea v-model="text"></textarea>
        <h2 id="phototitle">If you have photos to show!</h2>
        <div class="draganddrop">
            <form class="form" method="post" enctype="multipart/form-data">
                <input multiple="multiple" type="file" @change="addImage" @drop="addImage" accept=".jpg, .jpeg, .png" />
            </form>
            <h3 class="dragtext">Drag and Drop!</h3>
            <h3 class="dragtext">(or just click)</h3>
        </div>
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
            text: "",
            files: []
        }
    },
    mounted: function() {
        this.id = this.user.id;
    },
    methods: {
        addImage: function(event) {
            let fileArray = event.target.files;
            if(fileArray.length > 1) {
                for (let index = 0; index < fileArray.length; index++) {
                    this.files.push(fileArray[index]);
                }
            }
            else {
                this.files.push(fileArray[0]);
            }
        },
        write: function() {
            let formdata = new FormData();
            formdata.append("files", this.files);
            formdata.append("id", this.user.id);
            contactapi.writeDiary(formdata);
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
    .draganddrop {
        text-align: center; display: inline-block; margin: 20px 0 20px 60px;
        width: 50%; margin-left: 25%; margin-right: 25%;
        height: 400px; border: 1px solid #376bec;
    }
    .draganddrop input {
        width: 100%; height: 100%; opacity: 0;
        z-index: 1;
    }
</style>