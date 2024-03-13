const axios = require("axios")

function postData(baseUrl, headers, Obj) {
    let url = baseUrl + "/gportal/web/authLogin?round=" + Math.round(Math.random() * 1000);
    axios.post(url,
        {
            data: Obj.msg,
            iv: Obj.ivv
        },
        {headers: headers})
        .then(Response => {
            console.log(Response.data);
            setTimeout(function () {
                queryAuthState(headers, Obj.sign, baseUrl)
            }, 2000)
        })
}

function queryAuthState(headers, sign, baseUrl) {
    let url = baseUrl + "/gportal/web/queryAuthState";
    axios.post(url, {
        "sign": sign,
    }, {
        headers: headers,
        responseType: "json",
    }).then(Response => {
        let obj = Response.data;
        console.log(obj);
    })
}

module.exports = postData