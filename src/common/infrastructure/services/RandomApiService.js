import RandomApiRepository from "@repositories/RandomApiRepository";

class RandomApiService {
    constructor(randomApiRepository = new RandomApiRepository()) {
        this.randomApiRepository = randomApiRepository;
    }

    async getRandomInteger(min, max) {
        try {
            const nIntegers = 1;
            const col = 1;
            const base = 10;
            const format = "plain";

            const { data } = await this.randomApiRepository.getRandomInteger(
                nIntegers,
                min,
                max,
                col,
                base,
                format
            );
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default RandomApiService;
