const API = 'https://restcountries.eu/rest/v2/';

const getData = async (country) => {
    const apiURL = country ? `${API}name/${country}` : `${API}all`;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch{
        console.log('Fetch Error', error);
    }
}

export default getData;

