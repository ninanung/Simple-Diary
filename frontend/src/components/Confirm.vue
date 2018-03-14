<template>
    <div>
        <div id="background"></div>
        <h1 id="words">Please confirm your account</h1>
        <h2 id="words">Click the button.</h2>
        <button @click="confirm()" class="btn btn-default">Confirming!</button>
    </div>
</template>
<script>
import contactapi from '../contactapi.js';

export default {
    name: "Confirm",
    data: function() {
        return {
            id: "",
            code: ""
        }
    },
    created: function() {
        this.id = this.$route.params.id;
        this.code = this.$route.params.code;
    },
    methods: {
        confirm: function() {
            contactapi.confirm(this.id, this.code)
            .then((res) => {
                if(res.data.error == "true") {
                    return alert(res.data.words + " Please try again or contact to us.");
                }
                else {
                    console.log("confirm success");
                    return this.$router.push({ name: "result" })
                }
            })
        }
    }
}
</script>
<style scoped>
    #background {
        widows: 100%; height: 700px; margin: 0 auto;
        background: url("../assets/comein.jpg");
        background-position: center; background-size: 80%;
        padding: 100px 50px; background-repeat: no-repeat;
    }
    div {
        widows: 100%; margin: 0 auto;
    }
    #words {
        text-align: center;
    }
    button {
        background: white; color: #997053; width: 200px; height: 50px;
        font-weight: bold; margin-left: 41%; margin-right: 41%;
    }
    button:hover {
        background: #997053; color: white;
    }
</style>
