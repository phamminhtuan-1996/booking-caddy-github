<template>
    <div class="noftication-report fixed-top w-100 pt-3 d-flex flex-column align-items-center">
        <NofticationItem
            class="bg-white mb-3"
            v-for="(item, index) in listDataNoftication"
            :key="index"
            :isReport="true"
            :title="`Lỗi ${item.Field}`" 
            :contentDes="`Code: ${item.Code}, Messages: ${item.MessageText}`"
            :class="{ 'remove': index === indexTurnOff }"
            @click.native="copyCodeAndClose(item.Code, index)"
        />
        <div class="d-none">
            {{ checkHasMess }}
        </div>
    </div>
</template>
<script src="./NofticationReport.js"></script>
<style lang="scss" scoped>
@import 'NofticationReport.scss';
</style>