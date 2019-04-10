
<template>
    <div id="client" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "client"
    }
</script>

<style lang="less" rel="stylesheet/less">
@import "../../assets/base.less";
</style>