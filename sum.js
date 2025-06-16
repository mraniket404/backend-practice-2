const sumation = (req,res) => {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const BodyObject = Object.fromEntries(params);
        console.log(BodyObject);
        const num1 = parseInt(BodyObject.num1);
        const num2 = parseInt(BodyObject.num2);
        const sum = num1 + num2;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head>
            <title>Result page</title>
        </head>
        <body>
        <h1>Your Result is ${sum}</h1>
        </body>
        </html>
        `);
       return res.end();
    });


}


module.exports = sumation