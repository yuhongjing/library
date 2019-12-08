/**
 * @file 统计字数并替换文件
 * @author yuhongjing(yuhongjing@baidu.com)
 * @Date 2019-12-05 16:27:06
*/

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './docs');
const fileNameFilters = ['.vuepress', '.DS_Store', 'README.md'];

let amountArticleNumber = 0; // 博文全部文章
let amountWordNumber = 0; // 博文全部文字
// 遍历文件夹及子文件夹和子文件
function fileDisplay(filePath) {
    const files = fs.readdirSync(filePath);
    files.forEach(fileName => {
        if (fileFilters(fileName)) {
            const fileDir = path.join(filePath, fileName);
            const stats = fs.statSync(fileDir);
            const isFile = stats.isFile();
            const isDir = stats.isDirectory();
            if (isFile) {
                const buffer = fs.readFileSync(fileDir);
                amountArticleNumber++;
                amountWordNumber += String(buffer).length;
            }
            if (isDir) {
                fileDisplay(fileDir);
            }
        }
    });
}

// 过滤文件
function fileFilters(fileName) {
    return !fileNameFilters.includes(fileName);
}
function replaceFile() {
    const configFilePath = path.resolve(__dirname, './docs/.vuepress/config.js');
    const buffer = String(fs.readFileSync(configFilePath));
    const reg = /小站目前有\d*篇文章共\d*字，继续努力/;
    const newBuffer = buffer.replace(reg, `小站目前有${amountArticleNumber}篇文章共${amountWordNumber}字，继续努力`);
    fs.writeFileSync(configFilePath, newBuffer);
}
console.log('============================');
fileDisplay(filePath);
replaceFile();

