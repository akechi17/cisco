loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
							
	var commonImages = [{name:"9_2_2_3.jpg",
							x:-5,
							y:130.45, 
							width:435,
							height:121,
							type:""}];
							
	var graphics_slide = [{x:45.35,
							y:192.85,
							width:45,
							height:19,
							color:"#CB6D25",
							corner:0,
							type:"rectangle"},
							{x:101.75,
							y:169.85,
							width:45,
							height:19,
							color:"#CB6D25",
							corner:0,
							type:"rectangle"},
							{x:291.75,
							y:169.85,
							width:45,
							height:19,
							color:"#CB6D25",
							corner:0,
							type:"rectangle"},
							{x:344.35,
							y:192.85,
							width:45,
							height:19,
							color:"#CB6D25",
							corner:0,
							type:"rectangle"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:25,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt08",
							x:0.95,
							y:259.2, 
							width:460,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt02",
							x:12.35,
							y:163.85-15, 
							width:45,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt03",
							x:390.35,
							y:163.85-15, 
							width:59,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt04",
							x:57.35,
							y:194.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt05",
							x:113.75,
							y:172.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt06",
							x:304.75,
							y:172.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt07",
							x:357.35,
							y:194.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"down"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"arrow-dashed.png",
							x:47.85,
							y:229.4, 
							width:350,
							height:10,
							type:""},
							{name:"slide2.png",
							x:135.5,
							y:115, 
							width:173,
							height:112.85,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:114.5,
							y:92, 
							width:208,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_s2_txt09",
							x:121,
							y:281, 
							width:208,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt08",
							x:0.95,
							y:259.2, 
							width:460,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt02",
							x:12.35,
							y:163.85-15, 
							width:45,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt03",
							x:391.35,
							y:163.85-15, 
							width:59,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt04",
							x:57.35,
							y:194.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s2_txt05",
							x:113.75,
							y:172.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt06",
							x:304.75,
							y:172.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt07",
							x:357.35,
							y:194.85, 
							width:40,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"down"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
	
}