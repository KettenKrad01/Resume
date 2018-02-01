<template>
    <div ref="md" style="padding: 60px;" class="hello">

    </div>
</template>

<script>
    import MarkdownIt from 'markdown-it';
    import axios from 'axios';

    export default {
        data() {
            return {};
        },
        beforeMount() {
            axios('static/md/yh.md').then(res => {
                let html = new MarkdownIt().render(res.data);
                console.log(this.$refs.md.innerHTML);
                this.$refs.md.innerHTML = html;
//                document.write(html);
            });
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
