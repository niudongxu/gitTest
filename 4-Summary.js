//当函数调用时，除了传入在函数定义中显示声明的参数之外， 同事还传入两个隐式参数
//arguments 与 this
// - arguments 参数是传入函数的所有参数集合。具有length属性，表示传入参数的个数，通过arguments参数还可以获取那些与函数形参不匹配的参数。在非严格模式下，arguments对象是函数的别名，修改arguments对象会修改函数实参，可以通过严格模式避免修改函数实参。
//this表示函数上下文，即与函数调用相关联的对象。函数的定义方式和调用方式决定了this的取值




//函数的调用方式有4种
//-作为函数调用：skulk()。
//-作为方法调用：ninja.skulk()。
//-作为构造函数调用：new Ninja()。
//-通过apply与call方法调用：skulk.apply(ninja)或skulk.call(ninja)。


//函数的调用方式影响this的取值。
//-如果作为函数调用，在非严格模式下，this指向全局window对象；在严格模式下，this指向undefined。
//-作为方法调用，this通常指向调用的对象。
//-作为构造函数调用，this指向新创建的对象。
//通过call或apply调用，this指向call或apply的第一个参数。
//箭头函数没有单独的this值，this在箭头函数创建时确定。
//所有函数均可使用bind方法，创建新函数，并绑定到bind方法传入的参数上。 被绑定的函数与原始函数具有一致的行为。

