<template>
     <section class="decode-qr-upload d-flex justify-content-center align-items-center">
          <b-button variant="primary" class="text-uppercase" @click="showListImage"><i class="ezGolf-icon-image"></i> {{ $t('label_button_add_qr') }}</b-button>
          <qrcode-capture @decode="onDecode" :capture="false" />
     </section>
</template>
<script src="./DecodeQrUpload.js"></script>
<style lang="scss" scoped>
@import './DecodeQrUpload.scss';
</style>