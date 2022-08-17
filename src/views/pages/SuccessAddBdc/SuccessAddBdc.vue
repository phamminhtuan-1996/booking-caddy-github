<template>
    <section class="success-add-bdc">
        <qrcode-vue :value="bdcCode" level="H"></qrcode-vue>
        <h1 class="success-add-bdc__code text-black">{{ bdcCode }}</h1>
        <h1 class="success-add-bdc__alert text-success">{{ $t('checkin_success') }}</h1>
        <span class="success-add-bdc__title-info d-block text-left">{{ $t('information_details') }}</span>
        <div class="success-add-bdc__table w-100">
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('name') }}:</span></div>
                <div class="row-value w-50">
                    <span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.LastName }} {{ infoBookingDetails.data.Data.Booking.BookingDetail.FirstName }}</span>
                </div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('date') }}:</span></div>
                <div class="row-value w-50"><span>{{ workingDay }}</span></div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('time') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.StartTime }}</span></div>
            </div>
             <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('golf_course') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.CourseName }}</span></div>
            </div>
            <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('holes') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.TotalNumberOfHole }}</span></div>
            </div>
           <div class="success-add-bdc__table--row w-100 d-flex">
                <div class="row-label w-50"><span class="font-weight-bold">{{ $t('caddy') }}:</span></div>
                <div class="row-value w-50"><span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.CaddyName }}</span></div>
            </div>
             <div class="success-add-bdc__table--row w-100 d-flex" v-if="infoBookingDetails.data.Data.Booking.BookingDetail.Note !== null">
                <div class="row-label w-50 d-flex justify-content-end align-items-center"><span class="font-weight-bold d-block">{{ $t('notes') }}:</span></div>
                <div class="row-value w-50">
                    <span>{{ infoBookingDetails.data.Data.Booking.BookingDetail.Note }}</span>
                </div>
            </div> 
        </div>
        <router-link to="/home" class="text-uppercase d-block">{{ $t('go_to_home') }}</router-link>
    </section>
</template>
<script src="./SuccessAddBdc.js"></script>
<style lang="scss" scoped>
@import 'SuccessAddBdc.scss';
</style>