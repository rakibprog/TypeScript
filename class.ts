// typeScript Classes
class Welcome {
    greeting: string;
   
    constructor(message: string) {
      this.greeting = message;
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   
  let welcome = new Welcome ("world");