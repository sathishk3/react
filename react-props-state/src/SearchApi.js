
import axios from 'axios';

const getApiResults = async (term) => {

  console.log(`searching for ${term}`);
  const results = await axios.get(`https://api.agify.io/?name=${term}`, {
    responseType: "json"});

  console.log(results.data);
  return results.data;

}

export default getApiResults;