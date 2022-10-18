
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
	var slide_1_images = [{name:"1_3_1_6_A.jpg",
							x:0,
							y:60, 
							width:439.35,
							height:296.8,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_internet1",
							x:11.35+19,
							y:92.3-18, 
							width:57.95,
							height:17,
							size:10,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_ES",
							x:134.6+11,
							y:78.25-14, 
							width:110.7,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_AO",
							x:166.35+11,
							y:145.45-14, 
							width:70.8,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#ffffff",
							textAlign:"center",
							expand:"up"},
							{compId:"ID_RTR",
							x:25,
							y:178.2-19, 
							width:57.95,
							height:17,
							size:10,
							textAlign:"center",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"up+down"},
							{compId:"ID_MS",
							x:25-7,
							y:228.45-16, 
							width:57.95,
							height:17,
							size:10,
							textAlign:"right",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"left"},
							{compId:"ID_WS",
							x:36+8,
							y:245.75-18, 
							width:57.95,
							height:17,
							size:10,
							textAlign:"right",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"left"},
							{compId:"ID_FS",
							x:78.7,
							y:261.7-18, 
							width:66.45,
							height:17,
							size:10,
							textAlign:"left",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"down"},
							{compId:"ID_SWT",
							x:128.05+12,
							y:233.9-14, 
							width:62.55,
							height:17,
							size:10,
							textAlign:"left",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"right"},
							{compId:"ID_AH",
							x:170.65+7,
							y:216.25-17, 
							width:62.55,
							height:17,
							size:10,
							textAlign:"left",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"right"},
							{compId:"ID_CH3",
							x:134.2-10,
							y:279.9-17, 
							width:74.55,
							height:17,
							size:10,
							textAlign:"left",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"right"},
							{compId:"ID_CH",
							x:199.8+7,
							y:248-17, 
							width:74.55,
							height:17,
							size:10,
							textAlign:"right",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"left"},
							{compId:"ID_CH2",
							x:261.25+7,
							y:216.85-18, 
							width:74.55,
							height:17,
							size:10,
							textAlign:"right",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"left"},
							{compId:"ID_C1_1",
							x:223.6+7,
							y:329.7-15, 
							width:103.6,
							height:17,
							size:10,
							textAlign:"center",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"down"},
							{compId:"ID_C2_2",
							x:314.5-10,
							y:298.9-17, 
							width:103.6,
							height:17,
							size:10,
							textAlign:"center",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"down"},
							{compId:"ID_C3_3",
							x:376.1+9,
							y:267.55-15, 
							width:61.6,
							height:17,
							size:10,
							textAlign:"left",
							shadow:"YES",
							shadowColor:"#ffffff",
							expand:"down"},];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1_3_1_6_B.jpg",
							x:0,
							y:100, 
							width:420.1,
							height:275.6,
							type:""}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_internet2",
							x:5.75+9,
							y:305.05+5, 
							width:62.15,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_Enet1",
							x:12.45-3,
							y:196.45+3, 
							width:69.25,
							height:17,
							size:10,
							textAlign:"right",
							expand:"down"},
							{compId:"ID_RF",
							x:87.75+12,
							y:277+12, 
							width:82.25,
							height:17,
							size:10,
							shadow:"YES",
							shadowColor:"#ffffff",
							textAlign:"left",
							expand:"right"},
							{compId:"ID_Enet2",
							x:191.7+10,
							y:301.2+12, 
							width:101.35,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_DSNumb",
							x:51.15,
							y:83.2-24-3, 
							width:55.35,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_DS",
							x:79.65+22,
							y:144.35, 
							width:72.25,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_AG",
							x:154.85+10,
							y:179.45+2	, 
							width:72.25,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_C1",
							x:229.1+1,
							y:213.45+3, 
							width:72.25,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_C2",
							x:297.85+8,
							y:252.1, 
							width:72.25,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_C3",
							x:363.4+5,
							y:286.45+8, 
							width:72.25,
							height:17,
							size:10,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_C3Numb",
							x:338.65+15,
							y:225.2+11-2, 
							width:43.9,
							height:17,
							size:10,
							textAlign:"right",
							expand:"left"},
							{compId:"staticTxt",
			 				 bodyText:"192.168.2.1<br/>192.168.2.2<br/>192.168.2.3",
							 x:112.8,
							 y:60.5-5,
							 width:57,
							 height:38.2,
							 size:10,
							 textAlign:"left"},
							 {compId:"staticTxt",
			 				 bodyText:"192.168.2.4<br/>192.168.2.5<br/>192.168.2.6",
							 x:146.7+18,
							 y:101.2+6-6,
							 width:57,
							 height:38.2,
							 size:10,
							 textAlign:"left"},
							 {compId:"staticTxt",
			 				 bodyText:"192.168.1.1<br/>192.168.1.2<br/>192.168.1.3",
							 x:217.9+28,
							 y:130.1+11-5-2,
							 width:57,
							 height:38.2,
							 size:10,
							 textAlign:"left"},
							  {compId:"staticTxt",
			 				 bodyText:"192.168.1.4<br/>192.168.1.5<br/>192.168.1.6",
							 x:289.8+30,
							 y:167.65+10-5,
							 width:57,
							 height:38.2,
							 size:10,
							 textAlign:"left"},
							 {compId:"staticTxt",
			 				 bodyText:"192.168.1.7<br/>192.168.1.8<br/>192.168.1.9",
							 x:380.55+7,
							 y:198.9+13-5,
							 width:57,
							 height:38.2,
							 size:10,
							 textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
											
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
