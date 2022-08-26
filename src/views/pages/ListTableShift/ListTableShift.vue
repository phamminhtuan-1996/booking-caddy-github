<template>
<section class="list-table-shift">
    <section class="search-daterange px-3">
        <ez-date-range-picker class="w-100" @DATA-PICKER="pickValueDate"></ez-date-range-picker>
        <b-button
            @click="filterDate"
            variant="primary"
            class="w-100 my-5"
        >
            {{ $t('golf_webapp_caddy_search') }}
        </b-button>
    </section>
    <section class="fillter-search px-3">
        <h1 class="text-uppercase w-100 text-primary">{{ $t('golf_webapp_caddy_title_list_table_shift') }}</h1>
        <ul class="fillter-search__list list-unstyled">

            <li class="fillter-search__list--item">
                <b-button 
                    variant="outline-primary"
                    v-b-toggle="listCollapseStatistical.today"
                    class="text-uppercase w-100"
                >
                    {{ $t('golf_webapp_caddy_today') }} :
                <span class="text-success">{{ numberStatistical.today }}</span></b-button>
            </li>
            <li class="fillter-search__list--item">
                <b-button
                    v-b-toggle="listCollapseStatistical.success"
                    variant="outline-primary"
                    class="text-uppercase w-100"
                >
                    {{ $t('golf_webapp_caddy_complete') }}: 
                    <span class="text-success">
                        {{ numberStatistical.success }}
                    </span>
                </b-button>
            </li>
            <li class="fillter-search__list--item">
                <b-button 
                    v-b-toggle="listCollapseStatistical.hasBooking" 
                    variant="outline-primary" 
                    class="text-uppercase w-100"
                >
                    {{ $t('golf_webapp_caddy_booked') }}: 
                    <span class="text-info">
                        {{ numberStatistical.hasBooking }}
                    </span>
                </b-button>
            </li>
            <li class="fillter-search__list--item">
                <b-button 
                    v-b-toggle="listCollapseStatistical.serving" 
                    variant="outline-primary" 
                    class="text-uppercase w-100"
                >
                    {{ $t('golf_webapp_caddy_serving') }}: 
                    <span class="text-danger">
                        {{ numberStatistical.serving }}
                    </span>
                </b-button>
            </li>
        </ul>
    </section>
    <section class="table">
        <table-shift :visibleCollapse="visibleAllCollapse" :data="arrayDataList" @DATA_BDC="pickDataBdc"></table-shift>
    </section>
    <modal-box
        :labelName="$t(inPutBDCLabelName)"
        :hideFooter="!isShowInputBdc"
        :isShowModal="isShowModalAddBdc" 
        @STATES_SHOWMODAL_VISIBLE="resetStatePopup"
        @ACCEPT-MODAL="acceptData"
    >
        <ez-golf-dropdown class="mb-3">
             <template #label-button>{{ datePick }} - {{ timePick }} <i class="ezGolf-icon-calendar"></i></template>
            <template #dropdown-item>
                <div></div>
            </template>
         </ez-golf-dropdown>
         <div v-if="showListButtonModal" class="list-button w-100 d-flex align-items-center">
            <b-button variant="primary" class="w-50" @click="inputBDC"> 
                <i class="ezGolf-icon-file-text mr-1"></i> 
                <span class="text-white text-uppercase">{{ $t('golf_webapp_caddy_input_bdc') }}</span>
            </b-button>
            <span class="px-3">|</span>
            <b-button variant="primary" class="w-50 d-flex justify-content-center align-items-center" @click="redirectQR">
                <i class="ezGolf-icon-qrcode mr-1"></i>
                <span class="text-white text-uppercase">{{ $t('golf_webapp_caddy_qr_scanner') }}</span>
            </b-button>
         </div>
         <input-form v-if="isShowInputBdc" @INPUT-VALUE="pickValueBdcCode" :placeholder="$t('golf_webapp_caddy_bdc_code')" class="my-4"></input-form>
    </modal-box>
</section>
</template>
<script src="./ListTableShift.js"></script>
<style lang="scss" scoped>
@import 'ListTableShift.scss';
</style>