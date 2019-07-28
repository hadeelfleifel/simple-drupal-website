/*
Q1:
Check if jQuery is loaded
*/
$(function(){
	 if (window.jQuery)
    {
        alert('jQuery is loaded');
    }
    else
    {
        alert('jQuery is not loaded');
    }

})


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$('#myBtn').click(function(){
$('html,body').animate({scrollTop:0},0)
})



/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$('#btn1').click(function(){

	$('div').css({width:'300px',height:'300px'})
})
$('#btn2').click(function(){

	$('div').css({width:'150px',height:'150px'})
});
/*
Q4:
Learn how to fadein your boxes
*/

$('#fade').click(function(){
$('#div1').fadeIn(3000);
$('#div2').fadeIn(3000 );
$('#div3').fadeIn( 3000 );

});

/*
Q5:                                 
User must first accept then he or she can signup
*/
    $('#accept').click(function () {
    	if($('#accept').prop("checked")){
    		$('#submitbtn').attr("disabled", false);
    	}
    		else{$('#submitbtn').attr("disabled", true);
    	}
    })


/*
Q6:
Let them print
0*/
$('.printPage').click(function(){
     window.print();
});

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$('#textarea').keyup(function(){
    var maxLength = 20;
    var length = $(this).val().length;
    var length = maxLength-length;
    $('#rchars').text(length);
})
/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$('.bold').css({"font-weight": "bold"})


/*
Q9:
Add new div to your website
*/
$('#btn9').click(function(){
	$('#div9').append('<div> new div </div>')


})

/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/
$("#newli").append('<li><a href="#">Message Center</a></li>');


/*	 
Q12:
Know what user puts into textbox
*/
// 
//     $('#usertext').keyup(function() {
//         $('#someDiv').text($(this).val());
//     });
//
//  $('#usertext').keyup(function() {
//  	$('#usertext').append('<div id="newdiv2">ffffff</div>')
//  	// $('#newdiv2').text($('#usertext').val());
// });


/*
Q13:
Change input value
*/
// $('#button').prop('value', 'password');
$('#button').val("password");



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 