
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // Add new attribute via declaration merging
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingReact) {
                return "No available teacher";
            }

            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
