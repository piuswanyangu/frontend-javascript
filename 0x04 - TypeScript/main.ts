// Write an interface named Student that accepts the following elements:
export interface Student{
    firstName: string
    lastName: string
    age: number
    location: string
}

// Create two students, and 

 const student1: Student = {
     firstName: "Michael",
     lastName: "Olunga",
     age: 15,
     location: "Machakos"
 }

 const student2: Student = {
    firstName: "Hellen",
    lastName: "Akinyi",
    age: 17,
    location:"Narok"
 }

 // create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];
// creating the table elements
const table = document.createElement("table");
table.border = "1";

// loop through students and row
studentsList.forEach((student) => {
    const row = document.createElement("tr")

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// append the table to the DOM
document.body.appendChild(table)