import {generateAuthenticationString} from "dh-marvel/services/marvel/marvel-auth.service";

const MARVEL_API_URL = "https://gateway.marvel.com/v1/public";

const fetchApi = async (endpoint: string, urlParams?: string) => {
  const authString = generateAuthenticationString();
  console.log(authString);
  
  const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ""}`;
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, { method: "GET", headers });
  return await response.json();
};

export const getComics = async (offset?: number, limit?: number) => {
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);
    return fetchApi("comics", params.toString());
}

export const getComic = async (comicId: number) => {
    const data = await fetchApi(`comics/${comicId}`);
    const results = data.data.results;
    if (results.length > 0) {
        const comic = results[0];
        if (`${comic.id}`.endsWith('0')) {
            comic.price = 48;
            comic.oldPrice = 48;
            comic.stock = 0;
        } else {
            comic.price = 72;
            comic.oldPrice = 87;
            comic.stock = 2;
        }
        return comic;
    } else return null;
}

export const getCharacter = async (characterId: number) => {
    const data = await fetchApi(`characters/${characterId}`);
    const results = data.data.results;
    if (results.length > 0) return results[0];
    else return null;
}
export const getCharacters = async (offset?: number, limit?: number) => {
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);
    return fetchApi("characters", params.toString());
  };

  export const getComicsByCharacterId = async (
    id: number,
    limit?: number
  ): Promise<any> => {
    const params = new URLSearchParams();
    if (limit) params.set("limit", `${limit}`);
    const buscarParametros = params.toString();
    const response = await fetch(
      `/api/characters/${id}/comics?${buscarParametros || ""}`
    );
    return response;
  };

  
export const getComicsById = async (id: number): Promise<any> => {
    const response = await fetch(`/api/comics/${id}`);
    return response;
  };

  export const getComicsByPage = async (
    qtyOfCards: number,
    pageNumber: number
  ): Promise<any> => {
    const offset = qtyOfCards * pageNumber - qtyOfCards;
    const params = new URLSearchParams();
  
    if (offset) params.set("offset", `${offset}`);
    if (qtyOfCards) params.set("limit", `${qtyOfCards}`);
  
    const paramsToFetch = params.toString();
    const response = await fetch(`/api/comics?${paramsToFetch || ""}`);
    return await response.json();
  };