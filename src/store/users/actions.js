import Axios from 'axios'
import router from '../../router'

export async function signUp({commit}, userData) {
    try {
        await Axios.post("https://my-json-server.typicode.com/olatunji-20/zeekollection/users", userData)
        alert("REGISTRATION DONE", userData)
        commit("setUser", userData)
        router.push("/")
    } catch (error) {
        alert("REGISTRATION OR SIGNUP UNSUCCESSFUL")
    }
}


export async function login({commit}, userData) {
    try {
        await Axios.get("https://my-json-server.typicode.com/olatunji-20/zeekollection/users").then((response) => {
            console.log("o tun ti zeh", response.data)
                const customers = response.data
                for(var i = 0; i <= customers.length; i++) {
                    if(customers[i].email === userData.email && customers[i].password === userData.password) {
                        commit("setUser", customers[i])
                        router.push("/")
                    }
                }
            })
    }catch(e) {
        commit("setShow", true)
    }
}