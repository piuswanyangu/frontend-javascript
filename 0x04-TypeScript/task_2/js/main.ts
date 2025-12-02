// Write a function isDirector:
// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:
// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks
// /teacher and directors interface

interface Teacher {
    workTeacherTask(): string;
}

interface Director {
    workDirectorTasks(): string;
}

// check if employee is a director
export  function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// function to execute the correct work method
export function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)){
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTask();
    }
}