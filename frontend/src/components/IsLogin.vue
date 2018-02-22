<template>
    <div>
        <h1>Your ID</h1>
        <h2>{{ user.id }}</h2>
        <h1>Your Email</h1>
        <h2>{{ user.email }}</h2>
        <img @click="changePhoto()" src="{{ user.src }}"/>
        <photopopup></photopopup>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PhotoPopUp from './PhotoPopUp.vue';

export default {
    name: 'islogin',
    computed: mapState([ "user" ]),
    components: { PhotoPopUp },
    data: function() {
        reutnr {
            popup: false
        }
    }
    methods: {
        changePhoto: function() {
            this.popup = true;
        }
    }
}
</script>
<style scoped>

</style>
