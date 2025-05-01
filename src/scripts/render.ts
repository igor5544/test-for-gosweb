import mustache from 'mustache';

export async function renderTemplate(template: string, data?: object): Promise<string> {
    return mustache.render(template, data);
}
