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
	var slide_1_images = [{name:"7_1_1_61.jpg",
							x:0,
							y:42.9, 
							width:440,
							height:187,
							type:""}];								
	var slide_1_texts = [{compId:"ID_txt1",
							bodyText:'<b>11000000</b>',
							x:134+36,
							y:67.6, 
							width:52.4,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"left"},
							{compId:"ID_txt2",
							bodyText:'<b><span style="color:#F68026">192</span>.168.10.10</b>',
							x:195.2+31,
							y:27.6, 
							width:74.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:116.85+40,
							y:11.35, 
							width:224.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt",
							bodyText:'<table><tr><td width="39" align="center">128</td><td width="39" align="center">64</td><td width="39" align="center">32</td><td width="39" align="center">16</td><td width="39" align="center">8</td><td width="39" align="center">4</td><td width="39" align="center">2</td><td width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td><td  width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td class="bitvalue" width="39">1</td><td  class="bitvalue">1</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td></tr></table>',
							x:215.8,
							y:148, 
							width:235.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt04",
							x:28.7-9,
							y:118.45, 
							width:203.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:28.7-9,
							y:136.45, 
							width:203.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt08",
							x:28+6-16,
							y:157.9, 
							width:203.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt09",
							x:24.7+8-14,
							y:174.9, 
							width:203.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt11",
							x:36+9-26,
							y:195.35, 
							width:243.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt12",
							x:45+7-36,
							y:211.35, 
							width:243.5,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"7_1_1_6_A.jpg",
							x:-5,
							y:42.9, 
							width:440.15,
							height:337,
							type:""}];								
	var slide_2_texts = [{compId:"ID_txt",
							bodyText:'<table><tr><td width="50" align="center" class="textalign">128</td><td width="50" align="center" class="textalign">64</td><td width="50" align="center" class="textalign">32</td><td width="50" align="center" class="textalign">16</td><td width="50" align="center" class="textalign">8</td><td width="50" align="center" class="textalign">4</td><td width="50" align="center" class="textalign">2</td><td width="15" align="center" class="textalign">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td><td  width="39" align="center">0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td><td  width="39" align="center">0</td><td  width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td><td  width="39" align="center">0</td><td  width="39" align="center">1</td><td  width="39" align="center">0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td  width="39" align="center">1</td><td  width="39" align="center">0</td><td  width="39" align="center">1</td><td  width="39" align="center">0</td><td  width="39" align="center">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td class="bitvalue" width="39">1</td><td  class="bitvalue">0</td><td  class="bitvalue">1</td><td  class="bitvalue">0</td><td  class="bitvalue">1</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td></tr></table></table>',
							x:210.8,
							y:205, 
							width:235.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt1",
							bodyText:'<b>11000000</b>',
							x:134+14,
							y:67.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt2",
							bodyText:'<b>192.<span style="color:#F68026">168</span>.10.10</b>',
							x:195.2+31,
							y:27.6, 
							width:74.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt3",
							bodyText:'<b>10101000</b>',
							x:188.5+24,
							y:67.6, 
							width:52.4,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"left"},
							{compId:"ID_txt13",
							x:116.85+40,
							y:11.35, 
							width:224.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt14",
							x:130.65,
							y:63.85, 
							width:65.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt15",
							x:187.9,
							y:63.85, 
							width:65.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt16",
							x:25.7-8,
							y:120.45, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt17",
							x:7.7,
							y:137.5, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt18",
							x:15.7-7,
							y:158.3, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt19",
							x:39.7-24,
							y:175.85, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt20",
							x:8.7,
							y:197.95, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt21",
							x:9.7,
							y:214.5, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt22",
							x:9.7,
							y:233.95, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt23",
							x:25-19,
							y:251.5, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt24",
							x:9.7,
							y:270.65, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt25",
							x:24-18,
							y:286.2, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt26",
							x:10.7,
							y:306.1, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt27",
							x:5.7,
							y:323.65, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"down"},
							];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"7_1_1_6_B.jpg",
							x:0,
							y:42.9, 
							width:440.15,
							height:350,
							type:""}];								
	var slide_3_texts = [{compId:"ID_txt",
							bodyText:'<table><tr><td width="50" align="center" class="textalign">128</td><td width="50" align="center" class="textalign">64</td><td width="50" align="center" class="textalign">32</td><td width="50" align="center" class="textalign">16</td><td width="50" align="center" class="textalign">8</td><td width="50" align="center" class="textalign">4</td><td width="50" align="center" class="textalign">2</td><td width="66" align="center" class="textalign">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td class="bitvalue" width="39">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td class="bitvalue">1</td><td  class="bitvalue">0</td><td  class="bitvalue">1</td><td  class="bitvalue">0</td></tr></table>',
							x:205,
							y:238-17, 
							width:254.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt1",
							bodyText:'<b>11000000</b>',
							x:134+27,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt2",
							bodyText:'<b>192.168.<span style="color:#F68026">10</span>.10</b>',
							x:193.2+31,
							y:27.6, 
							width:74.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt3",
							bodyText:'<b>10101000</b>',
							x:188.5+24,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt4",
							bodyText:'<b>00001010</b>',
							x:292,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"left"},
							{compId:"ID_txt36",
							x:116.85+29,
							y:11.35, 
							width:224.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt37",
							x:123.65,
							y:63.85, 
							width:65.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt38",
							x:179.9,
							y:63.85, 
							width:65.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt39",
							x:236.15,
							y:63.85, 
							width:65.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt40",
							x:208.1,
							y:89.25, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt41",
							x:220.1,
							y:124.8, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt42",
							x:220.1,
							y:163.85, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt43",
							x:220.1,
							y:202.5, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt44",
							x:220.1,
							y:239.15, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt45",
							x:220.1,
							y:274.9, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt46",
							x:220.1,
							y:307.95, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt47",
							x:220.1,
							y:339.3, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt48",
							x:220.1,
							y:375.9, 
							width:244.45,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt49",
							x:22,
							y:115.95, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt50",
							x:22,
							y:131.5, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt51",
							x:22,
							y:150.3, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt52",
							x:22,
							y:175.85-8, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt53",
							x:22,
							y:185.95, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt54",
							x:22,
							y:201.5, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt55",
							x:22,
							y:232.95-14, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt56",
							x:22,
							y:248.5-13, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt57",
							x:22,
							y:269.65-15, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt58",
							x:22,
							y:285.2-15, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt59",
							x:23,
							y:303.1-17, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt60",
							x:23,
							y:317.65-17	, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt61",
							x:23,
							y:334.1-19, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt62",
							x:20,
							y:349.65-18, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt63",
							x:23,
							y:365.1-21, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt64",
							x:22,
							y:379.65-22, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							
							];
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"7_1_1_6_C.jpg",
							x:0,
							y:42.9, 
							width:435.15,
							height:355.65,
							type:""}];								
	var slide_4_texts = [{compId:"ID_txt65",
							x:128.85+13,
							y:13, 
							width:224.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt",
							bodyText:'<table><tr><td width="50" align="center" class="textalign">128</td><td width="50" align="center" class="textalign">64</td><td width="50" align="center" class="textalign">32</td><td width="50" align="center" class="textalign">16</td><td width="50" align="center" class="textalign">8</td><td width="50" align="center" class="textalign">4</td><td width="50" align="center" class="textalign">2</td><td width="66" align="center" class="textalign">1</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr class="tdalign"><td width="39">0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td class="bitvalue" width="39">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td  class="bitvalue">0</td><td class="bitvalue">1</td><td  class="bitvalue">0</td><td  class="bitvalue">1</td><td  class="bitvalue">0</td></tr></table>',
							x:205,
							y:238-17, 
							width:254.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt1",
							bodyText:'<b>11000000</b>',
							x:134+27,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt2",
							bodyText:'<b>192.168.10.<span style="color:#F68026">10</span></b>',
							x:190.2+31,
							y:29.6, 
							width:74.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt3",
							bodyText:'<b>10101000</b>',
							x:188.5+24,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt4",
							bodyText:'<b>00001010</b>',
							x:292-27,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt5",
							bodyText:'<b>00001010</b>',
							x:292+30,
							y:65.6, 
							width:52.4,
							height:17,
							size:11,
							color:"#F68026",
							textAlign:"left"},
							{compId:"ID_txt79",
							x:22,
							y:115.95, 
							width:220.6,
							height:17,
							size:10,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt80",
							x:22,
							y:131.5, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt81",
							x:22,
							y:150.3, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt82",
							x:22,
							y:175.85-8, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt83",
							x:22,
							y:185.95, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt84",
							x:22,
							y:201.5, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt85",
							x:22,
							y:232.95-14, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt86",
							x:22,
							y:248.5-13, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt87",
							x:22,
							y:269.65-15, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt88",
							x:22,
							y:285.2-15, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt89",
							x:23,
							y:303.1-17, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt90",
							x:23,
							y:317.65-17	, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt91",
							x:23,
							y:334.1-19, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt92",
							x:20,
							y:349.65-18, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt93",
							x:23,
							y:365.1-21, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt94",
							x:22,
							y:379.65-22, 
							width:220.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							];	
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};					
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [/*{name:"7_1_1_6_D.jpg",
							x:125.6,
							y:38.4, 
							width:224.75,
							height:127,
							type:""}*/];								
	var slide_5_texts = [{compId:"ID_txt6",
							bodyText:'<b><span style="color:#652C8A">192</span>.<span style="color:#D1415A">168</span>.<span style="color:#3F863A">10</span>.<span style="color:#9F5824">10</span></b>',
							x:190.2+31-17,
							y:26.6, 
							width:74.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt6",
							bodyText:'<b><span style="color:#652C8A">192<br/>11000000</span></b>',
							x:74+16+26,
							y:85.75-7, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt6",
							bodyText:'<b><span style="color:#D1415A">168<br/>10101000</span></b>',
							x:151+30,
							y:85.75-7, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt6",
							bodyText:'<b><span style="color:#3F863A">10<br/>00001010</span></b>',
							x:231+28,
							y:85.75-7, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt6",
							bodyText:'<b><span style="color:#9F5824">10<br/>00001010</span></b>',
							x:294+32,
							y:85.75-7,
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt95",
							x:128.85,
							y:13, 
							width:224.1,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt96",
							x:205.45,
							y:182.05, 
							width:97,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt7",
							bodyText:'<b><span style="color:#652C8A">11000000</span></b>',
							x:128.55,
							y:165.5, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt7",
							bodyText:'<b><span style="color:#D1415A">10101000</span></b>',
							x:186.55,
							y:165.5, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt7",
							bodyText:'<b><span style="color:#3F863A">00001010</span></b>',
							x:245.85,
							y:165.5, 
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt7",
							bodyText:'<b><span style="color:#9F5824">00001010</span></b>',
							x:304.25,
							y:165.5,
							width:52.4,
							height:31,
							size:11,
							textAlign:"center"},
							
							];
							
	var graphic_5_slide = [{x:135.65,
							y:76,
							length:70,
							thickness:3,
							color:"#F68026",
							rotation:-35,
							type:"arrow"},
							{x:200.65,
							y:76,
							length:40,
							thickness:3,
							color:"#F68026",
							rotation:-58,
							type:"arrow"},
							{x:275.65,
							y:76,
							length:44,
							thickness:3,
							color:"#F68026",
							rotation:-130,
							type:"arrow"},
							{x:338.65,
							y:76,
							length:82,
							thickness:3,
							color:"#F68026",
							rotation:-150,
							type:"arrow"},
							{x:155.65,
							y:160,
							length:60,
							thickness:3,
							color:"#F68026",
							rotation:-120,
							type:"arrow"},
							{x:205.65,
							y:160,
							length:55,
							thickness:3,
							color:"#F68026",
							rotation:-100,
							type:"arrow"},
							{x:265.65,
							y:160,
							length:55,
							thickness:3,
							color:"#F68026",
							rotation:-70,
							type:"arrow"},
							{x:325.65,
							y:160,
							length:55,
							thickness:3,
							color:"#F68026",
							rotation:-70,
							type:"arrow"}];
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							graphics:graphic_5_slide,
							texts:slide_5_texts};
																			
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
				
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

