<template>
    <div id="app">
        <rm-layout>
            <router-view/>
        </rm-layout>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Layout from 'components/Layout';

    Vue.component('rm-layout', Layout);
    export default {
        name: 'app'
    };
</script>

<style lang="less">
    html, body, #app {
        margin: 0;
        height: 100%;
        overflow: auto;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 16px;
        background-color: #eee;
    }
    /*button {*/
        /*position: relative;*/
        /*&:active:after {*/
            /*content: "";*/
            /*position: absolute;*/
            /*top: -1px;*/
            /*left: -1px;*/
            /*bottom: -1px;*/
            /*right: -1px;*/
            /*border-radius: inherit;*/
            /*border: 0 solid #108ee9;*/
            /*opacity: .4;*/
            /*-webkit-animation: buttonEffect .4s;*/
            /*animation: buttonEffect .4s;*/
        /*}*/
    /*}*/

    /*@keyframes buttonEffect {*/
        /*to {*/
            /*opacity: 0;*/
            /*top: -6px;*/
            /*left: -6px;*/
            /*bottom: -6px;*/
            /*right: -6px;*/
            /*border-width: 6px*/
        /*}*/
    /*}*/
</style>

