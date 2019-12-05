/**
 * @file 字数统计
 * @author yuhongjing(yuhongjing@baidu.com)
 * @Date 2019-12-05 16:27:06
*/

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './docs');
const fileNameFilters = ['.vuepress', '.DS_Store', 'README.md'];

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

function getWordNumber() {
    fileDisplay(filePath);
    return amountWordNumber;
}

module.exports = getWordNumber;

