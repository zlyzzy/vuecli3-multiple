
<template>
    <div>
        <div>我是console首页</div>
        <div class="name">{{$store.state.name}}</div>
    </div>
</template>

<script>
    export default {
        name: "login"
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
