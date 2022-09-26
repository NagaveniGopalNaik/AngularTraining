var eyeColor;
(function (eyeColor) {
    eyeColor[eyeColor["brown"] = 0] = "brown";
    eyeColor[eyeColor["black"] = 1] = "black";
    eyeColor[eyeColor["blue"] = 2] = "blue";
})(eyeColor || (eyeColor = {}));
;
console.log(eyeColor.brown);
console.log(eyeColor.black);
console.log(eyeColor.blue);
var flowers;
(function (flowers) {
    flowers[flowers["rose"] = 2] = "rose";
    flowers[flowers["lotus"] = 4] = "lotus";
})(flowers || (flowers = {}));
;
// var fwr = flowers.lotus;
console.log(flowers[flowers.rose]);
//# sourceMappingURL=enumeration.js.map