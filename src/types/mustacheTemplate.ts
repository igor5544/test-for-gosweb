export type MustacheTemplateDefaultData = {
    baseAssetsUrl: string;
};

export type FullTemplateData<T extends object = {}> = T & MustacheTemplateDefaultData;

export type IconAttributes = {
    alt: string;
    url: string;
    height: string;
    width: string;
};
