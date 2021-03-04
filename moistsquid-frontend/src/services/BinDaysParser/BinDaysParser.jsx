import axios from 'axios';

export const fetchBinDays = async () => {
  return (await axios.get(
    'http://moistsquid.co.uk/binDays/data.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
  )).data;
}

