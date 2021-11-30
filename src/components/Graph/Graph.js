
export default {
  name: 'graph',
  components: {},
  props: [
    'displayData'
  ],
  data () {
    return {
      xOffset: 60,
      graphSize: {
        x: 1366,
        y: 768
      },
      colours: ['#01A7C2', '#7C7287', '#FF7600', '#fb16f7', '#04c12d', '#bd1c84'],
    }
  },
  computed: {
    stats() {
      return this.displayData.map( item => {
        return item.stats.map( stat => {
          return parseInt(stat[4]);
        });
      });
    },
    MaxValues() {
      return this.stats.map( item => {
        if (item.length < 1) {
          return item;
        }
        return item.reduce((a, b) => {
          return Math.max(a, b);
        })
      });
    },
    highestStat() {
      if (this.MaxValues.length < 1) {
        return 0;
      }
      return this.MaxValues.reduce((a, b) => {
        return Math.max(a, b);
      })
    },
    graphView() {
      return '0 0 ' + (this.graphSize.x) + ' ' + this.graphSize.y;
    },
    xScale() {
      return (this.graphSize.x - this.xOffset) / (this.displayData[0].stats.length - 1);
    },
    yScale() {
      return this.graphSize.y / this.highestStat;
    },
    xOffsetPercent() {
      return ((this.xOffset / this.graphSize.x) * 100);
    },
    xSpaceRemain() {
      return (100 - this.xOffsetPercent) / 100;
    }
  },
  mounted () {
  
  },
  methods: {
    formatPoints: function(list) {
      const x = this.xScale;
      const y = this.yScale;
      const offset = this.xOffset;
      const viewbox = this.graphSize.y;
      return list.map(function(stat, index) {
        return ((index * x) + offset) + ',' + (viewbox - (stat * y)) + ' ';
      }).toString();
    },

    getHeightOffset: function(value) {
      return 100 - ((value/this.highestStat) * 100) + '%';
    },

    getLeftOffset: function(value) {
      return (((100 * (this.xSpaceRemain))/(this.displayData[0].stats.length - 1)) * value) + this.xOffsetPercent + '%';
    },

    getGraphLine: function(index) {
      return ((index * this.xScale) + this.xOffset ) + ',0 ' + ((index * this.xScale) + this.xOffset ) + ',' + this.graphSize.y;
    },

    getBottomLine: function() {
      return this.xOffset + ',' + this.graphSize.y + ' ' + this.graphSize.x + ',' + this.graphSize.y;
    }
  },
  watch: {
    
  },
  filters: {
    
  }
}


