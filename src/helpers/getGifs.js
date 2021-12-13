// Peticion a un api
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cNlJiSR2u28i3WRPzaIv9A70rjJs77FM`

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? pregunta si llega images
        }
    })

    // console.log(gifs);
    return gifs;
}