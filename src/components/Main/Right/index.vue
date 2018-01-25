<template>
    <div class="right">
        <div class="right-top">
            <div class="right-top__avatar"></div>
            <h1>卢本伟</h1>
            <h3>前端开发工程师</h3>
        </div>
        <div class="right-info">
            <p>男/1994.08</p>
            <p>野鸡大学 • 电竞科学研究专业</p>
            <p>本科 / 2017年毕业</p>
        </div>
        <div class="right-skill">
            <p>技术栈</p>
        </div>
        <div class="right-link">
            <p><img src="~assets/github.png" alt=""><a>github</a></p>
            <p><img src="~assets/zhihu.png" alt=""><a>知乎</a></p>
            <p><img src="~assets/email.png" alt=""><a>邮箱</a></p>
            <p><img src="~assets/phone.png" alt=""><a>电话</a></p>
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
    .right {
        padding: 20px 40px;
        font-family: "Lucida Grande", "Hiragino Sans GB";

        .right-top {
            color: #00b38a;
            text-align: center;
            letter-spacing: 5px;
            h1 {
                margin-top: 10px;
                margin-bottom: 0;
                font-weight: 600;
                letter-spacing: 5px;
            }
            h3 {
                margin: 15px 0;
                font-size: 20px;
                font-weight: 600;
            }
            .right-top__avatar {
                display: inline-block;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: #FFF;
            }
        }
        .right-info {
            margin: 60px 0;
        }
        .right-skill {
            height: 330px;
        }
        .right-link {
            p {
                color: #00b38a;
                cursor: pointer;
                img {
                    width: 24px;
                    height: 24px;
                    vertical-align: top;
                }
                a {
                    margin-left: 10px;
                }
                &:hover {
                    color: rgba(0, 179, 138, 0.65);
                    a {text-decoration: underline}
                }
            }

        }
    }
</style>
