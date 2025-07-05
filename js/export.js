// Enhanced Premium Export Functionality

// Generate comprehensive CSS with premium design system
function generateCSS() {
  const primary = document.getElementById("primaryColorText").value
  const secondary = document.getElementById("secondaryColorText").value
  const accent = document.getElementById("accentColorText").value
  const text = document.getElementById("textColorText").value
  const scale = document.getElementById("fontScale").value

  // Use current typography pair or fallback
  const selectedPair = window.currentTypographyPair || { heading: "Inter", body: "Inter" }

  // Calculate comprehensive font sizes
  const baseSize = 16
  const h1Size = Math.round(baseSize * Math.pow(scale, 3))
  const h2Size = Math.round(baseSize * Math.pow(scale, 2.5))
  const h3Size = Math.round(baseSize * Math.pow(scale, 2))
  const h4Size = Math.round(baseSize * Math.pow(scale, 1.5))
  const h5Size = Math.round(baseSize * Math.pow(scale, 1))
  const h6Size = Math.round(baseSize * Math.pow(scale, 0.5))
  const smallSize = Math.round(baseSize * Math.pow(scale, -0.5))

  return `/* StyleCraft Pro - Premium Design System */
/* Generated on ${new Date().toLocaleDateString()} */

:root {
    /* === BRAND COLORS === */
    --brand-primary: ${primary};
    --brand-secondary: ${secondary};
    --brand-accent: ${accent};
    --brand-text: ${text};
    
    /* === EXTENDED COLOR PALETTE === */
    --color-primary-50: ${lightenColor(primary, 95)};
    --color-primary-100: ${lightenColor(primary, 90)};
    --color-primary-200: ${lightenColor(primary, 80)};
    --color-primary-300: ${lightenColor(primary, 70)};
    --color-primary-400: ${lightenColor(primary, 60)};
    --color-primary-500: ${primary};
    --color-primary-600: ${darkenColor(primary, 10)};
    --color-primary-700: ${darkenColor(primary, 20)};
    --color-primary-800: ${darkenColor(primary, 30)};
    --color-primary-900: ${darkenColor(primary, 40)};
    
    /* === NEUTRAL PALETTE === */
    --color-white: #ffffff;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;
    --color-black: #000000;
    
    /* === SEMANTIC COLORS === */
    --color-success: #059669;
    --color-warning: #d97706;
    --color-error: #dc2626;
    --color-info: #0ea5e9;
    
    /* === TYPOGRAPHY === */
    --font-family-heading: '${selectedPair.heading}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-family-body: '${selectedPair.body}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
    
    /* === FONT SCALE === */
    --font-scale: ${scale};
    --font-size-xs: ${smallSize}px;
    --font-size-sm: 14px;
    --font-size-base: ${baseSize}px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-2xl: 24px;
    --font-size-3xl: 30px;
    --font-size-4xl: 36px;
    --font-size-5xl: 48px;
    --font-size-6xl: 60px;
    
    /* === HEADING SIZES === */
    --font-size-h1: ${h1Size}px;
    --font-size-h2: ${h2Size}px;
    --font-size-h3: ${h3Size}px;
    --font-size-h4: ${h4Size}px;
    --font-size-h5: ${h5Size}px;
    --font-size-h6: ${h6Size}px;
    
    /* === LINE HEIGHTS === */
    --line-height-tight: 1.25;
    --line-height-snug: 1.375;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.625;
    --line-height-loose: 2;
    
    /* === FONT WEIGHTS === */
    --font-weight-thin: 100;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;
    
    /* === SPACING SCALE === */
    --space-px: 1px;
    --space-0: 0;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-9: 2.25rem;
    --space-10: 2.5rem;
    --space-11: 2.75rem;
    --space-12: 3rem;
    --space-14: 3.5rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-28: 7rem;
    --space-32: 8rem;
    --space-36: 9rem;
    --space-40: 10rem;
    --space-44: 11rem;
    --space-48: 12rem;
    --space-52: 13rem;
    --space-56: 14rem;
    --space-60: 15rem;
    --space-64: 16rem;
    --space-72: 18rem;
    --space-80: 20rem;
    --space-96: 24rem;
    
    /* === SHADOWS === */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    
    /* === BORDER RADIUS === */
    --radius-none: 0;
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-full: 9999px;
    
    /* === TRANSITIONS === */
    --transition-none: none;
    --transition-all: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-colors: color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-opacity: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-shadow: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-transform: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* === Z-INDEX SCALE === */
    --z-0: 0;
    --z-10: 10;
    --z-20: 20;
    --z-30: 30;
    --z-40: 40;
    --z-50: 50;
    --z-auto: auto;
}

/* === BASE TYPOGRAPHY === */
html {
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
}

body {
    font-family: var(--font-family-body);
    color: var(--brand-text);
    font-weight: var(--font-weight-normal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* === HEADINGS === */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    color: var(--brand-text);
    margin-bottom: var(--space-4);
}

h1 {
    font-size: var(--font-size-h1);
    font-weight: var(--font-weight-extrabold);
    line-height: ${h1Size > 36 ? "var(--line-height-tight)" : "var(--line-height-snug)"};
    letter-spacing: -0.025em;
}

h2 {
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-snug);
    letter-spacing: -0.025em;
}

h3 {
    font-size: var(--font-size-h3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-snug);
}

h4 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-normal);
}

h5 {
    font-size: var(--font-size-h5);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
}

h6 {
    font-size: var(--font-size-h6);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-normal);
}

/* === TEXT ELEMENTS === */
p {
    margin-bottom: var(--space-4);
    line-height: var(--line-height-relaxed);
}

.lead {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-relaxed);
    color: var(--brand-text);
}

.small, small {
    font-size: var(--font-size-sm);
    color: var(--color-gray-600);
}

/* === PREMIUM BUTTON SYSTEM === */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-6);
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-tight);
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: var(--transition-all);
    user-select: none;
}

.btn-primary {
    background-color: var(--brand-primary);
    color: var(--color-white);
    border-color: var(--brand-primary);
    box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
    background-color: var(--color-primary-600);
    border-color: var(--color-primary-600);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--brand-primary);
    border-color: var(--brand-primary);
}

.btn-secondary:hover {
    background-color: var(--brand-primary);
    color: var(--color-white);
}

.btn-outline {
    background-color: transparent;
    color: var(--brand-text);
    border-color: var(--color-gray-300);
}

.btn-outline:hover {
    background-color: var(--color-gray-50);
    border-color: var(--color-gray-400);
}

/* === PREMIUM CARD SYSTEM === */
.card {
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: var(--transition-all);
}

.card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}

.card-header {
    padding: var(--space-6);
    border-bottom: 1px solid var(--color-gray-200);
}

.card-body {
    padding: var(--space-6);
}

.card-footer {
    padding: var(--space-6);
    border-top: 1px solid var(--color-gray-200);
    background-color: var(--color-gray-50);
}

/* === FORM ELEMENTS === */
.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    color: var(--brand-text);
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-lg);
    transition: var(--transition-colors);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--brand-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-label {
    display: block;
    margin-bottom: var(--space-2);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--brand-text);
}

/* === UTILITY CLASSES === */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.font-thin { font-weight: var(--font-weight-thin); }
.font-light { font-weight: var(--font-weight-light); }
.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }
.font-extrabold { font-weight: var(--font-weight-extrabold); }
.font-black { font-weight: var(--font-weight-black); }

.text-primary { color: var(--brand-primary); }
.text-secondary { color: var(--brand-secondary); }
.text-accent { color: var(--brand-accent); }
.text-muted { color: var(--color-gray-600); }

.bg-primary { background-color: var(--brand-primary); }
.bg-secondary { background-color: var(--brand-secondary); }
.bg-accent { background-color: var(--brand-accent); }

.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }

.rounded-sm { border-radius: var(--radius-sm); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-2xl { border-radius: var(--radius-2xl); }
.rounded-full { border-radius: var(--radius-full); }

/* === RESPONSIVE DESIGN === */
@media (max-width: 768px) {
    h1 { font-size: calc(var(--font-size-h1) * 0.8); }
    h2 { font-size: calc(var(--font-size-h2) * 0.85); }
    h3 { font-size: calc(var(--font-size-h3) * 0.9); }
    
    .btn {
        padding: var(--space-3) var(--space-4);
        font-size: var(--font-size-sm);
    }
    
    .card-header,
    .card-body,
    .card-footer {
        padding: var(--space-4);
    }
}

/* === DARK MODE SUPPORT === */
@media (prefers-color-scheme: dark) {
    :root {
        --color-white: #000000;
        --color-gray-50: #111827;
        --color-gray-100: #1f2937;
        --color-gray-200: #374151;
        --color-gray-300: #4b5563;
        --color-gray-400: #6b7280;
        --color-gray-500: #9ca3af;
        --color-gray-600: #d1d5db;
        --color-gray-700: #e5e7eb;
        --color-gray-800: #f3f4f6;
        --color-gray-900: #f9fafb;
        --color-black: #ffffff;
    }
}

/* === PRINT STYLES === */
@media print {
    .btn,
    .card {
        box-shadow: none !important;
        transform: none !important;
    }
    
    .card {
        border: 1px solid var(--color-gray-300) !important;
    }
}`
}

// Helper functions for color manipulation
function lightenColor(hex, percent) {
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.min(l + percent, 100))
}

function darkenColor(hex, percent) {
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.max(l - percent, 0))
}

// Generate comprehensive CSV data
function generateCSV() {
  const selectedPair = window.currentTypographyPair || { heading: "Inter", body: "Inter" }
  const timestamp = new Date()

  const data = [
    ["Property", "Value", "Category", "Description"],
    ["Generated Date", timestamp.toLocaleDateString(), "Meta", "Date of style guide creation"],
    ["Generated Time", timestamp.toLocaleTimeString(), "Meta", "Time of style guide creation"],
    ["Tool Version", "2.0.0", "Meta", "StyleCraft Pro version"],
    ["", "", "", ""],

    // Brand Configuration
    ["Industry", document.getElementById("industry").value, "Brand", "Target industry for style guide"],
    ["Brand Positioning", document.getElementById("positioning").value, "Brand", "Brand positioning strategy"],
    ["Typography Scale", document.getElementById("fontScale").value, "Brand", "Mathematical ratio for font sizing"],
    ["", "", "", ""],

    // Color System
    ["Core Color", document.getElementById("coreColorText").value, "Colors", "Base color for palette generation"],
    ["Primary Color", document.getElementById("primaryColorText").value, "Colors", "Main brand color"],
    ["Secondary Color", document.getElementById("secondaryColorText").value, "Colors", "Supporting brand color"],
    ["Accent Color", document.getElementById("accentColorText").value, "Colors", "Highlight and CTA color"],
    ["Text Color", document.getElementById("textColorText").value, "Colors", "Primary text color"],
    ["", "", "", ""],

    // Typography System
    ["Core Font", document.getElementById("coreFont").value, "Typography", "Base font selection"],
    ["Heading Font", selectedPair.heading, "Typography", "Font for headings and titles"],
    ["Body Font", selectedPair.body, "Typography", "Font for body text and paragraphs"],
    ["", "", "", ""],

    // Font Sizes
    [
      "H1 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 3))}px`,
      "Typography",
      "Main heading size",
    ],
    [
      "H2 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 2.5))}px`,
      "Typography",
      "Section heading size",
    ],
    [
      "H3 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 2))}px`,
      "Typography",
      "Subsection heading size",
    ],
    [
      "H4 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 1.5))}px`,
      "Typography",
      "Minor heading size",
    ],
    [
      "H5 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 1))}px`,
      "Typography",
      "Small heading size",
    ],
    [
      "H6 Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, 0.5))}px`,
      "Typography",
      "Smallest heading size",
    ],
    ["Body Size", "16px", "Typography", "Base body text size"],
    [
      "Small Size",
      `${Math.round(16 * Math.pow(document.getElementById("fontScale").value, -0.5))}px`,
      "Typography",
      "Small text size",
    ],
    ["", "", "", ""],

    // Design Tokens
    ["Border Radius Small", "0.375rem", "Design Tokens", "Small border radius"],
    ["Border Radius Medium", "0.5rem", "Design Tokens", "Medium border radius"],
    ["Border Radius Large", "0.75rem", "Design Tokens", "Large border radius"],
    ["Border Radius XL", "1rem", "Design Tokens", "Extra large border radius"],
    ["", "", "", ""],

    // Spacing Scale
    ["Space XS", "0.25rem", "Spacing", "Extra small spacing"],
    ["Space SM", "0.5rem", "Spacing", "Small spacing"],
    ["Space MD", "1rem", "Spacing", "Medium spacing"],
    ["Space LG", "1.5rem", "Spacing", "Large spacing"],
    ["Space XL", "2rem", "Spacing", "Extra large spacing"],
    ["Space 2XL", "3rem", "Spacing", "Double extra large spacing"],
    ["", "", "", ""],

    // Shadows
    ["Shadow Small", "0 1px 3px rgba(0,0,0,0.1)", "Shadows", "Small shadow"],
    ["Shadow Medium", "0 4px 6px rgba(0,0,0,0.1)", "Shadows", "Medium shadow"],
    ["Shadow Large", "0 10px 15px rgba(0,0,0,0.1)", "Shadows", "Large shadow"],
    ["Shadow XL", "0 20px 25px rgba(0,0,0,0.1)", "Shadows", "Extra large shadow"],
    ["", "", "", ""],

    // Accessibility
    [
      "WCAG Compliance",
      checkAccessibilityCompliance() ? "AA" : "Needs Review",
      "Accessibility",
      "WCAG accessibility level",
    ],
    ["Color Contrast Ratio", calculateContrastRatio().toFixed(2), "Accessibility", "Text to background contrast ratio"],
    ["", "", "", ""],

    // Usage Guidelines
    ["Primary Use Case", getPrimaryUseCase(), "Guidelines", "Primary application of this style guide"],
    ["Recommended Applications", getRecommendedApplications(), "Guidelines", "Recommended use cases"],
    ["Brand Personality", getBrandPersonality(), "Guidelines", "Brand personality traits"],
  ]

  return data.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")
}

// Helper functions for CSV generation
function checkAccessibilityCompliance() {
  const body = document.body
  const bgColor = body.hasAttribute("data-theme") ? "#0f172a" : "#ffffff"
  const textColor = document.getElementById("textColorText").value
  const primaryColor = document.getElementById("primaryColorText").value

  const textContrast = getContrastRatio(bgColor, textColor)
  const primaryContrast = getContrastRatio(bgColor, primaryColor)

  return textContrast >= 4.5 && primaryContrast >= 3.0
}

function calculateContrastRatio() {
  const body = document.body
  const bgColor = body.hasAttribute("data-theme") ? "#0f172a" : "#ffffff"
  const textColor = document.getElementById("textColorText").value
  return getContrastRatio(bgColor, textColor)
}

function getPrimaryUseCase() {
  const industry = document.getElementById("industry").value
  const positioning = document.getElementById("positioning").value

  const useCases = {
    tech: {
      professional: "Enterprise software and B2B platforms",
      innovative: "Startup and tech product interfaces",
      friendly: "Consumer apps and SaaS tools",
    },
    finance: {
      professional: "Banking and investment platforms",
      trustworthy: "Financial advisory services",
      luxury: "Private wealth management",
    },
    healthcare: {
      professional: "Medical software and EMR systems",
      trustworthy: "Patient portals and health apps",
      friendly: "Wellness and fitness applications",
    },
    creative: {
      playful: "Creative agencies and portfolios",
      innovative: "Design studios and art platforms",
      luxury: "High-end creative services",
    },
    legal: { professional: "Law firm websites and legal software", trustworthy: "Legal document platforms" },
    ecommerce: {
      friendly: "Consumer retail and marketplaces",
      luxury: "Premium brand e-commerce",
      playful: "Lifestyle and fashion brands",
    },
  }

  return useCases[industry]?.[positioning] || "General business applications"
}

function getRecommendedApplications() {
  const industry = document.getElementById("industry").value
  return (
    {
      tech: "Websites, mobile apps, software interfaces, documentation",
      finance: "Trading platforms, mobile banking, financial reports, presentations",
      healthcare: "Patient portals, medical devices, health apps, clinical software",
      creative: "Portfolios, brand identity, marketing materials, presentations",
      legal: "Legal documents, case management software, client portals",
      ecommerce: "Online stores, mobile commerce, product catalogs, checkout flows",
    }[industry] || "Websites, applications, marketing materials"
  )
}

function getBrandPersonality() {
  const positioning = document.getElementById("positioning").value
  return (
    {
      professional: "Authoritative, trustworthy, competent, reliable",
      friendly: "Approachable, warm, helpful, accessible",
      innovative: "Forward-thinking, creative, dynamic, cutting-edge",
      trustworthy: "Dependable, secure, stable, honest",
      playful: "Fun, energetic, creative, engaging",
      luxury: "Sophisticated, exclusive, premium, refined",
    }[positioning] || "Professional and reliable"
  )
}

// Utility functions
function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

function getLuminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0

  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0
  const shortHex = hex.length === 4
  if (shortHex) {
    r = Number.parseInt(hex[1] + hex[1], 16)
    g = Number.parseInt(hex[2] + hex[2], 16)
    b = Number.parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = Number.parseInt(hex.substring(1, 3), 16)
    g = Number.parseInt(hex.substring(3, 5), 16)
    b = Number.parseInt(hex.substring(5, 7), 16)
  } else {
    return null
  }
  return { r, g, b }
}

function hexToHsl(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return [0, 0, 0]

  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

function hslToHex(h, s, l) {
  h /= 360
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
  const m = l - c / 2
  let r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 1 / 6) {
    r = c
    g = x
    b = 0
  } else if (1 / 6 <= h && h < 1 / 3) {
    r = x
    g = c
    b = 0
  } else if (1 / 3 <= h && h < 1 / 2) {
    r = 0
    g = c
    b = x
  } else if (1 / 2 <= h && h < 2 / 3) {
    r = 0
    g = x
    b = c
  } else if (2 / 3 <= h && h < 5 / 6) {
    r = x
    g = 0
    b = c
  } else if (5 / 6 <= h && h < 1) {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

// Generate style guide summary for PNG export (future implementation)
function generateStyleGuideSummary() {
  const selectedPair = window.currentTypographyPair || { heading: "Inter", body: "Inter" }
  const industry = document.getElementById("industry").value
  const positioning = document.getElementById("positioning").value
  const scale = document.getElementById("fontScale").value

  return {
    title: `${industry.charAt(0).toUpperCase() + industry.slice(1)} Style Guide`,
    subtitle: `${positioning.charAt(0).toUpperCase() + positioning.slice(1)} Positioning`,
    colors: {
      primary: document.getElementById("primaryColorText").value,
      secondary: document.getElementById("secondaryColorText").value,
      accent: document.getElementById("accentColorText").value,
      text: document.getElementById("textColorText").value,
    },
    typography: {
      heading: selectedPair.heading,
      body: selectedPair.body,
      scale: scale,
    },
    timestamp: new Date().toLocaleDateString(),
    accessibility: checkAccessibilityCompliance() ? "WCAG AA Compliant" : "Needs Review",
  }
}

// Download file utility
function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// Copy to clipboard utility
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"
    textArea.style.left = "-999999px"
    textArea.style.top = "-999999px"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    let success = false
    try {
      success = document.execCommand("copy")
    } catch (err) {
      console.error("Fallback: Unable to copy", err)
    }
    document.body.removeChild(textArea)
    return success
  }
}

// Export functions to global scope
window.generateCSS = generateCSS
window.generateCSV = generateCSV
window.generateStyleGuideSummary = generateStyleGuideSummary
window.downloadFile = downloadFile
window.copyToClipboard = copyToClipboard
window.lightenColor = lightenColor
window.darkenColor = darkenColor
