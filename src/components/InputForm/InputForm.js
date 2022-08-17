export default {
    name:'InputForm',
    props: {
      placeholder: {
        type: String,
        default: 'placeholder'
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {
        text: ''
      }
    }
  }