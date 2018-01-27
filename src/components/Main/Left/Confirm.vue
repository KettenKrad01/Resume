<template>
    <el-popover
        :placement="placement||'bottom'"
        width="100"
        :value="visible"
    >
        <p style="text-align: center"><slot name="content">确定删除吗？</slot></p>
        <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible=false">取消</el-button>
            <el-button
                class="rm-confirm-btn"
                :loading="loading"
                @click="handleConfirm"
                type="primary"
                size="mini">{{confirmText||'确定'}}
            </el-button>
        </div>
        <span @click="visible=true" slot="reference"><slot></slot></span>
    </el-popover>
</template>

<script>
    export default {
        props: ['handleConfirm', 'loading', 'placement', 'confirmText'],
        data () {
            return {
                visible: false,
            };
        }
    };
</script>

<style lang="less" scoped>
    .rm-confirm-btn {
        background: #00b38a;
        border: 0;
    }
</style>
