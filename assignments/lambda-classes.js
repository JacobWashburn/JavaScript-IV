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
   grade(student, subject) {
      return `${student} receives a perfect score on ${subject}! Congratulations!`;
   }
}

class Student extends Person {
   constructor(attr) {
      super(attr);
      this.previousBackground = attr.previousBackground,
         this.className = attr.className,
         this.favSubjects = attr.favSubjects
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
}