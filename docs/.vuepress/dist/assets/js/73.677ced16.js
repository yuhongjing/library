(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{223:function(_,v,e){"use strict";e.r(v);var t=e(2),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"mysql开发规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql开发规范"}},[_._v("#")]),_._v(" MySQL开发规范")]),_._v(" "),e("p",[_._v("MySQL开发规范，将不断更新。")]),_._v(" "),e("h2",{attrs:{id:"数据库对象命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库对象命名规范"}},[_._v("#")]),_._v(" 数据库对象命名规范")]),_._v(" "),e("h3",{attrs:{id:"数据库对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库对象"}},[_._v("#")]),_._v(" 数据库对象")]),_._v(" "),e("p",[_._v("命名规范的对象是指数据库SCHEMA、表TABLE、索引INDEX、约束CONSTRAINTS等命名约定")]),_._v(" "),e("h3",{attrs:{id:"数据库对象命名原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库对象命名原则"}},[_._v("#")]),_._v(" 数据库对象命名原则")]),_._v(" "),e("ul",[e("li",[_._v("命名使用具体意义的英文词汇，词汇以"),e("code",[_._v("下划线(_)")]),_._v("分隔")]),_._v(" "),e("li",[_._v("命名只能使用英文字母、数字、下划线")]),_._v(" "),e("li",[_._v("避免使用MySQL的保留字如：call、group等")]),_._v(" "),e("li",[_._v("所有数据库对象使用小写字母")])]),_._v(" "),e("h3",{attrs:{id:"数据库命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库命名规范"}},[_._v("#")]),_._v(" 数据库命名规范")]),_._v(" "),e("ul",[e("li",[_._v("数据库名不能超过30个字符")]),_._v(" "),e("li",[_._v("数据库命名必须为项目英文名称或有意义的简写")]),_._v(" "),e("li",[_._v("数据库创建时必须添加默认字符集和校对规则子句。默认字符集为UTF8(已迁移"),e("code",[_._v("dumbo")]),_._v("的使用"),e("code",[_._v("utf8mb4")]),_._v(")")]),_._v(" "),e("li",[_._v("命名应使用小写")])]),_._v(" "),e("h3",{attrs:{id:"表命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表命名规范"}},[_._v("#")]),_._v(" 表命名规范")]),_._v(" "),e("ul",[e("li",[_._v("同一个模块的表尽可能使用相同的前缀，表名称尽可能表达含义")]),_._v(" "),e("li",[_._v("多个单词以"),e("code",[_._v("下划线(_)")]),_._v("分隔")]),_._v(" "),e("li",[_._v("表名不能超过30个字符")]),_._v(" "),e("li",[_._v("普通表名以"),e("code",[_._v("t_")]),_._v("开头，表示为table，命名规则为"),e("code",[_._v("t_模块名")]),_._v("(或有意义的简写)，例如"),e("code",[_._v("t_user")])]),_._v(" "),e("li",[_._v("临时表(运营、开发或数据库人员临时用作临时数据采集用的中间表)，临时表以"),e("code",[_._v("tmp")]),_._v("为前缀和"),e("code",[_._v("8位时间")]),_._v("为后缀，命名规则为"),e("code",[_._v("tmp_模块名_8位时间")]),_._v("，例如"),e("code",[_._v("tmp_test_user_20191201")])]),_._v(" "),e("li",[_._v("备份表(DBA备份用作保存历史数据的中间表)，备份表以"),e("code",[_._v("bak")]),_._v("为前缀和"),e("code",[_._v("8位时间")]),_._v("为后缀，命名规则为"),e("code",[_._v("bak_模块名_8位日期")]),_._v("，例如"),e("code",[_._v("bak_user_20191201")])]),_._v(" "),e("li",[_._v("命名应使用小写")])]),_._v(" "),e("h3",{attrs:{id:"字段命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段命名规范"}},[_._v("#")]),_._v(" 字段命名规范")]),_._v(" "),e("ul",[e("li",[_._v("字段命名需要表示其实际含义的英文单词或简写，单词间用"),e("code",[_._v("下划线(_)")]),_._v("进行分隔")]),_._v(" "),e("li",[_._v("各表之间相同意义的字段必须"),e("code",[_._v("同名")])]),_._v(" "),e("li",[_._v("字段名不能超过30个字符")])]),_._v(" "),e("h3",{attrs:{id:"用户命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户命名规范"}},[_._v("#")]),_._v(" 用户命名规范")]),_._v(" "),e("ul",[e("li",[_._v("生产使用的用户命名格式为"),e("code",[_._v("code_应用")])]),_._v(" "),e("li",[_._v("只读用户的命名格式为"),e("code",[_._v("read_应用")])])]),_._v(" "),e("h2",{attrs:{id:"数据库对象设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库对象设计规范"}},[_._v("#")]),_._v(" 数据库对象设计规范")]),_._v(" "),e("h3",{attrs:{id:"存储引擎的选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎的选择"}},[_._v("#")]),_._v(" 存储引擎的选择")]),_._v(" "),e("p",[_._v("如无特殊需求，必须使用"),e("code",[_._v("innondb")]),_._v("存储引擎")]),_._v(" "),e("h3",{attrs:{id:"字符集的选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符集的选择"}},[_._v("#")]),_._v(" 字符集的选择")]),_._v(" "),e("p",[_._v("如无特殊要求，必须使用"),e("code",[_._v("utf8")]),_._v("或"),e("code",[_._v("utf8mb4")])]),_._v(" "),e("h3",{attrs:{id:"表设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表设计规范"}},[_._v("#")]),_._v(" 表设计规范")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("不同应用间所对应的数据库表之间的关联应尽可能减少，不允许使用外键对表之间进行关联，确保"),e("code",[_._v("组件对应的表之间的独立性")]),_._v("，为系统或表结构的重构提供可能性")])]),_._v(" "),e("li",[e("p",[_._v("表设计的角度不应该针对整个系统进行数据库设计，而应该根据"),e("code",[_._v("系统架构中组件划分")]),_._v("，针对每个组件所处理的业务进行数据库设计")])]),_._v(" "),e("li",[e("p",[_._v("表必须要有PK"),e("code",[_._v("(primary key)")])])]),_._v(" "),e("li",[e("p",[_._v("一个字段只表示一个含义")])]),_._v(" "),e("li",[e("p",[_._v("表不应该有重复列")])]),_._v(" "),e("li",[e("p",[_._v("禁止使用复杂数据类型(数组，自定义等)")])]),_._v(" "),e("li",[e("p",[_._v("需要"),e("code",[_._v("join")]),_._v("的字段(连接键)，数据类型必须保持绝对一致，避免隐式转换")])]),_._v(" "),e("li",[e("p",[_._v("设计应至少满足"),e("code",[_._v("第三范式")]),_._v("，尽量减少数据冗余。一些特殊场景允许反范式化设计，但在项目评审时需要对冗余字段的设计给出解释")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("TEXT")]),_._v("字段必须放在独立的表中，用PK与主表关联。如无特殊需要，禁止使用TEXT、BLOB字段")])]),_._v(" "),e("li",[e("p",[_._v("需要定期删除(或者转移)过期数据的表，通过"),e("code",[_._v("分表")]),_._v("解决")])]),_._v(" "),e("li",[e("p",[_._v("单表字段数不要太多，建议最多不要大于50个")])]),_._v(" "),e("li",[e("p",[_._v("MySQL在处理大表时，性能就开始明显降低，所以建议单表的物理大小限制在"),e("code",[_._v("16GB")]),_._v("，表中数据控制在"),e("code",[_._v("2000W")]),_._v("内")])]),_._v(" "),e("li",[e("p",[_._v("如果数据量或数据增长在前期规划时就较大，那么在设计评审时就应加入"),e("code",[_._v("分表策略")])])]),_._v(" "),e("li",[e("p",[_._v("无特殊需求，严谨使用"),e("code",[_._v("分区表")])])])]),_._v(" "),e("h3",{attrs:{id:"字段设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段设计规范"}},[_._v("#")]),_._v(" 字段设计规范")]),_._v(" "),e("h4",{attrs:{id:"int"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#int"}},[_._v("#")]),_._v(" INT")]),_._v(" "),e("p",[_._v("如无特殊需要，存放整型数字使用"),e("code",[_._v("UNSIGNED INT")]),_._v("型。整型字段后的数字代表显示长度")]),_._v(" "),e("h4",{attrs:{id:"datetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datetime"}},[_._v("#")]),_._v(" DATETIME")]),_._v(" "),e("p",[_._v("所有需要精确到时间(时分秒)的字段均使用"),e("code",[_._v("DATETIME")]),_._v("，不要使用"),e("code",[_._v("TIMESTAMP")]),_._v("类型")]),_._v(" "),e("h4",{attrs:{id:"varchar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#varchar"}},[_._v("#")]),_._v(" VARCHAR")]),_._v(" "),e("p",[_._v("所有动态长度字符串，全部使用VARCHAR类型，类似于"),e("code",[_._v("状态")]),_._v("等"),e("code",[_._v("有限类别")]),_._v("的字符，也使用可以比较明显表达出实际意义的字符串，而不应该使用"),e("code",[_._v("INT")]),_._v("之类的数字来代替；"),e("code",[_._v("VARCHAR(N)")]),_._v("，N表示的是"),e("code",[_._v("字符数")]),_._v("而不是字节数。比如"),e("code",[_._v("VARCHAR(255)")]),_._v("，最大可存储255个字符(字符包括英文字母、汉子、特殊字符等)。")]),_._v(" "),e("p",[_._v("但N应尽可能小，因为MySQL一个表中所有的VARCHAR字段最大长度是"),e("code",[_._v("65535")]),_._v("个字节，且存储字符个数由所选字符集决定。如"),e("code",[_._v("UTF8")]),_._v("存储一个字符最大要"),e("code",[_._v("3")]),_._v("个字节，那么VARCHAR在存放占用三个字节长度的字符时不应超过"),e("code",[_._v("21845")]),_._v("个字符。")]),_._v(" "),e("p",[_._v("同时，在进行排序和创建临时表一类的"),e("code",[_._v("内存操作")]),_._v("时，会使用N的长度申请内存。(如无特殊需要，原则上单个VARCHAR型字段不允许超过"),e("code",[_._v("255")]),_._v("个字符)")]),_._v(" "),e("h4",{attrs:{id:"text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[_._v("#")]),_._v(" TEXT")]),_._v(" "),e("p",[_._v("仅仅当字符数量可能超过"),e("code",[_._v("20000")]),_._v("个的时候，才可以使用TEXT类型来存放字符类数据，因为所有MySQL数据库都会使用"),e("code",[_._v("UTF8")]),_._v("字符集。")]),_._v(" "),e("p",[_._v("所有使用TEXT类型的字段必须和原表进行分拆，与原表主键单独组成另外一个表进行存放。")]),_._v(" "),e("p",[_._v("如无特殊需要，严禁开发人员使用MEDIUMTEXT、TEXT、LONGTEXT类型")]),_._v(" "),e("h4",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[_._v("#")]),_._v(" 其他")]),_._v(" "),e("ul",[e("li",[_._v("对于精确浮点型数据存储，需要使用"),e("code",[_._v("DECIMAL")]),_._v("，严禁使用"),e("code",[_._v("FLOAT")]),_._v("和"),e("code",[_._v("DOUBLE")])]),_._v(" "),e("li",[_._v("如无特殊需要，严禁开发人员使用"),e("code",[_._v("BLOB")]),_._v("类型")]),_._v(" "),e("li",[_._v("如无特殊需要，字段建议使用"),e("code",[_._v("NOT NULL")]),_._v("属性，可用默认值代替"),e("code",[_._v("NULL")])]),_._v(" "),e("li",[_._v("自增字段类型必须是"),e("code",[_._v("整型")]),_._v("且必须为"),e("code",[_._v("UNSIGNED")]),_._v("，推荐类型为"),e("code",[_._v("INT")]),_._v("或"),e("code",[_._v("BIGINT")]),_._v("，并且自增字段必须是"),e("code",[_._v("主键")]),_._v("或者"),e("code",[_._v("主键的一部分")])])]),_._v(" "),e("h3",{attrs:{id:"索引设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引设计规范"}},[_._v("#")]),_._v(" 索引设计规范")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("索引必须创建在"),e("code",[_._v("索引选择性")]),_._v("较高的列上，选择性的计算方式为：")]),_._v(" "),e("p",[e("code",[_._v("select count(distinct(col_name))/count(*) from tb_name;")])]),_._v(" "),e("p",[_._v("如果结果小于"),e("code",[_._v("0.2")]),_._v("，则不建议在此列上创建索引，否则大概率会拖慢SQL执行")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("组合索引")]),_._v("的首字段，必须在where条件中，对于确定需要组成组合索引的多个字段，建议将选择性高的字段靠前放")])]),_._v(" "),e("li",[e("p",[_._v("禁止使用外键")])]),_._v(" "),e("li",[e("p",[_._v("TEXT类型字段如果需要创建索引，必须使用前缀索引")])]),_._v(" "),e("li",[e("p",[_._v("单张表的索引数量理论上应控制在"),e("code",[_._v("5")]),_._v("个以内。经常有大批量插入、更新操作表，应尽量少键索引")])]),_._v(" "),e("li",[e("p",[_._v("ORDER BY、GROUP BY、DISTINCT的字段需要添加在索引的后面，形成覆盖索引")])]),_._v(" "),e("li",[e("p",[_._v("尽量使用Btree索引，不要使用其他类型索引")])])]),_._v(" "),e("h3",{attrs:{id:"约束设计规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约束设计规范"}},[_._v("#")]),_._v(" 约束设计规范")]),_._v(" "),e("ul",[e("li",[_._v("PK应该是有序并且无意义的，尽量由开发人员自定义，且尽可能短，使用自增序列")]),_._v(" "),e("li",[_._v("表中除PK外，还存在唯一性约束的，可以在数据库中创建以"),e("code",[_._v("uidx_")]),_._v("作为前缀的唯一约束索引")]),_._v(" "),e("li",[_._v("PK字段不允许更新")]),_._v(" "),e("li",[_._v("禁止创建外键约束，外键约束由应用控制")]),_._v(" "),e("li",[_._v("如无特殊需要，所有字段必须添加非空约束，即"),e("code",[_._v("NOT NULL")])]),_._v(" "),e("li",[_._v("如无特殊需要，所有字段必须有默认值")])]),_._v(" "),e("h3",{attrs:{id:"sql编写规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql编写规范"}},[_._v("#")]),_._v(" SQL编写规范")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("尽量避免使用"),e("code",[_._v("select *")]),_._v("，join语句使用"),e("code",[_._v("select *")]),_._v("可能导致只需要访问索引即可完成的查询需要回表取数")])]),_._v(" "),e("li",[e("p",[_._v("严禁使用"),e("code",[_._v("select * from table")]),_._v("而不加任何where条件")])]),_._v(" "),e("li",[e("p",[_._v("MySQL中的TEXT类型字段存储的时候不是由其他普通字符类型的字符组成记录存放在一起，而且读取效率本身也不如普通字段快。如果不需要取回TEXT字段，又使用了"),e("code",[_._v("select *")]),_._v("，会让完成相同功能的sql所消耗的io量大很多，而且增加部分的io效率也更低下")])]),_._v(" "),e("li",[e("p",[_._v("在取出字段上可以使用相关函数，但应尽可能避免出现"),e("code",[_._v("now()")]),_._v("、"),e("code",[_._v("rand()")]),_._v("、"),e("code",[_._v("sysdate()")]),_._v("、"),e("code",[_._v("current_user()")]),_._v("等不确定结果的函数，在where条件中的过滤条件字段上严禁使用任何函数，包括数据类型转换函数")])]),_._v(" "),e("li",[e("p",[_._v("所有连接的SQL必须使用"),e("code",[_._v("Join ... On ...")]),_._v("方式进行连接，而不允许直接通过普通的where条件关联方式。外连接的SQL语句，可以使用"),e("code",[_._v("Left Join On")]),_._v("的Join方式，且所有外连接一律写成"),e("code",[_._v("Left Join")]),_._v("，而不要使用"),e("code",[_._v("Right Join")])])]),_._v(" "),e("li",[e("p",[_._v("分页查询语句全部都需要带有排序条件，除非应用方明确要求不要使用任何排序来随机展示数据")])]),_._v(" "),e("li",[e("p",[_._v("WHERE条件中严禁在索引列上进行数学运算或函数运算")])]),_._v(" "),e("li",[e("p",[_._v("用"),e("code",[_._v("in() / union")]),_._v("替换or，并注意in的个数小于300")])]),_._v(" "),e("li",[e("p",[_._v("严禁使用%前缀进行模糊前缀查询，如:")]),_._v(" "),e("p",[e("code",[_._v("select id, val from table where val like '%name';")])]),_._v(" "),e("p",[_._v("可以使用%模糊后缀查询，如:")]),_._v(" "),e("p",[e("code",[_._v("select id, val from table where val like 'name%';")])])]),_._v(" "),e("li",[e("p",[_._v("严禁使用")]),_._v(" "),e("p",[e("code",[_._v("INSERT ON DUPLICATE KEY UPDATE、REPLACE INTO、INSERT IGNORE")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);