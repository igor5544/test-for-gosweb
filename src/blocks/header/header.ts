import { renderTemplate } from '../../scripts/render';
import headerTemplate from './header.mustache?raw';

export function renderHeader(): Promise<string> {
    return renderTemplate(headerTemplate, {
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
    });
}
