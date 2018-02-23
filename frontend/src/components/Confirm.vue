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
        this.id = "jun";
        this.id = "kim";
        this.id = this.$router.params.id;
        this.code = this.$router.params.code;
    },
    methods: {
        confirm: function() {
            contactapi.confirm(this.id, this.code)
            .then((res) => {
                if(res.data.error == "true") {
                    let fail = "Confirming your account is failed. Please try again or contact to us.";
                    return this.$router.push({ name: "result", params: { first: fail, second: res.data.words } });
                }
                else {
                    let success = res.data.words;
                    return this.$router.push({ name: "result", params: { first: success, second: "Please, Login!" } })
                }
            })
        }
    }
}
</script>
<style scoped>
    #background {
        widows: 100%; height: 700px; margin: 0 auto;
        background: url("../../../backend/static/images/comein.jpg");
        background-position: center; background-size: 100%;
        padding: 100px 50px;
    }
    div {
        widows: 100%; margin: 0 auto;
    }
    #words {
        text-align: center; color: #376bec;
    }
    button {
        background: white; color: #376bec; width: 200px; height: 50px;
        font-weight: bold; margin-left: 41%; margin-right: 41%;
    }
    button:hover {
        background: #376bec; color: white;
    }
</style>
