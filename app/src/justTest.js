// let EUtil = require('./EUtil.js');
let deviceWidth = device.width;
let deviceHeight = device.height;
// requestScreenCapture();
//click(deviceWidth / 2, 1670);
console.log("开始")
function clickInvestMulti() {
    let myTeam = className("android.view.View").text("（50/50人）").findOnce();
    console.log("t我靠满人", myTeam);

}

clickInvestMulti();

console.log("结束")

function getScreenImg() {
    let screenPic = captureScreen();
    console.log(screenPic);
    sleep(100);
    if (screenPic == null || typeof (screenPic) == "undifined") {
        toastLog("截图失败,退出脚本");
        exit();
    } else {
        return screenPic;
    }
}