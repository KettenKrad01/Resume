<template>
    <div class="right">
        <div class="right-top">
            <img :src="'./static/images/avatar.png'" class="right-top__avatar" />
            <h1>{{personalInfo.name}}</h1>
            <h3>{{personalInfo.position}}</h3>
        </div>
        <div class="right-info">
            <p>{{personalInfo.sex}} / {{personalInfo.birthday}}</p>
            <p>{{personalInfo.university}} • {{personalInfo.major}}</p>
            <p>{{personalInfo.education}} / {{personalInfo.graduation}}毕业</p>
            <p>英语 / {{personalInfo.english}}毕业</p>
        </div>
        <div class="right-skill">
            <p>技术栈</p>
            <a v-for="(item, index) in personalInfo.skillList" :key="index">{{item}}</a>
        </div>
        <div class="right-link">
            <p v-for="{id, name, url, icon, text} in personalInfo.social" :key="id">
                <img :src="'./static/images'+icon" alt="">
                <a v-if="url" :href="url">{{name}}</a>
                <a v-else>{{text}}</a>
            </p>
            <!--<p><img src="~assets/zhihu.png" alt=""><a>知乎</a></p>-->
            <!--<p><img src="~assets/email.png" alt=""><a>邮箱</a></p>-->
            <!--<p><img src="~assets/phone.png" alt=""><a>电话</a></p>-->
        </div>
    </div>
</template>

<script>
    import config from '@/config';
    const {personalInfo} = config;
    export default {
        data() {
            return {
                personalInfo,
            };
        }
    };
</script>

<style lang="less" scoped>
    @import 'index';
</style>
