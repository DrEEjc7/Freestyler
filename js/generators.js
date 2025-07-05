// Advanced Typography Engine
const typographyPairs = {
    tech: {
        professional: [
            { heading: 'Inter', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Roboto', body: 'Roboto', weights: [300, 400, 500, 700] }
        ],
        innovative: [
            { heading: 'Poppins', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Montserrat', body: 'Open Sans', weights: [300, 400, 600, 700] }
        ],
        friendly: [
            { heading: 'Open Sans', body: 'Open Sans', weights: [400, 500, 600, 700] },
            { heading: 'Source Sans Pro', body: 'Source Sans Pro', weights: [300, 400, 600, 700] }
        ]
    },
    finance: {
        professional: [
            { heading: 'Playfair Display', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Lora', body: 'Open Sans', weights: [400, 500, 600, 700] }
        ],
        trustworthy: [
            { heading: 'Lora', body: 'Source Sans Pro', weights: [400, 500, 600, 700] },
            { heading: 'Inter', body: 'Inter', weights: [400, 500, 600, 700] }
        ],
        luxury: [
            { heading: 'Playfair Display', body: 'Lora', weights: [400, 500, 600, 700] },
            { heading: 'Lora', body: 'Lora', weights: [400, 500, 600, 700] }
        ]
    },
    healthcare: {
        trustworthy: [
            { heading: 'Inter', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Source Sans Pro', body: 'Source Sans Pro', weights: [300, 400, 600, 700] }
        ],
        professional: [
            { heading: 'Roboto', body: 'Roboto', weights: [300, 400, 500, 700] },
            { heading: 'Inter', body: 'Inter', weights: [400, 500, 600, 700] }
        ],
        friendly: [
            { heading: 'Open Sans', body: 'Open Sans', weights: [400, 500, 600, 700] },
            { heading: 'Source Sans Pro', body: 'Source Sans Pro', weights: [300, 400, 600, 700] }
        ]
    },
    creative: {
        playful: [
            { heading: 'Poppins', body: 'Open Sans', weights: [400, 500, 600, 700] },
            { heading: 'Montserrat', body: 'Inter', weights: [300, 400, 500, 600] }
        ],
        innovative: [
            { heading: 'Montserrat', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Poppins', body: 'Source Sans Pro', weights: [300, 400, 600, 700] }
        ],
        luxury: [
            { heading: 'Playfair Display', body: 'Lora', weights: [400, 500, 600, 700] },
            { heading: 'Lora', body: 'Source Sans Pro', weights: [400, 500, 600, 700] }
        ]
    },
    legal: {
        professional: [
            { heading: 'Playfair Display', body: 'Lora', weights: [400, 500, 600, 700] },
            { heading: 'Lora', body: 'Source Sans Pro', weights: [400, 500, 600, 700] }
        ],
        trustworthy: [
            { heading: 'Lora', body: 'Inter', weights: [400, 500, 600, 700] },
            { heading: 'Inter', body: 'Inter', weights: [400, 500, 600, 700] }
        ]
    },
    ecommerce: {
        friendly: [
            { heading: 'Montserrat', body: 'Open Sans', weights: [400, 500, 600, 700] },
            { heading: 'Poppins', body: 'Inter', weights: [300, 400, 500, 600] }
        ],
        luxury: [
            { heading: 'Playfair Display', body: 'Lora', weights: [400, 500, 600, 700] },
            { heading: 'Lora', body: 'Source Sans Pro', weights: [400, 500, 600, 700] }
        ],
        playful: [
            { heading: 'Poppins', body: 'Open Sans', weights: [400, 500, 600, 700] },
            { heading: 'Montserrat', body: 'Inter', weights: [300, 400, 500, 600] }
        ]
    }
};

// Intelligent Color System
const colorSchemes = {
    tech: {
        professional: { primary: '#3b82f6', secondary: '#64748b', accent: '#10b981', text: '#1f2937' },
        innovative: { primary: '#7c3aed', secondary: '#64748b', accent: '#f59e0b', text: '#1f2937' },
        friendly: { primary: '#06b6d4', secondary: '#64748b', accent: '#10b981', text: '#1f2937' }
    },
    finance: {
        professional: { primary: '#1e40af', secondary: '#475569', accent: '#059669', text: '#111827' },
        trustworthy: { primary: '#1e3a8a', secondary: '#374151', accent: '#047857', text: '#111827' },
        luxury: { primary: '#1e293b', secondary: '#64748b', accent: '#b45309', text: '#0f172a' }
    },
    healthcare: {
        trustworthy: { primary: '#2563eb', secondary: '#6b7280', accent: '#16a34a', text: '#1f2937' },
        professional: { primary: '#1d4ed8', secondary: '#475569', accent: '#059669', text: '#1f2937' },
        friendly: { primary: '#0ea5e9', secondary: '#64748b', accent: '#22c55e', text: '#1f2937' }
    },
    creative: {
        playful: { primary: '#ec4899', secondary: '#a855f7', accent: '#f59e0b', text: '#1f2937' },
        innovative: { primary: '#7c3aed', secondary: '#ec4899', accent: '#f59e0b', text: '#1f2937' },
        luxury: { primary: '#1e293b', secondary: '#64748b', accent: '#b45309', text: '#0f172a' }
    },
    legal: {
        professional: { primary: '#1e3a8a', secondary: '#374151', accent: '#b45309', text: '#111827' },
        trustworthy: { primary: '#1e40af', secondary: '#475569', accent: '#047857', text: '#111827' }
    },
    ecommerce: {
        friendly: { primary: '#dc2626', secondary: '#64748b', accent: '#ea580c', text: '#1f2937' },
        luxury: { primary: '#1e293b', secondary: '#64748b', accent: '#b45309', text: '#0f172a' },
        playful: { primary: '#ec4899', secondary: '#a855f7', accent: '#f59e0b', text: '#1f2937' }
    }
};

// Smart Recommendations Engine
const recommendations = {
    tech: {
        professional: "Tech companies benefit from clean, minimal typography. Sans-serif fonts build trust and readability. Blue tones convey reliability and innovation.",
        innovative: "Bold colors and modern typography communicate forward-thinking. Purple suggests creativity while maintaining professionalism.",
        friendly: "Rounded fonts and warmer blues create approachability while maintaining technical credibility."
    },
    finance: {
        professional: "Traditional serif fonts paired with conservative blues build trust and stability - essential for financial services.",
        trustworthy: "Deep blues and consistent typography create confidence. Avoid bright colors that might suggest risk.",
        luxury: "Sophisticated typography with subtle gold accents appeals to high-net-worth clients."
    },
    healthcare: {
        trustworthy: "Clean, readable fonts are crucial for accessibility. Blue conveys trust and calm - essential for healthcare.",
        professional: "Conservative color choices and clear hierarchy help patients navigate complex information.",
        friendly: "Softer blues and approachable typography reduce anxiety while maintaining professionalism."
    },
    creative: {
        playful: "Bold colors and creative typography showcase your artistic capabilities. Don't be afraid to stand out.",
        innovative: "Purple and orange combinations suggest creativity and energy - perfect for agencies and studios.",
        luxury: "Sophisticated typography with restrained color palettes appeal to premium creative clients."
    },
    legal: {
        professional: "Traditional serif fonts and conservative colors build immediate trust and credibility.",
        trustworthy: "Deep blues and readable typography communicate reliability and expertise."
    },
    ecommerce: {
        friendly: "Warm colors and approachable typography reduce purchase anxiety and build customer trust.",
        luxury: "Sophisticated typography and muted colors create premium perception and justify higher prices.",
        playful: "Vibrant colors and modern fonts appeal to younger demographics and impulse purchases."
    }
};

// Industry-specific content
const industryContent = {
    tech: {
        title: 'Transform Your Business',
        subtitle: 'Innovative technology solutions',
        body: 'We help businesses grow with cutting-edge technology and innovative strategies.',
        cta: 'Get Started'
    },
    finance: {
        title: 'Secure Your Future',
        subtitle: 'Professional financial services',
        body: 'Expert financial planning and investment strategies for your peace of mind.',
        cta: 'Learn More'
    },
    healthcare: {
        title: 'Your Health Matters',
        subtitle: 'Compassionate care for everyone',
        body: 'Providing quality healthcare services with a focus on patient well-being.',
        cta: 'Book Appointment'
    },
    creative: {
        title: 'Bring Ideas to Life',
        subtitle: 'Creative solutions that inspire',
        body: 'We create beautiful, engaging experiences that connect with your audience.',
        cta: 'View Portfolio'
    },
    legal: {
        title: 'Trusted Legal Counsel',
        subtitle: 'Professional legal services',
        body: 'Experienced attorneys providing comprehensive legal solutions for your needs.',
        cta: 'Consult Now'
    },
    ecommerce: {
        title: 'Shop with Confidence',
        subtitle: 'Premium products, unbeatable prices',
        body: 'Discover our curated collection of high-quality products at competitive prices.',
        cta: 'Shop Now'
    }
};

// Color generation algorithms
function hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 1/6) {
        r = c; g = x; b = 0;
    } else if (1/6 <= h && h < 1/3) {
        r = x; g = c; b = 0;
    } else if (1/3 <= h && h < 1/2) {
        r = 0; g = c; b = x;
    } else if (1/2 <= h && h < 2/3) {
        r = 0; g = x; b = c;
    } else if (2/3 <= h && h < 5/6) {
        r = x; g = 0; b = c;
    } else if (5/6 <= h && h < 1) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateColorPalette(coreColor) {
    const [h, s, l] = hexToHsl(coreColor);
    
    // Generate palette based on color theory
    const primary = coreColor;
    
    // Secondary: Analogous color (30 degrees shift)
    const secondaryH = (h + 30) % 360;
    const secondary = hslToHex(secondaryH, Math.max(s - 20, 20), Math.min(l + 10, 80));
    
    // Accent: Complementary or triadic
    const accentH = (h + 150) % 360;
    const accent = hslToHex(accentH, Math.min(s + 10, 90), Math.max(l - 15, 25));
    
    // Text: High contrast
    const textL = l > 50 ? 15 : 85;
    const text = hslToHex(h, Math.max(s - 40, 10), textL);
    
    return { primary, secondary, accent, text };
}

// Typography pairing algorithm
function generateTypographyPair(coreFont) {
    const fontPairings = {
        'Inter': ['Playfair Display', 'Lora', 'Merriweather'],
        'Roboto': ['Playfair Display', 'Lora', 'Crimson Text'],
        'Open Sans': ['Playfair Display', 'Lora', 'Merriweather'],
        'Poppins': ['Lora', 'Crimson Text', 'Source Serif Pro'],
        'Montserrat': ['Lora', 'Merriweather', 'Crimson Text'],
        'Playfair Display': ['Inter', 'Open Sans', 'Source Sans Pro'],
        'Lora': ['Inter', 'Roboto', 'Open Sans'],
        'Source Sans Pro': ['Playfair Display', 'Lora', 'Merriweather']
    };

    const fontCategories = {
        'Inter': 'sans-serif',
        'Roboto': 'sans-serif',
        'Open Sans': 'sans-serif',
        'Poppins': 'sans-serif',
        'Montserrat': 'sans-serif',
        'Source Sans Pro': 'sans-serif',
        'Playfair Display': 'serif',
        'Lora': 'serif',
        'Merriweather': 'serif',
        'Crimson Text': 'serif',
        'Source Serif Pro': 'serif'
    };

    const possiblePairs = fontPairings[coreFont] || ['Inter'];
    const pairedFont = possiblePairs[Math.floor(Math.random() * possiblePairs.length)];
    
    // Determine heading and body based on font characteristics
    const coreCategory = fontCategories[coreFont];
    const pairedCategory = fontCategories[pairedFont];
    
    // Serif fonts typically work better for headings in digital design
    if (coreCategory === 'serif' && pairedCategory === 'sans-serif') {
        return { heading: coreFont, body: pairedFont };
    } else if (coreCategory === 'sans-serif' && pairedCategory === 'serif') {
        return { heading: pairedFont, body: coreFont };
    } else {
        // Both same category, use core for body
        return { heading: pairedFont, body: coreFont };
    }
}

// Generate breakdown explanation
function generateBreakdown(colors, typography, industry, positioning, scale) {
    const [h, s, l] = hexToHsl(colors.primary);
    
    const colorPsychology = {
        red: "conveys energy, urgency, and passion",
        orange: "suggests creativity, enthusiasm, and warmth",
        yellow: "represents optimism, clarity, and intelligence",
        green: "symbolizes growth, trust, and harmony",
        blue: "communicates trust, professionalism, and calm",
        purple: "indicates creativity, luxury, and innovation",
        pink: "expresses playfulness, compassion, and approachability"
    };
    
    let dominantColor = 'blue';
    if (h >= 0 && h < 30) dominantColor = 'red';
    else if (h >= 30 && h < 60) dominantColor = 'orange';
    else if (h >= 60 && h < 120) dominantColor = 'yellow';
    else if (h >= 120 && h < 180) dominantColor = 'green';
    else if (h >= 180 && h < 240) dominantColor = 'blue';
    else if (h >= 240 && h < 300) dominantColor = 'purple';
    else if (h >= 300 && h < 360) dominantColor = 'pink';

    const breakdown = [
        {
            title: "Color Psychology",
            description: `Your primary color ${colorPsychology[dominantColor]} - perfect for ${industry} companies with ${positioning} positioning. The saturation level of ${Math.round(s)}% creates ${s > 70 ? 'bold, attention-grabbing' : 'subtle, professional'} appeal.`
        },
        {
            title: "Typography Pairing",
            description: `${typography.heading} and ${typography.body} create excellent contrast and hierarchy. This pairing follows the fundamental rule of combining fonts with different personalities while maintaining readability across all devices.`
        },
        {
            title: "Modular Scale",
            description: `The ${scale} ratio creates harmonious typography scaling. This mathematical approach ensures consistent visual rhythm and professional appearance across all text elements.`
        },
        {
            title: "Industry Optimization",
            description: `This style guide follows ${industry} industry best practices, where ${positioning === 'professional' ? 'conservative and trustworthy' : positioning === 'innovative' ? 'modern and forward-thinking' : positioning} design builds user confidence and engagement.`
        }
    ];

    return breakdown;
}
