/* functions as abstractions */
var work = function() {
  console.log("working hard");
};

var doWork = function(theWork){
  console.log("starting");

  try {
    theWork();
  }
  catch(err){
    console.log(err);
  }

  console.log("end");
}

doWork(work);



/* functions to build modules */
var createWorker = function() {
  var workCount = 0;

  var task1 = function() {
    workCount += 1;
    console.log("task1" + workCount);
  }
  var task2 = function() {
    workCount++;
    console.log("task2" + workCount);
  }

  return {
    job1: task1,
    job2: task2
  }
};

var worker = createWorker();

worker.job1();
worker.job2();
worker.job2();
worker.job2();


/* immediately invoked function expression (IIFE) */
(function(){
  // variable inside here won't be global
}());
