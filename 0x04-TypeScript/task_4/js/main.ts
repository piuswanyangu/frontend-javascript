

// 1 export constants for eah subject
export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java();
export const react = new Subjects.React()

// 2 export a teacher with experienceTeachinC= 10
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
}

// 3 cpp logs 
console.log("C++");
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// 4 java logs
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// 5 react logs
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());