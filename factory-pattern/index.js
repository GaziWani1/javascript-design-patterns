function Developer(name){
    this.name = name;
    this.type = 'Developer';
}

function Tester(name){
   this.name = name;
   this.type = 'Tester';
}

function EmployeeFactory(){
   this.create = (name , type) => {
      switch(type){
        case 1:
            return new Developer(name)
        case 2:
            return new Tester(name)
      }
   }
}

function get(){
    console.log("Hi I am " + this.name + " And I am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Gazi" , 1))
employees.push(employeeFactory.create("Wani" , 2))

// nvoke a function immediately while explicitly specifying the value of this.
employees.forEach(emp => get.call(emp))