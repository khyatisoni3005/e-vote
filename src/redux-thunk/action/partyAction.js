import axios from "axios";

export const getPartyList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/v1/party/list')
            .then((res) => {
                    
            })
    }

}
