<template>
    <div class="left">
        <header class="left__title">
            <span/>
            <h2>项目经历</h2><span/>
        </header>
        <div v-for="{id, name, date, link, detail, dec} in projectList" class="left-item">
            <div class="left-item-header">
                <span>{{date}}</span>
                <h3>{{name}}</h3>
                <div>
                    <el-button @click="handleClickLink(link)">连接</el-button>
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
