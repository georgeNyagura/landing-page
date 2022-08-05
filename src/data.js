export const features = {
    heading: 'These are the services we currently provide',
    detail: 'More features will be added in he near future, as we slowly grow our business.',
    features: ['Website setup.', 'Building an online store for your small business']
}

export const pricing = {
    heading: "Choose Your Plan",
    detail: "Let's choose the package that is best for you and explore it happily and cheerfully.",
    plans: [
        {
            prefer: false,
            name: 'Website Setup',
            features: ['Set up your homepage', 'Set up an email sending service', 'Create a custom 404 Page','Secure site' ],
            price: {cost: '$150', subscription: ''},
            ctaText: 'Select'
        },
        {
            prefer: true,
            name: 'Online Store Setup',
            features: ['Online platform setup', 'Payment processing', 'Inventory Management', 'Setup custom providers for deliveries', 'Access to relavent analysis tools'],
            price: {cost: '$60', subscription: ''},
            ctaText: 'Select'
        },
    ]
}

export const network = {
    heading: 'Huge Global Network of Fast VPN',
    detail: 'See LaslesVPN everywhere to make it easier for you when you move locations.',
}