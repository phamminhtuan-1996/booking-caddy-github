export default {
    name: 'EzGolfDropdown',
    data(){
        return {
            labelName: 'Action',
        };
    },
    methods: {
        pickMenuDropdown(value) {
            this.labelName = value;
        }
    }
}