<template>
   <section class="profile-caddy">
        <img src="@/assets/avatar-default.svg" alt="" class="profile-caddy__avatar mt-3">
        <h1 class="profile-caddy__code text-black">{{ dataProfile.codeCaddy }}</h1>
        <span class="profile-caddy__title-info d-block text-left font-weight-bold">{{ $t('information_details') }}</span>
        <section class="profile-caddy__table w-100">
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('name') }}:</div>
                <div class="row-value w-50">{{ dataProfile.name }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('sex_code') }}:</div>
                <div class="row-value w-50">{{ dataProfile.sex }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('birthday') }}:</div>
                <div class="row-value w-50">{{ dataProfile.birthday  }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('phone_number') }}:</div>
                <div class="row-value w-50">{{ dataProfile.phoneNumber }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('shirt_size') }}:</div>
                <div class="row-value w-50">{{ dataProfile.shirtSize }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('pants_size') }}:</div>
                <div class="row-value w-50">{{ dataProfile.pantsSize }}</div>
            </div>
        </section>
        <router-link to="/home" class="text-uppercase d-block">{{ $t('go_to_home') }}</router-link>
   </section>
</template>
<script src="./ProfileCaddy.js"></script>
<style lang="scss" scoped>
@import 'ProfileCaddy.scss';
</style>