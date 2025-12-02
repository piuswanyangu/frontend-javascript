// Write a function isDirector:
// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:
// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks
// /teacher and directors interface

// --- Employee Interfaces ---

interface Employee {
  workTeacherTasks(): void;
  salary: number;
  // Discriminant property for type checking
  role: 'Director' | 'Teacher' | 'Employee';
}

interface Director extends Employee {
  workDirectorTasks(): void;
  role: 'Director';
  reportsTo: string;
}

interface Teacher extends Employee {
  role: 'Teacher';
  subject: string;
}

// --- Work Functions ---

function workDirectorTasks(): void {
    console.log('Getting to director tasks');
}

function workTeacherTasks(): void {
    console.log('Getting to work');
}

// --- Type Predicate ---

/**
 * Type predicate: Narrows the type of 'employee' to 'Director'.
 */
export function isDirector(employee: Employee): employee is Director {
    return employee.role === 'Director';
}

// --- Factory ---

function createEmployee(salary: number): Director | Teacher {
    if (salary > 500) {
        return {
            salary: salary,
            role: 'Director',
            reportsTo: 'CEO'
        } as Director;
    } else {
        return {
            salary: salary,
            role: 'Teacher',
            subject: 'Math'
        } as Teacher;
    }
}

// --- Main Function ---

function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        // TypeScript knows this is a Director
        return employee.workDirectorTasks();
    } else {
        // Must be a Teacher by exclusion
        return employee.workTeacherTasks();
    }
}

// --- Execution ---

console.log('--- Executing for Teacher (Salary 200) ---');
executeWork(createEmployee(200));

console.log('\n--- Executing for Director (Salary 1000) ---');
executeWork(createEmployee(1000));