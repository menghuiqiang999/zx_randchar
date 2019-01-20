/**
 * Created by Administrator on 2019/1/20.
 */
/**
 * @param len {integer } must > 1
 * @return getRandChar - rand char , len digit
 * @example
 *
 * var len = getRandChar(16);
 *
 */
function getRandChar(len) {
    var chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (len >= 1){
        var maxPo = chars.length;
        var randChar = '';
        for (var i =0; i< len ;i ++ ) {
            randChar += chars.charAt(Math.floor(Math.random()*maxPo));
        }
        return randChar;
    }
}
module.exports = getRandChar;