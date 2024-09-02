import { render } from "@react-pdf/renderer";

const URL = "https://fiscofox.giannidev.it/sample-user-data.json"
export const fetchUsers = async ()=>{
    const response = await fetch(URL);
    return response.json();
}

