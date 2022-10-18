//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
	
	var commonTexts = [];
		
	var slide_images = [{name:"4_2_1_7.png",
							x:25.65,
							y:68.6,
							width:359.25,
							height:274.45,
							type:""}];
	
							
	var slide_texts = [
							{compId:"ID_title",
							x:8,
							y:0.95, 
							width:460.95,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_caption01",
							x:22.95,
							y:176.65, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:9,
							y:183.65, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:84.35,
							y:221.9, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:33.8,
							y:261.55, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:103.95+28,
							y:288.8-43, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:266.4,
							y:295.05, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:266.4,
							y:321.05-32, 
							width:127,
							height:17,
							size:11,
		                    textAlign:"left"},
							{compId:"ID_txt07",
							x:257.4,
							y:202.45+15, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt08",
							x:280.4,
							y:223.7+6, 
							width:56,
							height:17,
							color:"#652C8A",
							size:11,							
							textAlign:"left"},
							{compId:"ID_txt09",
							x:395.95,
							y:145.7, 
							width:80,
							height:17,
						    size:11,
							textAlign:"left"},
							{compId:"ID_txt10",
							x:195.95+29,
							y:100.5+10, 
							width:104,
							height:17,
							size:11,
							color:"#652C8A",
							textAlign:"left"},
							{compId:"ID_txt11",
							x:135.95+79,
							y:78.45+17, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt12",
							x:84.95,
							y:112.3, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt13",
							x:62.4,
							y:78.45, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt14",
							x:57.05,
							y:40, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt15",
							x:18.65,
							y:355.45, 
							width:468.95,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt16",
							x:19.35,
							y:373.45+14, 
							width:186,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt17",
							x:266.4,
							y:319.05, 
							width:127,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_bubble1",
							x:320.25,
							y:44.45, 
							width:144.05,
							height:80,
							size:11,
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);