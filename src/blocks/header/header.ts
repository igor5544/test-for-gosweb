import { renderTemplate } from '../../scripts/render';
import headerTemplate from './header.mustache?raw';
import { HeaderTemplateData } from './types';

const data: HeaderTemplateData = {
    navItems: [
        {
            url: '/',
            title: 'LISP',
            isActive: true,
        },
        {
            url: '/OCaml',
            title: 'OCaml',
        },
        {
            url: '/JavaScript',
            title: 'JavaScript',
        },
        {
            url: '/Python',
            title: 'Python',
        },
        {
            url: '/PHP',
            title: 'PHP',
        },
    ],
};

export function renderHeader(): void {
    renderTemplate(headerTemplate, data);
}
