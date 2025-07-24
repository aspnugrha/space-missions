const endpoint = import.meta.env.VITE_APP_API_ENDPOINT_BASEURL

export const getList = async(start, end, url, signal) => {
    const get = await fetch(`${endpoint}${url}`, {
        signal: signal
    })
    const res = await get.json()
    let data = {data: [], length_data: 0}
    if(res.length){
        data = {data:res.slice(start, end), length_data: res.length}
    }
    return data
}

export const getData = async(url, condition, signal) => {
    const get = await fetch(`${endpoint}${url}`, {
        signal: signal
    })
    const res = await get.json()
    
    return res
}

export const getDataWithDetail = async(url, condition) => {
    const data = await getData(url)
    let detail = {}

    if(data){
        if(condition == 'cores'){
            let launches = []
            data?.launches.map(async(id) => {
                launches.push(await getData(`/v5/launches/${id}`))
            })
            detail = {launches: launches}
        }
    }
    
    return {data: data, detail: detail}
}