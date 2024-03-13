const getRequest = require('./src/getRequest')
const args = process.argv.slice(2)
const userInfo = {
    username : args[0],
    password : args[1],
    //userMac : " ",     //计划移除,网页端认证似乎用不到这个
}

//如果未输入认证服务器IP,则使用默认IP
var baseUrl = "http://10.53.1.3";
if (args[2]!=null){
    baseUrl = "http://" + args[2];
}
const headers = {
    //注释掉这个会提示"userName is empty"
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.5.1.4 Safari/537.36"
}

getRequest(baseUrl,headers,userInfo);
