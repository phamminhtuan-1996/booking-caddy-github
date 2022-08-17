<template>
  <div class="input-form">
    <b-form-input v-model="text" :placeholder="placeholder" v-on:change="$emit('INPUT-VALUE',text)" :type="type"></b-form-input>
  </div>
</template>
<script src="./InputForm.js"></script>
<style lang="scss" scoped>
@import 'InputForm.scss';
</style>