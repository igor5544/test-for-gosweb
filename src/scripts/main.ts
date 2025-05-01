import { renderHeader } from '../blocks/header/header';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    renderHeader().then((header) => {
        app?.insertAdjacentHTML('afterbegin', header);
    });
});
