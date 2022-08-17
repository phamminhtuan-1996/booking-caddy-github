<template>
    <section class="login-auth">
        <LoadingBackground :isShowPopup="isShowLoading"></LoadingBackground>
        <img class="login-auth__img" src="@/assets/logo_ezgolf-1 1.png" alt="">
        <h1 class="login-auth__title text-primary text-center">{{ $t('login') }}</h1>
        <span class="login-auth__title--warning text-uppercase text-danger" v-if="isNotLogin">{{ $t('incorrect_login') }}</span>
        <div class="login-auth__wrap">
            <input-form :placeholder="$t('username')" @INPUT-VALUE="pickValueUserName"></input-form>
            <input-form :placeholder="$t('password')" type="password" @INPUT-VALUE="pickValuePassword"></input-form>
            <b-button class="w-100" variant="primary" v-on:click="signIn">{{ $t('signin') }}</b-button>
        </div>
        <div class="login-auth__forgot">
            <span class="login-auth__forgot--label">{{ $t('label_forgot_password') }}</span><br>
            <router-link class="login-auth__forgot--link text-uppercase" to="/">{{ $t('forgot_password') }}</router-link>
        </div>
    </section>
</template>
<script src="./LoginAuthentication.js"></script>
<style lang="scss" scoped>
@import './LoginAuthentication.scss';
</style>
