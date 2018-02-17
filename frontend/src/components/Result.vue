<template>
    <div>
        <h1 id="words">{{ first }}</h1>
        <h1 id="words">{{ second }}</h1>
    </div>
</template>
<script>
export default {
    name: "result",
    props: [ "first", "second" ]
}
</script>
<style scoped>
    div {
        width: 100%; margin: 0 auto; height: 500px;
    }
    #words {
        text-align: center;
    }
</style>
