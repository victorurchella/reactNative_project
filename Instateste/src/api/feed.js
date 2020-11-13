const lerFotos = async (callback) => {
    const fotosHTPP = await fetch("http://10.0.2.2:3030/feed");
    const fotosJson = await fotosHTPP.json();
    callback(fotosJson);
}

export default lerFotos