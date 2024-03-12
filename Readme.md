# 介绍

这是一个能够自动登录河南理工大学的校园网GiWifi的脚本

具体分析内容见 [博客文章](https://giraffele.site/post/%E6%B2%B3%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6GiWifi%E8%AE%A4%E8%AF%81%E8%BF%87%E7%A8%8B%E5%88%86%E6%9E%90%E5%8F%8A%E6%A8%A1%E6%8B%9F%E7%99%BB%E5%BD%95/)

## 实现流程
1. `Cheerio`获取登陆页面的表单项的值
2. 然后使用`Crypto-js`进行本地加密处理.
3. 最后将加密好的数据以post请求发送至学校服务器

# 使用

**需要Node环境**

下载 dist文件夹中的 `index.js`文件

在`index.js`所在文件夹中

```
node index.js 你的账号 你的密码 认证服务器ip
```
```
node index.js 123456789 123456789 10.53.1.3
```
如果输入的账号密码正确,控制台会输出"认证成功,稍后跳转"

# Todo
目前此脚本仅仅能够完成简单的登录

需要改善的地方还有很多.

目前只适用于HPU(大概)
~~别的学校的认证的时候数据没有加密,直接就能抓到~~

# 开发

将代码下载到本地
```
git clone https://github.com/GiraffeLe/Auto-Giwifi
```

下载依赖(`axios,cheerio,crypto-js`和`ncc打包`)
```
npm install
```






