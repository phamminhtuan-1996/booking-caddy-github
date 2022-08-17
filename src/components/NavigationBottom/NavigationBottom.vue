<template>
<section>
    <nav class="navigation-bottom bg-white fixed-bottom d-flex justify-content-between align-items-center">
        <ul class="navigation-bottom__list w-100 list-unstyled d-flex justify-content-between mb-0 position-relative">
            <li class="navigation-bottom__list--item">
                <router-link to="/"><i class="ezGolf-icon-home"></i></router-link>
            </li>
            <li class="navigation-bottom__list--item cursor-pointer">
                <i class="ezGolf-icon-bell"></i>
            </li>
            <li
                class="navigation-bottom__list--item item-qr bg-white rounded-circle position-absolute d-flex justify-content-center align-items-center" 
                @click="showModalAddBdcNav"
            >
                <i class="ezGolf-icon-qrcode"></i>
            </li>
            <li class="navigation-bottom__list--item" @click="isShowModalAddBdcInput">
                <i class="ezGolf-icon-plus-circle"></i>
            </li>
            <li class="navigation-bottom__list--item">
                <router-link to="/profile"><i class="ezGolf-icon-user"></i></router-link>
            </li>
        </ul>
    </nav>
    <modal-box
        :labelName="$t('input_bdc_qr')"
        :isShowModal="isShowModalAddBdc"
        :hideFooter="true"
        @STATES_SHOWMODAL_VISIBLE="resetPopup">
        <h6>{{ $t('label_select_shift') }}</h6>
        <ez-golf-dropdown class="w-100 position-relative" >
             <template #label-button>{{ resultPickTime.name }} - {{ resultPickTime.StartTime }} - {{ resultPickTime.EndTime }}<i class="ezGolf-icon-calendar position-absolute"></i></template>
             <template #dropdown-item>
                  <b-dropdown-item
                    v-for="(item, index) in dataListShift"
                    :key="index"
                    href="#"
                    @click="pickMenuDropdown(item)"
                    >
                        {{ item.WorkingDay }} - {{ item.StartTime }} - {{ item.EndTime }}
                    </b-dropdown-item>
             </template>
        </ez-golf-dropdown>
        <div v-if="isSelectMethodAddBdc" class="list-button w-100 d-flex align-items-center mt-3">
            <b-button variant="primary" class="w-50" @click="inputBDC"> 
                <i class="ezGolf-icon-file-text mr-1"></i> 
                <span class="text-white text-uppercase">{{ $t('input_bdc') }}</span>
            </b-button>
            <span class="px-3">|</span>
            <b-button variant="primary" class="w-50 d-flex justify-content-center align-items-center" @click="redirectScannerPage">
                <i class="ezGolf-icon-qrcode mr-1"></i>
                <span class="text-white text-uppercase">{{ $t('qr_scanner') }}</span>
            </b-button>
         </div>
         <input-form v-if="isShowBDCInput" @INPUT-VALUE="pickValueBdcCode" :placeholder="$t('bdc_code')" class="my-4"></input-form>
        <b-button v-if="isJustScanner" class="w-100 mt-4" variant="primary" @click="redirectScannerPage"><span class="text-white">{{ $t('scanner') }}</span></b-button>
        <b-button v-if="isShowBDCInput" class="w-100 mt-4" variant="primary" @click="acceptData"><span class="text-white">{{ $t('accept') }}</span></b-button>
    </modal-box>
</section>
</template>
<script src="./NavigationBottom.js"></script>
<style lang="scss" scoped>
@import 'NavigationBottom.scss';
</style>