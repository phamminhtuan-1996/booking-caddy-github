<template>
    <div class="table-shift__row--item bg-white d-flex flex-wrap">
        <b-row class="w-100">
            <b-col cols="4" sm="4" class="p-0">
                <b-button 
                    v-b-toggle="'collapse-' + idCollapse" 
                    variant="primary" 
                    class="rounded-circle row-item__button p-0 position-relative"
                >
                </b-button>
            </b-col>
            <b-col cols="4" sm="4" class="p-0"><div class="row-item text-left">{{ item.WorkingDay }}</div></b-col>
            <b-col cols="4" sm="4" class="p-0"><div class="row-item text-left">{{ item.StartTime }} - {{ item.EndTime }}</div></b-col>
        </b-row>
        <b-collapse v-model="visible" :id="'collapse-'+idCollapse" class="mt-2 w-100">
            <b-row class="row-item w-100">
                <b-col cols="4" sm="4" class="p-0"></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left"><span class="row-label">{{ $t('golf_webapp_caddy_bdc_code') }}:</span></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left"><span class="row-value">{{ item.BDC || '-' }}</span></b-col>
            </b-row>
            <b-row class="row-item w-100">
                <b-col cols="4" sm="4" class="p-0"></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left"><span class="row-label">{{ $t('golf_webapp_caddy_golf_course') }}:</span></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left"><span class="row-value">{{item.CourseName || '-'}}</span></b-col>
            </b-row>
            <b-row class="row-item w-100">
                <b-col cols="4" sm="4" class="p-0"></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left"><span class="row-label">{{ $t('golf_webapp_caddy_time_line') }}:</span></b-col>
                <b-col cols="4" sm="4" class="p-0 text-left d-flex align-items-end">
                    <span
                        class="row-value"
                        :class="{
                            'text-success': item.TimeLine === 'TODAY', 
                            'text-warning': item.TimeLine === 'UPCOMING', 
                            'text-secondary': item.TimeLine === 'PAST'
                        }"
                    >
                        {{ item.TimeLine }}
                    </span>
                </b-col>
            </b-row>
            <b-row class="row-item w-100" >
                <b-col cols="4" sm="4" class="p-0"></b-col>
                <b-col
                    cols="8"
                    sm="8"
                    class="p-0 text-left"
                >
                    <b-button
                        v-if="checkNotBDC"
                        class="w-100 mt-3 d-flex align-items-center justify-content-center text-uppercase"
                        variant="primary"
                        @click="showModalAddBdc(item)"
                    >
                        <i class="ezGolf-icon-plus-circle mr-2"></i> {{ $t('golf_webapp_caddy_add_bdc_code') }}
                    </b-button>
                    <router-link  v-if="item.BDC" :to="'/sucess/'+item.BookingDetailId" class="btn btn-primary w-100 mt-3">{{ $t('golf_webapp_caddy_view_details') }}</router-link>
                </b-col>
            </b-row>
        </b-collapse>
    </div>
</template>
<script src="./TableShiftItem.js"></script>
<style lang="scss" scoped>
@import 'TableShiftItem.scss';
</style>