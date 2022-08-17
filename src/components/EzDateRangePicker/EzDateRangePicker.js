import DateRangePicker from 'vue2-daterange-picker';
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
    name: 'EzDateRangePicker',
    components: {
        DateRangePicker
    },
    data(){
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 2);
      return {
        pickerDates: {startDate, endDate},
        pickerValue: null,
        dateShow:{},
      }
    },
    methods: {
      defaultDataDate() {
        const dateEnd = new Date();
        const dateStart = new Date();
        dateEnd.setDate(dateEnd.getDate() + 2);
        this.pickerValue = {dateStart: dateStart.toISOString(), dateEnd: dateEnd.toISOString()};
        this.$emit('DATA-PICKER', this.pickerValue);
      }
    },
    watch: {
      pickerDates: function(value) {
        const dateEndShow = new Intl.DateTimeFormat("vi-VN").format(value.endDate);
        const dateStartShow = new Intl.DateTimeFormat("vi-VN").format(value.startDate);
        const dateEnd = value.endDate.toISOString();
        const dateStart = value.startDate.toISOString();
        this.dateShow = { dateStartShow, dateEndShow };
        this.pickerValue = {dateStart, dateEnd};
        this.$emit('DATA-PICKER', this.pickerValue);
      }
    },
    filters: {
      date(date) {
        const format = new Intl.DateTimeFormat("en-US").format(date);
        return format;
      }
    },
    mounted() {
      this.defaultDataDate();
    }
}