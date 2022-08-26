<template>
    <nav class="menu-top w-100 bg-primary" :class="{ 'active': hasShowMenu }">
        <div class="menu-top__navigation w-100 row">
            <b-col cols="4" sm="4"><b-button class="menu-top__navigation--button bg-white d-flex justify-content-center align-items-center" v-on:click="activeMenuTop" variant="outline-secondary"><i class="ezGolf-icon-menu"></i></b-button></b-col>
            <b-col cols="4" sm="4"><img class="menu-top____navigation--logo" alt="Vue logo" src="@/assets/logo.png"/></b-col>
        </div>
        <ul class="menu-top__list position-fixed bg-white list-unstyled">
            <li class="menu-top__list--item d-flex justify-content-start align-items-center">
                <img alt="" class="item-avatar" src="@/assets/avatar-default.png"/>
                <router-link to="/profile">{{ $t('golf_webapp_caddy_profile') }}</router-link>
            </li>
            <li class="menu-top__list--item d-flex justify-content-start"><i class="ezGolf-icon-home"></i><router-link to="/">{{ $t('golf_webapp_caddy_home') }}</router-link></li>
            <li class="menu-top__list--item d-flex justify-content-start"><i class="ezGolf-icon-star"></i><router-link to="/">{{ $t('golf_webapp_caddy_customer_feedback') }}</router-link></li>
            <li class="menu-top__list--item d-flex justify-content-start" @click="logOut"><i class="ezGolf-icon-log-out"></i><span>{{ $t('golf_webapp_caddy_logout') }}</span></li>
            
            <li class="menu-top__list--item m-0" @click="showModalPickSite">
                <div class="my-4">
                    <span class="font-weight-bold text-uppercase">{{ $t('golf_webapp_caddy_pick_site_manage') }}:</span>
                </div>
                <b-button variant="outline-secondary" class="h-auto">{{ dataPickMenuDropdown.SiteName }}</b-button>
            </li>
            <li class="menu-top__list--item m-0">
                <div class="my-4">
                    <span class="font-weight-bold text-uppercase">{{ $t('golf_webapp_caddy_select_language') }}:</span>
                </div>
                <b-button class="bg-white border border-white" @click="changeLanguage('vi')"><img src="@/assets/vi_vn.a0e23328.svg" alt=""></b-button>
                <b-button class="bg-white border border-white" @click="changeLanguage('en')"><img src="@/assets/en_gb.b1303c78.svg" alt=""></b-button>
            </li>
        </ul>
        <div class="menu-top__purdah" v-on:click="deActiveMenuTop"></div>
        <modal-box labelName="CHỌN SITE LÀM VIỆC" @STATES_SHOWMODAL_VISIBLE="isShowModalPickSite = value" :isShowModal="isShowModalPickSite" :hideFooter="true">
            <ez-golf-dropdown>
                <template #label-button>{{ dataPickMenuDropdown.SiteName }}</template>
                <template #dropdown-item>
                    <b-dropdown-item 
                        v-for="(item, index) in dataSite" 
                        :key="index"
                        @click="pickMenuDropdown(item)"
                    >
                            {{ item.SiteName }} 
                    </b-dropdown-item>
                </template>
            </ez-golf-dropdown>
            <b-button variant="primary" class="text-uppercase w-100 mt-4" @click="acceptPickSiteName">{{ $t('golf_webapp_caddy_accept') }}</b-button>
        </modal-box>
    </nav>
</template>
<script src="./MenuTop.js"></script>
<style lang="scss" scoped>
@import 'MenuTop.scss';
</style>