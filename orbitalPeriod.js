const orbitalPeriod = (arr) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    return arr.map(({ name, avgAlt }) => {
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)) ; 
      return {name, orbitalPeriod}
    })
  };
  
  console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));