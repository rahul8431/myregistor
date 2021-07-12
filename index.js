function validation(){
  
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var date = document.getElementById("date").value;
var phon = document.getElementById("phon").value;
var email = document.getElementById("email").value;

if(fname =="" ){
  document.getElementById('username').innerHTML=" plese enter the first name";
  return false;
}
if(lname =="" ){
  document.getElementById('lname').innerHTML=" plese enter the first name";
  return false;
}
if(date =="" ){
  document.getElementById('date').innerHTML=" plese enter the first name";
  return false;
}
if(phon =="" ){
  document.getElementById('phon').innerHTML=" plese enter the first name";
  return false;
}
if(email =="" ){
  document.getElementById('email').innerHTML=" plese enter the first name";
  return false;
}
if(s =="" ){
  document.getElementById('username').innerHTML=" plese enter the first name";
  return false;
}
};