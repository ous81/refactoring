class City {
  #x; // Private field
  #y; // Private field
  #name;
  #isCapital = false;

  constructor(x, y, name = '') {
    this.#x = x;
    this.#y = y;
    this.#name = name;
    this.validateCoordinates();
  }

  get position() {
    return { x: this.#x, y: this.#y };
  }

  get name() {
    return this.#name;
  }

  get isCapital() {
    return this.#isCapital;
  }

  promoteToCapital() {
    this.#isCapital = true;
  }

  distanceTo(otherCity) {
    if (!(otherCity instanceof City)) {
      throw new Error('Argument must be a City instance');
    }
    const dx = this.#x - otherCity.#x;
    const dy = this.#y - otherCity.#y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  isWithinRadius(otherCity, radius) {
    return this.distanceTo(otherCity) <= radius;
  }

  calculateBearing(otherCity) {
    // Returns angle in radians to other city
    return Math.atan2(otherCity.#y - this.#y, otherCity.#x - this.#x);
  }

  validateCoordinates() {
    if (this.#x < 0 || this.#y < 0) {
      throw new Error('Coordinates must be positive');
    }
  }
}

// Separate rendering concern
class CityRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render(city, options = {}) {
    this.ctx.beginPath();
    this.ctx.arc(
      city.position.x,
      city.position.y,
      options.radius || 5,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = city.isCapital ? 'gold' : 'orange';
    this.ctx.fill();
    this.ctx.stroke();
    
    if (city.name) {
      this.drawLabel(city);
    }
  }

  drawLabel(city) {
    // Label drawing implementation
  }
}