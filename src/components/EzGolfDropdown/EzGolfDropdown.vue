<template>
    <section class="ez-dropdown">
        <b-dropdown class="w-100" size="lg"  variant="outline-secondary" toggle-class="text-decoration-none" no-caret>
             <template #button-content>
              <span class="ez-dropdown__title d-block"><slot name="label-button">{{ labelName }}</slot></span>
            </template>
           <slot name="dropdown-item">
                <b-dropdown-item href="#" @click="pickMenuDropdown('Action')">Action</b-dropdown-item>
                <b-dropdown-item href="#" @click="pickMenuDropdown('Another action')">Another action</b-dropdown-item>
                <b-dropdown-item href="#" @click="pickMenuDropdown('Something else here...')">Something else here...</b-dropdown-item>
           </slot>
        </b-dropdown>
    </section>
</template>
<script src="./EzGolfDropdown.js"></script>
<style lang="scss" scoped>
@import 'EzGolfDropdown.scss';
</style>