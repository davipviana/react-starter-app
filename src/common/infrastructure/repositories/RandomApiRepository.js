import { RANDOM_API_URL } from '@helpers/apiHelper';
import axios from 'axios';

class RandomApiRepository {
    getRandomInteger(num, min, max, col, base, format) {
        const url = `${RANDOM_API_URL}/integers`;
        return axios.get(url, {
            params: { num, min, max, col, base, format }
        });
    }
}
  
export default RandomApiRepository;