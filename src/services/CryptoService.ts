import axios from 'axios'

const CRYPTO_API_BASE_URL = "https://agile-fjord-18513.herokuapp.com";

class CryptoService{
    
    getMain(){
        return axios.get(CRYPTO_API_BASE_URL);
    }
}

export default new CryptoService();