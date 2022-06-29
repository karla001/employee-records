var employees = [];

function Employee(name,title,salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log('Name: '+this.name+', Job Title: '+this.title+', Salary: '+this.salary+', Status: '+this.status);
    }
};

var sam = new Employee('Sam','manager','50k');
var john = new Employee('John','assistant to the manager','40k');
var becky = new Employee('Becky','secret assistant to the manager','25k');

employees.push(sam,john,becky);

employees.forEach(employee=>{employee.printEmployeeForm()})
