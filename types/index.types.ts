export interface ISummary {
    available: number;
    collectionURI: string;
    items: IItem[] | [];
    returned: number;
  }
  
  export interface IItem {
    resourceURI: string;
    name: string;
    type?: "cover" | "interiorStory" | "promo" | string;
    role?:
      | "editor"
      | "writer"
      | "penciller"
      | "penciller (cover)"
      | "colorist"
      | "inker"
      | "penciller (cover) "
      | "letterer"
      | string;
  }
  
  export interface ILink {
    type: "detail" | "comiclink" | "purchase" | string;
    url: string;
  }
  
  export interface IDate {
    type: "onsaleDate" | "focDate" | string;
    date: string;
  }
  
  export interface IDate {
    type: "onsaleDate" | "focDate" | string;
    date: string;
  }
  
  export interface IPrice {
    type: "printPrice" | string;
    price: number;
  }
  
  export interface IThumbnail {
    path: string;
    extension: "jpg" | string;
  }
  
  export interface ITextObjects {
    type: "issue_solicit_text" | string;
    language: "en-us" | string;
    text: string;
  }
  

export interface IPersonaje {
    id: number;
    name: string;
    description: string | null;
    modified: Date;
    thumbnail: IThumbnail;
    resourceURI: string;
    comics: ISummary;
    series: ISummary;
    stories: ISummary;
    events: ISummary;
    urls: ILink[];
  }

  export interface IPersonajeResponse {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: IPersonaje[];
    };
  }

  export interface IComicResponse {
    code: number | string;
    message: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: IComic[];
    };
  }
  
  export interface IComic {
    [x: string]: any;
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string | null;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: ITextObjects[] | [];
    resourceURI: string;
    urls: ILink[];
    series: IItem;
    variants: IItem[];
    collections: IItem[] | [];
    collectedIssues: IItem[] | [];
    dates: IDate[];
    prices: IPrice[];
    price: number;
    oldPrice: number;
    stock: number;
    thumbnail: IThumbnail;
    images: ILink[] | [];
    creators: ISummary;
    characters: ISummary;
    stories: ISummary;
    events: ISummary;
  }
  type Images = {
    path: string,
    extension: string,
  }
  
  export type Comic = {
    id: number,
    digitalId: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
    modified: string,
    isbn: string,
    upc: string,
    diamondCode: string,
    ean: string,
    issn: string,
    format: string,
    pageCount: number,
    textObjects: [],
    resourceURI: string,
    urls: [],
    series: {},
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [],
    thumbnail: {
        path: string,
        extension: string,
    },
    images: Images[],
    creators: {
        available: number,
        collectionURI: string,
        items: [],
        returned: number,
    },
    characters: {
        available: number,
        collectionURI: string,
        items: [],
        returned: number,
    },
    stories: {
        available: number,
        collectionURI: string,
        items: [],
        returned: number,
    },
    events: {
        available: number,
        collectionURI: string,
        items: [],
        returned: number
    }
  }
  export type ICheckout = {
    customer: ICustomer;
    card: ICard;
    order: IOrder;
  };
  
  export interface ICard {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  }
  
  export interface IOrder {
    name: string;
    image: string;
    price: number;
  }
  
  export interface IAddress {
    address1: string;
    address2: string | null;
    city: string;
    state: string;
    zipCode: string;
  }
  
  export interface ICustomer {
    name: string;
    lastname: string;
    email: string;
    address: IAddress;
  }
  