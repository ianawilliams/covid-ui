import compareMixin from '@/Mixins/compareMixin';
import RegionSelector from '@/components/RegionSelector/index.vue';
import Graph from '@/components/Graph/index.vue';
import Table from '@/components/Table/index.vue';

export default {
  name: 'compare',
  mixins: [compareMixin],
  components: {
    RegionSelector,
    Graph,
    Table
  },
  props: [],
  data () {
    return {
      earliest: '2021-01-01',
      latest: '2021-10-28',
      start: '2021-01-01',
      end: '2021-01-11',
      embedVisible: false,
      currentView: 'table',
      selectedRegions: [{
        region: 'Vancouver Coastal',
        district: 'All',
        stats: []
      }],
    }
  },
  computed: {
    dateChange() {
      return this.start + this.end;
    },

    embedURL() {
      let urlParams = {
        start: this.start,
        end: this.end,
      };
      
      this.selectedRegions.forEach((area, index) => {
        urlParams['d-' + index] = area.district;
        urlParams['r-' + index] = area.region;
      });

      return window.location.origin + '/Embed?' + new URLSearchParams(urlParams);
    }
  },
  mounted () {
    this.loadData(0);
  },
  methods: {
    updateSelection: function(prop, index, value) {
      new Promise((resolve) => {
        if (prop == 'region') {
          this.selectedRegions[index].district = 'All';  
        }
      
        this.selectedRegions[index][prop] = value;
        resolve();
      }).then(() => {
        this.loadData(index);
      });
    },

    addSelection: function() {
      new Promise((resolve) => {
        resolve(this.getData('All', 'All'));  
      }).then((data) => {
        this.selectedRegions.push({
          region: 'All',
          district: 'All',
          stats: data
        });
      });
    },
  },
  watch: {
    dateChange: function() {
      this.selectedRegions.forEach((item, index) => {
        this.loadData(index);
      })
    },
  },
}


