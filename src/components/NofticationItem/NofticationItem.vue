<template>
    <section class="noftication-item w-100 position-relative">
        <b-button v-if="isReport" variant="light" class="noftication-item__close d-flex align-items-center rounded-circle position-absolute"><i class="ezGolf-icon-x"></i></b-button>
         <b-row class="w-100 m-0">
            <b-col cols="8" sm="8" class="text-left pl-2">
                <span>
                    <i class="ezGolf-icon-bell btn btn-primary text-white rounded-circle"></i>
                </span> 
                <span class="noftication-item__title-nof ml-2 title-primary font-weight-bold">
                    {{ title }}
                </span>
            </b-col>
            <b-col v-if="!isReport" cols="4" sm="4" class="d-flex align-items-center p-0">
                <span class="noftication-item__time">11 mins ago</span>
            </b-col>
         </b-row>
         <p class="noftication-item__des text-left ml-5">{{ contentDes }} <i v-if="isReport" class="ezGolf-icon-copy"></i></p>
    </section>
</template>
<script src="./NofticationItem.js"></script>
<style lang="scss" scoped>
@import 'NofticationItem.scss';
</style>