<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'uf-radio-group'
}
</script>
<style scoped>
.radio-group {
    display: inline-block;
}
.radio-group .btn-primary{
    border-left: 1px solid #fff;
}
.radio-group .btn-normal,.radio-group .btn-primary,.radio-group .btn-default {
    border-right: 0;
    border-radius: 0;
}
.radio-group .btn-normal:first-child,.radio-group .btn-primary:first-child,.radio-group .btn-default:first-child{
    border-right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.radio-group .btn-primary:first-child {
    border-left: 1px solid #0066ff;
}
.radio-group .btn-normal:last-child,.radio-group .btn-primary:last-child,.radio-group .btn-default:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.radio-group .btn-normal:last-child{
    border-right: 1px solid #888888;
}
.radio-group .btn-primary:last-child, .radio-group .btn-default:last-child{
    border-right: 1px solid #0066ff;
}
</style>