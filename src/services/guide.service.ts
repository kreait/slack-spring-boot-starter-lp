
import axios from 'axios';

export default {

    get() {
        return axios.get('https://kreait-guide-service.herokuapp.com/guides/kreait/slack-spring-boot-starter')
            .then((response) => response.data);
    },
    getGuide(id: string) {
        return axios.get('https://kreait-guide-service.herokuapp.com/guides/kreait/slack-spring-boot-starter/' + id)
                .then((response) => response.data);
        },
};
