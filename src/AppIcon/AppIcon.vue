<template>
    <element>
        <component
            v-if="isSVG"
            :is="importComponent"
        >
        </component>
       <i :class="name" v-else></i>
    </element>
</template>
<script src="./AppIcon.js">
</script>