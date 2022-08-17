<template>
    <date-range-picker class="ez-date-range" v-model="pickerDates" ref="picker" :ranges="false" :linked-calendars="false" :time-picker="false">
        <template style="min-width: 350px;">
            {{ pickerDates.startDate | date }} - {{ pickerDates.endDate | date }} <i class="ezGolf-icon-calendar"></i>
        </template>
    </date-range-picker>
</template>
<script src="./EzDateRangePicker.js"></script>