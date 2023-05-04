# delOrigin
### 参考：https://developer.chrome.com/docs/extensions/
### 介绍 
这是一个按照chrome拓展开发文档开发的一个简易插件，可以用来删除Origin请求头，并修改user—agent请求头。申请了两项权限，storage用来存储用户是否开启插件这个选项，declarativeNetRequestWithHostAccess是v3中规定的一个api，用来重写请求。规则在rules_1.json中，background.js中写了一些存储用户是否开启，应用rule的代码。
### 使用
下载该仓库，在拓展程序页面打开开发者模式，然后选择加载已解压的拓展程序选项。
### 注意事项
目前实现的功能为在请求url中检测到“balabala”即删除Origin，并修改user-agent为pan.baidu.com，如需自定义请依据文档修改rule文件。rule中的resourceTypes属性可能会让某些符合的url不被该插件修改，比如 img，font等，使用者可以参考chrome的文档来自行选择。
