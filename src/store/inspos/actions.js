import Axios from 'axios'

export async function getInspos( {commit} ) {
    let url = "https://my-json-server.typicode.com/olatunji-20/zeekollection/inspos"
    // let url = "http://localhost:4000/inspos"
    await Axios.get(url).then((response) => {
        let result = response.data
        commit("setInspos", result)
    })
}