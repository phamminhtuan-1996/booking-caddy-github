<template>
   <section class="profile-caddy">
        <b-avatar :src="dataProfile.avatar" class="mt-3" size="10rem"></b-avatar>
        <h1 class="profile-caddy__code text-black">{{ dataProfile.codeCaddy }}</h1>
        <span class="profile-caddy__title-info d-block text-left font-weight-bold">{{ $t('golf_webapp_caddy_information_details') }}</span>
        <section class="profile-caddy__table w-100">
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_name') }}:</div>
                <div class="row-value w-50">{{ dataProfile.name }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_sex_code') }}:</div>
                <div class="row-value w-50">{{ dataProfile.sex }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_birthday') }}:</div>
                <div class="row-value w-50">{{ dataProfile.birthday  }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_phone_number') }}:</div>
                <div class="row-value w-50">{{ dataProfile.phoneNumber }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_shirt_size') }}:</div>
                <div class="row-value w-50">{{ dataProfile.shirtSize }}</div>
            </div>
            <div class="profile-caddy__table--row w-100 d-flex">
                <div class="row-label text-right w-50 font-weight-bold">{{ $t('golf_webapp_caddy_pants_size') }}:</div>
                <div class="row-value w-50">{{ dataProfile.pantsSize }}</div>
            </div>
        </section>
        <router-link to="/home" class="text-uppercase d-block">{{ $t('golf_webapp_caddy_go_to_home') }}</router-link>
   </section>
</template>
<script src="./ProfileCaddy.js"></script>
<style lang="scss" scoped>
@import 'ProfileCaddy.scss';
</style>