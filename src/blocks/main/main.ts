import { renderTemplate } from '../../scripts/render';
import { FullTemplateData } from '../../types/mustacheTemplate';
import mainTemplate from './main.mustache?raw';
import { MainTemplateData } from './types';

const data: MainTemplateData = {
    breadcrumbs: [
        {
            url: '/',
            title: 'LISP',
        },
        {
            url: '/',
            title: 'Одежда',
        },
        {
            url: '/',
            title: 'Футболки',
            isActive: true,
        },
    ],
    product: {
        sizes: [
            {
                title: 'S',
            },
            {
                title: 'M',
                isSelected: true,
            },
            {
                title: 'L',
            },
        ],
        colors: [
            {
                color: '#fff9fa',
                value: 'white',
                isSelected: true,
            },
            {
                color: '#e3d95d',
                value: 'yellow',
            },
            {
                color: '#a5af95',
                value: 'green',
            },
        ],
    },
};

const addFormEventListener = ({ baseAssetsUrl }: FullTemplateData<MainTemplateData>): void => {
    const mainElement = document.querySelector('.main');
    const productFormElement = mainElement?.querySelector('.product__form');
    if (productFormElement) {
        productFormElement.addEventListener('change', (event) => {
            const targetElement = event.target as HTMLElement;
            if (targetElement.classList.contains('color-radio__input')) {
                const colorRadioValue = (event.target as HTMLInputElement).value;
                const productImage = mainElement?.querySelector('.product__img');

                if (productImage) {
                    (productImage as HTMLImageElement).src =
                        `${baseAssetsUrl}/assets/images/tshirt_${colorRadioValue}.jpg`;
                }
            }
        });
    }
};

const mainAddEventsListeners = (fullTemplateData: FullTemplateData<MainTemplateData>): void => {
    addFormEventListener(fullTemplateData);
};

export function renderMain(): void {
    const fullTemplateData = renderTemplate(mainTemplate, data);
    mainAddEventsListeners(fullTemplateData);
}
