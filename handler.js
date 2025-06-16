
const sumation = require('./sum');
const reqestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`

        <html>
        <head>
            <title>Practice 1</title>
        </head>
        <body>
        <h1>welcome to calculator Page</h1>
            <nav style="background-color: #f2f2f2; padding: 10px;">
                <ul style="list-style-type: none; margin: 0; padding: 0; overflow: hidden;">
                    <li style="display: inline;"><a href="/calculator">Calculator</a></li>
                </ul>
            </nav>
        
        </body>
        </html>
        
       `);
       
      return  res.end();
    }else if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head>
            <title>Calculator</title>
        </head>
        <body>
        <h1>Calculator Page</h1>
        <form action="/result" method="POST">
            <input type="number" name="num1" placeholder="enter first number">
            <input type="number" name="num2" placeholder="enter second number">
            <input type="submit" value="submit">
        </form>
        </body> 
        </html>
        `);
        return res.end();
    }else if (req.url === '/result' && req.method === 'POST') {
        sumation(req, res);
        // return res.end();   sumation function madhe return res.end() vaprl asl tr 
        // tya function la use kartana dusrya file madhi double return res.end() vapru naka 
        // becouse ha error yeto {Error " ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client "

    }
    
    else{
        res.write('<head><title>My 404 Page</title></head>');
        res.write('<h1>page not found 404</h1>');
        res.end();
    }
}

module.exports = reqestHandler