// CODE here for your Lambda Classes
class Person {
   constructor(attr) {
      this.name = attr.name,
         this.location = attr.location,
         this.age = attr.age
   }
   speak() {
      return `Hello my name is ${this.name}, and I am from ${this.location}.`;
   }
}

class Instructor extends Person {
   constructor(attr) {
      super(attr);
      this.specialty = attr.specialty,
         this.favLanguage = attr.favLanguage,
         this.catchPhrase = attr.catchPhrase
   }
   demo(subject) {
      return `Today we are learning about ${subject}`;
   }
   gradeStudent(student, subject) {
      if (student.grade >= 70) { return student.readyToGraduate() }
      else {
          let grader = Math.floor(Math.random() * 30) - 10;
          student.grade += grader
          if (grader == 20) {
             console.log(this.grade(student, subject))
          } else {
             console.log(`${student.name} got a ${grader} on their ${subject} assignment.`)
          };
          console.log(`Their grade is now ${student.grade}`)
         return this.gradeStudent(student, subject)
      };
   }
   grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}! Congratulations!`;
   }

}

class Student extends Person {
   constructor(attr) {
      super(attr);
      this.previousBackground = attr.previousBackground,
         this.className = attr.className,
         this.favSubjects = attr.favSubjects, 
         this.grade = attr.grade,
         this.projects = attr.projects
   }
   listsSubjects(array) {
      array.forEach(element => {
         console.log(element)
      });
   }
   PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
   }
   sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
   }
   readyToGraduate() {
      if (this.grade >= 70) {
         return `${this.name} is ready to Graduate!`
      } else {
         return `${this.name} hasn't reached a high enough grade to graduate yet. Keep working!`
      }
   }
}

class ProjectManager extends Instructor {
   constructor(attr) {
      super(attr);
      this.gradClassName = attr.gradClassName,
         this.favInstructor = attr.favInstructor
   }
   standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`
   }
   debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
   }
}

const instructor1 = new Instructor({
   name: 'Joseph Hemmingway',
   location: 'Ireland',
   age: 45,
   specialty: 'React',
   favLanguage: 'Javascript',
   catchPhrase: 'You only live once!'
})

let student1 = new Student({
   name: 'Holly Beckinsworth',
   location: 'Washington',
   age: 20,
   previousBackground: 'Waitressing, HTML, CSS',
   className: 'WEB25',
   projects: ["Web Design", "CSS Principles", "JavaScript Principles"],
   favSubjects: ['Math', 'Web Design', 'Biology'],
   grade: 0,
})


const pm = new ProjectManager({
   name: 'Tilly McPherson',
   location: 'Ireland',
   age: 32,
   gradClassName: 'WEB18',
   favInstructor: 'Disco Steve'
})

let projectSelector = (student) => student.projects[Math.floor(Math.random() * student.projects.length)]

// console.log(student1.readyToGraduate());
// console.log(instructor1.gradeStudent(student1, "WEb design"));
// console.log(student1.grade);
// console.log(student1.readyToGraduate());
// console.log(pm.debugsCode(student1, projectSelector(student1)));
console.log(student1.listsSubjects(student1.favSubjects));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();