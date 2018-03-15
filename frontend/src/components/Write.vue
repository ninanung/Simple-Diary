<template>
    <div class="body">
        <h1 id="title">What happen to your day?</h1>
        <textarea v-model="text"></textarea>
        <h2 id="phototitle">If you have photos to show!</h2>
        <div class="draganddrop">
            <input ref="inputFile" multiple="multiple" type="file" @change="addImage()" @drop="addImage()" accept=".jpg, .jpeg, .png" />
            <h4>Drag and Drop! or just Click! 10 Photos Max</h4>
        </div>
        <div v-if="filesname.length > 0" class="filelist">
            <div @click="deletelist(index)" v-for="(filename, index) in filesname"><h4>{{filename}}(Click to Delete)</h4></div>
        </div>
        <br>
        <br>
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
            files: [],
            filesname: []
        }
    },
    methods: {
        deletelist: function(index) {
            this.filesname.splice(index, 1);
            this.files.splice(index, 1);
        },
        addImage: function() {
            if(this.$refs.inputFile.files.length > 10) {
                this.$refs.inputFile.value = null;
                return alert("Please less than 10 Photo");
            }
            for (let index = 0; index < this.$refs.inputFile.files.length; index++) {
                this.files.push(this.$refs.inputFile.files[index]);
                this.filesname.push(this.$refs.inputFile.files[index].name);
            }
            this.$refs.inputFile.value = null;
            console.log(this.files);
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
        color: #599953; font-weight: bold;
        text-align: center; width: 70%; padding: 10px;
        margin-left: 15%; margin-right: 15%;
    }
    #phototitle {
        color: #599953; font-weight: bold;
        text-align: center; width: 50%; padding: 10px;
        margin-left: 25%; margin-right: 25%;
    }
    .buttons {
        text-align: center;
    }
    .buttons button {
        background: white; color: #997053; font-weight: bold;
        margin-right: 10px; display: inline-block;
    }
    .buttons button:hover {
        background: #997053; color: white;
    }
    textarea {
        width: 50%; margin-left: 25%; margin-right: 25%;
        min-width: 300px; height: 400px; border: 2px solid #599953;
    }
    .body {
        margin: 0 auto;
    }
    .draganddrop {
        display: inline-block; margin: 20px 0 20px 60px;
        width: 50%; margin-left: 25%; margin-right: 25%;
        height: 250px; border: 1px solid #599953;
    }
    .draganddrop input {
        width: 100%; height: 100%; opacity: 0;
        z-index: 2; margin: 0;
    }
    .draganddrop h4 {
        color: #599953; font-weight: bold; text-align: center;
        z-index: 1;
    }
    .filelist {
        border: 1px solid #997053; width: 70%; margin-left: 15%;
        margin-right: 15%; margin-top: 20px; margin-bottom: 20px;
    }
    .filelist div {
        margin: 5px 0 5px 0;
    }
    .filelist h4 {
        margin: 0 auto; color: #997053; text-align: center;
    }
    .filelist h4:hover {
        background: #997053; color: white;
    }
</style>