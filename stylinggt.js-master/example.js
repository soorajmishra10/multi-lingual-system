$(document).ready(function(){
	$("#year").text(new Date().getFullYear());
	
	//Set a default style from the beginning
	setTimeout( function(){ defaultStyle(true, "TRANSLATE", " ", "#221D20", "#221D20", "#e38cb7", "15px"); }, 1000 );
		
	// $("#removeLeftIcon").click(function(){
	// 	removeLeftIcon();
	// });
	
	// $("#changeLeftIcon").click(function(){
	// 	changeLeftIcon($("#urlLeftIcon").val());
	// });	
	
	// $("#centerTextButton").click(function(){
	// 	changeCenterText($("#centerText").val());
	// });
	
	// $("#changeRightIcon").click(function(){
	// 	changeRightIcon($("#rightIcon").val());
	// });
	
	// $("#changeBorderColor").click(function(){
	// 	changeBorderColor($("#borderColor").val());
	// });
	
	// $("#changeBackgroundColor").click(function(){
	// 	changeBackgroundColor($("#backgroundColor").val());
	// });
	
	// $("#changeTextColor").click(function(){
	// 	changeTextColor($("#textColor").val());
	// });
	
	// $("#changeTextSize").click(function(){
	// 	changeTextSize($("#textSize").val());
	// });
});

