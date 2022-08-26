<template>
    <section class="success-add-bdc">
        <qrcode-vue :value="bdcCode" level="L"></qrcode-vue>
        <h1 class="success-add-bdc__code text-black">{{ bdcCode }}</h1>
        <h1 class="success-add-bdc__alert text-success">{{ $t('golf_webapp_caddy_checkin_success') }}</h1>
        <span class="success-add-bdc__title-info d-block text-left">{{ $t('golf_webapp_caddy_information_details') }}</span>
        <div class="success-add-bdc__table w-100" v-if="showData">
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_name') }}:</span></div>
                <div class="row-value w-50">
                    <span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.LastName || '' }} {{ infoBookingDetails.data.Data.Booking.BookingDetail.FirstName || '' }}</span>
                </div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_date') }}:</span></div>
                <div class="row-value w-50"><span>{{ workingDay }}</span></div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_time') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.StartTime }}</span></div>
            </div>
             <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_golf_course') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.CourseName }}</span></div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_holes') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.TotalNumberOfHole }}</span></div>
            </div>
           <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_webapp_caddy_caddy') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.CaddyName }}</span></div>
            </div>
             <div class="success-add-bdc__table--row w-100 d-flex" v-if="infoBookingDetails.data.Data.Booking.BookingDetail.Note !== null">
                <div class="row-label w-50 d-flex justify-content-end align-items-center"><span class="font-weight-bold d-block">{{ $t('golf_webapp_caddy_notes') }}:</span></div>
                <div class="row-value w-50">
                    <span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.Note }}</span>
                </div>
            </div> 
        </div>
        <router-link to="/home" class="text-uppercase d-block">{{ $t('golf_webapp_caddy_go_to_home') }}</router-link>
        <LoadingBackground :isShowPopup="isShowLoading"></LoadingBackground>
    </section>
</template>
<script src="./SuccessAddBdc.js"></script>
<style lang="scss" scoped>
@import 'SuccessAddBdc.scss';
</style>