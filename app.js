new Vue({
  el:'#vue-app',
  data:{
    txt_name: '',
    txt_age: ''
  },
  methods: {
    logName: function(){
      console.log('you entered your name');
    },
    logAge: function(){
      console.log('you entered your age');
    }
  }
});
