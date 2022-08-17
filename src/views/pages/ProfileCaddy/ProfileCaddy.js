import routes from '@/router/index.js';
import { fetchDataProfileCaddy } from '@/api/service.js';
import { convertDateToVN } from '@/helper/helper.js'

export default {
    name: 'Profile',
    data() {
        return {
            dataProfile: {
                name:'',
                sex: '',
                birthday:'',
                phoneNumber: '',
                shirtSize: '',
                pantsSize: '',
                codeCaddy: ''
            }
        };
    },
    methods: {
        async callBackDataProfile() {
            const param = {
                Token: localStorage.getItem('AccessToken'),
                Id: Number(localStorage.getItem('CaddyId')),
                Lang: '1000000',
            }
            const res = await fetchDataProfileCaddy(param);
            if (res.data.Data !== null) {
                this.dataProfile.codeCaddy = res.data.Data.Caddy.CaddyCode;
                this.dataProfile.name = res.data.Data.Caddy.CaddyName;
                this.dataProfile.sex = res.data.Data.Caddy.SexCode;
                this.dataProfile.birthday = convertDateToVN(res.data.Data.Caddy.BirthDay);
                this.dataProfile.shirtSize = res.data.Data.Caddy.ShirtSize;
                this.dataProfile.pantsSize = res.data.Data.Caddy.PantsSize;
                this.dataProfile.phoneNumber = res.data.Data.Caddy.PhoneNumber;
            } else {
                routes.push('/');
            }
        }
    },
    mounted() {
        this.callBackDataProfile();
    }
}