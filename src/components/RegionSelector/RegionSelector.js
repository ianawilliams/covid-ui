
export default {
  name: 'region-selector',
  components: {},
  props: [
    'selected',
    'graphView'
  ],
  data () {
    return {
      maxRegions: 6,
      colours: ['#01A7C2', '#7C7287', '#FF7600', '#fb16f7', '#04c12d', '#bd1c84'],
      regions: [
        {
          label: 'All'
        },
        {
          label: 'Vancouver Coastal',
          districts: ['All', 'North Shore/Coast Garibaldi', 'Richmond', 'Vancouver']
        },
        {
          label: 'Fraser',
          districts: ['All', 'Fraser East', 'Fraser North', 'Fraser South']
        },
        {
          label: 'Interior',
          districts: ['All', 'East Kootenay', 'Kootenay Boundary', 'Okanagan', 'Thompson Cariboo Shuswap']
        },
        {
          label: 'Vancouver Island',
          districts: ['All', 'Central Vancouver Island', 'North Vancouver Island', 'South Vancouver Island']
        }
      ],
      currentRegions: this.selected,
    }
  },
  computed: {

  },
  mounted () {
  
  },
  methods: {
    removeItem: function(index) {
      this.currentRegions.splice(index, 1);
    }
  },
}


