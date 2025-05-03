import { renderTemplate } from '../../scripts/render';
import mainTemplate from './main.mustache?raw';
import { MainTemplateData } from './types';

const data: MainTemplateData = {
    breadcrumbs: [
        {
            url: '/',
            title: 'LISP',
        },
        {
            url: '/',
            title: 'Одежда',
        },
        {
            url: '/',
            title: 'Футболки',
            isActive: true,
        },
    ],
    product: {
        sizes: [
            {
                title: 'S',
            },
            {
                title: 'M',
                isSelected: true,
            },
            {
                title: 'L',
            },
        ],
        colors: [
            {
                color: '#fff9fa',
                value: 'white',
                isSelected: true,
            },
            {
                color: '#e3d95d',
                value: 'yellow',
            },
            {
                color: '#a5af95',
                value: 'green',
            },
        ],
    },
};

export function renderMain(): Promise<string> {
    return renderTemplate(mainTemplate, data);
}
