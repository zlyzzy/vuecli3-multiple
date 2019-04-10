
<template>
    <div>
        <div>我是console首页</div>
        <div class="name">{{$store.state.name}}</div>
        <el-input size="small" v-model="input" placeholder="请输入内容"></el-input>
        <img src="@/assets/logo.png"/>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                input:''
            }
        }
    }
</script>

<style scoped lang="less">
div{
    font-size: 20px;
    .name{
        color: #f00;
    }
}
</style>
