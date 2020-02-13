---
title: JS实现
---

# 组合模式-JS

* [员工类型](#员工类型)

## 员工类型

公司有不同职位员工，他们虽然工作的内容不同，但是他们拥有一些相同的信息，例如都有薪资信息、姓名信息等。他们共同组成了公司的组织架构。

```js
class Developer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;  
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  develop() {
    // 专属开发职员的方法
  }
}

class Designer {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getRoles() {
    return this.roles;
  }

  design() {
    // 专属设计职员的方法
  }
}

class Organization {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    let netSalary = 0;

    this.employees.forEach(employee => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}

// 客户端
// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000

```

