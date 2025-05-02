import { IconAttributes } from '../../types/mustacheTemplate';

export type FooterTemplateData = {
    features: Array<{
        title: string;
        icon: IconAttributes;
    }>;
    socialLinks: Array<{
        url: string;
        icon: IconAttributes;
    }>;
};
