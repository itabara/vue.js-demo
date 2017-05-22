new Vue({
  el:'#vue-app',
  data:{
    first_name: 'Iulian',
    last_name: 'Tabara'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.first_name
    }
  }
});
