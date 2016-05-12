var digiClock=(function(){
  
  return{
    
    time:function(){
      var currentTime= new Date();
      var hours= currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds=currentTime.getSeconds();
      var clockDiv= document.getElementById('clock');
      clockDiv.innerText= hours+' : '+minutes+' : '+seconds;
    },
    tick:function(){
      setInterval(this.time, 1000);
    }
    
  };
  
}());