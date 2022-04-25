function validate(e)
{
	hideErrors();


	if(formHasErrors()){
		e.preventDefault();
		return false;
	}

	return true;
}

function resetForm(e)
{
	if ( confirm('Clear Informantion?') )
	{
		hideErrors();
		
		document.getElementById("qty1").focus();
		
		return true;
	}

	e.preventDefault();
	
	return false;	
}

function formFieldHasInput(fieldElement)
{
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		return false;
	}
	
	return true;
}


function formHasErrors()
{
	let name = document.getElementById("name").value;
	if (name.length == 0) {
		document.getElementById("name_error").style.display = "block";
		errorFlag = true;
	}

	let regex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
	let emailFieldValue = document.getElementById("email").value;

	if(!regex.test(emailFieldValue)){
		document.getElementById("email_error").style.display = "block";
		errorFlag = true;
	}

	let phone = document.getElementById("ph").value;
regeX=new RegExp(/^\d{10}$/)
if (!regeX.test(phone)) {
errorFlag = true;
document.getElementById("phone_error").style.display = "block";
	}
	return errorFlag;
}

function hideErrors()
{
	let error = document.getElementsByClassName("error");
	for ( let i = 0; i < error.length; i++ )
	{
		error[i].style.display = "none";
	}
}

function load()
{
	document.getElementById("questionForm").addEventListener("submit",validate);
	hideErrors();
	document.getElementById("questionForm").addEventListener("reset",resetForm);
}

document.addEventListener("DOMContentLoaded",load);
