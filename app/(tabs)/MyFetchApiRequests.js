export const MyFetchGetRequest = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method: 'GET'})
    //const response = await fetch("http://192.168.137.215:3000/api/crops-get/67cbc52aa7625831ac0d3f3f")
    const resJson = await response.json()
    //console.log(resJson);
    
    return resJson
}

export const MyFetchPostRequest = async(data) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    const resJson = await response.json()
    return resJson
}
