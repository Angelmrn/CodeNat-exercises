class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    getAnualSalary(){
        return this.salary * 12;
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }

    getAnualSalary(){
        const base = super.getAnualSalary();
        const bonus = 0.1;
        console.log("Bonus 10% for managers");
        return (bonus * base) + base
    }
}

const manager1 = new Manager("Alice", 5000, "HR");
console.log(manager1.name + " on the department " + manager1.department + " has an annual salary of " + manager1.getAnualSalary());

const manager2 = new Manager("Bob", 6000, "IT");
console.log(manager2.name + " on the department " + manager2.department + " has an annual salary of " + manager2.getAnualSalary());