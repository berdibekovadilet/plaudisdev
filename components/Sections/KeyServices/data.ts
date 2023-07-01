export interface KeyService {
    id: number;
    title: string;
    description: string;
}

export const keyServicesData: KeyService[] = [
    {
        id: 1,
        title: "Theme Personalization",
        description: "We tailor your Shopify theme's design and functionality to make your online store stand out"
    },
    {
        id: 2,
        title: "Custom Feature Development",
        description: "We build specific features not available in standard Shopify settings or plugins"
    },
    {
        id: 3,
        title: "Performance Optimization",
        description: "We enhance your site's load speed, optimize it for mobile devices, and improve its SEO"
    },
    {
        id: 4,
        title: "External Systems Integration",
        description: "We assist in integrating your Shopify store with other systems like CRM, ERP, or email marketing tools"
    }
];