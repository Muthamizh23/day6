class circle {
    constructor(radius = "", color = "") {
      this.radius = radius;
      this.color = color;
    }
  }
  const circle1 = new circle("5", "red");
  console.log(circle1);
  
  
  // 3.person details
  
  const student={
      firstName:"murali",
      lastName:"tharan",
      get fullName(){
          return `${student.firstName}${student.lastName}`;
      },
      set fullName(value){
          let values=value.split(" ");
          console.log(values)
          this.firstName
  
      }
  }
  student.fullName="riya kannan"
  console.log(student.fullName)