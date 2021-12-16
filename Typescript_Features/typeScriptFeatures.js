var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        return "Animal moved ".concat(distanceInMeters, "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(height, weight, isInRedBook) {
        var _this = _super.call(this) || this;
        _this.height = height;
        _this.weight = weight;
        _this.isInRedBook = isInRedBook;
        _this.canLiveAtHome = { canLiveAtHome: true };
        _this.isInRedBook = isInRedBook;
        return _this;
    }
    Dog.prototype.setAnimalData = function (animalData) {
        var obj = JSON.stringify(animalData);
        this.animalData = "Animal data is ".concat(obj, ", height: ").concat(this.height, ", weight: ").concat(this.weight);
    };
    Dog.prototype.getAnimalData = function () {
        return this.animalData;
    };
    Dog.prototype.calculateTaxes = function () {
        if (typeof this.height === 'number' && typeof this.weight === 'number') {
            return this.height * this.weight * 0.1;
        }
        return -1;
    };
    return Dog;
}(Animal));
var dog = new Dog(10, 20, false);
dog.setAnimalData({
    typeOfAnimal: 'Dog',
    name: 'Jack',
});
console.log(dog.move(10));
console.log(dog.canLiveAtHome);
console.log(dog.calculateTaxes());
console.log(dog.getAnimalData());
