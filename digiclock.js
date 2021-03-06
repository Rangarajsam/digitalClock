var digiClock=(function(){
  
  return{
    time:function(element){
      var currentTime= new Date();
      var hours= currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds=currentTime.getSeconds();
      var meridiem = 'AM';
      if(seconds<10){
        seconds='0'+seconds;
      }
      if(minutes<10){
        minutes='0'+minutes;
      }
      if(hours<10){
        hours='0'+hours;
      }
      if(hours===12){
        meridiem='PM';
      }
      else if(hours>12){
        hours=hours-12;
        meridiem='PM';
      }
      if(hours===0){
        hours=12;
      }
      var clockDiv= document.getElementById(element);
      clockDiv.innerText= hours+' : '+minutes+' : '+seconds+" "+meridiem;
    },
    tick:function(element){
      var userObject=this;
      setInterval(function(){
        userObject.time(element);
      }, 1000);
    }
    
  };
  
}());