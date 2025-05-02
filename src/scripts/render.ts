import mustache from 'mustache';
import { MustacheTemplateDefaultData } from '../types/mustacheTemplate';

const defaultData: MustacheTemplateDefaultData = {
    baseAssetsUrl: import.meta.env.MODE === 'production' ? './' : './src',
};

export async function renderTemplate(template: string, data: object = {}): Promise<string> {
    return mustache.render(template, Object.assign(data, defaultData));
}
