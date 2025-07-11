class University{
    constructor(name){
        this.name = name;
        this.departments = [];
    }

    addDepartment(department){
        this.departments.push(department);
        console.log(`Department "${department}" added to ${this.name}.`);
    }

    removeDepartment(department){
        const index = this.departments.indexOf(department);
        if(index !== -1){// Check if the department exists
            this.departments.splice(index, 1);
            console.log(`Department "${department}" removed from ${this.name}.`);
        }else{
            console.log(`Department "${department}" not found in ${this.name}.`);
        }
    }

    displayDepartments(){
        console.log(`Departments in ${this.name}:`);
        if(this.departments.length === 0){
            console.log("No departments available.");
        }else{
            this.departments.forEach((department, index) => {
                console.log(`${index + 1}. ${department} `);
            });
        }
    }
}


const university = new University('ABC University');

university.displayDepartments(); 

university.addDepartment('Science');
university.addDepartment('Mathematics');
university.addDepartment('Physics');
university.displayDepartments();

university.removeDepartment('Mathematics');
university.displayDepartments();

university.removeDepartment('Chemistry');
