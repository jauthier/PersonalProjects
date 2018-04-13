
var peopleArray = [];
var numPeople = 10;
var geneLength = 5;

for (i = 0; i < numPeople; i++) {
    let newPerson = new Person();
    peopleArray.push(newPerson);

}

var idealFound = false;
var count = 0;
while (!idealFound){
  console.log("Generation: "+count);
  var i = 0;
  // get each persons fitness
  for (i=0; i<peopleArray.length; i++){
    var fitnessNum = fitnessTest(peopleArray[i]);
    if (fitnessNum == 5){
      idealFound = true;
    }
    peopleArray[i].setFitness(fitnessNum);
    //peopleArray[i].printFitness();
  }

  //order from best fitness to worst
  peopleArray.sort(function(p1, p2){
    return p2.getFitness() - p1.getFitness();
  });

  // check they have been sorted properly
  // var j =0;
  // for (j=0; j<peopleArray.length; j++){
  //   peopleArray[j].printFitness();
  // }

  // get the average fitnessNum
  var sum = 0;
  for (i=0; i<numPeople; i++){
    sum = sum + peopleArray[i].getFitness();
  }
  var avg = sum/numPeople;

  console.log("Average fitness: " + avg);

  // who will survive
  var survivours = [];
  for (i=0; i<(Math.ceil(peopleArray.length/2)); i++){
    survivours.push(peopleArray[i]);
  }

  // make babies
  peopleArray = [];
  len = survivours.length;
  for (i=0; i < numPeople; i++) {
    var pos1 = Math.round(Math.random() * 10) % len;
    var pos2 = Math.round(Math.random() * 10) % len;
    while (pos1 == pos2){
      pos2 = Math.round(Math.random() * 10) % len;
    }
    peopleArray.push(mixing(survivours[pos1], survivours[pos2]));
  }
  count ++;
}

function fitnessTest(person){
  var ideal = [1,1,0,1,0];
  var i = 0;
  var sum = 0;
  for (i = 0; i < geneLength; i++) {
    if (ideal[i] == person.getMorals()[i]) {
      sum ++;
    }
  }
  return sum;
}

function mixing(p1, p2){
  var bitString = [];
  var i = 0;
  for (i=0;i<numPeople;i++){
    var percent = Math.round(Math.random() * 100);
    if (percent < 45){
      bitString.push(p1.getMorals()[i]);
    } else if (percent >= 45 && percent < 90){
      bitString.push(p2.getMorals()[i]);
    } else {
      bitString.push(Math.round(Math.random() * 10)%2);
    }
  }
  let child = new Person(bitString);
  return child;
}
