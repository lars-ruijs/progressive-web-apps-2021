import { getData, randomNum, getDate } from '../modules/helpers.js';

export async function homeRout(req, res) {
  const astroBase = process.env.ASTRO_BASE;
  const roverBase = process.env.ROVER_BASE;
  const rovers = ["Perseverance", "Curiosity", "Opportunity", "Spirit"];

  const astronomyData = await getData(astroBase, "count=6");
  
  // Fetch the max sol (max date) for each rover > fetch photo data for random sol > push to array
  const roverData = [];

  for (const rover of rovers) {
    let maxSol = 0;

    if(rover == "Opportunity") {
      maxSol = 5111;
    }
    else if(rover == "Spirit") {
      maxSol = 2208;
    }
    else {
      const roverInfo = await getData(`${roverBase + rover}`);
      maxSol = roverInfo.rover.max_sol;
    } 
    
    const data = await getData(`${roverBase + rover}/photos`,`sol=${randomNum(maxSol)}`);

    // If no pictures for this sol > fetch for sol 1
    if(data.photos.length == 0) {
      const defaultData = await getData(`${roverBase + rover}/photos`,`sol=1`);
      roverData.push(defaultData);
    }
    // Else, push data to array.
    else {
      roverData.push(data);
    }
  }
  res.render('index', { title: "Home", astronomyData, roverData, getDate });
}