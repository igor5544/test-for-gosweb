import mustache from 'mustache';
import headerTemplate from '../tempates/header.mustache?raw';

export async function renderTemplate(template: string, data?: object): Promise<string> {
    return mustache.render(template, data);
}

export function renderHeader(): Promise<string> {
    return renderTemplate(headerTemplate);
}
