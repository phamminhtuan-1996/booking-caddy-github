import { QrcodeCapture } from "vue-qrcode-reader";


export default {
    name: 'DecodeQrUpload',
    components: {
        QrcodeCapture,
    },
    data() {
        return {
            result: '',
            inputeCaptureDom: null,
        };
    },
    methods: {
        onDecode(result) {
            this.result = result;
            this.$emit('decode', this.result);
        },
        showListImage() {
            this.inputeCaptureDom.click();
        }
    },
    mounted() {
        const inputCapture = document.querySelector('.decode-qr-upload input');
        this.inputeCaptureDom = inputCapture;
        inputCapture.classList.add('d-none');
    }
}