(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{523:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"模型操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型操作"}},[a._v("#")]),a._v(" 模型操作")]),a._v(" "),t("p",[a._v("通过"),t("code",[a._v("流程定义章节")]),a._v("的查询接口可以轻松获取到"),t("code",[a._v("Process")]),a._v("实体对象，该实体中的"),t("code",[a._v("model")]),a._v("属性就是流程图的对象表达形式了，可通过"),t("code",[a._v("getModel")]),a._v("方法获取"),t("code",[a._v("ProcessModel")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getModel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("流程模型")])]),a._v(" "),t("li",[t("code",[a._v("Start节点")])]),a._v(" "),t("li",[t("code",[a._v("name获取节点")])]),a._v(" "),t("li",[t("code",[a._v("类型获取所有节点")])]),a._v(" "),t("li",[t("code",[a._v("所有任务节点")])]),a._v(" "),t("li",[t("code",[a._v("后续一级节点集合")])])]),a._v(" "),t("h3",{attrs:{id:"流程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程模型"}},[a._v("#")]),a._v(" "),t("code",[a._v("流程模型")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("snaker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("ProcessModel")]),a._v("\n")])])]),t("p",[a._v("流程模型、流程定义的XML文件、流程图三种表现形式可互相转换，流程模型对象不仅包含了自身的属性（如："),t("code",[a._v("name")]),a._v(" "),t("code",[a._v("displayName")]),a._v(" "),t("code",[a._v("instanceUrl")]),a._v(" "),t("code",[a._v("expireTime")]),a._v(" "),t("code",[a._v("instanceNoClass")]),a._v(" ），同时也包含了所有节点模型对象以及它们的关系。")]),a._v(" "),t("h3",{attrs:{id:"start节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start节点"}},[a._v("#")]),a._v(" "),t("code",[a._v("Start节点")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("snaker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("StartModel")]),a._v("\n")])])]),t("p",[a._v("Start节点作为流程启动的入口，只有输出路由，其输入路由为空，可通过"),t("code",[a._v("getInputs")]),a._v("方法进行验证")]),a._v(" "),t("h3",{attrs:{id:"name获取节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name获取节点"}},[a._v("#")]),a._v(" "),t("code",[a._v("name获取节点")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NodeModel")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" nodeName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("根据节点的"),t("code",[a._v("name")]),a._v("属性获取到节点模型对象")]),a._v(" "),t("h3",{attrs:{id:"类型获取所有节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型获取所有节点"}},[a._v("#")]),a._v(" "),t("code",[a._v("类型获取所有节点")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getModels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("根据节点类型获取所有该类型的模型对象集合。常用于如下方式：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TaskModel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" taskModels "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" processModel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getModels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TaskModel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"所有任务节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所有任务节点"}},[a._v("#")]),a._v(" "),t("code",[a._v("所有任务节点")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TaskModel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTaskModels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("该方法获取有序的所有任务模型集合")]),a._v(" "),t("h3",{attrs:{id:"后续一级节点集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后续一级节点集合"}},[a._v("#")]),a._v(" "),t("code",[a._v("后续一级节点集合")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getNextModels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" clazz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("获取某个节点的后续一级节点集合，getNextModels是NodeModel的方法")])])}),[],!1,null,null,null);s.default=n.exports}}]);