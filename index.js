const Express = require('express');

const express = new Express();

function sendRequest(request,response)
{
    response.json({
        status:'ok',
    })
}

//route
express.get('/api/request',sendRequest)

//listening at 7000
express.listen(7000,'localhost',function()
{
    console.log("Server is running at",7000)
})