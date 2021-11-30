import compareMixin from '@/Mixins/compareMixin';
import Graph from '@/components/Graph/index.vue';

export default {
  name: 'embed',
  mixins: [compareMixin],
  components: {
    Graph
  },
  props: [],
  data () {
    return {
      selectedRegions: [],
      dataLoaded: false,
    }
  },
  computed: {
    start() {
      return this.$route.query.start;
    },
    end() {
      return this.$route.query.end;
    },
  },
  mounted () {
    for ( let i = 0; i < 6; i++ ) {
      if ( this.$route.query['r-' + i] && this.$route.query['d-' + i] ) {
        this.selectedRegions.push({
          region: this.$route.query['r-' + i],
          district: this.$route.query['d-' + i],
          stats: []
        })
      }
    }
  },
  methods: {

  },
  watch: {
    selectedRegions: function() {
      for (let x = 0; x < this.selectedRegions.length; x++) {
        this.loadData(x);
      }
    }
  },
 
}


