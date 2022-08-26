<template>
    <section class="noftication-booking w-100">
        <NofticationItem v-for="(item, index) in 6" :key="index"/>
    </section>
</template>
<script src="./NofticationBooking.js"></script>
<style lang="scss" scoped>
@import 'NofticationBooking.scss';
</style>