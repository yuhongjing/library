/**
 * @file sidebar file
 * @author yuhongjing
 */
// 手册
const schoolFile = require('./sidebar/notebook/school.js');
const jsTricksFile = require('./sidebar/notebook/jsTricks.js');
const cssTricksFile = require('./sidebar/notebook/cssTricks.js');
const notebookAlgorithmFile = require('./sidebar/notebook/algorithm.js');
const diftersFile = require('./sidebar/notebook/difters.js');
// 源码
const loadshFile = require('./sidebar/code/loadsh.js');
const webpackFile = require('./sidebar/code/webpack.js');
const zeptoFile = require('./sidebar/code/zepto.js');
// 日常记录
const articleFile = require('./sidebar/blog/article.js');
const toolsFile = require('./sidebar/blog/tools.js');
const commandFile = require('./sidebar/blog/command.js');
const softwareFile = require('./sidebar/blog/software.js');
const blogOtherFile = require('./sidebar/blog/other.js');
// 知识整理
const mindmapFile = require('./sidebar/knowledge/mindmap.js');
const webFile = require('./sidebar/knowledge/web.js');
const backendFile = require('./sidebar/knowledge/backend.js');
const databaseFile = require('./sidebar/knowledge/database.js');
const algorithmFile = require('./sidebar/knowledge/algorithm.js');
const structureFile = require('./sidebar/knowledge/structure.js');
const designFile = require('./sidebar/knowledge/design.js');
const networkFile = require('./sidebar/knowledge/network.js');
const hardFile = require('./sidebar/knowledge/hard.js');
const systemFile = require('./sidebar/knowledge/system.js');
const configFile = require('./sidebar/knowledge/config.js');
const architectureFile = require('./sidebar/knowledge/architecture.js');
// 读书日记
const technologyFile = require('./sidebar/readbook/technology.js');
const literatureFile = require('./sidebar/readbook/literature.js');
const poetryFile = require('./sidebar/readbook/poetry.js');
const readbookOtherFile = require('./sidebar/readbook/other.js');

module.exports = {
    '/notebook/school/': schoolFile,
    '/notebook/jsTricks/': jsTricksFile,
    '/notebook/cssTricks/': cssTricksFile,
    '/notebook/algorithm/': notebookAlgorithmFile,
    '/notebook/difters/': diftersFile,

    '/blog/article/': articleFile,
    '/blog/tools/': toolsFile,
    '/blog/command/': commandFile,
    '/blog/software/': softwareFile,
    '/blog/other/': blogOtherFile,

    '/knowledge/mindmap/': mindmapFile,
    '/knowledge/web/': webFile,
    '/knowledge/backend/': backendFile,
    '/knowledge/database/': databaseFile,
    '/knowledge/algorithm/': algorithmFile,
    '/knowledge/structure/': structureFile,
    '/knowledge/design/': designFile,
    '/knowledge/network/': networkFile,
    '/knowledge/hard/': hardFile,
    '/knowledge/system/': systemFile,
    '/knowledge/config/': configFile,
    '/knowledge/architecture/': architectureFile,

    '/code/loadsh/': loadshFile,
    '/code/webpack/': webpackFile,
    '/code/zepto/': zeptoFile,

    '/readbook/technology/': technologyFile,
    '/readbook/literature/': literatureFile,
    '/readbook/poetry/': poetryFile,
    '/readbook/other/': readbookOtherFile
  }