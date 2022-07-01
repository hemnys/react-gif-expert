export const getGifs = async (category) => {
    const apiKey = 'g6Ugfv5mSWkHQmp5MAB492BoSP8ORE0Q';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`
    const res = await fetch(URL);
    const { data } = await res.json();
    
    const gifs  = data.map( img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}