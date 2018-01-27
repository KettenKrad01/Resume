<template>
    <div class="left">
        <header class="left__title">
            <span/>
            <h2>项目经历</h2><span/>
        </header>
        <div v-for="{id, name, date, link, detail, dec, account, password} in projectList" class="left-item">
            <div class="left-item-header">
                <span>{{date}}</span>
                <h3>{{name}}</h3>
                <div>
                    <left-confirm
                        :handleConfirm="() => handleClickLink(link)"
                        placement="top"
                        confirmText="前往"
                    >
                        <div slot="content">
                            <div>账号:{{account}}</div>
                            <div>密码:{{password}}</div>
                        </div>
                        <el-button>连接</el-button>
                    </left-confirm>
                    <el-button @click="$router.push(detail)">详情</el-button>
                </div>
            </div>
            <p>{{dec}}</p>
        </div>
        <div class="left__personal">
            <header class="left__title">
                <span/>
                <h2>个人特点</h2><span/>
            </header>
            <p v-for="(item, index) in traitList" :key="index">
                <span class="left__personal-point"/>{{item}}
            </p>
        </div>
    </div>
</template>

<script>
    import config from '@/config';
    import Vue from 'vue';
    import Confirm from './Confirm.vue';

    Vue.component('left-confirm', Confirm)
    const {projectList, traitList} = config;
    export default {
        data() {
            return {
                projectList,
                traitList
            };
        },
        methods: {
            handleClickLink(link) {
                window.open(link);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import 'index';
</style>
