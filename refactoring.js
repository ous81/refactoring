class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Can add behavior like:
    distanceTo(otherPoint) {
      const dx = this.x - otherPoint.x;
      const dy = this.y - otherPoint.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    // Can add validation in constructor/setters if needed
  }
  
  // Usage:
  points.push(new Point(coordin1, coordin2));