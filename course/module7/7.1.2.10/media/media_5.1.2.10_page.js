//loadScript("../../../common/scripts/templates/slide/PopOverSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "POP_OVER_SLIDE";

    var slide_images = [{name:"5_1_2_10.jpg",
						x:16.7,
						y:42,
						width:441.35,
						height:181.75,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:161,
							y:35+14, 
							width:158,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt02",
							x:28,
							y:67.5+14, 
							width:133.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt03",
							x:170,
							y:67.5+14, 
							width:133.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt04",
							x:308,
							y:67.5+14, 
							width:133.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt06",
							x:28,
							y:345.2, 
							width:463.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt06a",
							x:28,
							y:379.25+14, 
							width:463.35,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:67,
							y:98+14, 
							width:132.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt08",
							x:285,
							y:98+14, 
							width:132.3,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt08a",
							x:218,
							y:98+14, 
							width:39.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt09",
							x:27,
							y:127.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt09a",
							x:27,
							y:157.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt09b",
							x:27,
							y:186.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt11",
							x:248,
							y:126.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt11a",
							x:248,
							y:156.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt11b",
							x:248,
							y:185.75+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt10",
							x:247.2-117-3,
							y:158.75-6+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt12",
							x:247.2-117-3,
							y:128.75-6+14,
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt12a",
							x:247.2-117-3,
							y:187.75-6+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt10a",
							x:352.2-3-3,
							y:128.75-6+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt12b",
							x:352.2-3-3,
							y:158.75-6+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt12c",
							x:352.2-3-3,
							y:187.75-6+14, 
							width:95.6,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							];
							
	var hotSpots = [{hotImage:"",
							div:["ID_txt09","ID_txt09a","ID_txt09b"],
							x:16.7,
							y:122+14,
							width:198,
							height:87,
							popupImage:{name:"arrow.png",x:65,y:225,width:10,height:51},
							popupText:{compId:"ID_txt13",x:28,y:246, width:192.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:["ID_txt11","ID_txt11a","ID_txt11b"],
							x:235,
							y:122+14,
							width:200,
							height:87,
							popupImage:{name:"arrow.png",x:282,y:225,width:10,height:51},
							popupText:{compId:"ID_txt14",x:221,y:246, width:230,height:65.05,size:11,textAlign:"left"}}];
							
	

    var slide_object = {images:slide_images,
		hotSpots:hotSpots,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}