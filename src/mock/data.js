const list = [
    {id:'01', category: 'Nuevos', name:'Picador Mario', stock:10 , price: 1850, description: 'Picador temático Mario Bross', img: 'https://i.postimg.cc/d3fLc2PV/Imagen-picador-Hongo.webp'},
    {id:'02', category: 'Nuevos', name:'Picador Baku', stock:10 , price: 1400, description: 'Picador temático Baku', img: 'https://i.postimg.cc/SRLYCXwS/Picador-Baku.png'},
    {id:'03', category: 'Vendidos', name:'Picador Mario', stock:10 , price: 1400, description: 'Picador temático Marciano', img:'https://i.postimg.cc/NfSvmNk0/Picador-Marciano.jpg'},
    {id:'04', category: 'Otros', name:'Picador Pain', stock:10 , price: 2000, description: 'Picador temático Naruto Pain', img: 'https://i.postimg.cc/59KhWPGm/Picador-Pain.webp'},
]

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No se pudo encontrar datos')
            }else{
                resolve(list)
            }
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
}