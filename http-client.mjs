import https from "https";

const endpoint = "https://eokcmuatrpolseg.m.pipedream.net";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(data.toString())
    })
})

const body = JSON.stringify( {
    firstName: "thariq",
    lastName: "maulana"
});

request.write(body);
request.end();