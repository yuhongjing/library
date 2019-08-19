/**
 * @file sidebar file
 * @author yuhongjing
 */
// 手册
const schoolFile = require('./sidebar/notebook/school.js');
// 源码
const loadshFile = require('./sidebar/code/loadsh.js');
const webpackFile = require('./sidebar/code/webpack.js');
// 日常记录
const articleFile = require('./sidebar/blog/article.js');
const starmanFile = require('./sidebar/blog/starman.js');
const toolsFile = require('./sidebar/blog/tools.js');
const commandFile = require('./sidebar/blog/command.js');
// 知识整理
const webFile = require('./sidebar/knowledge/web.js');
const backendFile = require('./sidebar/knowledge/backend.js');
const databaseFile = require('./sidebar/knowledge/database.js');
const algorithmFile = require('./sidebar/knowledge/algorithm.js');
const structureFile = require('./sidebar/knowledge/structure.js');
const designFile = require('./sidebar/knowledge/design.js');
const networkFile = require('./sidebar/knowledge/network.js');
const hardFile = require('./sidebar/knowledge/hard.js');
const systemFile = require('./sidebar/knowledge/system.js');
// 读书日记
const technologyFile = require('./sidebar/readbook/technology.js');

module.exports = {
    '/notebook/school/': schoolFile,

    '/blog/article/': articleFile,
    '/blog/starman/': starmanFile,
    '/blog/tools/': toolsFile,
    '/blog/command/': commandFile,

    '/knowledge/web/': webFile,
    '/knowledge/backend/': backendFile,
    '/knowledge/database/': databaseFile,
    '/knowledge/algorithm/': algorithmFile,
    '/knowledge/structure/': structureFile,
    '/knowledge/design/': designFile,
    '/knowledge/network/': networkFile,
    '/knowledge/hard/': hardFile,
    '/knowledge/system/': systemFile,

    '/code/loadsh/': loadshFile,
    '/code/webpack/': webpackFile,

    '/readbook/technology/': technologyFile
  }