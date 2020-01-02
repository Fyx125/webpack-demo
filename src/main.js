/*
项目入口文件
 */

import './css/index.css'
import './css/index1.less'
import './css/index2.scss'
import 'bootstrap/dist/css/bootstrap.css'


//使用es6语法  大部分需要babel编译才能使用
/*
需要安装两套关于babel的包
  npm i babel-core babel-loader babel-plugin-transform-runtime -D
  npm i babel-preset-env babel-preset-stage-0 -D
 */
class Person {
    //静态属性  可以通过类名直接访问的属性
    static info = {name: 'zs', age: 18}
}
console.log(Person.info);
/*
 npm i vue -S
 默认情况下webpack无法打包.vue文件  需要安装相关loader
 npm i vue-loader vue-template-compiler -D
 */
/*
在node中，
引入模块：
    var 变量名 = require('模块标识符')
向外暴露成员的形式：
    module.exports = {}   和 exports

在ES6中，
导入和导出模块方式：
    import 模块名称 from '模块标识符'
    export default {}  和 export
export default {} 在一个模块中只能暴露一次  可以用任意的变量名来接收
export 在一个模块中可以多次暴露，向外暴露的成员，只能用{}的形式接收 使用别名接收时 用as取别名
在一个模块中可以同时使用 export default {} 和 export
 */