<template>
    <div class="rm-layout">
        <el-card>
            <slot>content</slot>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style lang="less" scoped>
    .rm-layout {
        width: 1124px;
        margin: 50px auto;
        background: #fff;
        /deep/ .el-card__body {
            padding: 0;
        }
    }
</style>
