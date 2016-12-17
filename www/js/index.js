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
	$('#p1ContentTile').html($('#p1ContentTile').html() + 'From: ' + from);
	
	var screen = $.mobile.getScreenHeight(); 
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - screen: ' + screen);
	
	var header = $("#p1Header").outerHeight();
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - p1Header: ' + header);
	
	var footer = $("#p1footer").outerHeight();
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - p1footer: ' + footer);
	
	var contentCurrent = $("#p1Content").outerHeight() - $("#p1Content").height();
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - contentCurrent: ' + contentCurrent);
	
	var content = screen - header - footer - contentCurrent;
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - content: ' + content);
	$('#p1ContentTile').html($('#p1ContentTile').html() + ' - Total: ' + (header + footer + contentCurrent + content) + '<br>');
	
	$("#p1Content").height(150);
}
