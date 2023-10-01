import axios from 'axios';
import { RESERVATION_API_BASE_URL, TODO_API_BASE_URL, WAKEUP } from '../constants/config';

class WakeupService{
    wakeup(){
        try{
            this.wakeupCarReservationBackend();
            this.wakeupTodoBackend();
        }
        catch(err){
            console.error(err);
        }
    }

    async wakeupCarReservationBackend(){
        let url = RESERVATION_API_BASE_URL + WAKEUP;
        try{
            await axios.get(url);
        }
        catch(err){
            console.error(err);
        }
    }

    async wakeupTodoBackend(){
        let url = TODO_API_BASE_URL + WAKEUP;
        try{
            await axios.get(url);
        }
        catch(err){
            console.error(err);
        }
    }
}
const wakeupService = new WakeupService();
export default wakeupService;