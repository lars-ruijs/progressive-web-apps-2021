import { getData, getDate, apiSettings } from '../modules/helpers.js';

const settings = apiSettings();

export async function astroDetailRoute(req, res){
    const date = req.params.date;
    const astronomyData = await getData(settings.astronomyBase, `date=${date}`);
    res.render('astroDetail', { title: astronomyData.title ? astronomyData.title : "Astronomy Picture", astronomyData, getDate });
}

export async function roverDetailRoute(req, res) {
    const roverName = req.params.name;
    const sol = req.params.sol;
    const roverData = await getData(`${settings.roverBase + roverName}/photos`,`sol=${sol}`);    
    res.render('roverDetail', { title: `Pictures by ${roverName} on sol ${sol}`, roverData: roverData.photos, getDate });
}