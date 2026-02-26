// interface 1
interface Person {
    name : string
    age : number
}

// extending the interface
interface Employee extends Person {
    sprinterTitle : string ;
    salary : number ; 
}

// object with Employee interface
const worker : Employee = {
    name : 'Amarah;' ,
    age : 19 ,
    sprinterTitle : 'Quality Engineer Sprinter',
    salary : 4100
} ; 

// function to display the details
function showEmployee (emp : Employee) {
    console.log('Employee Name :', emp.name) ;
    console.log('Age :', emp.age) ;
    console.log('Job Title :', emp.sprinterTitle) ;
    console.log('Salary :', emp.salary) ;
}

showEmployee(worker) ;
