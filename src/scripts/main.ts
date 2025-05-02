import { renderFooter } from '../blocks/footer/footer';
import { renderHeader } from '../blocks/header/header';
import { renderMain } from '../blocks/main/main';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const insertHTML = (HTML: string): void => {
        app?.insertAdjacentHTML('beforeend', HTML);
    };
    renderHeader().then(insertHTML);
    renderMain().then(insertHTML);
    renderFooter().then(insertHTML);
});
