//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_2_4_3.jpg",
						x:10,
						y:58,
						width:460,
						height:295,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:-5,
							y:2, 
							width:460,
							height:17,
							size:12,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt05",
							x:11,
							y:137.35+15, 
							width:141.1,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt06",
							x:356.6,
							y:117.35+15, 
							width:98,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt07",
							x:103.95+18,
							y:250+15, 
							width:260.1,
							height:17,
							size:12,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt08",
							x:339.9+18,
							y:271.35+15, 
							width:116.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt09",
							x:10.95+18,
							y:349+25, 
							width:200.1,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt09",
							x:10.95+18,
							y:349+25, 
							width:200.1,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt10",
							x:127.45+23,
							y:47+20, 
							width:55.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt11",
							x:183.45+23,
							y:178+20, 
							width:55.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt12",
							x:239.45+23,
							y:47+20, 
							width:55.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt13",
							x:295.9+23,
							y:178+20, 
							width:55.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt14",
							x:340.95+23,
							y:47+20, 
							width:55.15,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"},
							{compId:"ID_txt15",
							x:31.45+26,
							y:92+20, 
							width:55.15,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt16",
							x:59.4+24,
							y:301+18, 
							width:47.15,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center",
							expand:"up+down"},
							{compId:"staticTxt1",
							bodyText:"<font color='#FFFFFF'><b>A</b></font>",	
							x:110+2,
							y:67, 
							width:205.65,
							height:150,
							size:11,							
							textAlign:"left"},
							{compId:"staticTxt2",
							bodyText:"<font color='#FFFFFF'><b>B</b></font>",	
							x:110+113,
							y:67,
							width:205.65,
							height:150,
							size:11,							
							textAlign:"left"},
							{compId:"staticTxt3",
							bodyText:"<font color='#FFFFFF'><b>C</b></font>",	
							x:110+214,
							y:67,
							width:25.65,
							height:150,
							size:11,							
							textAlign:"left"},
							{compId:"staticTxt",
							bodyText:"<font color='#FFFFFF'><b>D</b></font>",	
							x:136+31,
							y:178.9+18, 
							width:205.65,
							height:150,
							size:11,							
							textAlign:"left"},
							{compId:"staticTxt",
							bodyText:"<font color='#FFFFFF'><b>E</b></font>",	
							x:136+144,
							y:178.9+18, 
							width:205.65,
							height:150,
							size:11,							
							textAlign:"left"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
