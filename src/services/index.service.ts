
import axios from 'axios';

export default {

    get() {
        return axios.get('https://kreait-guide-service.herokuapp.com/index/BenDenger/TestAsciDoc')
            .then((response) => response.data);
    },
    getGuide(id: String) {
        return axios.get('https://kreait-guide-service.herokuapp.com/guides/BenDenger/TestAsciDoc/' + id)
                .then((response) => response.data);
        },
};
