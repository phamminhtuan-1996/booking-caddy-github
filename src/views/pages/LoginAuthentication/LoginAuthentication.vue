<template>
    <section class="login-auth">
        <LoadingBackground :isShowPopup="isShowLoading"></LoadingBackground>
        <img class="login-auth__img" src="@/assets/logo_ezgolf-1 1.png" alt="">
        <h1 class="login-auth__title text-primary text-center">{{ $t('golf_webapp_caddy_login') }}</h1>
        <span class="login-auth__title--warning text-uppercase text-danger" v-if="isNotLogin">{{ $t(textWarning) }}</span>
        <div class="login-auth__wrap">
            <input-form :placeholder="$t('golf_webapp_caddy_username')" @INPUT-VALUE="pickValueUserName"></input-form>
            <input-form :placeholder="$t('golf_webapp_caddy_password')" type="password" @INPUT-VALUE="pickValuePassword"></input-form>
            <b-button class="w-100" variant="primary" v-on:click="signIn">{{ $t('golf_webapp_caddy_signin') }}</b-button>
        </div>
        <div class="login-auth__forgot" v-if="false">
            <span class="login-auth__forgot--label">{{ $t('golf_webapp_caddy_label_forgot_password') }}</span><br>
            <router-link class="login-auth__forgot--link text-uppercase" to="/">{{ $t('golf_webapp_caddy_forgot_password') }}</router-link>
        </div>
    </section>
</template>
<script src="./LoginAuthentication.js"></script>
<style lang="scss" scoped>
@import './LoginAuthentication.scss';
</style>
