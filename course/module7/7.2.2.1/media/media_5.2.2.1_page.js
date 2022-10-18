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

    var slide_images = [{name:"5_2_2_1.png",
							x:10,
							y:50.15, 
							width:460.45, 
							height:340.10,
							type:""}];
							
    var slide_texts = [{compId:"ID_title",
						x:5,
					    y:2,
						width:460,
						height:17,
						size:14,
						textAlign:"center"},
						{compId:"ID_txt01",
						x:19,
					    y:33.8,
						width:127.1,
						height:50.55,
						size:11,
						textAlign:"left"},
						{compId:"ID_txt03",
						x:16+12,
					    y:208,
						width:76.6,
						height:67,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt04",
						x:110.5,
						y:198,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt05",
						x:110.5,
						y:228,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt06",
						x:110.5,
						y:258,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt07",
						x:110.5,
						y:287,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt08",
						x:110.5,
						y:316,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt09",
						x:110.5,
						y:345,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt10",
						x:176.6+18,
					    y:252.6-10,
						width:75,
						height:133.75,
						size:11,
						textAlign:"left"},
						{compId:"ID_txt11",
						x:277.5,
						y:198+26,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt12",
						x:277.5,
						y:228+24,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt13",
						x:277.5,
						y:258+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt14",
						x:277.5,
						y:287+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt15",
						x:277.5,
						y:316+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt16",
						x:259.8+13,
					    y:186.35-5,
						width:199.6,
						height:12.1,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt17",
						x:388.15-34,
					    y:265.95+10},
						{compId:"ID_txt18",
						x:277.5,
						y:345+18,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt19",
						x:375+14,
						y:198+26,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt20",
						x:375+14,
						y:228+24,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt24",
						x:375+14,
						y:258+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt23",
						x:375+14,
						y:287+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt22",
						x:375+14,
						y:316+20,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt21",
						x:375+14,
						y:345+18,
						width:78,
						height:17,
						size:11,
						textAlign:"center"},
						];
	var slide_graphics = [ {x:102,
							y:195, 
							width:76,
							height:21 ,
							color:"#A2AA23",
							corner:0},
							{x:102,
							y:225, 
							width:76,
							height:21,
							color:"#E8A0AC",
							corner:0},
							{x:102,
							y:255, 
							width:76,
							height:21,
							color:"#F3D0D6",
							corner:0},
							{x:102,
							y:283, 
							width:76,
							height:21,
							color:"#A7A5A6",
							corner:0},
							{x:102,
							y:312, 
							width:76,
							height:21,
							color:"#A3913B",
							corner:0},
							{x:102,
							y:342, 
							width:76,
							height:21,
							color:"#FACCA8",
							corner:0},
							
							{x:265,
							y:221,
							width:82,
							height:21,
							color:"#A2AA23",
							corner:0},
							/* txt12*/		
							{x:265,
							y:248, 
							width:82,
							height:21,
							color:"#E8A0AC",
							corner:0},
							/* txt13*/		
							{x:265,
							y:275,  
							width:82,
							height:21,
							color:"#FACCA8",
							corner:0},
							/* txt14*/		
							{x:265,
							y:303, 
							width:82,
							height:21,
							color:"#A3913B",
							corner:0},
							/* txt15*/		
							{x:265,
							y:331,  
							width:83,
							height:21,
							color:"#BDBBBC",
							corner:0},
							{x:265,
							y:358,  
							width:82,
							height:21,
							color:"#F3D0D6",
							corner:0},
							
							{x:375,
							y:221,
							width:89,
							height:21 ,
							color:"#A2AA23",
							corner:0},
							{x:375,
							y:248, 
							width:89,
							height:21,
							color:"#E8A0AC",
							corner:0},
							{x:375,
							y:275, 
							width:89,
							height:21,
							color:"#F3D0D6",
							corner:0},
							{x:375,
							y:303, 
							width:89,
							height:21,
							color:"#A7A5A6",
							corner:0},
							{x:375,
							y:331, 
							width:89,
							height:21,
							color:"#A3913B",
							corner:0},
							{x:375,
							y:358, 
							width:89,
							height:21,
							color:"#FACCA8",
							corner:0},
							];	
	
    var slide_object = {graphics:slide_graphics,
		images:slide_images,
		texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}