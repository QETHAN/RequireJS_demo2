{
    "appDir": "../www",
    "baseUrl": "js/lib",//baseUrl参照appDir
    "dir": "../www-build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    // "optimize": "none",

    // point to the shim config we set up before
    "mainConfigFile": "../www/js/app.js",

    //把所有依赖文件包括app.js都转化为一个文件：app.js;
    //注释后，只有app.js文件中的优化压缩代码
    //上边会把每个依赖文件 都进行压缩优化
    //运行 node r.js -o build.js
    "modules": [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            "name": "app"//app一定要事先存在，对应app.js
        }
    ]
}

/*运行效果：
Tracing dependencies for: app
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/app/main.js
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/app.js
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/lib/jquery.alpha.js
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/lib/jquery.beta.js
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/lib/jquery.js
Uglifying file: /Users/QETHAN/example-jquery-shim/www-build/js/lib/require.js

js/app.js
----------------
js/lib/jquery.js
js/lib/jquery.alpha.js
js/lib/jquery.beta.js
js/app/main.js
js/app.js


*/
