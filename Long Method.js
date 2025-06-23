calculateProbabilities(lastCity) {
    const probabilities = [];
    
    for (let i = 0; i < this.cities.length; i++) {
      if (this.tour.includes(i)) {
        probabilities.push(0);
      } else {
        const pheromone = this.pheromones[lastCity][i];
        const distance = this.cities[lastCity].distanceTo(this.cities[i]);
        probabilities.push(pheromone / distance);
      }
    }
    
    return probabilities;
  }
  
  selectNextCity(probabilities) {
    const sum = probabilities.reduce((a, b) => a + b);
    const r = Math.random();
    let cumulativeProbability = 0;
  
    for (let i = 0; i < probabilities.length; i++) {
      cumulativeProbability += probabilities[i] / sum;
      if (cumulativeProbability >= r) {
        return i;
      }
    }
  }
  
  pickNextCity() {
    const lastCity = this.tour[this.tour.length - 1];
    const probabilities = this.calculateProbabilities(lastCity);
    return this.selectNextCity(probabilities);
  }