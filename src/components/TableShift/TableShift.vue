<template>
    <section>
        <section class="table-shift">
            <b-row class="table-shift__header w-100">
                <b-col class="table-shift__header--item text-left p-0" cols="4" sm="4"></b-col>
                <b-col class="table-shift__header--item text-left p-0 d-flex align-items-center" cols="4" sm="4"><span class="text-uppercase">{{ $t('date') }}</span></b-col>
                <b-col class="table-shift__header--item text-left p-0 d-flex align-items-center" cols="4" sm="4"><span class="text-uppercase">{{ $t('shift') }}</span></b-col>
            </b-row>
            <div class="table-shift__row">
            <table-shift-item
                v-for="(item, index) in data"
                :item="item"
                :idCollapse="index"
                :key="index"
                :visibleCollapse="visibleCollapse"
                @DATA_BDC="pickDataBdc"
                ></table-shift-item>
            </div>
            
        </section>
        <section v-if="data.length == 0" class="mt-3">
            <h1 class="text-uppercase text-secondary">{{ $t('shift_empty') }}</h1>
        </section>
    </section>
</template>
<script src="./TableShift.js"></script>
<style lang="scss" scoped>
@import 'TableShift.scss';
</style>