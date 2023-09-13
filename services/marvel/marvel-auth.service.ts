import md5 from "md5";
import { ICheckout } from "types/index.types";
const MARVEL_API_PUBLIC_KEY="911d2cf82c6029b7b3060e869f1e6fb5"
const MARVEL_API_PRIVATE_KEY="e17b966cb18526d76bcdfb5175a3f9511597c0b6"

export const generateAuthenticationString = () => {
    const getTimeStamp = () => Date.now().toString();
    const timeStamp = getTimeStamp();
    const getHash = (timeStamp: string) => md5(timeStamp+MARVEL_API_PRIVATE_KEY+MARVEL_API_PUBLIC_KEY);
    const hash = getHash(timeStamp);
    
    const query = `ts=${timeStamp}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`
    
    return query;
}

export const postCheckout = async (data: ICheckout): Promise<any> => {
    const dataCkeckout = JSON.stringify(data);
    const response = await fetch(`/api/checkout`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: dataCkeckout,
    });
  
    return await response.json();
  };