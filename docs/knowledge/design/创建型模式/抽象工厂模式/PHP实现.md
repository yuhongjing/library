---
title: PHP实现
---

# 抽象工厂模式-PHP
* [数据库](#数据库)

## 数据库
就不能不换DB吗？

当一个普通的软件程序需要切换数据库时是非常痛苦的。

例如MySQL切换到Access数据库，工作量无疑是巨大的。

```php
<?php
// 用户表
class User {
  private $id = null;
  private $name = null;

  public function setId($id) {
    $this->id = $id;
  }
  public function getId($id) {
    return $this->id;
  }
  public function setName($name) {
    $this->name = $name;
  }
  public function getName($name) {
    return $this->id;
  }
}
// 部门表
class Department {
  private $id = null;
  private $name = null;

  public function setId($id) {
    $this->id = $id;
  }
  public function getId($id) {
    return $this->id;
  }
  public function setName($name) {
    $this->name = $name;
  }
  public function getName($name) {
    return $this->name;
  }
}

interface IUser {
  public function insert(User $user);
  public function getUser($id);
}
class SqlserverUser implements IUser {
  public function insert(User $user) {
    echo "往SQL Server中的User表添加一条记录\n";
  }
  public function getUser($id) {
    echo "根据id得到SQL Server中User表一条记录\n";
  }
}
class MySQLUser implements IUser {
  public function insert(User $user) {
    echo "往MySQL中的User表添加一条记录\n";
  }
  public function getUser($id) {
    echo "根据id得到MySQL中User表一条记录\n";
  }
}
interface IDepartment {
  public function insert(Department $department);
  public function getDepartment($id);
}
class SqlserverDepartment implements IDepartment {
  public function insert(Department $department) {
    echo "往SQL Server中的Department表添加一条记录\n";
  }
  public function getDepartment($id) {
    echo "根据id得到SQL Server中Department表一条记录\n";
  }
}
class MySQLDepartment implements IDepartment {
  public function insert(Department $department) {
    echo "往MySQL中的Department表添加一条记录\n";
  }
  public function getDepartment($id) {
    echo "根据id得到MySQL中Department表一条记录\n";
  }
}
// *************
// 采用抽象工厂模式
// *************
interface IFactory {
  public function CreateUser();
  public function CreateDepartment();
}
class SqlserverFactory implements IFactory {
  public function CreateUser() {
    return new SqlserverUser();
  }
  public function CreateDepartment() {
    return new SqlserverDepartment();
  }
}
class MySQLFactory implements IFactory {
  public function CreateUser() {
    return new MySQLUser();
  }
  public function CreateDepartment() {
    return new MySQLDepartment();
  }
}

// *************
// 采用简单工厂模式
// *************
// class DataBase {
//   private static $DB = 'Sqlserver';

//   public static function CreateUser() {
//     $user = self::$DB.'User';
//     // 通过反射来实例化
//     // $reflection = new ReflectionClass($user);
//     // return $reflection->newInstance();
//     // 直接通过变量来实例化
//     return new $user;
//   }
//   public static function CreateDepartment() {
//     $department = self::$DB.'Department';
//     $reflection = new ReflectionClass($department);
//     return $reflection->newInstance();
//   }
// }

// ***********************
// 采用抽象工厂模式-客户端代码
// ***********************
$user = new User();
$iu = (new SqlserverFactory()) -> CreateUser();
$iu->insert($user);
$iu->getUser(1);

$department = new Department();
$id = (new SqlserverFactory()) -> CreateDepartment();
$id->insert($department);
$id->getDepartment(1);

// ***********************
// 采用简单工厂模式-客户端代码
// ***********************
// $user = new User();
// $iu = DataBase::CreateUser();
// $iu->insert($user);
// $iu->getUser(1);

// $department = new Department();
// $id = DataBase::CreateDepartment();
// $id->insert($department);
// $id->getDepartment(1);
```

本例中，抽象工厂封装了Sqlserver和MySQL对于查询和插入的操作。