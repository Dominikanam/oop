function Phone(brand, price, color, size) {
    this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
	this.model;

}

Phone.prototype.printInfo = function() {
	console.log(`The phone brand is ${this.brand}, the model is ${this.model}, color is ${this.color}, the price is ${this.price} and the size is ${this.size}.`);
}

Phone.prototype.setModelName = function(model) {
	this.model = model;
}

const iPhone6S = new Phone("Apple", 2250, "silver", 6);
const samsungGalaxyS6 = new Phone("Samsung", 999, "blue", 6);
const onePlusOne = new Phone("OnePlus", 5678, "red", 6);

iPhone6S.setModelName('6s');
samsungGalaxyS6.setModelName('galaxy s6');
onePlusOne.setModelName('one');

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
