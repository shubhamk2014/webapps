// // console.log("hello world")

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>keydown and animation</title>
//     <style>
//         .container{
//             width: 100%;
//             height: 100px;
//             background-color: green;
//         }
//         .box{
//             background-color: greenyellow;
//             width: 100px;
//             height: 100px;
//             position: relative;
//             animation-name: sk;
//             animation-duration: 1s;
//             animation-iteration-count: 3;
//             animation-timing-function:ease-in-out;
//             animation-delay: 2s;
//             animation-fill-mode:forwards;
//             animation-direction: alternate;

//             /* shorthand for animation */
//             /* animation: sk1 3s ease-in 2s 3 normal forwards; */

//         }
//         @keyframes sk {
//             /* from{
//                 top: 0px;
//                 left: 0px;
//             }
//             to{
//                 top: 100px;
//                 left: 100px;
//             } */
//             0%{
//                 width: 10px;
//                 height: 10px;
//                 top: 0px;
//                 left: 0px;
//             }
//             20%{
//                 width: 50px;
//                 height: 50px;
//                 top: 0px;
//                 left: 5px;
//             }
//             40%{
//                 width: 100px;
//                 height: 100px;
//                 top: 0px;
//                 left: 10px;
//             }
//             60%{
//                 width: 150px;
//                 height: 150px;
//                 top: 0px;
//                 left: 15px;
//             }
//             80%{
//                 width: 200px;
//                 height: 200px;
//                 top: 0px;
//                 left: 20px;
//             }
//             100%{
//                 width: 250px;
//                 height: 250px;
//                 top: 0px;
//                 left: 20px;
//             }
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="box"></div>
//     </div>

// </body>
// </html>`);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



