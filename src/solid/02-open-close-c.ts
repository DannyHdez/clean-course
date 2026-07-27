//import axios from 'axios';

export class HttpClient{

    // async get( url: string ){
    //     const { data, status } = await axios.get(url);
    //     return { data, status };
    // }

    async get( url: string ){

        const answer = await fetch( url );
        const data = await answer.json();

        return { data, status: answer.status };
    }
    
}