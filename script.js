function validateform() {  

let name = document.myform.name.value;  
let phone = document.myform.phoneno.value;
let emailid = document.myform.emailid.value;  
let city = document.myform.city.value;

	if(name===null || name==="") {  
	  document.getElementById('namevalid').style.border="2px solid red";
	  document.myform.name.focus();
	  document.getElementById('nme').innerHTML="Please provide a name!"
	  return false;  
	}
	else if(phone.length<10||phone.length===null) {  
	  document.getElementById('phone').style.border="2px solid red";
	  document.myform.phoneno.focus();
	  document.getElementById('phn').innerHTML="Please provide a valid phone number with 10 digits!"
	  return false;
	  } 
	else if(emailid==="") {  
	  document.getElementById('mail').style.border="2px solid red";
	  document.myform.emailid.focus();
	  document.getElementById('eml').innerHTML="Please enter a valid email address!"
	  return false;
	  }
	 else if(city==="") {  
	  document.getElementById('region').style.border="2px solid red";
	  document.myform.city.focus();
	  document.getElementById('cty').innerHTML="Please select your city!"
	  return false;
	  } 
	  
}  