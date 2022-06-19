class Students {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.scores = [];
  }
  // Creating Instance methods
  fullName() {
    return `Student Full name is ${this.firstName} ${this.lastName}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  averageScore() {
    //reduce is an array method for suming numbers
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }
}
let ahmad = new Students("ahmad", "karimi");
console.log(ahmad.fullName());
ahmad.addScore(4);
ahmad.addScore(5);
ahmad.addScore(100);
console.log(ahmad.scores);
console.log(ahmad.averageScore());
