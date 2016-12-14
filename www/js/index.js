document.addEventListener("deviceready", onDeviceReady, false);

$(window).on("orientationchange",function()
{
	setContentPage1('orientationchange');
});

function Refresh() 
{
	setContentPage1('Refresh');
}

function onDeviceReady() 
{
	setContentPage1('onDeviceReady');
}

function setContentPage1(from)
{
	$('#p1Content').html($('#p1Content').html() + '<br>From: ' + from);
	var screen = $.mobile.getScreenHeight(); 
	$('#p1Content').html($('#p1Content').html() + ' - screen: ' + screen);
	var header = $("#p1Header").outerHeight();
	$('#p1Content').html($('#p1Content').html() + ' - p1Header: ' + header);
	var footer = $("#p1footer").outerHeight();
	$('#p1Content').html($('#p1Content').html() + ' - p1footer: ' + footer);
	var contentCurrent = $("#p1Content").outerHeight() - $("#p1Content").height();
	$('#p1Content').html($('#p1Content').html() + ' - contentCurrent: ' + contentCurrent);
	var content = screen - header - footer - contentCurrent;
	$('#p1Content').html($('#p1Content').html() + ' - content: ' + content);
	$('#p1Content').html($('#p1Content').html() + ' - Total: ' + (header + footer + contentCurrent + content));
	
	$("#p1Content").height(content);
}
