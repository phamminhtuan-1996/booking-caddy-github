<template>
    <b-modal v-model="modalShow" class="modal-box" ref="my-modal" id="modal-1" :title="labelName" :hide-footer="hideFooter" @ACCEPT-MODAL="$emit('ACCEPT-MODAL')" @cancel="cancelButton" @ok="acceptModal">
        <slot></slot>
    </b-modal>
</template>
<script src="./ModalBox.js"></script>
<style lang="scss" scoped>
@import 'ModalBox.scss';
</style>