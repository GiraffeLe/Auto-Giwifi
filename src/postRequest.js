const axios = require("axios")

function postData(msg, ivv, headers, sign) {
    let url = "http://10.53.1.3/gportal/web/authLogin?round=" + Math.round(Math.random() * 1000);
    axios.post(url,
        {
            data: msg,
            iv: ivv
        },
        {headers: headers})
        .then(Response => {
            console.log(Response.data);
            queryAuthState(headers, sign);
        })
}

function queryAuthState(headers, sign) {
    let url = "http://10.53.1.3/gportal/web/queryAuthState";
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