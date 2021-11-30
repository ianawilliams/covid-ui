
export default {
  name: 'table',
  components: {},
  props: [
    'displayData'
  ],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {

  },
  filters: {
    dateFormat: function(value) {
      let date = new Date(value + ' PST');
      return date.toDateString().split(' ').slice(1).join(' ');
    }
  }
}


