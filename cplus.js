function openNav() {

  document.getElementById("side").style.width = "98%";
  document.getElementById("side").style.position = 'absolute' ;
  document.getElementById("side").style.zIndex = 1;
  document.getElementById("side").style.background = 'white';
  document.getElementById("side").style.display = 'block' ;
  document.getElementById("side").classList.remove("widthZero");
  document.getElementById("remove").style.display='none';
  // document.getElementById("remove").classList.addClass("disappear");
}

function closeNav() {
  document.getElementById("side").style.width = "0";
  document.getElementById("side").style.display = 'none' ;
  document.getElementById("remove").style.display='block';
}

// ---------------------side search menu-------------------

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// ---------------------------------------------------------------------
$(document).on('keyup', '#all-search', function() {

	  $("#myProgram li").addClass("border");	  

	});
// ---------------------heading change--------------------------------

$(document).ready(function(){

	$("ul li#all").click(function(){
		$(".text-change").text("All Examples");
	}); 

	$("ul li#simple-prog").click(function(){
		$(".text-change").text("Simple Programs");
	}); 

	$("ul li#if-else").click(function(){
		$(".text-change").text("If-Else");
	}); 

	$("ul li#Switch-case").click(function(){
		$(".text-change").text("Switch-Case");
	}); 

	$("ul li#loop-statement").click(function(){
		$(".text-change").text("Loop Statements");
	}); 

	$("ul li#patterns").click(function(){
		$(".text-change").text("Patterns");
	}); 

	$("ul li#array").click(function(){
		$(".text-change").text("Array");
	}); 

	$("ul li#functions").click(function(){
		$(".text-change").text("Functions");
	}); 

	$("ul li#structure-union").click(function(){
		$(".text-change").text("Structure and Union");
	}); 

	$("ul li#class-object").click(function(){
		$(".text-change").text("Class and Object");
	}); 

	$("ul li#cons-dest").click(function(){
		$(".text-change").text("Constructor and Destructor");
	});

	$("ul li#inheritance").click(function(){
		$(".text-change").text("Inheritance");
	});

	$("ul li#polymorphism").click(function(){
		$(".text-change").text("Polymorphism");
	});

	$("ul li#stack").click(function(){
		$(".text-change").text("Stack");
	}); 

	$("ul li#queue").click(function(){
		$(".text-change").text("Queue");
	}); 

	$("ul li#linked-list").click(function(){
		$(".text-change").text("Linked List");
	}); 
	
});
// ---------------------------------------------------------------
$(document).on('click', '.programs', function() {
	  var show = $(this).data('show');
	  $('#side').addClass("widthZero");
	  $(show).removeClass("hide").siblings().addClass("hide");

	});
	// -------------------------------------------------------------
	function openContent(evt, topic) {
		document.getElementById("remove").style.display='block';
  var i, content, tablinks;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topic).style.display = "block";
  evt.currentTarget.className += "active"; //active??
}


// -----------------------search menu for programs---------------------------------------------

 

	$(document).ready(function () {


	$("#all-search").on("keyup", function () {
	if (this.value.length > 0) {   
	  $(".Searching li a").hide().filter(function () {
	    return $(this).text().toLowerCase().indexOf($("#all-search").val().toLowerCase()) != -1;
	    $("li").addClass("border");
	  }).show(); 
	}  
	else { 
	  $(".Searching li a").show();
	}
	}); 

	});