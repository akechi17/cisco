if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.media_1232 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.main("synched",0);
	this.instance.setTransform(300,199.9,1.015,1.028,0,0,0,295.5,194.4);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,600,400);


// symbols:
(lib.main = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Not For Production", "36px Arial", "#666666");
	this.text.textBaseline = "top";
	this.text.lineHeight = 38;
	this.text.setTransform(229,169.6);

	this.instance = new lib.End_User_Male();
	this.instance.setTransform(90.3,170.2,0.25,0.25,0,0,0,271.6,276.8);

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1,3).p("AoeKwIAAAAIAA5b").p("AoeKwIYkD8").p("AoeKwInnCW");
	this.shape.setTransform(103,94);

	// Layer 2
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(295.5,194.5,1,1,0,0,0,295.5,194.5);
	this.instance_1.alpha = 0.4;

	this.addChild(this.instance_1,this.shape,this.instance,this.text);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,591,389);


(lib.End_User_Male = function() {
	this.initialize();

	// seatedMan_at_desk
	this.instance = new lib.seatedMan_at_desk("synched",0);
	this.instance.setTransform(85.9,61.2,1.05,1.05,-0.9,0,0,52.1,52.1);

	// computer_desk
	this.instance_1 = new lib.computer_desk("synched",0);
	this.instance_1.setTransform(271.6,274,1,1,0,0,0,271.6,253);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,543.2,553.7);


(lib.seatedMan_at_desk = function() {
	this.initialize();

	// chair back
	this.shape = new Shape();
	this.shape.graphics.lf(["#4b4e4d","#0c0705"],[0,1],69.4,21.7,-82.7,-19).p("AnTqkQhmBLgeCRQgpDPgHDGQgNGZBBCJQA0BtCDA4QAjAPAoALIAHACQAEggASgXQASgWAXgFIAZmoIhogMIAWjEIGhAeIAfDcIhcgLIggISQBUAIBfAFQBZAEBGgEQADAAACAAQC2gMA4hJQBOhlgJlCQgWlqhqkKQg0iDjGhzQhzhBhygiQjZhBjAA/QgDABgDABIgKAEQgCABgDABQgsASgkAZ").f();
	this.shape.setTransform(65,235.9);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#4b4e4d","#0c0705"],[0,1],-44.5,-14.6,65,-14.6).p("Am+tcQDAhADaBCQBxAhBzBCQDGByA0CEQBqEKAWFqQAJFChOBlQg4BIi2AMQDUgBBYhPQBYhPgBjSQgBjSgijbQggjPhrjNQg6huhvg+QiVhUiZgpQhzgchigBQhfAAiPA1IAAAB").lf(["#a04e4e","#512926"],[0,1],-46.7,-28.7,76.6,4.3).p("Am+tdQCPg1BfAAQBiABBzAcQCZApCVBUQBvA+A6BuQBrDNAgDPQAiDbABDSQABDShYBPQhYBPjUABQgCAAgDAAQhGAFhZgFQhfgFhTgIIgCAaQCcAZCdgCQB7gBB3ggQCTgoAzhjQATgkANgvQAvingjkmQgikbhnjFQhVijiVhmQihhujSgTQjSgThiAYQhhAYh0BeQAkgaAsgRQADgBACgCIAKgDQADgBADgC").lf(["#4b4e4d","#0c0705"],[0,1],-6.9,-2.5,2.8,-2.4).p("AgqA4IBWAiIgfjaIhBAkIAKCU").lf(["#4b4e4d","#0c0705"],[0,1],-1.3,-4.2,-60.8,-4.2).p("Ag0hcIlQgeIgOCIIFoAqIgKiU").p("AjFhNQARAQAAAXQAAAXgRAPQgQARgXAAQgCAAgOgCQgBAAgCAAQgCAAgCgBQgTgCgOgNQgPgQgBgXQABgWAPgRQARgQAXAAQACAAABAAQAaACAOAHQAIAEAEAF").lf(["#4b4e4d","#0c0705"],[0,1],-28.3,-4.2,-16.3,-1).p("AjRhWQgOgHgagCQAbAHAJAJQAQARAAAWQAAAXgQAQQgIAHgPAEQgKADgNABQACABACAAQACAAABAAQAOACACAAQAXAAAQgRQARgPAAgXQAAgXgRgQQgEgFgIgE").rf(["#4b4e4d","#0c0705"],[0,1],-27,-5.7,0,-27,-5.7,8.6).p("Aj8hfQgXAAgRAQQgPARgBAWQABAXAPAQQAOANATACQANgBAKgDQAPgEAIgHQAQgQAAgXQAAgWgQgRQgJgJgbgHQgBAAgCAA").lf(["#4b4e4d","#0c0705"],[0,1],-22.6,-7.8,-14.3,-39.1).p("AANiAImhggIAQAmIFQAeIBBgk").lf(["#4b4e4d","#0c0705"],[0,1],-60.4,-6,-36.4,-6).p("AmqAlIAYgXIAOiIIgQgmIgWDF").rf(["#4b4e4d","#0c0705"],[0,1],-19,5.3,0,-19,5.3,23.9).p("AmqAlIBoALIDVAZIA+AHIBbAKIhWgiIlogqIgYAX").rf(["#4b4e4d","#0c0705"],[0,1],-35.7,52.9,0,-35.7,52.9,15).p("AlbHYQgXAGgSAWQgSAXgEAfIAAABQAAAGAAAIQAAAoAWAcQAOARAQAHQAMAFANAAQADAAACAAIAAAAQAdgCAUgbQAXgcAAgoQAAgpgXgcQgPgUgVgHQgBAAgCAAQgHgCgIAAQgHAAgHAB").lf(["#4b4e4d","#0c0705"],[0,1],-1.1,89.2,-46.9,9.9).p("AlNHXQAIAAAHACQACAAABAAIAAAAQBBAIAQATQAWAcAAApQAAAogWAcQgVAbhJACIAAAAQgCAAgDAAQgNAAgMgFIgODnQCWA3AvgHQAHAAAEgDIA3tgIjVgZIgZGoQAHgBAHAA").lf(["#4b4e4d","#0c0705"],[0,1],-62,83.7,8.4,43).p("AhtBJIg3NgIBCgSIARkcIACgaIAgoRIg+gH").lf(["#4b4e4d","#0c0705"],[0,1],-59.4,68.9,-19.2,58.1).p("Ak7HZQAVAHAPAUQAXAcAAApQAAAogXAcQgUAbgdACQBJgCAVgbQAWgcAAgoQAAgpgWgcQgQgThBgIIAAAA").f().s("#000000").ss(0.1,1,1,3).p("AojspQhmBLgeCQQgpDPgHDHQgNGYBBCKQA0BtCDA4QAjAOAoAL").p("AojspQB0heBhgYQBigYDSATQDSATChBuQCVBmBVCjQBnDFAiEbQAjEmgvCnQgNAvgTAkQgzBjiTAoQh3Agh7ABQidACicgZIgREcIhCASQgEADgHAAQgvAHiWg3IAOjnQgQgHgOgRQgWgcAAgoQAAgIAAgG").p("AmZIqQADgfASgXQASgWAXgGIAZmoIhogLIAWjFIGhAgIAfDaIhbgKIggIRQBTAIBfAFQBZAFBGgFQADAAACAAQC2gMA4hIQBOhlgJlCQgWlqhqkKQg0iEjGhyQhzhChxghQjahCjABA").p("Am+tcQgDABgDABIgKADQgCACgDABQgsARgkAa").p("AEHJuQDUgBBYhPQBYhPgBjSQgBjSgijbQggjPhrjNQg6huhvg+QiVhUiZgpQhzgchigBQhfAAiPA1").p("AhPJhIgCAa").p("Ag0hcIAKCUIBWAi").p("AANiAIhBAk").p("Ag0hcIlQgeIgOCIIFoAq").p("AjQhWQAHAEAEAFQARAQAAAXQAAAXgRAPQgQARgXAAQgCAAgOgCQgBAAgCAAQgCAAgCgBQgTgCgOgNQgPgQgBgXQABgWAPgRQARgQAXAAQACAAABAAQAaACAOAH").cp().p("Aj5hfQAbAHAJAJQAQARAAAWQAAAXgQAQQgIAHgPAEQgKADgNAB").p("AmUigIAQAm").p("AmqAlIAYgX").p("AlBAxIDUAYIA+AH").p("AlNHXQgHAAgHAB").p("AlmKVQAMAFANAAQADAAACAA").p("AlIKaQAdgCAUgbQAXgcAAgoQAAgpgXgcQgPgUgVgH").p("Ak+HZQgHgCgIAA").p("Ak6HZQBAAIAQATQAWAcAAApQAAAogWAcQgVAbhJAC").p("AikOqIA3th");
	this.shape_1.setTransform(73,240.9);

	// pants shading
	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#8c8c8c","#3c3c3c"],[0,1],52.5,-7.1,-54.2,54.4).p("Ao0lJIgBBDIlhAJIicImQESA8ESAEQDNAEDWgnIgBgBQjfAXiugmQg1gKgCgxQBZgeAlicQAliSggh9QC/gNBHgmQBIglgsggQgeAMgoAJIABhAIggALIgCA9IhTANQhUALg3AEQg1AEgKABIABhNIgVgJIgRAV").lf(["#bbbbbb","#515151"],[0,1],64.7,-7.1,71.3,42.6).p("AOrCyQgRA4hwAZQiFAihPAgQhOAghPgOQASAZBTgDQBTgDBKAGQBKAGCrgOQCrgOg1hlQgmg8hshCQAgAbgJAg").lf(["#bbbbbb","#595959"],[0,1],16.4,3.2,-8.9,-3.6).p("AhDiNQgVBTABBpQAMA4AUgKQAVgMgRhSQgRhSAGhOQgCAJgDAL").lf(["#bbbbbb","#595959"],[0,1],-9.2,5.7,-20.8,-14.4).p("AhZjWQgJAQgaAOQiMBRg0BaQBCg/BdgzQAygbASgcQANgUgNgM").lf(["#bbbbbb","#4d4d4d"],[0,1],32.5,21.9,32.5,32.7).p("AG5FXQBngMBcguQiRAliNgRQjDgWiLAgQBpABCPAWQBcAOBVgJ").f();
	this.shape_2.setTransform(195.9,275.6);

	// shirt shading
	this.shape_3 = new Shape();
	this.shape_3.graphics.lf(["#a573c8","#402156"],[0,1],38.1,-16.4,15.2,-22.6).p("AEHjpQgVBmAWBPQAHiZBUh6QhMAUgQBK").lf(["#a573c8","#402156"],[0,1],-65.1,-39.8,24,26.1).p("ACvlqQhbCqgUCvQgNB+ApBLQAjBDgbBAQglBehsAhQhtAgh6AIQBuAkB/gTQBfgOBRhEQAVgRAYg0QAAgBAAAAQgOhNAHhKQg3hdgIhoQgHhMANhSQAPhhAqhq").lf(["#a573c8","#402156"],[0,1],48.1,15.3,4.4,30.5).p("AC0BvQgnhCgXjMQgNBSAHBMQAIBoA3BdQgHBKAOBNQAAAAAAABQARCWAxAqQANAOAaAJQAWAEALAPQAJg3gxhcQgxhcgGhTQgFhTgohC").lf(["#a573c8","#402156"],[0,1],52.4,25.1,42.7,19.5).p("AINgDQgCBigpA/QgqA/gvA4QguA4AfAVQALg0AzgoQA0gnAWgcQAVgbABg1QABg1gMhB").lf(["#a573c8","#402156"],[0,1],44.7,6.6,38.2,-4.6).p("AHxg+QALgQgLgfQgTAvhUAlQhVAmgKA0QAqgwBcglQAugSASgY").lf(["#a573c8","#402156"],[0,1],-33.3,-52.5,-23.9,-87.9).p("Apkr8QCYgvBvA1QBwA1ELAhQh3gUhVgmQhVgmg1gVQhqgmhHAGQhGAHg1Ay").lf(["#a573c8","#402156"],[0,1],-61.7,-3,-34.2,-3).p("AnbgmQgOjNg6guQAqD7g/EKQBoh1gLiV").lf(["#a573c8","#402156"],[0,1],-61.5,-7.7,-89,-7.7).p("AqnC5QgelnAXimQg+BGAHChQAHCfA3CH").lf(["#a573c8","#402156"],[0,1],-17.7,41.9,-0.1,83.8).p("AjoMdQBaArCRgdQCTgdAggzQAshGgfhoQgEBCg2AuQhhBRh8AMQh9ALh9gxQAnAqA/Af").lf(["#a573c8","#402156"],[0,1],-15.5,75.8,-15.5,55.6).p("AhjJ6QBZAOATguQh3ASjNguQBmAtByAP").lf(["#a573c8","#402156"],[0,1],19.7,-6.3,74.4,88.3).p("ALeJ5QAdiphAiYQARCsguCRQgWBGhAAGQhiAKhyg6QA+BtCgAFQA8gBAVgbQAvgqAMhE").f();
	this.shape_3.setTransform(164.4,160.9);

	// hair hilites
	this.shape_4 = new Shape();
	this.shape_4.graphics.lf(["#4b4e4d","#0c0705"],[0,0.588],9.5,-12.2,29.4,7.6).p("AD6hjQhLhJhCAaQgSAFgRAJQAugDAUATQgwACgPAUQBXAYAqBjQAVg7ghhFQAQgNAoAN").lf(["#4b4e4d","#0c0705"],[0,0.588],1.9,-19,10.1,-4.8).p("AAki2QgQgcgdADQAJAHAMAIQAMAHAMAXIABAFIAGACQAAgOgHgN").lf(["#4b4e4d","#0c0705"],[0,0.588],-9.8,-14.8,-9.8,14.2).p("Agyg1QAqgwgbg6QgmAFARgfQhCALgaAsQAlgSAJASQg5AbgYArIgDAUQAwg8BAgMQAWAIghBAQAegHAFgG").lf(["#4b4e4d","#0c0705"],[0,0.588],-5.4,-1.2,9.8,25.1).p("AgbgNQgaALADBGQgdgRgBgZQgmCEBUAzIAGAAQAAgJABgIQAGg+AZgqIAsA4IAFAAQASgygVg/QAZAGAQAsQABgngGgUQgFgTgSgXQgSgXgfgMQAWApgdAUQgcAVgGgo").lf(["#4b4e4d","#0c0705"],[0,0.588],-15.1,3.1,-24,36.4).p("AjjBXQABBCAMAvQAChmBVhqQgnAHguAxQgHgbAEgSQgrAmALBLQAHgdANAA").f();
	this.shape_4.setTransform(135.3,21.2);

	// hair
	this.shape_5 = new Shape();
	this.shape_5.graphics.lf(["#4b4e4d","#0c0705"],[0,0.588],-28.5,-31.6,19.6,16.5).p("AAWlAQgFADgEAFQgkgehCAQQhCARg+AsQAFAEAFAFQAAABAAACQgPAagYAPQgfASgIAmIAIALQgsA3gTCbIAIACIAUgFQAFAZgFAcQgJArAYAmQADgHAEgFIACACQAIAVAHAXQAPAsAfAgIAJACIATAMIBdgUQAOALAQAEQA3gGA1AZIAQgNQARAUAWgNQAugYAlgnQAFARALAJQABABACAAQAagnAIg5QACgDAAgDQADgsAbghIAXAAQAJAAAHAEQAHAEAAAFIAGAJQAZgmgLgwIAQAFQAOhkgghYIANABQAAgEgCgCQgag3g0ghQATAAgJgUQg9g0gmgNQgmgMglAHIgFgJQgggQgdAW").f();
	this.shape_5.setTransform(139.6,31.6);

	// man
	this.shape_6 = new Shape();
	this.shape_6.graphics.lf(["#976e3a","#553622"],[0,1],-13.3,-122.6,-4.9,-122.6).p("AhP0nQgYAVADATQADAUgBAEQACAFgCAFQAFBKAOAyQAJAbAQgCQAMgCACgkQgMguADgsQADgyANgmQAJgWgPgHQgKgDgKABQgPABgFAX").lf(["#976e3a","#623e26"],[0,1],-54.5,-113.2,-0.3,-113.2).p("Agh0gQgNAmgDAyQgDAsAMAuQgCAkgMACQgQACgJgbQgOgygFhKQAAADgCACIhNBPQgBABgBAAQg4AdhBgDQgvgEgtgPQgsgNgrAIQglAFgcgNIgCAwQAqgLAzACQCaAHC6DEQA+g2AfhlQAUg9gPhTQgMg+AYg0QgFAHgGAEQgHgrgSAcQAPAHgJAW").lf(["#b991d5","#5c2f7b"],[0,1],-107.1,-25.8,47.3,15.5).p("AhAtGQiGgZhyg6QjphxiHBuQgBACgCABQhTA2hKAbQhJAchmAZQhmAZhODLIhxHuIJIFGQCYB3CTChQBBBHBCAbQAHADAGACQABAAAAAAQAcAKAcACQBzAHBygkQAQgFAQgGQATgHASgIQATgIANgOQAZgaAFgxQAKhCgbg9QgihRAchtQgFglgCgsQgCgfAEgnQhti3BAj6QBCj5B4gdQgchkkDg6QgNgCgNgD").lf(["#b991d5","#5c2f7b"],[0,1],-85.1,-96.3,-3.4,-96.3).p("AgmtBQg2hFgVgWQi6jEiagHQgzgCgqALQhfAbgpCnIACAAQCHhuDpBxQByA6CGAZQANADANAC").lf(["#b991d5","#5c2f7b"],[0,1],-43.4,-57.1,110.7,31.9).p("AA/mNQhAD6BtC3QgEAnACAfQACAsAFAlQAVC2BKAdQA+AYATAuQA8CQDJgDQAwAFAyhWQA4iGg4jKQgahbh3hYQgUgOgTgQQgCjQgigtQAPhnhQh/QhRh+ghgxQh4AdhCD5").lf(["#bbbbbb","#595959"],[0,1],76.3,70.9,55,150.5).p("Ak+KQIgBBDQiLAGiwgBQgCAAgDABQgPACgRACIgBAAIicImQESA8ESAEQDNAEDVgnQCCgZDyAlQBcAOBVgJQARAZBQgBQBRgBA/gDQA/gDCFg0QCFg0AzgLQgvhKiZhTQjtiBm2hMIj6gtQAJg4gkAEQAGgKABgJQAEhTg9gLQgeAMgoAKIABhBQgQAGgQAFIgCA9QhuAXiuAKIABhNQAAAAgBAAQgGgCgHgDQgIAJgQAI").lf(["#4b4e4d","#0c0705"],[0,1],-28.1,67.4,0.5,67.4).p("AkYKEIgBBNQCugKBugXIACg9QhyAkhzgHQgcgCgcgK").lf(["#4b4e4d","#0c0705"],[0,1],3.6,63,10.6,63).p("ABqJDQgNAOgTAIQgSAIgTAHIgBBBQAogKAegMIAAhQ").f();
	this.shape_6.setTransform(171.3,177);

	// chair base
	this.shape_7 = new Shape();
	this.shape_7.graphics.lf(["#4b4e4d","#0c0705"],[0,1],-93.9,-111.2,16.3,-111.2).p("Aum8jIAAAAQgCABgDABQADgBACgB").lf(["#a04e4e","#512926"],[0,1],33,-5.9,21.8,-47.7).p("AC4ngQgzBjiRApQh4Afh6ABQidACiegZIgREcQABAIAAAHQByAlE2AQQE2ASDXhBIKyjPQA4gRAQgVQAJgLAAgOQABhnhwgsQhxgshzAJQjCAFi3goIjKgyQgNAvgUAk").lf(["#a04e4e","#512926"],[0,1],-102.1,-27.7,-84.6,-27.7).p("AuImdQgogLgjgPQhTB+BTByQAxA2BJAfIALi/QgQgGgNgRQgWgcgBgpQAAgHABgHQgDgBgEgB").lf(["#4b4e4d","#0c0705"],[0,1],-60.6,67.9,-41.2,-4.6).p("ApKgvIhBATQgDEoCKgMQAEAAADgBQANgCAOgEQBRgXCCiPQhXgLhSgOQgtAkgkACQgjADgRhCQgHgagFgnQAAgHgBgI").lf(["#4b4e4d","#0c0705"],[0,1],-41.7,11,95.9,-25.8).p("Ao9AhQBBAOBEALQBSAOBXALQBOAJBSAIQBOAHBQAGQAMAAAMABQENAcCxg+IG9iOQCTgwAHhDIAKheQgQAVg4ARIqyDPQjXBBk2gSQk2gQhyglQAFAnAHAa").lf(["#4b4e4d","#0c0705"],[0,1],-51.6,48.8,-51.6,2.3).p("Ao9AhQARBCAjgDQAkgCAtgkQhEgLhBgO").lf(["#4b4e4d","#0c0705"],[0,1],-91.4,-24.6,-61.5,27.1).p("AqXgZQgvAGiWg2QAAAUAAASQAFDcBkA1QBtA6CCgoQiKAMADkoQgFACgHAB").lf(["#4b4e4d","#0c0705"],[0,1],-79.4,6.3,-93.4,-18).p("AtchJIADgpQhJgfgxg2QgFBmBQAnIAsAXQAAgSAAgU").lf(["#4b4e4d","#0c0705"],[0,1],-3.3,68.1,-3.3,8.5).p("AhvBkQBDA1BbgoQhQgGhOgHIAAAA").lf(["#4b4e4d","#0c0705"],[0,1],-15.4,32.9,6.4,32.9).p("AiaIMQBjBABzg3QALltgYg3QhbAohDg1QgdA/gOFp").lf(["#4b4e4d","#0c0705"],[0,1],-20.7,79.6,8.2,79.6).p("AiaIMQgxAEgEHKQAAASAAASQBrBUCghGQACgQABgQQAnnZgqACQhzA3hjhA").lf(["#4b4e4d","#0c0705"],[0,1],-93,139.1,62.1,139.1).p("AH6YCQk7kSjXhUQhSgghLAYQk4BnlFDAQg5AbgngfQgCgCgCgBQgLgLgBgLIAAAuQAAAEAAADQACANAMALQABABABAAQAnAgA5gbQAKgFAKgFQFGikEsgkQBLgJBKATQCdApFEDeQAQAMAPAHQAGADAGACQAKAFAJACQAfAJAXgLQABgBABAAQAdgOAKgPQAFgIAAgHIABgjQgDAMgVAIQgyAWgpgl").lf(["#4b4e4d","#0c0705"],[0,1],6.3,178.1,-72,42.3).p("AJVYRQAVgIADgMQABgCAAgDQAAgIgIgKQiZiOiKh0QhThFhOg8QgwgkBhADQD6AHIVBvQA6AMAQgXQgHgpiDgfQmZhVnKgkQgBAQgCAQQigBGhrhUQAAgSAAgSQmugcl5ApQh+AOAHBJQANgmA4gCQFXgPGAAbQAxAKgsAWQh5AzhOAnQjwB6iPBjQgSAUACARQABALALALQACABACACQAnAfA5gbQFFjAE4hnQBLgYBSAgQDXBUE7ESQApAlAygW").lf(["#4b4e4d","#0c0705"],[0,1],14.6,118.3,106.8,118.3).p("AQRT5QAVgGABgTIAFgzQgQAXg6gMQoVhvj6gHQhhgDAwAkQBOA8BTBFQEWgZEtAiIABAAQASACASACIAAAAQAZADAaADQAYAFAQgCQAGAAAFgB").lf(["#4b4e4d","#0c0705"],[0,1],101.4,136.4,106.5,136.4).p("AQGT6IgLB1IgFA2QAPAQAVgKIAPipQgMgKgMABQgFABgGAA").lf(["#4b4e4d","#0c0705"],[0,1],87.8,134.5,90.3,134.5).p("AOGTtQgnBbAZBMIAPinIgBAA").lf(["#4b4e4d","#0c0705"],[0,1],92.9,133.3,102.9,133.3).p("AOrTxIAAAAIgFA8IgFA6QAqAgAwgYIALh1QgQACgYgFQgagDgZgD").lf(["#4b4e4d","#0c0705"],[0,1],88.8,135,93.8,135).p("AOHTtIgPCnQAMAKAMAAQAFgCAGAAIALhvIAFg8IAAAAQgSgCgSgC").lf(["#4b4e4d","#0c0705"],[0,1],105,136.7,107.5,136.7).p("AQaWrQAohcgZhNIgPCp").lf(["#4b4e4d","#0c0705"],[0,1],55.4,172.8,65.2,172.8).p("AKMZeQgWgCgQAFQgJADgHAHQgDADgEAEQgOASgNAnQgKAeAAAVQAAAKABAIQABADABADQAIAdANAHIAGAEQAKAEASAAQgCAAgBgBIgCgBQgRgIgHgdQgHgcAHghQABgGACgGQACgGABgFQALghATgVQAMgMAMgEQAEgDAFAA").p("AJlciQgBAAAAAAQgSAAgKgEQAKAEASABIABgB").rf(["#4b4e4d","#0c0705"],[0,1],62.3,170.3,0,62.3,170.3,12.5).p("AKDZhQgMAEgMAMQgTAVgLAhQgBAFgBAGQgCAGgCAGQgHAhAHAcQAHAdARAIIACABQACABABAAIAAAAQAAAAABAAQACABADAAQADABADgBQAQgBASgTQAXgYALgoQALgpgJghQgHghgWgFQgGgCgHABQgFAAgEAD").p("AJkciIAAAAQgBAAgCgBQABABACAA").lf(["#4b4e4d","#0c0705"],[0,1],48.9,167.1,61.5,167.1).p("AJnYvQgKAPgdAOQgBAAgBABQgXALgfgJQgJgCgKgFQgGgCgGgDIAAAPIAAArIAABIQASAhAvgIQAAgVAKgeQANgnAOgSQAEgEADgDQAHgHAJgDIABgy").lf(["#4b4e4d","#0c0705"],[0,1],44.9,170.8,50.7,170.8).p("AHpZSQgQASgOAqQgPAwAIAcQAIAcANAIIAFADQALAEASAAQgCAAgBAAIgCgBQgRgIgHgdQgIghALgoQADgNAFgMIAAgr").p("AH7cFQgSAAgLgEQALAFASAAIABgBQgBABAAgB").lf(["#4b4e4d","#0c0705"],[0,1],47.4,173,55.5,173).p("AHhaWQgLAoAIAhQAHAdARAIIACABQACAAABAAIAAAAQAAABABgBQACABADAAQADABADgBQAQgBASgSQABgCABgBQgBgIAAgKQgvAIgSghIAAhIQgFAMgDAN").p("AH4cFQABAAACAAIAAAAQgBAAgCAA").lf(["#4b4e4d","#0c0705"],[0,1],-113.3,111.1,-31.1,111.1).p("AlRQiQmAgblXAPQg4ACgNAmIAAAyQBRgGBaABQDCAEDtAtQBOgnB5gzQAsgWgxgK").lf(["#4b4e4d","#0c0705"],[0,1],-103.6,123.6,-93,123.6).p("AvmR/QgSAGgUABIAAAAQAHABAAgBQAcABAUAbQAUAcAAAnQAAAogUAbIABABQARgFANgQQAUgZAAgkQAAgjgUgaQgSgXgegEIAAAA").lf(["#4b4e4d","#0c0705"],[0,1],-113.3,114.5,-96.1,114.5).p("AvmR/QATgHARgNQhagBhRAGQAJAFAIACQAfANAcACQAEAAADAAQACAAABAAQAGAAAFAAQAUgBASgGIAAAA").lf(["#4b4e4d","#0c0705"],[0,1],-99.8,123.8,-89.8,123.8).p("Au2SaQAUAaAAAjQAAAkgUAZQgNAQgRAFQgBABgBAAQAAAAgBABQAAABgBABQARAAABAAQAcAAAUgZQAUgZAAgkQAAgjgUgaQgUgZgcAAQgCAAgegCQAeAEASAX").lf(["#4b4e4d","#0c0705"],[0,1],-105.8,125.3,-96.1,125.3).p("AvVUoQAUgbAAgoQAAgngUgcQgUgbgcgBQAAABgHgBQgDABgFAAIgBABQATAHANATQAUAcAAAnQAAAogUAcQgTAagaABQAbAAACAAQAaAAATgXQABgBAAgBQABgBAAAAQABgBAAgB").rf(["#4b4e4d","#0c0705"],[0,1],-108.4,122,0,-108.4,122,13.2).p("AvhTlQAAgngUgcQgNgTgTgHIgCgBQgEAAgGAAQgBAAgDgBQgCABgCAAQgZACgTAZQgEAGgEAHQgMAYAAAeQAAAoAUAbQATAaAZACQACAAACAAQACAAABAAQAagBATgaQAUgcAAgo").lf(["#4b4e4d","#0c0705"],[0,1],-111.6,117.1,-105.7,117.1).p("AwhSHIAAgBQgcgCgfgNIgBA4QAEgHAEgGQATgZAZgCQACAAACgBQADABABAA").lf(["#4b4e4d","#0c0705"],[0,1],-112.9,125.3,-99.3,125.3).p("AwXSHIACABQAAgBgBAAQAAAAgBAA").lf(["#4b4e4d","#0c0705"],[0,1],-91.6,158.3,-79.8,158.3).p("AuUXsIAABhQAQAkAaAHQAAgmAbgbQAMgMANgGQAMgGAMgCIAAgYIAAgeQgKAFgKAFQg5AbgnggIgCAA").rf(["#4b4e4d","#0c0705"],[0,1],-81.4,162.2,0,-81.4,162.2,14.8).p("AseYdQgMACgMAGQgNAGgMAMQgbAbAAAmQAAAAAAAAQAAAnAbAcQAcAbAmAAQAnAAAbgbQANgNAGgOQAJgSAAgWQAAgmgcgbQgbgcgnAAQgIAAgJAC").lf(["#4b4e4d","#0c0705"],[0,1],-79.8,160.7,-64.3,160.7).p("AsNYbQAnAAAbAcQAcAbAAAmQAAAWgJASQAOgHAMgMQAbgbAAgnQAAgmgbgcQgcgbgmAAQgjAAgbAXIAAAYQAJgCAIAA").f().s("#000000").ss(0.1,1,1,3).p("Aul8jQgDABgDAB").p("ADZoyIDKAxQC3AoDCgFQBzgJBxAsQBwAsgBBnQAAAOgJALIgKBeQgHBDiTAwIm9COQixA+kNgcQgMgBgMAAQAYA3gLFtQAqgCgnHZQHKAkGZBVQCDAfAHApIgFAzQgBATgVAGQAMgBAMAKQAZBNgoBcQgVAKgPgQIAFg2QgwAYgqggIAFg6IgLBvQgGAAgFACQgMAAgMgKQgZhMAnhbQktgikWAZQCKB0CZCOQAIAKAAAIQAAADgBACIgBAjQAAAHgFAIIgBAyQAQgFAWACQAHgBAGACQAWAFAHAhQAJAhgLApQgLAogXAYQgSATgQABQgDABgDgBQgDAAgDAA").p("AJIceIgGgEQgNgHgIgdQgBgDgBgDQgBABgBACQgSASgQABQgDABgDgBQgDABgDgB").p("AHfcBIgGgDQgNgIgIgcQgIgcAPgwQAOgqAQgSIAAgPQgPgHgQgMQlEjeidgpQhKgThLAJQksAklGCkIAAAeQAbgXAjAAQAmAAAcAbQAbAcAAAmQAAAngbAbQgMAMgOAHQgGAOgNANQgbAbgnAAQgmAAgcgbQgbgcAAgnQAAAAAAAAQgagHgQgkIAAhhIAAgBQgMgLgCgNQAAgDAAgEIAAguQgCgRASgUQCPhjDwh6QjtgtjCgEQgRANgTAHQAeACACAAQAcAAAUAZQAUAaAAAjQAAAkgUAZQgUAZgcAAQgBAAgRAAQgTAXgaAAQgCAAgbAAQgBAAgCAAQgCAAgCAAQgZgCgTgaQgUgbAAgoQAAgeAMgYIABg4QgIgCgJgFIAAgyQgHhJB+gOQF5gpGuAcQAEnKAxgEQAOlpAdg/IAAAAQhSgIhOgJQiCCPhRAXQgOAEgNACQgDABgEAAQiCAohtg6Qhkg1gFjcIgsgXQhQgnAFhmQhThyBTh+").p("AuImdQAEABADAB").p("ApKgvQABAIAAAHQByAlE2AQQE2ASDXhBIKyjPQA4gRAQgV").p("AvTjHQAxA2BJAf").p("AqLgcQgDEoCKgM").p("AkPBTQhXgLhSgOQgtAkgkACQgjADgRhCQgHgagFgn").p("Ao9AiQBBANBEAL").p("AhvBkQBOAHBQAG").p("AtchJQAAAUAAAS").p("AhuBkQBCA1Bbgo").p("AiaINQBjA/Bzg3").p("AjPPaQAAASAAASQBrBUCghGQACgQABgQ").p("AJVYSQgyAVgpglQk7kSjXhUQhSgghLAYQk4BnlFDAQg5AbgngfQgCgCgCgBQgLgLgBgL").p("AuUXrQABABABAAQAnAgA5gbQAKgFAKgF").p("AHpZDQAGADAGACQAKAFAJACQAfAJAXgLQABgBABAAQAdgOAKgP").p("AJtX9QgDAMgVAI").p("AFDTkQhThFhOg8QgwgkBhADQD6AHIVBvQA6AMAQgX").p("AxtQ+QANgmA4gCQFXgPGAAbQAxAKgsAWQh5AzhOAn").p("AQGT6QAGAAAFgB").p("AOHTtQASACASACIAAAAQAZADAaADQAYAFAQgC").p("AQGT6IgLB1").p("AQaWsIAPiq").p("AN4WUIAPin").p("AOrTxIAAAAIAAAA").cp().p("AOrTxIgFA8").p("AKDZhQAEgDAFAA").p("AJnZhQgKADgHAHQgDADgEAEQgOASgNAnQgKAeAAAVQAAAKABAI").p("AJIceQAKAEASAA").p("AJhchIgCgBQgRgIgHgdQgHgcAHghQABgGACgGQACgGABgFQALghATgVQAMgMAMgE").p("AJNanQgBAFgBAGQgCAGgCAG").p("AJhchQACABABAAIAAAA").p("AJlciQACABADAA").p("AHpZSIAAArIAABIQASAhAvgI").p("AHfcBQAKAEASAA").p("AH4cFIgCgBQgRgIgHgdQgIghALgoQADgNAFgM").p("AH4cFQACAAABAAIAAAA").p("AH8cGQACAAADAA").p("AxtRxQBRgHBaAB").p("AvmR/IAAAAQgSAGgUAB").p("AwMSHQAHAAAAgBQAcABAUAbQAUAcAAAnQAAAogUAb").p("AvUUpQARgFANgQQAUgZAAgkQAAgjgUgaQgSgXgegE").p("AxcR4QAfAMAcACQAEAAADAAQACAAABAAQAGAAAFAA").p("AvUUpQgBABgBAAQAAAAgBABQAAABgBAB").p("AvVUoQAAABgBAB").p("AwMSHQgDAAgFAA").p("AwUSIQASAHANATQAUAcAAAnQAAAogUAcQgTAagaAB").p("AwXSHQgEAAgGAAQgBAAgDgBQgCABgCAAQgZACgTAZQgEAGgEAH").p("AwaSGQACABABAAQABAAAAAAQABAAABAA").p("AwUSIQgBgBgBAA").p("AtqZ4QAAgmAbgbQAMgMANgGQAMgGAMgCIAAgY").p("AsNYbQgIAAgJAC").p("Aq3agQAIgSAAgWQAAgmgcgbQgbgcgnAA").p("AsinsQgCAAgCgB");
	this.shape_7.setTransform(121.8,337.6);

	// leg shading (rt)
	this.shape_8 = new Shape();
	this.shape_8.graphics.lf(["#bbbbbb","#515151"],[0,1],-24.1,69,11.6,-65.5).p("AjAhfQArgaBlgsQBjgrBLhVQBNhTA6g0QA7gzAfAXQAfAYghBrQBBiAAUhgQAJgqgdgtQhJAPiRA5QiRA6gvgYQh4BthvClQgWAqi7GOQDIj8Asgb").lf(["#bbbbbb","#515151"],[0,1],95.1,59.4,1.2,34.1).p("AEXjHQhfCDguAvQhYBNg8A5QhpBigPBnQgOBoAQA3QARA3AJBsQAvisB2jlQB1jgBjjSIAAAA").f();
	this.shape_8.setTransform(260.8,363.9);

	// leg shading (lft)
	this.shape_9 = new Shape();
	this.shape_9.graphics.lf(["#bbbbbb","#515151"],[0,1],51.8,35.5,-19.3,-5.5).p("Ag7FyQAhAlALAuQAAiyA3j8QA3j3AqjlIgBAAQg6CXgrA0QhOCRgwBqQgwBsADA5QAJCBBEBL").f();
	this.shape_9.setTransform(159.5,358.6);

	// man leg
	this.shape_10 = new Shape();
	this.shape_10.graphics.lf(["#bbbbbb","#626262"],[0,1],6.4,-7.8,-63.2,-47.9).p("ApCtmQhYCIhBC7QgrDEgaC9QgVCfhLB6QAIABAIABQCSATCNAuQAHACAGACQBsAmBdA4QAAiyA4j8QA4j3ApjlIgBAAQACgEABgEQACgFABgFQA9jggHiJQgCgrgogkQhagZjECqQgtAngmAa").lf(["#4b4e4d","#0c0705"],[0,1],-83.1,51.2,-74.8,20.4).p("AuNDEQCPAACvBIIAEggIAHguQgGgCgHgCQiNguiSgTIgdBL").lf(["#4b4e4d","#0c0705"],[0,1],-91.1,40.4,-15.4,84.2).p("AugDEQh5B+gGBWQCKg8DZDQQFKBzBaB4QABgDABgCQAkhVg3hQQg3hTjFijQgfg0AEgxQgHgDgIgDQivhIiPAAQgJAAgKAA").f("#000000").p("AkYMXQhah4lKhzIgTBNQjfjAiJA8QgiAsCnBhIAygCQCjCMBzArQBzAqB1gEQBJgEAPgRQAXgagFgX").p("AH/QMQg3iLkijEIgmBEQikjziVAXQgsAiCICJIAxALQB4CxBkBHQBkBHByAaQBHAPAUgMQAdgUABgX").lf(["#4b4e4d","#0c0705"],[0,1],-106.1,56.6,-72.2,47.5).p("Aq8IsQjZjQiKA8IgYBdQCJg8DfDAIAThN").lf(["#4b4e4d","#0c0705"],[0,1],-50.4,28,-45.5,9.8).p("Al7EcQhdg4hsgmIgHAuQCHAyBJgC").lf(["#bbbbbb","#595959"],[0,1],25.7,-28,75.5,0.4).p("AEAgUQg+CUhoBkQAIACAHAEQCIA3B8BSQAGADAFAEQBfBABLBPQAvitB4jlQB1jgBjjSIgBAAQADgEACgEQADgDACgEQB1jJAdiGQAJgqgeguQhQAUiGA3QiGA3g+gXQh4BthwCkQhcCxhJCw").lf(["#4b4e4d","#0c0705"],[0,1],0.1,49.9,62,111.8).p("AIbNjQggheiUjRQgQg6AQgtQgHgGgHgFQiWhziJgkQgJgDgKgCQiVBagbBRQCTgWCcECQEiDEA3CLQACgCABgCQA5hJgghc").lf(["#4b4e4d","#0c0705"],[0,1],5.1,62.4,21,34.7).p("AFmGkIASgqQgFgEgGgDQh8hSiIg3IgvBBQCJAkCWBzIANge").lf(["#4b4e4d","#0c0705"],[0,1],42.7,48.4,52.1,32.1).p("AFmGkQB1BUBHARQhLhPhfhAIgSAq").lf(["#4b4e4d","#0c0705"],[0,1],-18.5,61.6,16.6,61.6).p("Ai5IlQCVgXCkDzIAmhEQickCiTAWIgwBU").f();
	this.shape_10.setTransform(195.8,375.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-1.7,304.5,522.1);


(lib.computer_desk = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#4b4e4d","#0c0705"],[0,1],-11.6,25.6,10.3,-56.4).p("ACGmjQgJgDgPAKIkRFwQgcAhAHA4IAAFwQASANATgHIAAlpQAAgCAAgCQgFg2AbggIEQlvIABgBQAKgHAIgBQgQgFgQgGIAAAA").lf(["#4b4e4d","#0c0705"],[0,1],16.7,3.4,16.7,-53.4).p("ACWl4IAAFzQAOAPAYgKIAAlsQgCgfgKgJIgBAAQgDgDgGgBQgIABgKAHIgBABQACAKABAN").f().s("#333333").ss(0.1,1,1,3).p("ACGmiIAAgBQAQAGAQAFQAGABADADIABAAQAKAJACAfIAAFsQgYAKgOgPIAAlzQgBgNgCgKIkQFvQgbAgAFA2QAAACAAACIAAFpQgTAHgSgNIAAlwQgHg4AcghIERlwQAPgKAJAD").cp().p("ACTmPIABgBQAKgHAIgB");
	this.shape.setTransform(520.1,359.3);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#bbbbbb","#6a6a6a"],[0,1],33.1,137.9,33.1,-118.2).p("AE7+uIAAUPIA8gvIAAzQIg8gQ").lf(["#4b4e4d","#0c0705"],[0,1],-31.2,-52.4,64.9,-26.6).p("AlZqsQi/ALh4BSQABAMArALQAeAIAxAHQB6AUCtAHQCuAIB6gKQAwgDAdgFQAogHAFgKQhzhdi9gaQhvgEhugI").lf(["#bbbbbb","#6a6a6a"],[0,1],-104.7,-202.5,34.3,-63.5).p("Ah8qgQDaAIDdgHIAA0PQqSgjqjALIAATHQFOA8FTAXQBuAIBvAE").p("Al7smQAMANAAASQAAARgMANQgNAMgRAAQgTAAgMgMQgNgNAAgRQAAgSANgNQAMgMATAAQARAAANAM").p("ACrtiIw6hEIAAuwIQ6AoIAAPM").rf(["#4b4e4d","#0c0705"],[0,1],-41.8,-79.9,0,-41.8,-79.9,6.9).p("AmZsyQgTAAgMAMQgNANAAASQAAARANANQAMAMATAAQARAAANgMQAMgNAAgRQAAgSgMgNQgNgMgRAA").lf(["#7a7ac2","#3c3c80"],[0,1],-48.9,-147.9,45.4,-53.4).p("ACr8uIw6goIAAOwIQ6BEIAAvM").lf(["#4b4e4d","#0c0705"],[0,1],-65.6,-53.5,18,-53.5).p("ACHoYQgdAFgwADQh6AKiugIQitgHh6gUQgxgHgegIQgrgLgBgMIAAArQAAAVB7ATQB6ATCtAHQCuAIB6gJQB2gJAEgTIAAgEIAAgmQgFAKgoAH").lf(["#bbbbbb","#6a6a6a"],[0,1],-30,3,-17.3,10.3).p("AkpAfQhAAvAQAzQAUBGCIgtQgCg3Bdg2QA4ghAEAnQANg1iAgLQhLgFhFAx").lf(["#4b4e4d","#0c0705"],[0,1],-18.9,9.2,-3.8,9.2).p("AivCVICBhOQAGgKACgKQgEgng4AhQhdA2ACA3QAGgCAIgD").lf(["#bbbbbb","#6a6a6a"],[0,1],-49.4,17.3,-58.5,1.7).p("AnogrIi0BmIgBAlIC0hoIABgZIAAgK").lf(["#bbbbbb","#6a6a6a"],[0,1],-35.5,29.9,-49.2,6.3).p("AlagUIkRCjIAAAjICNhVIBvhDIAVgMIAAgi").lf(["#bbbbbb","#6a6a6a"],[0,1],-187.4,-21.8,0.6,28.5).p("AnpgIIi0BoIkJgbIAAgRIgYAOIy7h5IABgkICfhcIgLgBIkSCkIaLCjIERijIiOgNIgBAZ").lf(["#bbbbbb","#6a6a6a"],[0,1],-93.5,36.9,-48.8,11).p("Al7BKQgDgaAPgWIhvBDQAvAKA0gd").lf(["#bbbbbb","#6a6a6a"],[0,1],-315.5,-3.7,-79,15.9).p("Egj2AANIaLClIAAgjI6LijIAAAh").lf(["#bbbbbb","#6a6a6a"],[0,1],-216.6,-7,-96.1,4.5).p("Egh5gA3IS7B5IAAgkIgBAAIy5h5IgBAk").lf(["#bbbbbb","#6a6a6a"],[0,1],-148.3,-1.7,-146.9,-14.6).p("A/Zi3IifBcIS5B5IABAAICvhnIy2h6IgUAM").lf(["#bbbbbb","#6a6a6a"],[0,1],-77.8,13.7,-86.5,-1.4).p("Au+BCIAYgOIABgTICWhWIAAgUIivBnIAAAAIAAAk").lf(["#bbbbbb","#6a6a6a"],[0,1],-134.3,6.6,-64.3,6.6).p("AumA0IAAARIEJAbIABglIkJgaIgBAT").lf(["#bbbbbb","#6a6a6a"],[0,1],-71.2,10.2,-71.2,-11.1).p("AsPg1IiWBWIEJAaIC0hmIkKgbIgdAR").lf(["#4b4e4d","#0c0705"],[0,1],142.7,26,184.8,50.2).p("AT7F1IKkA4IAxgoIqgg5Ig1Ap").lf(["#4b4e4d","#0c0705"],[0,1],163.1,6,199.3,42.2).p("AUwFMIKgA5IEoj/IqSgoIk2Du").lf(["#4b4e4d","#0c0705"],[0,1],279,167.6,150.5,39.2).p("AfQGFIAAYJIEol4IAA2QIkoD/").lf(["#4b4e4d","#0c0705"],[0,1],127.5,181.4,195.1,181.4).p("AT7dZIKkByIAAkhQlzAMkxhWIAAD5").p("AcGdaQAAALg3ABQg3AChNgKQhOgIg3gOQg3gOAAgLQAAgLA3gBQA3gBBOAJQBNAJA3AOQA3ANAAAL").lf(["#bbbbbb","#6a6a6a"],[0,1],142.3,186,179.8,186).p("AbPdCQg3gOhNgJQhOgJg3ABQg3ABAAALQAAALA3AOQA3AOBOAIQBNAKA3gCQA3gBAAgLQAAgLg3gN").lf(["#4b4e4d","#0c0705"],[0,1],269.8,191.4,125.3,46.9).p("AfQeOIAA4JIgxAoIAAT9IAAEhIAxg9").lf(["#bbbbbb","#6a6a6a"],[0,1],94.3,32.4,223.6,161.7).p("AefaqIAAz9Iqkg4IAATrQExBWFzgM").p("AdJJ/IobgtIAAgoIIbAtIAAAo").p("AYTReQAOgOAUAAQATAAANAOQAPANAAAUQAAAUgPANQgNAOgTAAQgUAAgOgOQgOgNAAgUQAAgUAOgN").lf(["#4b4e4d","#0c0705"],[0,1],132.6,59.6,186.5,59.6).p("AdJJXIobgtIAAAoIIbAtIAAgo").rf(["#4b4e4d","#0c0705"],[0,1],157.4,113.6,0,157.4,113.6,7.1).p("AYFR/QAAAUAOANQAOAOAUAAQATAAANgOQAPgNAAgUQAAgUgPgNQgNgOgTAAQgUAAgOAOQgOANAAAU").f().s("#333333").ss(0.1,1,1,3).p("AE7+uIA8AQIAATQIg8AvQjdAHjagIQC9AaBzBdIAAAmQAAACAAABQAAABAAAAQgEATh2AJQh6AJiugIQitgHh6gTQh7gTAAgVIAAgrQB4hSC/gLQlTgXlOg8IAAzHQKjgLKSAj").cp().p("AE7+uIAAUP").p("Ah8qgQhvgEhugI").p("AqQpPQABAMArALQAeAIAxAHQB6AUCtAHQCuAIB6gKQAwgDAdgFQAogHAFgK").p("AmZsyQARAAANAMQAMANAAASQAAARgMANQgNAMgRAAQgTAAgMgMQgNgNAAgRQAAgSANgNQAMgMATAA").cp().p("ACr8uIAAPMIw6hEIAAuwIQ6Ao").cp().p("AC0n/IAAgE").p("AkpAfQBFgxBLAFQCAALgNA1QgCAKgGAKIiBBOQgIADgGACQiIAtgUhGQgQgzBAgv").cp().p("Ai9CaQgCg3Bdg2QA4ghAEAn").p("AnogrIAAAKICOANIAAAiIgVAMQgPAWADAaQg0AdgvgKIiNBVI6LilIAAghIESikIALABIAUgMIS2B6IAAAUIAdgRIEKAb").cp().p("AnogrIi0BmIgBAlIC0hoIABgZ").p("AlagUIkRCjIAAAj").p("AneBdIBvhD").p("AqdBgIkJgbIAAgRIgYAOIy7h5IABgkICfhc").p("Egj2gAUIaLCj").p("Au+BCIAAgkIgBAAIy5h5").p("Au/AeIABAAICvhn").p("AumA0IABgTICWhW").p("AqcA7IkJga").p("AT7F1IA1gpIE2juIKSAoIAAWQIkoF4IgxA9IqkhyIAAj5IAAzr").cp().p("AT7F1IKkA4IAxgoIqgg5").p("AfQGFIEoj/").p("AfQGFIAAYJ").p("AeffLIAAkhQlzAMkxhW").p("AbPdCQA3ANAAALQAAALg3ABQg3AChNgKQhOgIg3gOQg3gOAAgLQAAgLA3gBQA3gBBOAJQBNAJA3AO").cp().p("AefGtIAAT9").p("AdJJXIAAAoIobgtIAAgoIIbAt").cp().p("AYFR/QAAgUAOgNQAOgOAUAAQATAAANAOQAPANAAAUQAAAUgPANQgNAOgTAAQgUAAgOgOQgOgNAAgU").cp();
	this.shape_1.setTransform(303.1,199.4);

	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#4b4e4d","#0c0705"],[0,1],-24.2,49.8,-12.8,7.2).p("ApxGXIgoAPIL4A2IBagiQgXgiABhUQkCAZkZgkIjNBOIgsAQ").lf(["#bbbbbb","#6a6a6a"],[0,1],-101,-21.3,-31.3,18.9).p("ApFGHQgVgjgGhSQAEg8AGhYQAFhPDjhSQAKgEALgDQASgGASgGQhqgBhAABQjTA+gcBvQgYDlA+A4IA3ADIAsgQ").lf(["#bbbbbb","#6a6a6a"],[0,1],-11.2,9.6,-11.2,38.3).p("ApgESQB2AYByAPQEZAkECgZQAAg+AOhaQAPhkC9hDQl0AGjygaQhIgIg9gMQjjBSgFBPQgGBYgEA8").lf(["#4b4e4d","#0c0705"],[0,1],-68,44.4,-47.9,32.9).p("ApFGHIDNhOQhygPh2gYQAGBSAVAj").lf(["#4b4e4d","#0c0705"],[0,1],-60.7,48.5,48.5,48.5).p("AqZG3IL4A2IAAgRIr4g2IAAAR").lf(["#4b4e4d","#0c0705"],[0,1],-4,-37.8,44.2,10.5).p("AHCnLQl1AtjhhMQgWDCghBsIJqAWQgDCPgfAcQAbgJAggJQAghegWlg").lf(["#4b4e4d","#0c0705"],[0,1],71.2,43.8,26.2,-34).p("AILHaICahOQBYkIhFhyQjDA4gZB6QgUD7BDAb").lf(["#bbbbbb","#6a6a6a"],[0,1],2.8,-26,53.2,24.3).p("AHcDEQAZh6DDg4Qh8gSiEgNQggAJgbAJQi9BDgPBkQgOBaAAA+QgBBUAXAiQAFAIAGAEIFHAUQhDgbAUj7").lf(["#eaeaea","#c8c8c8"],[0,1],-23.3,-9,41.5,-9).p("AGfimIpqgWQAABlgeBIQDyAaF0gGQAfgcADiP").lf(["#4b4e4d","#0c0705"],[0,1],-36.6,-10.2,-20.3,-10.2).p("AjpgPQAehIAAhlQgrCMg/gGQgSAGgSAGQgLADgKAEQA9AMBIAI").lf(["#4b4e4d","#0c0705"],[0,1],-4,54.2,22.3,44.5).p("ABfHcIAAARIBlgnQgGgEgFgIIhaAi").f().s("#333333").ss(0.1,1,1,3).p("AqoGUQg+g4AYjlQAchvDTg+QBAgBBqABQA/AGAriMQAhhsAWjCQDhBMF1gtQAWFgggBeQCEANB8ASQBFByhYEIIiaBOIlHgUIhlAnIr4g2IAAgRIAogPIg3gD").cp().p("ApFGHIgsAQ").p("AqZGmIL4A2IBagiQgXgiABhUQkCAZkZgkIjNBO").p("ApFGHQgVgjgGhSQAEg8AGhYQAFhPDjhSQAKgEALgDQASgGASgG").p("ApfESQB1AYByAP").p("ACjFEQAAg+AOhaQAPhkC9hDQl0AGjygaQhIgIg9gM").p("ABfHtIAAgR").p("AjLi8IJqAWQgDCPgfAcQAbgJAggJ").p("AHcDEQgUD7BDAb").p("AK4ASQjDA4gZB6").p("AC5G6QAFAIAGAE").p("AjLi8QAABlgeBI");
	this.shape_2.setTransform(136.7,91.6);

	this.shape_3 = new Shape();
	this.shape_3.graphics.lf(["#4b4e4d","#0c0705"],[0,1],86.6,-188.6,234.7,-188.6).p("APp9WQAPAHASAFQCnA1HJAmQAeADAgACIAAg0Qreg5gthdIAAA0QAKAXAyAT").lf(["#976e3a","#74502e"],[0,1],116.8,-196.2,270.2,-155.1).p("AOt+0QAtBdLeA5IE1iYIvigtIhfAvQAAAAABAA").lf(["#976e3a","#6d452c"],[0,1],104.9,-117.6,133.2,-166.6).p("AQK5nIgBA5IJwAcIABjdQnJgming1IAADj").lf(["#976e3a","#74502e"],[0,1],-227.7,-204.3,350.4,-49.4).p("APp5pQzfhe43g5ItZDLQLXBrL1BNQAYADAaACQUSCFVpAvIJSlCQgsgEgsgFIAAANIk1CZIAAACIhAgCIABipIpwgcIABg5QgRgBgQgB").lf(["#4b4e4d","#0c0705"],[0,1],-91.4,-20.7,60.9,-108.7).p("ABdraILzkiIAAiUQgZgBgZgBIAAArIkJCDIm4DYIAAAy").lf(["#4b4e4d","#0c0705"],[0,1],-247.7,-86.6,45.5,-86.6).p("ABdsMMgjUgDeIAAAnIFIAhIeMDIIAAgy").lf(["#976e3a","#74502e"],[0,1],-215.1,-101.3,26.8,-101.3).p("AIVvkI/5imIh5gIIoaCoMAjUADeIG4jY").lf(["#4b4e4d","#0c0705"],[0,1],-254.2,-135.9,616.8,-78.1).p("ANQyQQEeAOEiALQAxACAyABIAAhQQ1pgv0SiFQgagCgYgDQr1hNrXhrIAABQQDWAfDZAdQAwAHAwAGQCjAVClAUQAaADAaADQD1AeD4AZQBDAIBDAGQO8BiPqA0QAZABAZAB").lf(["#4b4e4d","#0c0705"],[0,1],-442,223.8,271.2,-188).p("ANQyQIAACUIrzEiI+MjIIAAFEIA0AGMAyLAF+IAAudQkigLkegO").lf(["#4b4e4d","#0c0705"],[0,1],-295.4,46.4,44.5,-149.7).p("AMeySQvqg0u8hiIAAA1IlcBpIf5CmIEJiDIAAgr").lf(["#4b4e4d","#0c0705"],[0,1],168.6,-118.4,168.6,-220.4).p("AZ67vIgBDdIgBCpIBAACIAAgCIAAmBQgggCgegD").lf(["#4b4e4d","#0c0705"],[0,1],127.3,-170.8,231.8,-198.9).p("Aa47qIE1iYIAAg0Ik1CYIAAA0").lf(["#976e3a","#674229"],[0,1],89.4,-161.4,202.2,-161.4).p("Aa47qIAAGBIE1iZIAAgNIAAlzIk1CY").lf(["#4b4e4d","#0c0705"],[0,1],84.5,-80.8,200.4,-147.7).p("EAhFgYGIpSFCIAABQIEpihIEpihIAAhQ").lf(["#4b4e4d","#0c0705"],[0,1],172.1,223.7,172.1,-48.6).p("AXzx0IAAeOIEpluIAA7BIkpCh").lf(["#4b4e4d","#0c0705"],[0,1],164.9,75.4,164.9,-296.3).p("AWQx3IAAOdIAAaoIAABsIBjARIAAq4QgXgHgWgIIAAgyIAtg4IAA+OQgygBgxgC").lf(["#976e3a","#74502e"],[0,1],191.8,101.1,227.7,38.7).p("AXzMaIgtA4QAWAHAXAIQCOAwCbAgQAwALAwAJQBGAMBHAJQCIATCRAJIF7nSQl/iInegcIgkAsIkpFu").lf(["#4b4e4d","#0c0705"],[0,1],127.7,95.6,253.8,95.6).p("AXGOEQAWAIAXAHQCOAwCbAhQAWAFAWAEQBrAWByAOQB7AQCCAHIAAgyQiRgJiIgTQhHgJhGgMQgwgJgwgLQibggiOgwQgXgIgWgHIAAAy").lf(["#4b4e4d","#0c0705"],[0,1],169.2,205.4,169.2,37.6).p("AXzOTIAAK4IEplbIAAjSIAAg6QibghiOgw").lf(["#4b4e4d","#0c0705"],[0,1],107,151.3,208.5,151.3).p("AccTwIkpFbIhjgRIAAhsIktFIQhyCEB/A5QBwAxBOhRILdtnQAXghADgaQhygOhrgWIgsAxIAADS").lf(["#4b4e4d","#0c0705"],[0,1],278.2,108.9,251.4,82.1).p("EAqdAIkIl7HSIAAAyIF7nSIAAgy").lf(["#4b4e4d","#0c0705"],[0,1],-209.7,59.1,-209.7,-88).p("Egh3gWcIAAGyIFIh8IAAkNQilgUijgV").lf(["#4b4e4d","#0c0705"],[0,1],-253.1,-79.7,-165.9,-130).p("Egh3gPqIIaioIB5AIIFchpIAAg1QhDgGhDgIIohDQIlIB8").lf(["#4b4e4d","#0c0705"],[0,1],-202.1,209.9,-202.1,-68.8).p("Egh3gPDIAAeDIAAABIF8jiIAAhWIAAzhIg0gGIAAlEIlIgh").lf(["#4b4e4d","#0c0705"],[0,1],-196.7,11.4,-196.7,-316.6).p("Egh3gPqIAAmyQgwgGgwgHMAAAAk8IAAAdIBgAQIAA+DIAAgn").lf(["#4b4e4d","#0c0705"],[0,1],-284.1,-55.7,-110.3,-156.1).p("A8vxmIIhjQQj4gZj1geQgagDgagDIAAEN").lf(["#4b4e4d","#0c0705"],[0,1],-271.4,92,-144.2,92).p("A77LfIl8DiIAAgBIhggQIAAgdImHDaQhuBRBaA3QBbA3BUhFIQCpaQBOguh5g0QgsgShHAZIicBXIAABW").f().s("#333333").ss(0.1,1,1,3).p("APp9VQgygUgKgXIAAg0QgBAAAAAAIBfgvIPiAtIAAA0IAAFzQAsAFAsAEIAABQIkpChIAAbBIAkgsQHeAcF/CIIAAAyIl7HSQiCgHh7gQQgDAagXAhIrdNnQhOBRhwgxQh/g5ByiEIEtlIIAA6oMgyLgF+IAAThICchXQBHgZAsASQB5A0hOAuIwCJaQhUBFhbg3Qhag3BuhRIGHjaMAAAgk8QjZgdjWgfIAAhQINZjLQY3A5TfBeQAQABARABIAAjjQgSgFgPgH").cp().p("AQK9KQCnA1HJAmQAeADAgACIAAg0Qreg5gthd").p("Aa48eIE1iY").p("AQK5mIgBA4IJwAcIABjd").p("EgqGgY1QLXBrL1BNQAYADAaACQUSCFVpAvIJSlC").p("Aft4PIAAANIk1CZ").p("Aa41nIhAgCIABip").p("ABdsMIAAAyILzkiIAAiUQgZgBgZgBIAAArIkJCDIm4DY").cp().p("ABdsMMgjUgDeIAAAnIFIAhIeMDI").p("AIVvkI/5imIh5gIIoaCo").p("ANQyQQEeAOEiALQAxACAyABIAAhQ").p("EgjXgWpQAwAHAwAGQCjAVClAUQAaADAaADQD1AeD4AZQBDAIBDAGQO8BiPqA0").p("A8vuhIAAFDIA0AG").p("AWQjaIAAud").p("AyI0oIAAA1IlcBp").p("Aa41pIAAmB").p("Aa47qIE1iY").p("AXzx0IEpih").p("AXzx0IAAeOIEplu").p("AWQXPIAABrIBjARIAAq4QgXgHgWgIIAAgyIAtg4").p("AXGNSQAWAHAXAIQCOAwCbAgQAwALAwAJQBGAMBHAJQCIATCRAJIF7nS").p("AXzOTQCOAwCbAhQAWAFAWAEQBrAWByAO").p("EAkiAQoIAAgy").p("AXzZLIEplbIAAjSIAAg6").p("AccQeIAsgx").p("Egh3gWcIAAGyIFIh8IAAkN").p("A0O01IohDP").p("Egh3gPDIAAeDIAAABIF8jiIAAhW").p("EgjXAOTIAAAdIBgAQ");
	this.shape_3.setTransform(271.6,303.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,543.2,506);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#999999").p("EAuLgeYMhcVAAAMAAAA8xMBcVAAAMAAAg8x").f().s("#000000").ss(1,1,1,3).p("EAuLgeYMAAAA8xMhcVAAAMAAAg8xMBcVAAA").cp();
	this.shape.setTransform(295.5,194.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,591,389);