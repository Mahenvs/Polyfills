let obj1 = {
  a: 1,
  print: function () {
    let innerPrint = () => {
      console.log(this.a);
    };
    innerPrint();
  },
  printRegFunc: function () {
    console.log(this);
  },
  printArrFunc: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

obj1.print();
obj1.printArrFunc();

let obj2 = {
  a: 1,
  print: function () {
    let innerPrint = () => {
      console.log(this.a);
    };
    innerPrint();
  },
};

obj2.print();
