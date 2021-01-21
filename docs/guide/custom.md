### 自定义节点

snaker的自定义节点可完成流程的全自动编排。只需要在自定义节点模型中配置处理类即可。

自定义节点的处理类有两种方式：

- `实现IHandler接口`

只需要配置`clazz`属性即可

- `普通java类`

需要设置`clazz` `methodName` `args` `var`

自定义节点的执行不需要外部触发，只要抵达节点立即执行绑定的类进行处理。并记录历史任务，处理类返回值保存在历史任务的变量字段中