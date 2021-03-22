import { getData, getDate } from '../modules/helpers.js';


export async function astroDetailRoute(req, res){
    const date = req.params.date;
    const astronomyData = await getData(process.env.ASTRO_BASE, `date=${date}`);
    res.render('astroDetail', { title: astronomyData.title ? astronomyData.title : "Astronomy Picture", astronomyData, getDate });
}

export async function roverDetailRoute(req, res) {
    const roverName = req.params.name;
    const sol = req.params.sol;
    const roverData = await getData(`${process.env.ROVER_BASE + roverName}/photos`,`sol=${sol}&page=1`);    
    res.render('roverDetail', { title: `Pictures by ${roverName} on sol ${sol}`, roverData: roverData.photos, getDate });
}