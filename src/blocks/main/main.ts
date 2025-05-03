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
};

export function renderMain(): Promise<string> {
    return renderTemplate(mainTemplate, data);
}
