import Axios from 'axios'

export async function getMaterials({ commit }) {
    let url = "https://my-json-server.typicode.com/olatunji-20/zeekollection/materials"
    // let url = "http://localhost:4000/materials"
    await Axios.get(url).then((response) => {
        let result = response.data
        commit("setMaterials", result)
    })
}

export async function getMaterial({ commit }, id) {
        const res = await fetch(`https://my-json-server.typicode.com/olatunji-20/zeekollection/materials/${id}`, {
        // const res = await fetch(`http://localhost:4000/materials/${id}`, {
        method: "GET",
        headers: {
            'Content-type': "application/json"
        }
    })
    const response = await res.json()
    commit("setMaterial", response)
}




/*--------FOR CART OPERATIONS--------*/




export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.material
    data["numb"] = payload.numb
    cart.push(data)
    commit("setCart", cart)
    alert(data.numb + " yard(s) of " + data.materialName + " has been added to your Shopping bag")
    console.log("CARTTTT:", cart)
    console.log("QUANTITY", data.numb)
}



export function removeCart({ commit, getters }, id) {
    console.log("OGOGO", id)
    if (confirm("Are you sure you want to remove this item from your Shopping bag?")) {
        let cart = []
        for (let i = 0; i < getters.cart.length; i++) {
            let good = getters.cart[i]
            if (good.id !== id) {
                cart.push(good)
            } else {
                console.log("ERRORRRRRRRRRRRRRRR")
            }
        }
        commit("setCart", cart)
    }
    return false
}

export function submitCart({getters}, user) {
    const cart = getters.cart
    console.log("cart ti zeh", cart[0])
    console.log("user ti zeh", user)

    for(var i = 0; i <= cart.length; i++) {
        const productName = cart[i].materialName
        const productPrice = cart[i].materialPrice
        const quantity = cart[i].numb
        console.log("The customer " + user.firstName + ", has ordered" + productName + " " + productPrice + " " + quantity)
        let orderDetails = {
            id: Math.ceil(Math.random() * 10000),
            customer: user.firstName + " " + user.surname,
            quantity: quantity + " yards",
            productName: productName,
            productPrice: productPrice
        }
        Axios.post("https://my-json-server.typicode.com/olatunji-20/zeekollection/customerOrders", orderDetails)
        console.log("ready for submission", orderDetails)
    }

    
}
