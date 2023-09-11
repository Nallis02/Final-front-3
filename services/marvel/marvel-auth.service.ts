import md5 from "md5";
const MARVEL_API_PUBLIC_KEY="911d2cf82c6029b7b3060e869f1e6fb5"
const MARVEL_API_PRIVATE_KEY="e17b966cb18526d76bcdfb5175a3f9511597c0b6"

export const generateAuthenticationString = () => {
    const getTimeStamp = () => Date.now().toString();
    const timeStamp = getTimeStamp();
    const getHash = (timeStamp: string) => md5(timeStamp+MARVEL_API_PRIVATE_KEY+MARVEL_API_PUBLIC_KEY);
    const hash = getHash(timeStamp);
    console.log(hash);
    
    const query = `ts=${timeStamp}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`
    console.log(query);
    
    return query;
}

