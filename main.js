var MilkBottles = 0;

function milkClick(number){
	MilkBottles = MilkBottles + number;
	document.getElementById("milks").innerHTML = MilkBottles;
};

var Upgrades = 0;

function buyUpgrade(){
	var upgradeCost = Math.floor(10*Math.pow(1.1, Upgrades));
	if (MilkBottles > upgradeCost) {
		Upgrades += 1;
		MilkBottles -= upgradeCost;
		document.getElementById('milks').innerHTML = MilkBottles;
		document.getElementById('upgrades').innerHTML = Upgrades;
	};
	var nextCost = Math.floor(10*Math.pow(1.1, Upgrades));
	document.getElementById('cost').innerHTML = nextCost;
};

window.setInterval(function() {
	milkClick(Upgrades);
}, 1000);
