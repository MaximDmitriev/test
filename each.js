// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

function func(){

    var each = function(startArr, f){return f(startArr)};
    var arr2 = [64, 49, 36, 25, 16];
    var myFunc = function(a){
        var newArr = [];
        for (var i = 0; i < a.length; i++) {
            newArr[i]=Math.sqrt(a[i]);
        }
        return newArr;
    }
    var ans =each(arr2, myFunc);
    
    return ans;
    }
    
    
    module.exports = func;