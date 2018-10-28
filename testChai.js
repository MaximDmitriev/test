function sum(a, b) {
	return (a + b) > 10;
}
sum(2,2);

let assert = require('chai').assert; 

describe("sum", function(){
	it("Проверяем результат на соответствие true", function(){
		assert.equal(sum(2,2), true)
	});
}); // тест не проходит

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe("num", function(){
	it("Проверяем значение переменной num на равенство 5", function(){
		assert.equal(num, 5)
	});
}); // тест проходит

var each = function(startArr, f){return f(startArr)};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

describe("each", function(){
	it("Проверяем значение функции each на тип данных", function(){
        assert.typeOf(each(arr2,myFunc), 'array')
	});
});
describe("each", function(){
	it("Проверяем значение функции each на на длину массива", function(){
        assert.lengthOf(each(arr2,myFunc), 5)
	});
}); //  тест проходит