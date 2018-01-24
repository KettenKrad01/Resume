<template>
    <div class="rm-main">
        <div class="rm-main-left">
            <main-left></main-left>
        </div>
        <div class="rm-main-right">个人</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Left from './Left';

    Vue.component('main-left', Left);
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .rm-main {
        display: flex;
        .rm-main-left {
            flex: 0.65;
            padding: 10px 15px;
            overflow: hidden;
        }
        .rm-main-right {
            flex: 0.35;
            padding: 10px 15px;
            overflow: hidden;
        }
    }
</style>
