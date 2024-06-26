export type BoardImageType = {
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
