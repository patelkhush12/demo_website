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
			//if(response == 'Thank You! Your Case Study Request Sent Successfully. case study will be emailed to you') {
				// Your application has indicated there's an error
				window.setTimeout(function() {
					// Move to a new location or you can do something else
					window.location.href = "https://ncircletech.com/autodesk-forge/";
				}, 5000);
			//}
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
