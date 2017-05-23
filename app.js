new Vue({
  el:'#vue-app',
  data:{
    first_name: 'Iulian',
    last_name: 'Tabara',
    website: 'https://www.iuliantabara.com',
    websiteTag: '<a href="https://www.iuliantabara.com">iuliantabara.com</a>',
    age:36,
    x:0,
    y:0
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.first_name
    },
    addAge: function(inc){
      this.age += inc;
    },
    subtractAge: function(dec){
      this.age -= dec;
    },
    updateXY : function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click : function(){
      alert("You clicked");
    }
  }
});
