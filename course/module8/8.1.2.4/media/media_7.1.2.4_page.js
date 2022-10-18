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
							
	var commonImages = [];
	
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"7_1_2_4.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_bubble01",
							x:344.95+18,
							y:260.7, 
							width:70,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt01",
							x:82.35,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s1_txt02",
							x:321.3-21,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>10.1.1.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b>G0/0<br/><span  style='color:#F68026;'>10.1.1.1</span></b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s1Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"s1Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:57.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:143.6+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:230.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s1Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:312.85+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];	
							
	var graphic_1_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"},
							{x:42.15,
							y:327.05, 
							width:259.85,
							height:63.55,
							color:"#E6EBA8",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:301.45,
							y:327.05, 
							width:79.7,
							height:63.55,
							color:"#98D3D1",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:370,
							y:310,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:225.75,
							y:305.1,
							length:23,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"},
							];
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							graphics:graphic_1_slide};
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_2_4.png",
							x:44.15,
							y:58.4, 
							width:305.75,
							height:223.4,
							type:""}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:20,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_bubble01",
							x:344.95+18,
							y:260.7, 
							width:70,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt01",
							x:82.35,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_s2_txt02",
							x:321.3-21,
							y:313.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"s2Txt",
							bodyText:"<b style='color:#F68026;' >10.1.1.254</b>",
							x:184.05,
							y:69.4, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.12</b>",
							x:258.15,
							y:124.95, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.11</b>",
							x:258.15,
							y:185.65+16, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>10.1.1.10</b>",
							x:186.05,
							y:254.75, 
							width:68.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b>G0/0<br/>10.1.1.1</b>",
							x:112.4,
							y:90.15+45, 
							width:64.3,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"s2Txt",
							bodyText:"<b>R2</b>",
							x:71.25,
							y:174.4, 
							width:21.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>10<br/>00001010</b>",
							x:57.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:143.6+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>1<br/>00000001</b>",
							x:230.1+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"s2Txt",
							bodyText:"<b style='letter-spacing:1px;'>254<br/>11111110</b>",
							x:312.85+9,
							y:344.6, 
							width:65,
							height:17,
							size:11,
							textAlign:"center"}];	
							
	var graphic_2_slide = [{centerX:230,
							centerY:170, 
							radius:135,
							bgcolor:'#E6EBA8',
							borderColor:"#E6EBA8",
							lineWidth:2,
							type:"circle"},
							{x:42.15,
							y:327.05, 
							width:259.85,
							height:63.55,
							color:"#E6EBA8",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:301.45,
							y:327.05, 
							width:79.7,
							height:63.55,
							color:"#98D3D1",
							stroke:"#F68026",
							thickness:3,
							corner:0,
							type:"rectangle"},
							{x:370,
							y:310,
							length:30,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"},
							{x:225.75,
							y:305.1,
							length:23,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"},
							];
							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_2_slide};						
	
	var slides = [slide_1_object,slide_2_object];						
											
	
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}