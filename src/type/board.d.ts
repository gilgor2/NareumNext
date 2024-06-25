export type BoardImage = {
    img_src:string;
    tag:string;
    id:string;
};
export type DBBoardImage = {
    id:string;
    user_id:string;
    img_src:string;
    tag:string
};

export type CategoryObj = {
    name:string;
    srcArr:string[];
};

export type BoardDataGetReponseType = {
    data:CategoryObj[]
};

export type BoardPostRequestType = {
    data:BoardImage
};

export type BoardDeleteRequestType = {
    src:string
};

export type CategoryPutRequestType = {
    originalCategory:string
    newCategory:string

};

export type CategoryDeleteRequestType = {
    category:string
};
