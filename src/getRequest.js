const axios = require('axios')
const cheerio = require('cheerio');
const cryptoEncode = require('./cryptoEncode')
const postData = require('./postRequest')


function getRequest(baseUrl, headers, userInfo) {
    let url = baseUrl+"/gportal/web/login"
    axios.get(url, {
        headers: headers
    })
        .then(Response => {
            const $ = cheerio.load(Response.data);
            let iv = $("#iv").val();
            let sign = decodeURIComponent($("input[name='sign']").val());

            let getStr = $("#frmLogin").serialize();
            let strArr = getStr.split("&");

            //strArr[3] = strArr[3] + userInfo.userMac;
            strArr[10] = strArr[10] + userInfo.username;
            strArr[11] = strArr[11] + userInfo.password;

            let oriData = strArr.join("&");
            let msg = cryptoEncode(oriData, iv);
            let dataObj = {
                "ivv": iv,
                "msg": msg,
                "sign": sign
            }
            setTimeout(function () {
                postData(baseUrl,headers,dataObj)
            },3000)
        }).catch(Error => {
        console.log("获取网页内容时错误:", Error)
    })
}

module.exports = getRequest

