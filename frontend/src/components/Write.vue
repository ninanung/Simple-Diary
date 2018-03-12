<template>
    <div class="body">
        <h1 id="title">What happen to your day?</h1>
        <textarea v-model="text"></textarea>
        <h2 id="phototitle">If you have photos to show!</h2>
        <div class="draganddrop">
            <input ref="inputFile" multiple="multiple" type="file" @change="addImage($event.target.files)" @drop="addImage($event.target.files)" accept=".jpg, .jpeg, .png" />
            <h3>Drag and Drop!</h3>
            <h3>(or just click)</h3>
            <h3>10 photos Max</h3>
        </div>
        <div class="buttons">
            <button class="btn btn-default" @click="write(true)" id="public">Show All</button>
            <button class="btn btn-default" @click="write(false)" id="private">Just For Me</button>
        </div>
    </div>
</template>

<script>
import constant from '../constant.js';
import contactapi from '../contactapi.js';
import { mapState } from 'vuex';

export default {
    name: "write",
    props: [ "id" ],
    data: function() {
        return {
            text: "",
            files: []
        }
    },
    methods: {
        addImage: function(inputFiles) {
            if(inputFiles.length > 10) {
                this.$refs.inputFile.value = null;
                return alert("Please less than 10 Photo");
            }
            else if(11 > inputFiles.length > 1) {
                for (let index = 0; index < inputFiles.length; index++) {
                    this.files.push(inputFiles[index]);
                }
            }
            else {
                this.files.push(files[0]);
            }
            console.log(files);
        },
        write: function(isPublic) {
            console.log(this.id);
            let formdata = new FormData();
            formdata.append("files", this.files);
            formdata.append("id", this.id);
            formdata.append("text", this.text);
            formdata.append("isPublic", isPublic);
            contactapi.writeDiary(formdata)
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
        display: inline-block; margin: 20px 0 20px 60px;
        width: 50%; margin-left: 25%; margin-right: 25%;
        height: 250px; border: 1px solid #376bec;
    }
    .draganddrop input {
        width: 100%; height: 100%; opacity: 0;
        z-index: 2; margin: 0;
    }
    .draganddrop h3 {
        color: #376bec; font-weight: bold; text-align: center;
        z-index: 1;
    }
</style>