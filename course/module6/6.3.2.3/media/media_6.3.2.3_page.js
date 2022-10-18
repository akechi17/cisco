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
    var commonImage = [];

var commonTexts = [{compId:"ID_s1_title",
							x:20,
							y:2, 
							width:430,
							size:14,
							textAlign:"center"}];
	
	var slide_1_type = "IMAGE";
	
	var slide_1_images = [
						{name:"6_3_2_3_A.png",
						x:5,
						y:40,
						width:427.65,
						height:223.50,					
						type:""},			
									
						{name:"6_3_2_3_D1.png",
						x:0,
						y:266,						
						width:453,
						height:138,
						type:""}];
						
	var slide_1_texts = [
						{compId:"ID_s1_txt01",
						x:10+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt02",
						x:175.50+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt03",
						x:288.75+9,
						y:42.75+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt04",
						x:10+9,
						y:72.95+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt05",
						x:175.50+9,
						y:72.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt06",
						x:288.75+9,
						y:72.25+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt07",
						x:10+9,
						y:108.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt08",
						x:175.50+6,
						y:119.50+2, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt09",
						x:288.75+4,
						y:119.50+2, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt10",
						x:10+9,
						y:139.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt11",
						x:10+9,
						y:177.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt12",
						x:10+9,
						y:207.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt13",
						x:10+9,
						y:235.25+10, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt14",
						x:175.50+6,
						y:207.50+3, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_txt15",
						x:288.75+4,
						y:207.50+2-15, 
						width:138.70,						
						height:55,	
						size:11,
						textAlign:"center"},
						{compId:"staticTxt1",
						bodyText:'System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)',
						x:12.05+13,
						y:272.60+9, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt2",
						bodyText:'Technical Support: http://www.cisco.com/techsupport',
						x:12.05+13,
						y:272.60+25, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt3",
						bodyText:'&#60output omitted>',
						x:12.05+13,
						y:272.60+52, 
						width:345.80,						
						height:81.75,	
						size:10,
						textAlign:"left"}/**/
	];	
	
	var slide_1_object = {templateType:slide_1_type,
	x:0,
	y:0,
	images:slide_1_images,				
	texts:slide_1_texts};
		
	/*SLIDE 2*/

 var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"6_3_2_3_B.png",
						x:5,
						y:40,
						width:427.65,
						height:223.50,					
						type:""},			
									
						{name:"6_3_2_3_D1.png",
						x:0,
						y:266,						
						width:453,
						height:138,
						type:""}];

    var slide_2_texts = [{compId:"ID_s2_txt01",
						x:10+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt02",
						x:175.50+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt03",
						x:288.75+9,
						y:42.75+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt04",
						x:10+9,
						y:72.95+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt05",
						x:175.50+9,
						y:72.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt06",
						x:288.75+9,
						y:72.25+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt07",
						x:10+9,
						y:108.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt08",
						x:175.50+9,
						y:124.50+2, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt09",
						x:288.75+5,
						y:121.50, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt10",
						x:10+9,
						y:139.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt11",
						x:10+9,
						y:177.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt12",
						x:10+9,
						y:207.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt13",
						x:10+9,
						y:235.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt14",
						x:175.50+9,
						y:207.50+3, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt15",
						x:288.75+9,
						y:207.50+2-18, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s2_txt16",
						x:150-24,
						y:150+4, 
						width:199,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"staticTxt4",
						bodyText:'System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)',
						x:12.05+13,
						y:272.60+9, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt5",
						bodyText:'Technical Support: http://www.cisco.com/techsupport',
						x:12.05+13,
						y:272.60+25, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt6",
						bodyText:'&#60output omitted>',
						x:12.05+13,
						y:272.60+52, 
						width:345.80,						
						height:81.75,	
						size:10,
						textAlign:"left"}];	
	
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,				
        texts:slide_2_texts};

/* SLIDE 3*/
 var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"6_3_2_3_C.png",
						x:5,
						y:40,
						width:427.65,
						height:223.50,					
						type:""},			
						{name:"6_3_2_3_D1.png",
						x:0,
						y:266,						
						width:453,
						height:138,
						type:""}];

    var slide_3_texts = [{compId:"ID_s3_txt01",
						x:10+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt02",
						x:175.50+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt03",
						x:288.75+9,
						y:42.75+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt04",
						x:10+9,
						y:72.95+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt05",
						x:175.50+9,
						y:72.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt06",
						x:288.75+9,
						y:72.25+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt07",
						x:10+9,
						y:108.25+7, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt08",
						x:175.50+6,
						y:119.50+2, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt09",
						x:288.75+5,
						y:121.50, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt10",
						x:10+9,
						y:139.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt11",
						x:10+9,
						y:177.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt12",
						x:10+9,
						y:207.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt13",
						x:10+9,
						y:235.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt14",
						x:175.50+9,
						y:207.50+3, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt15",
						x:288.75+9,
						y:207.50+2-18, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s3_txt16",
						x:150-34,
						y:150+69, 
						width:230,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"staticTxt7",
						bodyText:'System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)',
						x:12.05+13,
						y:272.60+8, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt8",
						bodyText:'Technical Support: http://www.cisco.com/techsupport',
						x:12.05+13,
						y:272.60+23, 
						width:400,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt9",
						bodyText:'&#60output omitted>',
						x:12.05+13,
						y:272.60+38, 
						width:345.80,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt10",
						bodyText:'Self decompressing the image : #############################',
						x:12.05+13,
						y:272.60+53, 
						width:398.80,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt11",
						bodyText:'############################################################',
						x:12.05+13,
						y:272.60+68, 
						width:398.80,						
						height:81.75,	
						size:10,
						textAlign:"left"},
						{compId:"staticTxt11",
						bodyText:'########################################################  [ok]',
						x:12.05+13,
						y:272.60+83, 
						width:398.80,						
						height:81.75,	
						size:10,
						textAlign:"left"}/**/];	
	
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,				
        texts:slide_3_texts};

/*SLIDE 4*/

 var slide_4_type = "IMAGE";
    var slide_4_images = [{name:"6_3_2_3_D.png",
						x:5,
						y:43,
						width:427.65,
						height:223.50,					
						type:""},								
						{name:"6_3_2_3_D1.png",
						x:5,
						y:266,						
						width:442,
						height:138,
						type:""}];

    var slide_4_texts = [{compId:"ID_s4_txt01",
						x:10+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt02",
						x:175.50+9,
						y:42.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt03",
						x:288.75+9,
						y:42.75+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt04",
						x:10+9,
						y:72.95+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt05",
						x:175.50+9,
						y:72.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt06",
						x:288.75+9,
						y:72.25+5, 
						width:138.30,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt07",
						x:10+9,
						y:108.25+7, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt08",
						x:175.50+6,
						y:119.50+2, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt09",
						x:288.75+5,
						y:121.50, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt10",
						x:10+9,
						y:139.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt11",
						x:10+9,
						y:177.75+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt12",
						x:10+9,
						y:207.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt13",
						x:10+9,
						y:235.25+5, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt14",
						x:175.50+9,
						y:207.50+3, 
						width:105.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt15",
						x:288.75+9,
						y:207.50+2-18, 
						width:138.70,						
						height:17,	
						size:11,
						textAlign:"center"},
						{compId:"ID_s4_txt16",
						x:150-32,
						y:150+69-140, 
						width:224,						
						height:17,	
						size:11,
						textAlign:"center"},
						
						{compId:"staticTxt12",
						bodyText:'<div style="width:378px;" class="auto">System Bootstrap, Version 15.0(1r)M15, RELEASE SOFTWARE (fc1)<br />Technical Support: http://www.cisco.com/techsupport<br />Copyright (c) 2011 by cisco Systems, Inc.<br /><br/>Total memory size = 512 MB - On-board = 512 MB, DIMM0 = 0 MB<br />CISCO1941/K9 platform with 524288 Kbytes of main memory<br />Main memory is configured to 64/-1(On-board/DIMM0) bit mode with ECC disabled<br /><br/>Readonly ROMMON initialized<br />program load complete, entry point: 0x80803000, size: 0x1b340<br />program load complete, entry point: 0x80803000, size: 0x1b340<br /><br/>IOS Image Load Test <br /><br />__________________ <br />Digitally Signed Release Software <br />program load complete, entry point: 0x81000000, size: 0x40d8d14<br />Self decompressing the image : <br />########################################################################################################################<br />########################################################################################################################<br />######################################################################################################################## [OK]<br />Smart Init is disabled. IOMEM set to: 15 <br /><br/>Using iomem percentage: 15line-height: 15px;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restricted Rights Legend<br />Use, duplication, or disclosure by the Government is<br />subject to restrictions as set forth in subparagraph<br />(c) of the Commercial Computer Software - Restricted<br />Rights clause at FAR sec. 52.227-19 and subparagraph<br />(c) (1) (ii) of the Rights in Technical Data and Computer<br />Software clause at DFARS sec. 252.227-7013.<br />&nbsp;&nbsp;&nbsp;&nbsp;cisco Systems, Inc.<br/>&nbsp;&nbsp;&nbsp;&nbsp;170 West Tasman Drive<br/>&nbsp;&nbsp;&nbsp;&nbsp; San Jose, California 95134-1706<br/>Cisco IOS Software, C1900 Software (C1900-UNIVERSALK9-M), Version 15.2(4)M1, RELEASE SOFTWARE (fc1)<br />Technical Support: http://www.cisco.com/techsupport<br />Copyright (c) 1986-2012 by Cisco Systems, Inc.<br />Compiled Thu 26-Jul-12 19:34 by prod_rel_team<br />This product contains cryptographic features and is subject to United<br />States and local country laws governing import, export, transfer and<br />use. Delivery of Cisco cryptographic products does not imply<br />third-party authority to import, export, distribute or use encryption.<br />Importers, exporters, distributors and users are responsible for<br />compliance with U.S. and local country laws. By using this product you<br />agree to comply with applicable laws and regulations. If you are unable<br />to comply with U.S. and local laws, return this product immediately.<br />A summary of U.S. laws governing Cisco cryptographic products may be found at:<br />http://www.cisco.com/wwl/export/crypto/tool/stqrg.html<br />If you require further assistance please contact us by sending email to<br />export@cisco.com.<br />Cisco CISCO1941/K9 (revision 1.0) with 446464K/77824K bytes of memory.<br />Processor board ID FTX1636848Z<br />2 Gigabit Ethernet interfaces<br />2 Serial(sync/async) interfaces<br />1 terminal line<br />DRAM configuration is 64 bits wide with parity disabled.<br />255K bytes of non-volatile configuration memory.<br />250880K bytes of ATA System CompactFlash 0 (Read/Write)<br />',
						x:12.05+19,
						y:272.60+14-8, 
						width:435,						
						height:138,	
						size:10,
						textAlign:"left"},
						];	
	
    var slide_4_object = {templateType:slide_4_type,
        x:0,
        y:0,
        images:slide_4_images,				
        texts:slide_4_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
       textObject:commonTexts,
		images:commonImage,
        slideObject:slides};

}