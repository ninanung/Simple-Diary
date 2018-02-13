<template>
    <div class="main">
        <h1 class="one">Your Day and My Day, Siary</h1>
        <h1 class="two">Not an SNS, Just our normal Life</h1>
        <h1 class="three">Write private or public Diary</h1>
        <h1 class="four">Show or see somebody's Little Time</h1>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style scoped>
    .main {
        margin: 0 auto; width: 100%;
    }
    h1 {
        width: 100%; height: 500px; margin: 0 auto;
        background-size: 100%;
        background-repeat: no-repeat; text-align: center;
        padding: 200px; font-weight: bold;
    }
    .one {
        background-image: url("../../static/one.jpg");
        background-position: center;
    }
    .two {
        background-image: url("../../static/three.jpg");
        color: #974E4E;
    }
    .three {
        background-image: url("../../static/two.jpg");
        color: white;
    }
    .four {
        background-image: url("../../static/four.jpg");
        color: #1C2452;
    }
</style>