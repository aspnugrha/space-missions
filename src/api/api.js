const endpoint = import.meta.env.VITE_APP_API_ENDPOINT_BASEURL

export const getSpacexInfo = async() => {
    const get = await fetch(`${endpoint}/v4/company`)
    const res = get.json()
    return res
}

export const getLatestLaunch = async()=>{
    const get = await fetch(`${endpoint}/v5/launches/latest`);
    const res = await get.json() 
    return res 
}

export const getExploreBooks = () => {
    let data = [
    {
        title: 'History',
        to: '/history',
        image: 'https://live.staticflickr.com/65535/51493858978_e1aac73e9b_k.jpg',
    },
    {
        title: 'Cores',
        to: '/cores',
        image: 'https://live.staticflickr.com/65535/52682538431_bc2b8ed857_k.jpg',
    },
    {
        title: 'Rockets',
        to: '/rockets',
        image: 'https://live.staticflickr.com/65535/51641283330_758a81309f_k.jpg',
    },
    {
        title: 'Capsules',
        to: '/capsules',
        image: 'https://live.staticflickr.com/65535/51493873733_420f7c1217_k.jpg',
    },
    {
        title: 'Dragons',
        to: '/dragons',
        image: 'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
    },
    {
        title: 'Ships',
        to: '/ships',
        image: 'https://images.marinetraffic.com/collection/3406596.webp',
    },
    {
        title: 'Launches',
        to: '/launches',
        image: 'https://live.staticflickr.com/65535/52738775296_567513edb5_k.jpg',
    },
    {
        title: 'Landpads',
        to: '/landpads',
        image: 'https://i.imgur.com/KHBk6jO.jpeg',
    },
    {
        title: 'Launchpads',
        to: '/launchpads',
        image: 'https://i.imgur.com/1jwU0Pk.jpeg',
    },
    {
        title: 'Roadster',
        to: '/roadster',
        image: 'https://farm5.staticflickr.com/4676/40110297852_5e794b3258_b.jpg',
    },
    {
        title: 'Crew',
        to: '/crew',
        image: 'https://live.staticflickr.com/65535/51494347544_67e7ef3c61_k.jpg',
    },
    {
        title: 'Payloads',
        to: '/payloads',
        image: 'https://live.staticflickr.com/65535/52035160845_f342034b4f_k.jpg',
    },
]

    return data
}

export const get4Rockets = async()=>{
    const get = await fetch(`${endpoint}/v4/rockets?limit=4`);
    const res = await get.json()
    return res
}

export const get4Crews = async()=>{
    const get = await fetch(`${endpoint}/v4/crew`);
    const res = await get.json()
    return res.slice(0, 4)
}

export const get3History = async()=>{
    const get = await fetch(`${endpoint}/v4/history`);
    const res = await get.json()
    return res.slice(0, 3)
}