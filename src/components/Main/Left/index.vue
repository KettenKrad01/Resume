<template>
    <div class="left">
        <header class="left__title">
            <span/><h2>项目经历</h2><span />
        </header>
        <div class="left-item">
            <div class="left-item-header">
                <span>2017.02</span>
                <h3>图书盒子Pro·微信小程序</h3>
                <div>
                <el-button>连接</el-button>
                <el-button>详情</el-button>
                </div>
            </div>
            <p>
                产品设计界面设计前端开发 该项目基于微信小程序MINA框架的WXML、WXSS，视图层采用Flex弹性布局，逻辑层采用模块化的开发，项目使用了开放的图书馆数据接口，后端采用 LeanCloud后端云进行云端数据存储，极大方便了同学查询馆藏图书及借阅情况，上线 2周用户近 1000人，Github获得近 50个Star。
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .left {
        .left__title {
            position: relative;
            height: 32px;
            margin: 10px auto 5px;
            overflow: hidden;

            & > h2 {
                position: relative;
                z-index: 1;
                width: 24%;
                min-width: 100px;
                margin: 0 auto;
                padding: 4px 10px;
                border-radius: 32px;
                font-size: 16px;
                text-align: center;
                background-color: #eee;
            }
            & > span {
                position: absolute;
                top: 50%;
                display: inline-block;
                width: 35%;
                height: 0;
                vertical-align: middle;
                border-top: 1px solid #ededed;
            }
            & > span:nth-of-type(1) {
                left: 0;
            }
            & > span:nth-of-type(2) {
                right: 0;
            }
        }
        .left-item {
            padding: 10px 0 5px;
            .left-item-header {
                display: flex;
                align-items: flex-end;
                &>span {
                    flex: 0.25;
                }
                &>h3{
                    flex: 0.5;
                    margin: 0;
                    text-align: center;
                }
                &>div{
                    text-align: right;
                    flex: 0.25;
                    button {
                        width: 40px;
                        height: 20px;
                        padding: 0;
                        font-size: 14px;
                        border: 1px solid #00b38a;
                        border-radius: 3px;
                        color: #00b38a;
                        &:hover{
                            color: #FFF;
                            background: #00b38a;
                        }
                    }
                }
            }
        }
    }
</style>
