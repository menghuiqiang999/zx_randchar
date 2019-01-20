###getRandChar 产生一个随机字符串

从以下字符串中，随机产生一个指定位数的字符串
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

安装

    npm install zx_randchar

用例

    const getRandChar = require("zx_randchar");
    const randChar = getRandChar(16);
    console.log(randChar);

注意：指定的位数必须大于等于1，如果小于1，则返回undefined

