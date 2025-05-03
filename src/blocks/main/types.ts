export type MainTemplateData = {
    breadcrumbs: Array<{
        url: string;
        title: string;
        isActive?: boolean;
    }>;
    product: {
        sizes: Array<{
            title: string;
            isSelected?: boolean;
        }>;
        colors: Array<{
            color: string;
            value: string;
            isSelected?: boolean;
        }>;
    };
};
