import { renderFooter } from '../blocks/footer/footer';
import { renderHeader } from '../blocks/header/header';
import { renderMain } from '../blocks/main/main';

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderMain();
    renderFooter();
});
