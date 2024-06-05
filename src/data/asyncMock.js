export const productos = [

    {
        id: 1,
        nombre: "Nike Dunk Low",
        precio: 115,
        categoria: "Zapatilas",
        stock: 5,
        descripcion: "Diseño icónico de básquet, canalizan el espíritu vintage de la década de los 80.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/tenis-dunk-low-retro-5FQWGR.png",
    },

    {
        id: 2,
        nombre: "Air Jordan 1 Retro High OG",
        precio: 180,
        categoria: "Zapatilas",
        stock: 5,
        descripcion: "Nuevo look con una sensación familiar y un toque moderno.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fecba264-b8d4-41b3-bf91-c7235b673201/tenis-jordan-1-retro-high-og-6P4b0q.png",
    },

    {
        id: 3,
        nombre: "Jordan Flight MVP",
        precio: 42,
        categoria: "Remeras",
        stock: 5,
        descripcion: "Esta remera de algodón suave y de densidad media cuenta con un estilo inigualable.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4987491-3441-44dc-947c-7783ef388981/playera-jordan-flight-mvp-lM2S9v.png",
    },

    {
        id: 4,
        nombre: "Jordan Flight Essentials",
        precio: 48,
        categoria: "Remeras",
        stock: 5,
        descripcion: "Diseño oversize con el parche Jumpman de tejido Woven en el pecho.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/720e1fca-2898-45b9-9570-23c65c03dc42/playera-oversized-jordan-flight-essentials-kRlXXF.png",
    },

    {
        id: 5,
        nombre: "Tatum",
        precio: 75,
        categoria: "Buzos",
        stock: 5,
        descripcion: "Con capucha de tejido Fleece y cepillada en el interior.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc4acd57-4284-4986-a639-9f413d09eb21/sudadera-con-gorro-sin-cierre-de-tejido-fleece-tatum-fnGkSw.png",
    },

    {
        id: 6,
        nombre: "Jordan Essentials",
        precio: 120,
        categoria: "Buzos",
        stock: 5,
        descripcion: "Con capucha de tejido Fleece con rayas y detalles bordados metalizados.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/afafe718-ddc2-443c-909c-911e303b71c7/sudadera-con-gorro-sin-cierre-de-tejido-fleece-heroes-jordan-essentials-wdCk2K.png",
    },

    {
        id: 7,
        nombre: "Jordan Sport",
        precio: 55,
        categoria: "Shorts",
        stock: 5,
        descripcion: "Con malla transpirable diseñada para llegar por encima de la rodilla.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe8ad840-ec9f-4cd0-b25f-eb35343fe3c9/shorts-dri-fit-diamond-jordan-sport-zL555C.png",
    },

    {
        id: 8,
        nombre: "Jordan Dri-FIT Sport",
        precio: 36,
        categoria: "Shorts",
        stock: 5,
        descripcion: "Tejido Woven elástico en cuatro direcciones con tecnología absorbente.",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9925ca46-e53d-4eb4-ad94-b731b0ff059d/shorts-diamond-de-tejido-woven-jordan-dri-fit-sport-BjKw7f.png",
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const prodFiltrados = productos.filter((prod) => prod.categoria === category)
        setTimeout ( () => {
            resolve(prodFiltrados)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        const prodFiltrados = productos.find((prod) => prod.id === parseInt(id))
        setTimeout ( () => {
            resolve(prodFiltrados)
        }, 2000)
    })
}