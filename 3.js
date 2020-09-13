//函数声明

//对象可通过字面量创建{}
//对象可以赋值给变量 数组项  或其他对象的属性

//为变量赋值一个新对象
var ninja={};
//向数组中增加一个新对象
ninjaArray.push({});
//给某个对象的属性赋值为一个新对象
ninja.data={};

//对象可以作为参数传递给函数
function hide(nija){
     ninja.visibility=false;
}
//创建一个新对象 作为参数传递给函数
hide({});


//对象可以作为函数的返回值
function returnNewNinja(){
    return{};
}

//对象能够具有动态创建和分配的属性。
var ninja={};
ninja.name="Hanzo";




// JavaScript不同于很多其他的编程语言， 几乎可以用函数来实现同样的事儿
//通过字面量创建
function ninjaFunction(){}

//赋值给变量，数组项或其他对象的属性
//为变量赋值一个新的函数
var ninjaFunction=function(){};
//向数组中增加一个新的函数
ninjaFunction.push(function(){});
//给某个对象属性赋值为一个新的函数
ninja.data=function(){};



//作为函数来传递
function call(ninjaFunction){
    ninjaFunction();
}
//一个新函数作为参数传递给函数
call(function(){});


//作为函数的返回值
function returnNewNinjaFunction(){
    //返回一个新函数
    return function(){};
}
//具有动态创建和分配的属性
var ninjaFunction=function(){};
ninjaFunction.nija="Hanzo";


//函数也是对象，唯一的特殊指出在于它是可调用的，即函数被调用以便执行某项动作。

//函数式编程可以让代码更容易测试，扩展及模块化。




//函数在编程语言中的值，就像例句字符串或数字的值。


//JavaScript提供了几种定义函数的方式，可以分为4类
//1.函数声明 和 函数表达式
function myFun(){return 1;}

//箭头函数
myArg=>myArg*2

//函数构造函数，一种不常使用的函数定义方式，能让我们以字符串形式动态构造一个函数，这样得到的函数是动态生成的。
new Function("a","b","return a + b")

//生成器函数， ES6新增功能
//能让我们创造不同于普通函数的函数，在应用执行过程中，这种函数能够退出再重新进入，在这些再进入之前保留函数内部变量的值。
//我们可以定义生成器版本的函数声明、函数表达式、函数构造函数。
function *myGen() {
    yield 1;
}





//函数声明和函数表达式


//独立的函数声明
function myFunctionDeclaration() {
    //内部函数声明
    function innerFunction(){}
}

//函数表达式作为变量声明赋值语句中的一部分
var myFunc=function(){};

myFun(function(){
    //函数表达式作为函数返回值
    return function(){};
});


(function namedFunctionExpression(){
    //作为函数调用的一部分，命名函数表达式会被立即调用
})();


// 函数表达式可以作为一元操作符的参数立即调用
+function(){}();
-function(){}();
!function(){}();
~function(){}();


//对于函数声明来说，函数名是强制性的
//对于函数表达式来说，函数名则完全是可选的


//如果一个函数表达式被赋值给了一个变量，我们可以用该变量来调取函数
var doingNothing=function(){};
doingNothing();

//如果它是另外一个函数的参数，我们可以在函数中通过相应的参数名来调用它
function dosomething(action){
    action();
}


//标准函数调用
myFunctionName(3);//一个能够计算得到函数的表达式，本例中是一个标识符

//函数表达式的立即调用
//立即调用函数表达式（LIFE）
(function(){}(3));//一个能够计算得到函数的表达式，本例中是一个函数表达式








