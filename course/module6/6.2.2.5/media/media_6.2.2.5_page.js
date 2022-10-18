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

    var slide_images = [{name:"6_2_2_5A.png",
							x:10,
							y:10,
							width:459.3,
							height:125.9,
							type:""},
							{name:"6_2_2_5.png",
							x:5,
							y:158,
							width:468,
        					height:248,
							type:""}];

    var slide_texts = [{compId:"pc1",
							bodyText:'PC1',
							x:19.5,
							y:35,
							width:38,
							height:17,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"pc2",
							bodyText:'PC2',
							x:19.5,
							y:105.5,
							width:38,
							height:17,
							color:"#ffffff",
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:33.55+17,
							y:32.1,
							width:29.4,
							height:17,
                        	textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:33.55+17,
							y:103,
							width:29.4,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'192.168.10.0/24',
							x:61.45+11,
							y:22,
							width:106,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'192.168.11.0/24',
							x:49.45+21,
							y:135,
							width:104,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'G0/0<br/>.1',
							x:94.1+25,
							y:40,
							width:51.25,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"staticTxt",
							bodyText:'.1<br/>G0/1',
							x:124.15,
							y:97,
							width:41.8,
							height:17,
                            size:11,
							textAlign:"right"},
							{compId:"staticTxt1",
							bodyText:'R1',
							x:122.15+37,
							y:86,
							width:41.8,
							height:17,
                            size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'R2',
							x:283.05+5,
							y:86,
							width:41.8,
							height:17,
                            size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.225<br/>S0/0/0',
							x:185+7,
							y:86,
							width:48.3,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.226',
							x:247.3+18,
							y:76,
							width:34.3,
							height:7.3,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'209.165.200.224 /30',
							x:155.45+24,
							y:56.95,
							width:119.5,
							height:13.5,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.1',
							x:310.1+8,
							y:66,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.1',
							x:323.25-10,
							y:100,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'10.1.1.0/24',
							x:336.45-2,
							y:24,
							width:93,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt1",
							bodyText:'10.1.2.0/24',
							x:328.25-10,
							y:133,
							width:93,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:411.25,
							y:33,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'.10',
							x:402.9+10,
							y:101,
							width:27.5,
							height:17,
                            size:11,
							textAlign:"center"},
							{compId:"staticTxt",
							bodyText:'64.100.0.1',
							x:268.95+16,
							y:42,
							width:54.25,
							height:11,
                            size:11,
							textAlign:"center"},
							
							{compId:"ID_txt20",
							bodyText:'<table align="left" border="0" width="413" cellpadding="0" cellspacing="0"><tr><td colspan="2">R1#<span style="font-weight:bold">show ip route</span></td></tr><tr><td colspan="2"><table align="left" border="0" width="100%" cellpadding="0" cellspacing="0"><tr><td width="5%" align="left">Codes:</td><td width="95%">&nbsp;L - local, C - connected, S - static, R - RIP,M - mobile,</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;B - BGP</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;D - EIGRP, EX - EIGRP external, O - OSPF,IA - OSPF inter area</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;N1 - OSPF NSSA external type 1,N2 - OSPF NSSA external type 2</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia -</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;IS-IS inter area</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;* - candidate default, U - per-user static route, o - ODR</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;P - periodic downloaded static route</td></tr></table></td></tr><tr><td colspan="2" height="15"></td></tr><tr><td colspan="2">Gateway of last resort is not set</td></tr><tr><td colspan="2" height="10"></td></tr><tr><td colspan="2"><table align="left" border="0" width="100%" cellpadding="0" cellspacing="0"><tr><td width="5%" align="left"></td><td width="95%">10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks</td></tr><tr><td width="5%" align="left">D</td><td width="95%">&nbsp;10.1.1.0/24 [90/2170112] <span style="color:#F26200;font-weight:bold;">via 209.165.200.226</span>, 00:00:05,</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;Serial0/0/0</td></tr><tr><td width="5%" align="left">D</td><td width="95%">&nbsp;10.1.1.0/24 [90/2170112] <span style="color:#F26200;font-weight:bold;">via 209.165.200.226</span>, 00:00:05,</td></tr><tr><td width="5%" align="left"></td><td width="95%">&nbsp;Serial0/0/0</td></tr><tr><td width="5%" align="left"></td><td width="95%">192.168.10.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td width="5%" align="left">C</td><td width="95%">&nbsp;192.168.10.0/24 is directly connected, GigabitEthernet0/0</td></tr><tr><td width="5%" align="left">L</td><td width="95%">&nbsp;192.168.10.1/32 is directly connected, GigabitEthernet0/0</td></tr><tr><td width="5%" align="left"></td><td width="95%">192.168.11.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td width="5%" align="left">C</td><td width="95%">&nbsp;192.168.11.0/24 is directly connected, GigabitEthernet0/1</td></tr><tr><td width="5%" align="left">L</td><td width="95%">&nbsp;192.168.10.1/32 is directly connected, GigabitEthernet0/1</td></tr><tr><td width="5%" align="left"></td><td width="95%"> 209.165.200.0/24 is variably subnetted, 2 subnets, 3 masks</td></tr><tr><td width="5%" align="left">C</td><td width="95%">&nbsp;209.165.200.224/30 is directly connected, Serial0/0/0</td></tr><tr><td width="5%" align="left">L</td><td width="95%">&nbsp;209.165.200.225/32 is directly connected, Serial0/0/0</span></td></tr><tr><td width="5%" align="left">R1#</td><td width="95%"></td></tr></table></td></tr></table>',
							x:30,
							y:170, 
							width:460,
							height:222,
							size:10,
							textAlign:"left",
							},
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}