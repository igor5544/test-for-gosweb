import { renderTemplate } from '../../scripts/render';
import headerTemplate from './header.mustache?raw';

export function renderHeader(): Promise<string> {
    return renderTemplate(headerTemplate, {
        navItems: [
            {
                url: '/',
                title: 'LISP',
            },
            {
                url: '/',
                title: 'OCaml',
            },
            {
                url: '/',
                title: 'JavaScript',
            },
            {
                url: '/',
                title: 'Python',
            },
            {
                url: '/',
                title: 'PHP',
            },
        ],
    });
}
