function initializeAndRunAlgorithm() {
    const cities = createRandomCities(numCities);
    runGeneticAlgorithm(...);
}

canvas.addEventListener('click', initializeAndRunAlgorithm);
startButton.addEventListener('click', initializeAndRunAlgorithm);