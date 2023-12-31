// JavaScript Document

function loadXMLHTTP()
{	

	xhr = null;
	try {
	   return new XMLHttpRequest();
	} catch (trymicrosoft) {
    try {
    	return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (othermicrosoft) {
    try {
       	return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (failed) {
        return null;
		
    }  
    }
   	}
}

    
function shtmmsg()
{
	alert('Students are requested to check the notification issued by the Constituent for any change in Time-Table.');
}

function dsprslt(arg)
{
  debugger;   
  /*req=null;
	req=loadXMLHTTP();
			    // document.getElementById('centr').innerHTML='';
   
   var dstr='../siuexmres.exe/dsprslt?';
	req.open('GET',dstr, true);
	req.onreadystatechange=function()
	{
		if(req.readyState==4)
		if(req.status==200)
		{ 
		//  if(req.responseText=='Logout')
		 //  {
			//   Logout(document.form1);
		  // }
		 //  else
		 //  {
			  
		     document.getElementById('dsp1').innerHTML=req.responseText;
			 
		  // }
		}
	}
	req.send('');
//  document.getElementById('dsp1').innerHTML='<p align="center"><img src="../../images/gif-loading.gif">';	
*/

/*$.ajax({
		   type:"GET",
		     url: '../cgi-bin/siuexmres.exe/dsprslt',
			 data: dstr,
         	success: function(result)
			{
				$("#dsp1").clear;
            	$("#dsp1").html(result);	
				// document.getElementById('dsp1').innerHTML=result;
		 }
    }); */

dstr='dbnm='+$("#dbnm").val();
//if(arg=='R')
//{
//   document.form1.action="../cgi-bin/siuexmres.exe/dsprslt?dbnm="+$("#dbnm").val();
//}
//else
//{
	document.form1.action="cgi-bin/SiuExmReslt.exe/dsprslt?dbnm="+$("#dbnm").val();
	//}
document.form1.submit();
}

function dsprslt2()
{
  debugger;   
    $ajax({
		   type:"GET",
		     url: '../cgi-bin/SiuExmReslt.exe/dsprslt1',
			 data: dstr,
			 async:false,
         	success: function(result)
			{
				$("#dsp1").clear;
            	$("#dsp1").html(result);	
				document.getElementById('dsp1').innerHTML=result;
		 },
		 error: function(xhr){
			 alert('Time out... Please try again...');
			 $("#dsp1").clear;
			 $("#dsp1").html('Please try again...');	
		 }
    }); 

}



function prnverify()
{
 
 $("#seatnum").clear;
 $("#seatnum").html("Please wait...");;
	//debugger;
	dstr='dbnm='+$("#dbnm").val()+'&prn='+$("#login").val()+'&mksea='+$("#grp").val();
	$.ajax({
		   type:"GET",
		     url: '../cgi-bin/SiuExmReslt.exe/DspSeatnum',
			 data: dstr,
			 async:false,
			 success: function(result)
			{  
				document.getElementById("login").disabled = true;
 				document.getElementById("lgnbtn").disabled = true;
                document.getElementById("grp").disabled = true;  
			   // $("#rslt").clear;
				$("#seatnum").clear;
            	$("#seatnum").html(result);	
			    document.getElementById('rslt').innerHTML='';
		 },
		 error: function(xhr){
			 alert('Time out... Please try again...');
			 $("#seatnum").clear;
			 $("#seatnum").html('Please try again...');	
		 }
    }); 
}


 function viewrslt(mrkexmid,siudbnm)
{
 //debugger;

 $("#rslt").clear;
 $("#rslt").html("Please wait as your result is being generated..."); 
 
 var url1='../cgi-bin/SiuExmReslt.exe/viewrslt';

 dstr='dbnm='+$("#dbnm").val()+'&mrkexmid='+mrkexmid+'&siudbnm='+siudbnm+'&seatno='+$('#txt'+mrkexmid).val();
 $.ajax({
		type:"GET",
		async:false,
		  url: url1,
		  data: dstr,
		  success: function(result)
		 {
			 $("#rslt").clear;
			 $("#rslt").html(result);	
			 // document.getElementById('dsp1').innerHTML=result;
	  },
	  error: function(xhr){
		  alert('Time out... Please try again...');
		  $("#rslt").clear;
		  $("#rslt").html('Please try again...');	
	  }
 }); 	
}
function gettmtbl()
{
	req=null;
	req=loadXMLHTTP();
	req.open('POST','cgi-bin/wSiuInterface.exe/gettmtb?dbnm='+$("#dbnm").val(),true);
	req.onreadystatechange=function()
	{
		if(req.readyState==4)
		if(req.status==200)
		{
			document.getElementById('tmtb').innerHTML=req.responseText;
		}
	}
	req.send('');
}










		jQuery(document).ready(function(){
		
			//Accordion Nav
			jQuery('.mainNav').navAccordion({
				expandButtonText: '<i class="fa fa-plus"></i>',  //Text inside of buttons can be HTML
				collapseButtonText: '<i class="fa fa-minus"></i>'
			}, 
			function(){
				console.log('Callback')
			});
			
		});

 $(document).ready(function() {
	$('.mainNav ul li a').click(function(ev) {
        $('.mainNav ul').not($(this).parents('ul')).slideUp();
	    $(this).next('ul').slideToggle();
	    $('.subMenu ul li a').removeClass('active');
	    $(this).addClass('active');
	    ev.stopPropagation();
	});
});

