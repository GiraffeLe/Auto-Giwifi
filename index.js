const getRequest = require('./src/getRequest')
const args = process.argv.slice(2)
const userInfo = {
    //请在此处填入你的账号和密码
    username : args[0],
    password : args[1],
    userMac : " "
}
if (args.length > 2 && args[2]) {
    var BaseURL = "http://" + args[2]
  } else {
    // 未设置认证吴福气地址时，默认地址
    var BaseURL = "http://10.53.1.3"
  }
var url = BaseURL+"/gportal/web/login"
var headers = {
    //注释掉这个会提示"userName is empty"
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.5.1.4 Safari/537.36"
}

getRequest(url,headers,userInfo,BaseURL);
