(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{160:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"动态规划（二）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划（二）","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态规划（二）")]),t._v(" "),s("h2",{attrs:{id:"通过两道题理解动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过两道题理解动态规划","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过两道题理解动态规划")]),t._v(" "),s("p",[t._v("第一题：给定一个数组，从中选择一堆不相邻的数，使之相加和最大。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("p",[s("code",[t._v("4 1 1 9 1")]),t._v(" return 13")]),t._v(" "),s("p",[t._v("第二题：给定一个"),s("strong",[t._v("非负")]),t._v("数组，以及一个"),s("strong",[t._v("正数")]),t._v(" S，从中选择一堆数，使之相加和为 S。如果有这样的一堆数，那么 return true，否则 return false。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("p",[s("code",[t._v("3 34 4 12 5 2")]),t._v(" S = 9, return true.")]),t._v(" "),s("h3",{attrs:{id:"求最大值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求最大值","aria-hidden":"true"}},[t._v("#")]),t._v(" 求最大值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("0")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("4")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")])])])]),t._v(" "),s("p",[t._v("首先看第一题，要求一个最大值，可以理解为求一个最优解。这类题是典型的动态规划题，最主要的是需要找到状态转移方程式。")]),t._v(" "),s("h4",{attrs:{id:"递推公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递推公式","aria-hidden":"true"}},[t._v("#")]),t._v(" 递推公式")]),t._v(" "),s("p",[t._v("我们假设函数 OPT(i) 代表从起点到 i 为止的最优解。比如 OPT(arr[5]) 代表当走到 arr[5] 时和的最大值，此时的最优解只由两种情况决定，那就是选择 arr[5] 时的情况以及不选 arr[5] 时的情况：")]),t._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                  / (选) arr[5] + OPT(3)\nOPT(arr[5]) = max\n                  \\ (不选) OPT(4)\n")])])]),s("p",[t._v("每个数都有选和不选两种情况：")]),t._v(" "),s("ol",[s("li",[t._v("当选择 arr[5] 时，由于选了 arr[5] 就不能选 arr[4] 了，因此此时的最大和为 arr[5] + OPT(3)；")]),t._v(" "),s("li",[t._v("当不选择 arr[5] 时，此时的最大和仍然为前 4 个数的最大和 OPT(4)。")])]),t._v(" "),s("p",[t._v("通过比较这两种情况选出一个最大值，就是 OPT(5) 的最优解。")]),t._v(" "),s("h4",{attrs:{id:"递推出口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递推出口","aria-hidden":"true"}},[t._v("#")]),t._v(" 递推出口")]),t._v(" "),s("p",[t._v("接下来就是初始化递推式，或者说寻找出口。")]),t._v(" "),s("ol",[s("li",[t._v("当 i == 0 时，OPT(i) = arr[0].")]),t._v(" "),s("li",[t._v("当 i == 1 时，OPT(i) = max(arr[0], arr[1]).")])]),t._v(" "),s("h4",{attrs:{id:"递归与非递归代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归与非递归代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归与非递归代码")]),t._v(" "),s("p",[t._v("递归代码：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rec_maxSum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("rec_maxSum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rec_maxSum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("非递归代码：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("dp_maxSum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"求指定和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求指定和","aria-hidden":"true"}},[t._v("#")]),t._v(" 求指定和")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("0")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("5")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("34")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")])])])]),t._v(" "),s("p",[t._v("S = 9.")]),t._v(" "),s("h4",{attrs:{id:"状态转移方程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态转移方程","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态转移方程")]),t._v(" "),s("p",[t._v("这道题需要找出数组中是否存在一堆数字加起来等于 S 的情况。和上道题类似的是，这里数组中的每一个数也都有选择和不选两种情况。")]),t._v(" "),s("p",[t._v("因此，假设函数 OPT(i, S) 为从起点到 i 为止距离 S 还需要相加的数，OPT(i, S) 的值也受两种情况的影响，一种是选择 arr[i]，一种是不选。")]),t._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                  / (选) OPT(arr[i - 1], S - arr[i])\nOPT(arr[i], S) = or\n                  \\ (不选) OPT(arr[i - 1], S)\n")])])]),s("p",[t._v("由于这里 S 也会随之变化，所以我们的状态方程加上了 S 这个参数：")]),t._v(" "),s("ol",[s("li",[t._v("当选择 arr[i] 时，此时 OPT(i, S) 中 S 变为 S - arr[i]，i 变成 i - 1。代表着 arr[i - 1] 这一位需要加的数是 S - arr[i]。")]),t._v(" "),s("li",[t._v("当不选择 arr[i] 时，此时 arr[i - 1] 这一位需要加的数还是 S。因此 OPT(arr[i], S) = OPT(arr[i - 1], S)。")])]),t._v(" "),s("h4",{attrs:{id:"状态转移方程出口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态转移方程出口","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态转移方程出口")]),t._v(" "),s("p",[t._v("这道题的出口有三种情况：")]),t._v(" "),s("ol",[s("li",[t._v("当 S == 0 时，说明存在这样的一堆数，此时 return true。")]),t._v(" "),s("li",[t._v("当 i == 0 时，说明找到底了也没有找到这样的一堆数，此时 return false。")]),t._v(" "),s("li",[t._v("当 arr[i] > S 时，由于规定了题目中数组为正整数，S 也为正整数，那么当数组中的一个元素大于 S，肯定不存在相加还能等于 S 的情况。此时 return false。")])]),t._v(" "),s("h4",{attrs:{id:"递归代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rec_sum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" S"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" S"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rec_sum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" S "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rec_sum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" S"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"非递归代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非递归代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 非递归代码")]),t._v(" "),s("p",[t._v("利用 DP 来实现非递归的写法，这时需要设计一个二维数组 dp[i][j]。二维数组的行代表数组的下标，列代表 0~S 的值，数组的值代表位于数组中第 i 个数能不能拼凑出 S == j 的情况，它是一个布尔值。")]),t._v(" "),s("p",[t._v("比如，dp[3][9]，代表数组中第 3 个数(即 4)，能不能拼凑出等于 9 的情况，答案是可以的。")]),t._v(" "),s("p",[t._v("又比如，dp[2][9](即 34)，能不能拼凑出 9 的情况，答案是不可以的。因为 34 > 9 了，数组中又全是正整数，再怎么加都不能加出 9 来。")]),t._v(" "),s("p",[t._v("同时，每一个元素都只能向右或者向下走。")]),t._v(" "),s("div",{staticClass:"language-plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("arr  |      0  1  2  3  4  5  6  7  8  9\n3    |   0  F  F  F  T  F  F  F  F  F  F\n34   |   1  T\n4    |   2  T\n12   |   3  T  \n5    |   4  T\n2    |   5  T\n")])])]),s("p",[t._v("另外，需要注意如何初始化这个二维数组：")]),t._v(" "),s("ol",[s("li",[t._v("由于当 S == 0 时，return true。那么数组的第一列全为 true。")]),t._v(" "),s("li",[t._v("当 i == 0 时，return false。那么数组的第一行全为 false。但是，当 arr[i] == S 时，此时为 true。")])]),t._v(" "),s("p",[t._v("这道题的返回值将是二维数组的最后一个数，即 arr[arr.length - 1][S]。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("dp_sum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" S"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" null "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("boolean")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("S "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// S == arr[i] 的情况")]),t._v("\n  dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 当 arr[i] > j 时，只有走不选这条路。")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" j"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dp"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[t._v("动态规划的出现是为了解决重叠子问题，即避免重复计算。")]),t._v(" "),s("li",[t._v("解决动态规划先找递推关系式，再初始化递推式，接着找出需要返回的结果。这三个要素一搞定，就有了代码的大致轮廓。")]),t._v(" "),s("li",[t._v("找递推式，初始化递推式，找返回值都有一种做题的感觉在里面，因此多练题应该会变得顺手得多。")])])])}],!1,null,null,null);r.options.__file="dp2.md";a.default=r.exports}}]);