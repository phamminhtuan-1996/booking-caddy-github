import ImageAdd from '@/AppIcon/svg/ImageAdd.vue';

export default {
    props: {
        name: {
            type: String,
            default: 'ezGolf-icon-golf-practice',
        },
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 24,
        },
        color: {
            type: String,
            default: '#000000'
        },
        isSVG: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        ImageAdd,
    },
    computed: {
        importComponent() {
            return import(`@/AppIcon/svg/${this.name}.vue`);
        },
        viewBox() {
            return `0 0 ${this.width} ${this.hieght}`;
        }
    }
}