document.addEventListener("deviceready", onDeviceReady, false);

$(window).on("orientationchange",function()
{
	setContentPage1('orientationchange');
	setTimeout(function(){setContentPage1('orientationchange');}, 500);
});

function Refresh() 
{
	setContentPage1('Refresh');
}

function Clean() 
{
	$('#p1ContentTile').html('');
}

function onDeviceReady() 
{
	setContentPage1('onDeviceReady');
}

function setContentPage1(from)
{
	$('#p1ContentTile').append('From: ' + from);
	
	var screen = $.mobile.getScreenHeight(); 
	$('#p1ContentTile').append(' - screen: ' + screen);
	
	var header = $("#p1Header").outerHeight(true);
	//$('#p1ContentTile').append(' - p1Header: ' + header);
	
	var footer = $("#p1footer").outerHeight(true);
	//$('#p1ContentTile').append(' - p1footer: ' + footer);
	
	var contentCurrent = $("#p1Content").outerHeight(true) - $("#p1Content").height();
	//$('#p1ContentTile').append(' - contentCurrent: ' + contentCurrent);
	
	var content = screen - header - footer - contentCurrent;
	$('#p1ContentTile').append(' - content: ' + content);
	$('#p1ContentTile').append(' - Total: ' + (header + footer + contentCurrent + content) + '<br>');
	
	$("#p1Content").height(content);
}
