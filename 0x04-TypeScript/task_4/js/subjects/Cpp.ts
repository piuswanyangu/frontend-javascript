/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // declaration merging: adding a new optional field to teacher
    export interface Teacher {
        experienceTeachingC?: number
    }
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingC) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}