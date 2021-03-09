import { getData, randomNum, getDate, apiSettings } from '../modules/helpers.js';

export async function homeRout(req, res) {

  const settings = apiSettings();

  const astronomyData = await getData(settings.astronomyBase, "count=6");
  
  // Fetch the max sol (max date) for each rover > fetch photo data for random sol > push to array
  const roverData = [];

  for (const rover of settings.rovers) {
    const roverInfo = await getData(`${settings.roverBase + rover}`);
    const maxSol = roverInfo.rover.max_sol;
    const data = await getData(`${settings.roverBase + rover}/photos`,`sol=${randomNum(maxSol)}`);

    // If no pictures for this sol > fetch for sol 1
    if(data.photos.length == 0) {
      const defaultData = await getData(`${settings.roverBase + rover}/photos`,`sol=1`);
      roverData.push(defaultData);
    }
    // Else, push data to array.
    else {
      roverData.push(data);
    }
  }
  res.render('index', { title: "Home", astronomyData, roverData, getDate });
}