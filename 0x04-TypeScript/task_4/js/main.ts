// create and export a constant cpp for Cpp Subjects
// create and export a constant java for Java Subjects
// create and export a constant react for React Subjects
// create and export one Teacher object cTeacher with experienceTeachingC = 10
// for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
// for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
// for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return

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