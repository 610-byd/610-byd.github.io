import{_ as w,r as x,a as u,c as d,b as m,w as f,v as _,t as o,d as y,F as i,e as c,o as t,p as S,f as k}from"./index-LxcPh9HD.js";const B=[{num:1,name:"马佐涵",grade:0},{num:2,name:"张潇予",grade:0},{num:3,name:"杨子睿",grade:0},{num:4,name:"丁玺腾",grade:0},{num:5,name:"翟雅荣",grade:0},{num:6,name:"王梦佳",grade:0},{num:7,name:"王子阳",grade:0},{num:8,name:"刘博凌",grade:0},{num:9,name:"丁宜冰",grade:0},{num:10,name:"张星辰",grade:0},{num:11,name:"薛奕洋",grade:0},{num:12,name:"张灵桥",grade:0},{num:13,name:"孟令瑶",grade:0},{num:14,name:"韩瑜章",grade:0},{num:15,name:"赵轩毅",grade:0},{num:16,name:"王峥",grade:0},{num:17,name:"贾济玮",grade:0},{num:18,name:"赵泽寰",grade:0},{num:19,name:"李芷漩",grade:0},{num:20,name:"谢易娜",grade:0},{num:21,name:"张智博",grade:0},{num:22,name:"刘舜华",grade:0},{num:23,name:"马翔",grade:0},{num:24,name:"曹华亭",grade:0},{num:25,name:"陈姝贝",grade:0},{num:26,name:"李婧璇",grade:0},{num:27,name:"王军",grade:0},{num:28,name:"常雨馨",grade:0},{num:29,name:"杜晨曦",grade:0},{num:30,name:"郝欣雨",grade:0},{num:31,name:"周兴",grade:0},{num:32,name:"燕禛",grade:0},{num:33,name:"李卿",grade:0},{num:34,name:"何易",grade:0},{num:35,name:"王子涵",grade:0},{num:36,name:"宋忻豫",grade:0},{num:37,name:"田谨赫",grade:0},{num:38,name:"吉星霖",grade:0},{num:39,name:"张洪睿",grade:0},{num:40,name:"薛星戈",grade:0},{num:41,name:"索嘉澳",grade:0},{num:42,name:"姚思明",grade:0},{num:43,name:"张馨月",grade:0},{num:44,name:"王紫涵",grade:0},{num:45,name:"魏兆骏",grade:0},{num:46,name:"屈睿东",grade:0},{num:47,name:"韩林荣轩",grade:0},{num:48,name:"李昱萱",grade:0},{num:49,name:"李俊霖",grade:0},{num:50,name:"昝瑛畦",grade:0},{num:51,name:"武韵涵",grade:0},{num:52,name:"杨祺",grade:0},{num:53,name:"么雨忱",grade:0},{num:54,name:"林轩",grade:0},{num:55,name:"尹婧琦",grade:0},{num:56,name:"段旻岑",grade:0},{num:57,name:"王欣竹",grade:0},{num:58,name:"段京辰",grade:0},{num:59,name:"王荣美",grade:0},{num:60,name:"张楷浩",grade:0},{num:61,name:"荣鑫宇",grade:0},{num:62,name:"杨紫煜",grade:0},{num:63,name:"王星程",grade:0}],V={setup(){const r=x(B),a=u(0),g=u(""),n=u(""),l=u(""),v=u(r.map(s=>s.name)),e=u(r.map(s=>s.num)),p=u(r.map(s=>s.grade));function h(){g.value>=0&&g.value<=r.length?(a.value=g.value-1,I()):alert("学号输入有误")}function I(){n.value=r[a.value].name}function b(){l.value>=0&&l.value?(p.value[a.value]=l.value,l.value="",g.value="",n.value=""):alert("成绩输入有误")}return{rawgrades:p,nums:e,names:v,arrnum:g,arrname:n,grades:l,index:a,fetcharrnum:h,handleInput:b}}},D=r=>(S("data-v-b539d7af"),r=r(),k(),r),F=D(()=>m("header",null,[m("h1",{class:"title"},"登分器")],-1)),K={class:"container"},U={class:"row"},A={class:"column"},C={class:"column"},E={class:"column"},L={contenteditable:"true"};function M(r,a,g,n,l,v){return t(),d(i,null,[F,m("main",null,[m("button",{onClick:a[0]||(a[0]=(...e)=>n.handleInput&&n.handleInput(...e))},"下一个"),f(m("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>n.arrnum=e),onInput:a[2]||(a[2]=(...e)=>n.fetcharrnum&&n.fetcharrnum(...e))},null,544),[[_,n.arrnum]]),m("p",null,"当前学生："+o(n.arrname),1),f(m("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=e=>n.grades=e),onKeyup:a[4]||(a[4]=y((...e)=>n.handleInput&&n.handleInput(...e),["enter"]))},null,544),[[_,n.grades]]),m("div",K,[m("div",U,[m("div",A,[(t(!0),d(i,null,c(n.nums,e=>(t(),d("p",null,o(e),1))),256))]),m("div",C,[(t(!0),d(i,null,c(n.names,e=>(t(),d("p",null,o(e),1))),256))]),m("div",E,[(t(!0),d(i,null,c(n.rawgrades,e=>(t(),d("p",L,o(e),1))),256))])])])])],64)}const T=w(V,[["render",M],["__scopeId","data-v-b539d7af"]]);export{T as default};
