function x() {
  var a = 1;
  setTimeout(() => {
    console.log(a);
  }, 2000);
  console.log("Hey there!");
}


function y() {
  for (var index = 0; index < 6; index++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(index);//Here, by creating a new function we are 
    // Referencing or making a copy everytime in each iteration
  }
  close();
}
y();
