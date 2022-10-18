loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BUTTON";
	var buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var buttons = [{compId:"ID_btn01",
						x:173.8,
						y:274,
						width:115,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn02",
						x:106.05,
						y:311,
						width:100,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:216.3,
						y:311,
						width:147,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn04",
						x:373.55,
						y:311,
						width:100,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn05",
						x:106.05,
						y:353,
						width:100,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn06",
						x:216.3,
						y:353,
						width:147,
						height:21,
						size:11,
						textAlign:"center"},
						{compId:"ID_btn07",
						x:373.55,
						y:353,
						width:100,
						height:21,
						size:11,
						textAlign:"center"},];
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:430,
							height:20,
							size:16,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:-3.5+14,
							y:163, 
							width:54.7,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:58.85+11,
							y:177, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:295.85+5,
							y:240, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
		
						{compId:"ID_txt04",
							x:227.35+7,
							y:159, 
							width:82,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt05",
							x:2.85+14,
							y:231.5, 
							width:70,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt06",
							x:85.85+12,
							y:244.55, 
							width:67,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt07",
							x:319.85+8,
							y:176.55, 
							width:67,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt08",
							x:240.35+7,
							y:228.65, 
							width:67,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt09",
							x:17+32,
							y:311.5+6, 
							width:58.5,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt10",
							x:68,
							y:369.25+10-24, 
							width:42.5,
							height:17,
							size:11,
							textAlign:"center"},
		];
	var common_images = [{name:"11.1.1.3.png",
							x:1,
							y:35.85,
							width:475,
							height:230,
							type:""}];
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [{name:"11.1.1.3A.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_1_textboxs = [];							
	var slide_1_texts = [{compId:"ID_s1_txt01",
							x:78.05+15,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:263+70,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							];
	var slide_graphics = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"11.1.1.3B.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_2_textboxs = [];							
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:78.05+25,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s2_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},];
	var slide_graphics = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [{name:"11.1.1.3C.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_3_textboxs = [];							
	var slide_3_texts = [{compId:"ID_s3_txt01",
							x:78.05+25,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s3_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"}];
	var slide_graphics = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
							
	var slide_4_type = "DESCRIPTION";
	var slide_4_images = [{name:"11.1.1.3D.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_4_textboxs = [];							
	var slide_4_texts = [{compId:"ID_s4_txt01",
							x:78.05+25,
							y:42.85,
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s4_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},];
	var slide_graphics = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts,
							graphics:slide_graphics};
							
	var slide_5_type = "DESCRIPTION";
	var slide_5_images = [{name:"11.1.1.3E.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_5_textboxs = [];							
	var slide_5_texts = [{compId:"ID_s5_txt01",
							x:78.05+25,
							y:42.85,
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s5_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},];
	var slide_graphics = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							textboxs:slide_5_textboxs,
							texts:slide_5_texts,
							graphics:slide_graphics};
							
	var slide_6_type = "DESCRIPTION";
	var slide_6_images = [{name:"11.1.1.3F.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_6_textboxs = [];							
	var slide_6_texts = [{compId:"ID_s6_txt01",
							x:78.05+25,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s6_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},];
	var slide_graphics = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							textboxs:slide_6_textboxs,
							texts:slide_6_texts,
							graphics:slide_graphics};	
	var slide_7_type = "DESCRIPTION";
	var slide_7_images = [{name:"11.1.1.3G.png",
							x:5.55,
							y:51.55,
							width:458.8,
							height:210,
							type:""}];							
	var slide_7_textboxs = [];							
	var slide_7_texts = [{compId:"ID_s7_txt01",
							x:78.05+25,
							y:42.85,
							width:104,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s7_txt02",
							x:263+80,
							y:42.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"left"},];
	var slide_graphics = [];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,
							textboxs:slide_7_textboxs,
							texts:slide_7_texts,
							graphics:slide_graphics};	
							
		
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			buttonObject:buttonObject,
			slideObject:slides};
	
}


