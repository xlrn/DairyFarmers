var MilkBottles = 0;

function milkClick(number){
	MilkBottles = MilkBottles + number;
	document.getElementById("milks").innerHTML = MilkBottles;
};

var Cows = 0;

function buyCow(){
	var CowCost = Math.floor(10*Math.pow(1.1, Cows));
	if (MilkBottles >= CowCost) {
		Cows += 1;
		MilkBottles -= CowCost;
		document.getElementById('milks').innerHTML = prettify(MilkBottles);
		document.getElementById('Cows').innerHTML = prettify(Cows);
	};
	var nextCost = Math.floor(10*Math.pow(1.1, Cows));
	document.getElementById('cost').innerHTML = prettify(nextCost);
};

window.setInterval(function() {
	milkClick(Cows);
}, 1000);


function save(){
	var save = {
		MilkBottles: MilkBottles,
		Cows: Cows
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.MilkBottles !== "undefined") MilkBottles = savegame.MilkBottles;
	if (typeof savegame.Cows !== "undefined") Cows = savegame.Cows;
}

function deleteSave(){
	localStorage.removeItem("save");
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
