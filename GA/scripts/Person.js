class Person {
  constructor(bitString) {
    this.fitness = 0;
    if (!arguments.length)
      this.morals = this.createBitString();
    else
      this.morals = bitString;
  }


  createBitString(){
    var bitString = [];

    var i = 0;
    for (i=0;i<5;i++){
      bitString.push(Math.round(Math.random() * 10)%2);
    }
    return bitString;
  }

  getMorals(){
    return this.morals;
  }

  setFitness(fitnessNum){
    this.fitness = fitnessNum;
  }

  getFitness(){
    return this.fitness;
  }

  printFitness(){
    console.log(this.fitness);
  }
}
