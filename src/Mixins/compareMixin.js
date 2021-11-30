export default {
  methods: {
    loadData: function(index) {
      this.getData(this.selectedRegions[index].region, this.selectedRegions[index].district)
      .then((data) => {
        this.selectedRegions[index].stats = data;
      })  
    },

    getData: function(healthAuthority, healthRegion) {
      const domain = 'http://localhost:9000';
      const path = '/Cases/index.php';

      let URL = domain + path + '?' + new URLSearchParams({
        start: this.start,
        end: this.end,
        HA: healthAuthority,
        HR: healthRegion
      })

      return fetch(URL)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        return JSON.parse(data);
      });
    }
  }
};