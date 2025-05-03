import { IconAttributes } from '../../types/mustacheTemplate';

export type FooterTemplateData = {
    linksBlocks: Array<{
        blockTitle: string;
        links: Array<{
            url: string;
            title: string;
        }>;
    }>;
    features: Array<{
        title: string;
        icon: IconAttributes;
    }>;
    socialLinks: Array<{
        url: string;
        icon: IconAttributes;
    }>;
};
