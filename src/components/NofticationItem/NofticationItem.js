
export default {
    name: 'NofticationItem',
    props: {
        data:{
            type: Object
        },
        isReport: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'có 1 khách đặt'
        },
        contentDes: {
            type: String,
            default: 'Date: 20/07/2022, Shift: 5:30, BDC: 220419XXX Golf Course: King'
        }
    },
    data(){
        return{};
    }
}