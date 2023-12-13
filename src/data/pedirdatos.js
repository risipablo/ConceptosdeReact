
import data from "./data.json"


export const pedirDatos = () => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try {
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, 300);
    })

}


export const pedirProdutos = (id) => {
    return new Promise ((resolve,reject) => {

        const item = data.find((el) => el.id === id)

        if(item){
            resolve(item)
        } else{
            reject({
                error:"El producto no se encuentra en nuestro catalogo"
            })
        }
    })
}