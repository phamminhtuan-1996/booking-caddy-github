<template>
    <div class="background-loading w-100 h-100 d-flex justify-content-center align-items-center position-fixed" v-if="isShowPopup">
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
</template>
<script src="./LoadingBackground.js"></script>
<style lang="scss" scoped>
@import '@/components/LoadingBackground/LoadingBackground.scss'
</style>