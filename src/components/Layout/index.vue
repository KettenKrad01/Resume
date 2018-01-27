<template>
    <div class="rm-layout">
        <div class="lastUpdate">最后更新时间: {{lastUpdate}}</div>
        <el-card>
            <slot>content</slot>
        </el-card>
    </div>
</template>

<script>
    import config from '@/config';
    const {lastUpdate} = config;
    export default {
        data() {
            return {
                lastUpdate,
            };
        },
    };
</script>

<style lang="less" scoped>
    .rm-layout {
        position: relative;
        width: 1124px;
        margin: 50px auto;
        background: #fff;
        /deep/ .el-card__body {
            padding: 0;
        }

        .lastUpdate {
            position: absolute;
            right: 0;
            top: -20px;
            font-size: 12px;
        }
    }
</style>
