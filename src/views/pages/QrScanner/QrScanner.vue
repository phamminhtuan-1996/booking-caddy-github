<template>
    <section class="qr-scanner pt-4 bg-dark">
        <h1 class="title-primary text-white text-uppercase my-3">{{ $t('golf_webapp_caddy_qr_scanner') }}</h1>
        <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
        <DecodeQrUpload @decode="onDecode"></DecodeQrUpload>
    </section>
</template>
<script src="./QrScanner.js"></script>
<style lang="scss" scoped>
@import 'QrScanner.scss';
</style>