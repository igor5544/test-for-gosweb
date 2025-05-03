import { renderTemplate } from '../../scripts/render';
import footerTemplate from './footer.mustache?raw';
import { FooterTemplateData } from './types';

const data: FooterTemplateData = {
    linksBlocks: [
        {
            blockTitle: 'Сервис и поддержка',
            links: [
                {
                    url: '/',
                    title: 'Как сделать заказ',
                },
                {
                    url: '/',
                    title: 'Способы оплаты',
                },
                {
                    url: '/',
                    title: 'Возврат товара',
                },
                {
                    url: '/',
                    title: 'Правила продажи',
                },
                {
                    url: '/',
                    title: 'Публичная оферта',
                },
                {
                    url: '/',
                    title: 'Возврат денежных средств',
                },
                {
                    url: '/',
                    title: 'Доставка',
                },
                {
                    url: '/',
                    title: 'Вопросы и ответы',
                },
            ],
        },
        {
            blockTitle: 'О компании',
            links: [
                {
                    url: '/',
                    title: 'О нас',
                },
                {
                    url: '/',
                    title: 'Сертификаты',
                },
                {
                    url: '/',
                    title: 'Контакты',
                },
                {
                    url: '/',
                    title: 'Преимущества',
                },
                {
                    url: '/',
                    title: 'Вакансии',
                },
                {
                    url: '/',
                    title: 'Наши скидки',
                },
                {
                    url: '/',
                    title: 'Партнерам',
                },
            ],
        },
    ],
    features: [
        {
            title: 'бесплатная доставка от 4000 ₽',
            icon: {
                alt: 'delivery',
                url: '/assets/icons/delivery.svg',
                height: '45px',
                width: '40px',
            },
        },
        {
            title: 'пробники в подарок при каждой покупке',
            icon: {
                alt: 'heart',
                url: '/assets/icons/heart.svg',
                height: '24px',
                width: '26px',
            },
        },
        {
            title: 'акции и подарки за покупку',
            icon: {
                alt: 'cup',
                url: '/assets/icons/cup.svg',
                height: '23px',
                width: '21px',
            },
        },
    ],
    socialLinks: [
        {
            url: '/',
            icon: {
                alt: 'facebook',
                url: '/assets/icons/facebook.svg',
                height: '22px',
                width: '18px',
            },
        },
        {
            url: '/',
            icon: {
                alt: 'twitter',
                url: '/assets/icons/twitter.svg',
                height: '30px',
                width: '35px',
            },
        },
        {
            url: '/',
            icon: {
                alt: 'instagram',
                url: '/assets/icons/instagram.svg',
                height: '32px',
                width: '34px',
            },
        },
    ],
};

export function renderFooter(): Promise<string> {
    return renderTemplate(footerTemplate, data);
}
