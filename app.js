new Vue({
  el:'#vue-app',
  data:{
    first_name: 'Iulian',
    last_name: 'Tabara',
    website: 'https://www.iuliantabara.com',
    websiteTag: '<a href="https://www.iuliantabara.com">iuliantabara.com</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.first_name
    }
  }
});
