import axios from 'axios';
const URL_SERV = "http://localhost:3004";

export const getProducts = async() =>{
    try{
        const response = await axios.get(`${URL_SERV}/products`);

        return {
            products: response.data
        }


    } catch(error){
        throw error
    }
}

export const addProduct = async(data) =>{
   try {
    const response = await axios({
        method:'POST',
        url:`${URL_SERV}/products`,
        data:{
            "id":6,
            name:data.name,
            prices:[
                {
                    "id": 9,
                    "price":data.price,
                }
            ]

        }
    });
    return{
       addproduct:'added',
       newproduct: response.data 
    }
   
   } catch(error){
       throw error
   }
}