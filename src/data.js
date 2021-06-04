export const features = {
    heading: 'We Provide Many Features You Can Use',
    detail: 'You can explore the features that we provide with fun and have their own functions each feature.',
    features: ['Powerfull online protection.', 'Internet without borders.', 'Supercharged VPN', 'No specific time limits.']
}

export const pricing = {
    heading: "Choose Your Plan",
    detail: "Let's choose the package that is best for you and explore it happily and cheerfully.",
    plans: [
        {
            prefer: false,
            name: 'Free Plan',
            features: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'],
            price: {cost: 'Free', subscription: ''},
            ctaText: 'Select'
        },
        {
            prefer: false,
            name: 'Standard Plan',
            features: ['Unlimited Bandwitch', 'Encrypted Connection', 'Traffic Logs', 'Works on All Devices', 'Connect Anyware'],
            price: {cost: '$9', subscription: 'mo'},
            ctaText: 'Select'
        },
        {
            prefer: true,
            name: 'Premium Plan',
            features: ['Unlimited Bandwitch', 'Encrypted Connection', 'Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'],
            price: {cost: '$12', subscription: 'mo'},
            ctaText: 'Select'
        }
    ]
}

export const network = {
    heading: 'Huge Global Network of Fast VPN',
    detail: 'See LaslesVPN everywhere to make it easier for you when you move locations.',
}