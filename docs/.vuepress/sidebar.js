/**
 * @file sidebar file
 * @author yuhongjing
 */
// 手册
const schoolFile = require('./sidebar/school.js');
// 源码
const loadshFile = require('./sidebar/loadsh.js');
// 日常记录
const articleFile = require('./sidebar/article.js');
const starmanFile = require('./sidebar/starman.js');
const toolsFile = require('./sidebar/tools.js');
const commandFile = require('./sidebar/command.js');
// 知识整理
const webFile = require('./sidebar/web.js');
const backendFile = require('./sidebar/backend.js');
const databaseFile = require('./sidebar/database.js');
const algorithmFile = require('./sidebar/algorithm.js');
const structureFile = require('./sidebar/structure.js');
const designFile = require('./sidebar/design.js');
const networkFile = require('./sidebar/network.js');
const hardFile = require('./sidebar/hard.js');
const systemFile = require('./sidebar/system.js');
// 读书日记
const technologyFile = require('./sidebar/technology.js');

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

    '/readbook/technology/': technologyFile
  }