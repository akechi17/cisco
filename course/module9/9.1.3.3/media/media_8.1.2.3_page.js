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
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:119.6,
							y:121.8, 
							width:159.7,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s1_txt02",
							x:244.6,
							y:233.5, 
							width:147.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_s1_txt03",
							x:245.6,
							y:270.8, 
							width:144.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_s1_txt",
							bodyText:"<b>192 .</b>",
							x:122.6-6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt",
							bodyText:"<b>168 .</b>",
							x:160.6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt",
							bodyText:"<b>1 .</b>",
							x:205.6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt",
							bodyText:"<b><span style='color:#F68026'>0</span></b>",
							x:238.6,
							y:173.65, 
							width:34,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt",
							bodyText:"<b>000</b>",
							x:278.1,
							y:173.65, 
							width:34,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt",
							bodyText:"<b>0000</b>",
							x:316.55,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"}];
							
	var graphic_slide = [{x:108.6,
							y:165.5, 
							width:179,
							height:32,
							color:"#E6EBA8",
							stroke:"#E6EBA8",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:265.1,
							y:165.5, 
							width:90,
							height:32,
							color:"#cce9e7",
							stroke:"#cce9e7",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:246.3,
							y:197.75,
							length:36,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"},];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_slide};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:119.6,
							y:121.8, 
							width:159.7,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
							{compId:"ID_s2_txt02",
							x:244.6,
							y:233.5, 
							width:147.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_s2_txt03",
							x:245.6,
							y:270.8, 
							width:144.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_s2_txt",
							bodyText:"<b>192 .</b>",
							x:122.6-6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt",
							bodyText:"<b>168 .</b>",
							x:160.6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt",
							bodyText:"<b>1 .</b>",
							x:205.6,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt",
							bodyText:"0",
							x:238.6,
							y:173.65, 
							width:34,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt",
							bodyText:"<b><span style='color:#F68026'>000</span></b>",
							x:278.1,
							y:173.65, 
							width:34,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s2_txt",
							bodyText:"<b><span style='color:#F68026'>0000</span></b>",
							x:316.55,
							y:173.65, 
							width:48,
							height:17,
							size:11,
							textAlign:"center"}];
							
	var graphic_slide = [{x:108.6,
							y:165.5, 
							width:179,
							height:32,
							color:"#E6EBA8",
							stroke:"#E6EBA8",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:265.1,
							y:165.5, 
							width:90,
							height:32,
							color:"#cce9e7",
							stroke:"#cce9e7",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:246.3,
							y:197.75,
							length:36,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"},];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_slide};
							
	
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
