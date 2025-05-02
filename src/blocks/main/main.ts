import { renderTemplate } from '../../scripts/render';
import mainTemplate from './main.mustache?raw';

export function renderMain(): Promise<string> {
    return renderTemplate(mainTemplate);
}
