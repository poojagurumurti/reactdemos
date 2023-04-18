function stu() {
  (this.name = "jack"),
    (this.age = 20),
    (this.sayName = function () {
      //   console.log(this.age); //accessible(20)
      function inFun() {
        //     console.log(this.age); //undefinded
        //     console.log(this);
        console.log(this.age);
        let inFun = () => {
          console.log(this.age);
        };
      }
      inFun();
    });

  let x = new stu();
  x.sayName();
}
