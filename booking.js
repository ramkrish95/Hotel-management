function validation(){
  
  
    var date1=document.myform.date1.value;
  if (date1==""){
    document.getElementById("err1").innerHTML="*enter the arrival date";
    return false;
  }
  else{
    document.getElementById("err1").innerHTML="";
  }
  
    var date2=document.myform.date2.value;
  if (date2==""){
    document.getElementById("err2").innerHTML="*enter the departure date";
    return false;
  }
  else{
    document.getElementById("err2").innerHTML="";
  }
  var adults=document.myform.adults.value;
  if (adults==""){
    document.getElementById("err3").innerHTML="*enter the adult count";
    return false;
  }
  else{
    document.getElementById("err3").innerHTML="";
  }
  var children=document.myform.children.value;
  if (children==""){
    document.getElementById("err4").innerHTML="*enter the children count";
    return false;
  }
  else{
    document.getElementById("err4").innerHTML="";
  }
  var rooms=document.myform.rooms.value;
  if (rooms==""){
    document.getElementById("err5").innerHTML="*enter the rooms count";
    return false;
  }
  else{
    document.getElementById("err5").innerHTML="";
  }
  
 
  if(date1 !==""&&date2 !==""&&adults !==""&&children !==""&&rooms !==""){
    alert('Booking successfull, Thank you,  We are expecting your arrival.');
  }

}