import mustache from 'mustache';
import { FullTemplateData, MustacheTemplateDefaultData } from '../types/mustacheTemplate';

const defaultData: MustacheTemplateDefaultData = {
    baseAssetsUrl: import.meta.env.MODE === 'production' ? './' : './src',
};

export function renderTemplate<T extends object = {}>(template: string, data: T = {} as T): FullTemplateData<T> {
    const app = document.getElementById('app');
    const fullTemplateData = Object.assign(data, defaultData);
    const renderedTemplate = mustache.render(template, fullTemplateData);
    app?.insertAdjacentHTML('beforeend', renderedTemplate);
    return fullTemplateData;
}
