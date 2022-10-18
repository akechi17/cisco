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
	var slide_1_images = [{name:"8_1_2_4A.png",
						x:322.75,
						y:162.95,
						width:36.55,
						height:21.65,
						type:""},
						{name:"8_1_2_4B.png",
						x:322.75,
						y:280,
						width:36.55,
						height:21.65,
						type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#F26200">00</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:52.55, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">255.</td><td width="58">255.</td><td width="47">255.</td><td width="56"><span style="color:#F26200;margin-left:-14px">00</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:80.05, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#F26200">00</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:163.6, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#F26200">01</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:201.4, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#F26200">10</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:235.8, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#F26200">11</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:270.75, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">255.</td><td width="58">255.</td><td width="47">255.</td><td width="56"><span style="color:#652C8A;margin-left:-14px">11</span></td><td width="59">00</td><td width="61">0000</td></tr></table>',
							x:76.05,
							y:332.75, 
							width:250,
							height:17,
							size:11,
							textAlign:"right"},
						{compId:"statictextval",
							bodyText:'192.168.1.<span style="color:#5FBC21">0</span>/26',
							x:312+19,
							y:187.35, 
							width:120,
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"statictext2",
							bodyText:'192.168.1.<span style="color:#5FBC21">64</span>/26',
							x:309+15,
							y:211.8, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"statictext2",
							bodyText:'192.168.1.<span style="color:#5FBC21">128</span>/26',
							x:309+19,
							y:236.25, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"statictext2",
							bodyText:'192.168.1.<span style="color:#5FBC21">192</span>/26',
							x:309+19,
							y:260.7, 
							width:120,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_s1_txt01",
							x:1,
							y:61.15, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt02",
							x:1,
							y:88.75, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt03",
							x:67.05,
							y:114.7, 
							width:230.7,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
						{compId:"ID_s1_txt04",
							x:67.05+21,
							y:309.45, 
							width:230.7,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
						{compId:"ID_s1_txt05",
							x:1,
							y:174.05, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt06",
							x:1,
							y:210.4, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt07",
							x:1,
							y:245.7, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt08",
							x:1,
							y:279.7, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt09",
							x:1,
							y:342.7, 
							width:71.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
						{compId:"ID_s1_txt10",
							x:346.15,
							y:340.95, 
							width:112.4,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
						{compId:"ID_s1_txt11",
							x:170,
							y:11, 
							width:112.4,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"}];
							
	var graphic_slide = [{x:66.55,
							y:51.3, 
							width:179,
							height:57,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:51.3, 
							width:90,
							height:57,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:66.55,
							y:164.45, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:164.45, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
							
						{x:66.55,
							y:201.25, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:201.25, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:66.55,
							y:236.65, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:236.65, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:66.55,
							y:271.6, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:271.6, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:66.55,
							y:333.6, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:229.05,
							y:333.6, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:225.45,
							y:36.1,
							length:40,
							thickness:3,
							color:"#F68026",
							rotation:180,
							type:"arrow"},
						{x:219.5,
							y:158.05,
							length:25,
							thickness:3,
							color:"#F68026",
							rotation:-90,
							type:"arrow"}];	
													
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
							x:69.6,
							y:59.8, 
							width:159.7,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left+right"},
						{compId:"ID_s2_txt02",
							x:230.6,
							y:173.5, 
							width:147.5,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
						{compId:"ID_s2_txt03",
							x:210.6,
							y:210.8, 
							width:168.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"statictext2",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56">00</td><td width="59"><span style="color:#F26200">00</span></td><td width="51"><span style="color:#F26200">0000</span></td></tr></table>',
							x:69.6,
							y:105.5, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"}];
							
	var graphic_slide = [{x:60.6,
							y:105.5, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:227.1,
							y:105.5, 
							width:80,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
						{x:245.3,
							y:137.75,
							length:36,
							thickness:3,
							color:"#F68026",
							rotation:90,
							type:"arrow"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							graphics:graphic_slide};
							
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"statictext2",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56">00</td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0000</span></td></tr></table>',
							x:73.4,
							y:77.65, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext2",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56">00</td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0001</span></td></tr></table>',
							x:73.4,
							y:139.65, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext2",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56">00</td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1110</span></td></tr></table>',
							x:73.4,
							y:198.65, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext2",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56">00</td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1111</span></td></tr></table>',
							x:73.4,
							y:259.65, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext3",
							bodyText:'= 192.168.1.0',
							x:289.35+32,
							y:84.1, 
							width:127.15,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext3",
							bodyText:'= 192.168.1.1',
							x:289.35+32,
							y:146.05, 
							width:127.15,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext3",
							bodyText:'= 192.168.1.62',
							x:289.35+32,
							y:204.8, 
							width:127.15,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext3",
							bodyText:'= 192.168.1.63',
							x:289.35+32,
							y:270.15, 
							width:127.15,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:65,
							y:59, 
							width:233.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s3_txt02",
							x:65,
							y:120.65, 
							width:233.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s3_txt03",
							x:65,
							y:182.3, 
							width:233.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							{compId:"ID_s3_txt04",
							x:65,
							y:243.95, 
							width:233.65,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							];
	var graphic_3_slide = [{x:52.4,
							y:78.5, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:229.05,
							y:78.5, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
							
							{x:52.4,
							y:140.45, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:229.05,
							y:140.45, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
							
							{x:52.4,
							y:199.2, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:229.05,
							y:199.2, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"},
							
							{x:52.4,
							y:260.55, 
							width:179,
							height:28,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:229.05,
							y:260.55, 
							width:90,
							height:28,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"}];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							graphics:graphic_3_slide};
		
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"8_1_2_4C.png",
						x:73,
						y:159,
						width:365,
						height:2,
						type:""},
						{name:"8_1_2_4C.png",
						x:73,
						y:271,
						width:365,
						height:2,
						type:""},];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:30,
							y:2, 
							width:412,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00<span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0000</span></td></tr></table>',
							x:82.4,
							y:50.15, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0001</span></td></tr></table>',
							x:82.4,
							y:75.95, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1110</span></td></tr></table>',
							x:82.4,
							y:101.75, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1111</span></td></tr></table>',
							x:82.4,
							y:127.55, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0000</span></td></tr></table>',
							x:82.4,
							y:163.35, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0001</span></td></tr></table>',
							x:82.4,
							y:189.15, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1110</span></td></tr></table>',
							x:82.4,
							y:214.95, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1111</span></td></tr></table>',
							x:82.4,
							y:240.75, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0000</span></td></tr></table>',
							x:82.4,
							y:276.55, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">00</span></td><td width="61"><span style="color:#F26200">0001</span></td></tr></table>',
							x:82.4,
							y:302.35, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1110</span></td></tr></table>',
							x:82.4,
							y:328.15, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},	
							{compId:"statictext1",
							bodyText:'<table><tr><td width="53" height="21">192.</td><td width="58">168.</td><td width="47">1.</td><td width="56"><span style="color:#652C8A">00</span></td><td width="59"><span style="color:#F26200">11</span></td><td width="61"><span style="color:#F26200">1111</span></td></tr></table>',
							x:82.4,
							y:353.95, 
							width:250,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"statictext4",
							bodyText:'192.168.1.0',
							x:343.45,
							y:58.15, 
							width:88.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"statictext4",
							bodyText:'192.168.1.1',
							x:343.45,
							y:75.95+8, 
							width:88.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.62',
							x:341.45,
							y:101.75+8, 
							width:97.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.63',
							x:341.45,
							y:127.55+8, 
							width:97.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.64',
							x:341.45,
							y:163.35+8, 
							width:96.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"statictext4",
							bodyText:'192.168.1.65',
							x:341.45,
							y:189.15+8, 
							width:96.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.126',
							x:341.45,
							y:214.95+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.127',
							x:341.45,
							y:240.75+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.128',
							x:341.45,
							y:276.55+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},	
							{compId:"statictext4",
							bodyText:'192.168.1.129',
							x:341.45,
							y:300.35+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"statictext4",
							bodyText:'192.168.1.190',
							x:341.45,
							y:326.15+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"statictext4",
							bodyText:'192.168.1.191',
							x:341.45,
							y:350.95+8, 
							width:104.55,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s4_txt01",
							x:36,
							y:56.05, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},
							{compId:"ID_s4_txt02",
							x:36,
							y:82.45, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt03",
							x:36,
							y:107.85, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt04",
							x:36,
							y:133.25, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},
							{compId:"ID_s4_txt05",
							x:36,
							y:170.95, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt06",
							x:36,
							y:194.7, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt07",
							x:36,
							y:220.45, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt08",
							x:36,
							y:246.2, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt09",
							x:36,
							y:281.35, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt10",
							x:36,
							y:307.1, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt11",
							x:36,
							y:332.85, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt12",
							x:36,
							y:360.6, 
							width:52.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt13",
							x:8,
							y:93.25, 
							width:30.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt14",
							x:8,
							y:206.75, 
							width:30.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							{compId:"ID_s4_txt15",
							x:8,
							y:321.25, 
							width:30.5,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up+down"},	
							
												
			];
	var graphic_4_slide = [{x:74.4,
							y:41.45, 
							width:170,
							height:342.6,
							color:"#DAE17A",
							stroke:"#DAE17A",
							thickness:0,
							corner:0,
							type:"rectangle"},
							{x:244.05,
							y:41.45, 
							width:80,
							height:342.6,
							color:"#98D3D1",
							stroke:"#98D3D1",
							thickness:0,
							corner:0,
							type:"rectangle"}];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts,
							graphics:graphic_4_slide};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"8_1_2_4D.jpg",
						x:36.35,
						y:61,
						width:372.85,
						height:111.4,
						type:""},
						{name:"outputBox.png",
						x:36.35,
						y:219.45,
						width:395.25,
						height:140.3,
						type:""},];								
	var slide_5_texts = [{compId:"pc1",
							bodyText:'PC1',
							x:53.65,
							y:67.2,
							width:27,
							height:17,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"pc2",
							bodyText:'PC2',
							x:53.65,
							y:139.5,
							width:27,
							height:17,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'192.168.1.2/26',
							x:22.85,
							y:44.8,
							width:82.15,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'192.168.1.66/26',
							x:22.85,
							y:172.8,
							width:87.15,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'<b>192.168.1.0/26</b>',
							x:130.8,
							y:57.8,
							width:82.15,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'<b>192.168.1.64/26</b>',
							x:130.8,
							y:170.8,
							width:82.15,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'G0/0<br/>.1',
							x:214.55,
							y:83.95,
							width:30.8,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"staticTxt",
							bodyText:'.65<br/>G0/1',
							x:213.55,
							y:134.5,
							width:30.8,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"R1",
							bodyText:'R1',
							x:236.45+9+1,
							y:121.50,
							width:31.75,
							height:17,
                            size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"R2",
							bodyText:'R2',
							x:377.35+10,
							y:121.50,
							width:31.75,
							height:17,
                            size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.129<br/>S0/0/0',
							x:276.25,
							y:121.85,
							width:38.2,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.130<br/>S0/0/0',
							x:347.25,
							y:114.85,
							width:38.2,
							height:7.3,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'<b>192.168.1.128/26</b>',
							x:271.8,
							y:94.8,
							width:95.15,
							height:13.5,
                            size:11,
							textAlign:"center"},
							{compId:"staticTable",
							bodyText:'<table><tr><td>R1(config)#<b>interface gigabitethernet 0/0</b></td></tr><tr><td>R1(config-if)#<b>ip address <span style="color:#FE6200;">192.168.1.1 255.255.255.192</span></b></td></tr><tr><td>R1(config-if)#<b>exit</b></td></tr><tr><td>R1(config)#<b>interface gigabitethernet 0/1</b></td></tr><tr><td>R1(config-if)#<b>ip address <span style="color:#FE6200;">192.168.1.65 255.255.255.192</span></b></td></tr><tr><td>R1(config-if)#<b>exit</b></td></tr><tr><td>R1(config)#<b>interface serial 0/0/0</b></td></tr><tr><td>R1(config-if)#<b>ip address <span style="color:#FE6200;">192.168.1.129 255.255.255.192</span></b></td></tr></table>',
							x:58,
							y:232.4,
							width:344,
							height:111,
                            size:10,
							textAlign:"left"},
							];
							
	var graphic_slide = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts,
							graphics:graphic_slide};						
	
														
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
