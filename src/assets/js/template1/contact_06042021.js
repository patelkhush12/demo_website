$(document).ready(function(){	
	$("#contactForm").submit(function(event){
		submitForm();
		return false;
	});
	$("#getdemo").submit(function(event){
		//alert('uuuuuuuu'); 
		submitForm2();
		return false;
	});
});

function submitForm(){
	//alert('hi'); 	 
	 $.ajax({
		type: "POST",
		url: "saveContact.php",
		cache:false,
		data: $('form#contactForm').serialize(),
		success: function(response){
			$("#contact").html(response)
			//$("#contact-modal").modal('hide');
		},
		error: function(){
			alert("Error");
		}
	});
}

function submitForm2(){
	//alert('hi'); 	 
	 $.ajax({
		type: "POST",
		url: "saveContact2.php",
		cache:false,
		data: $('form#getdemo').serialize(),
		success: function(response){
			$("#contact2").html(response)
			//$("#contact-modal").modal('hide');
		},
		error: function(){
			alert("Error");
		}
	});
}
