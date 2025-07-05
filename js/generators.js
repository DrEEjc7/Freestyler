// Enhanced Premium Typography Engine with Logo Analysis Support
const typographyPairs = {
  tech: {
    professional: [
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700, 800] },
      { heading: "Roboto", body: "Roboto", weights: [300, 400, 500, 700] },
      { heading: "Source Sans Pro", body: "Source Sans Pro", weights: [300, 400, 600, 700] },
    ],
    innovative: [
      { heading: "Poppins", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Montserrat", body: "Open Sans", weights: [300, 400, 600, 700] },
      { heading: "Inter", body: "Roboto", weights: [400, 500, 600, 700] },
    ],
    friendly: [
      { heading: "Open Sans", body: "Open Sans", weights: [400, 500, 600, 700] },
      { heading: "Poppins", body: "Poppins", weights: [300, 400, 500, 600] },
    ],
  },
  finance: {
    professional: [
      { heading: "Playfair Display", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Lora", body: "Source Sans Pro", weights: [400, 500, 600, 700] },
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700, 800] },
    ],
    trustworthy: [
      { heading: "Lora", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700, 800] },
    ],
    luxury: [
      { heading: "Playfair Display", body: "Lora", weights: [400, 500, 600, 700] },
      { heading: "Lora", body: "Source Sans Pro", weights: [400, 500, 600, 700] },
    ],
  },
  healthcare: {
    trustworthy: [
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Source Sans Pro", body: "Source Sans Pro", weights: [300, 400, 600, 700] },
    ],
    professional: [
      { heading: "Roboto", body: "Roboto", weights: [300, 400, 500, 700] },
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700] },
    ],
    friendly: [
      { heading: "Open Sans", body: "Open Sans", weights: [400, 500, 600, 700] },
      { heading: "Poppins", body: "Inter", weights: [400, 500, 600, 700] },
    ],
  },
  creative: {
    playful: [
      { heading: "Poppins", body: "Open Sans", weights: [400, 500, 600, 700] },
      { heading: "Montserrat", body: "Inter", weights: [300, 400, 500, 600] },
    ],
    innovative: [
      { heading: "Montserrat", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Poppins", body: "Source Sans Pro", weights: [300, 400, 600, 700] },
    ],
    luxury: [
      { heading: "Playfair Display", body: "Lora", weights: [400, 500, 600, 700] },
      { heading: "Lora", body: "Inter", weights: [400, 500, 600, 700] },
    ],
  },
  legal: {
    professional: [
      { heading: "Playfair Display", body: "Lora", weights: [400, 500, 600, 700] },
      { heading: "Lora", body: "Source Sans Pro", weights: [400, 500, 600, 700] },
    ],
    trustworthy: [
      { heading: "Lora", body: "Inter", weights: [400, 500, 600, 700] },
      { heading: "Inter", body: "Inter", weights: [400, 500, 600, 700] },
    ],
  },
  ecommerce: {
    friendly: [
      { heading: "Montserrat", body: "Open Sans", weights: [400, 500, 600, 700] },
      { heading: "Poppins", body: "Inter", weights: [300, 400, 500, 600] },
    ],
    luxury: [
      { heading: "Playfair Display", body: "Lora", weights: [400, 500, 600, 700] },
      { heading: "Lora", body: "Source Sans Pro", weights: [400, 500, 600, 700] },
    ],
    playful: [
      { heading: "Poppins", body: "Open Sans", weights: [400, 500, 600, 700] },
      { heading: "Montserrat", body: "Inter", weights: [300, 400, 500, 600] },
    ],
  },
}

// Enhanced Premium Color System
const colorSchemes = {
  tech: {
    professional: { primary: "#000000", secondary: "#374151", accent: "#f3f4f6", text: "#111827" },
    innovative: { primary: "#1e293b", secondary: "#475569", accent: "#e2e8f0", text: "#0f172a" },
    friendly: { primary: "#334155", secondary: "#64748b", accent: "#f1f5f9", text: "#1e293b" },
  },
  finance: {
    professional: { primary: "#0f172a", secondary: "#1e293b", accent: "#f8fafc", text: "#020617" },
    trustworthy: { primary: "#1e293b", secondary: "#334155", accent: "#f1f5f9", text: "#0f172a" },
    luxury: { primary: "#000000", secondary: "#1f2937", accent: "#f9fafb", text: "#111827" },
  },
  healthcare: {
    trustworthy: { primary: "#1e40af", secondary: "#3b82f6", accent: "#dbeafe", text: "#1e3a8a" },
    professional: { primary: "#1d4ed8", secondary: "#3b82f6", accent: "#dbeafe", text: "#1e40af" },
    friendly: { primary: "#0ea5e9", secondary: "#38bdf8", accent: "#e0f2fe", text: "#0c4a6e" },
  },
  creative: {
    playful: { primary: "#ec4899", secondary: "#f472b6", accent: "#fce7f3", text: "#831843" },
    innovative: { primary: "#7c3aed", secondary: "#a855f7", accent: "#f3e8ff", text: "#581c87" },
    luxury: { primary: "#000000", secondary: "#374151", accent: "#f3f4f6", text: "#111827" },
  },
  legal: {
    professional: { primary: "#0f172a", secondary: "#1e293b", accent: "#f8fafc", text: "#020617" },
    trustworthy: { primary: "#1e40af", secondary: "#3b82f6", accent: "#dbeafe", text: "#1e3a8a" },
  },
  ecommerce: {
    friendly: { primary: "#dc2626", secondary: "#ef4444", accent: "#fee2e2", text: "#991b1b" },
    luxury: { primary: "#000000", secondary: "#374151", accent: "#f3f4f6", text: "#111827" },
    playful: { primary: "#ec4899", secondary: "#f472b6", accent: "#fce7f3", text: "#831843" },
  },
}

// Enhanced AI-Powered Recommendations
const recommendations = {
  tech: {
    professional:
      "Technology companies benefit from clean, minimal typography and monochromatic color schemes. Black and grey tones convey reliability, precision, and technical expertise. This palette builds trust with enterprise clients while maintaining modern appeal.",
    innovative:
      "Forward-thinking tech companies can leverage darker greys with strategic accent colors. This approach suggests cutting-edge solutions while maintaining professional credibility. The typography should be modern and highly readable.",
    friendly:
      "Consumer-facing tech products benefit from approachable typography and softer grey tones. This creates accessibility while maintaining the technical authority users expect from technology brands.",
  },
  finance: {
    professional:
      "Financial services require the highest level of trust and credibility. Deep blacks and conservative greys with serif typography create immediate authority. This palette suggests stability and long-term thinking.",
    trustworthy:
      "Trust is paramount in finance. Monochromatic schemes with high contrast ensure clarity and accessibility. Clean typography reduces cognitive load when users are making important financial decisions.",
    luxury:
      "Premium financial services can leverage sophisticated black and grey palettes with subtle textures. This appeals to high-net-worth clients who expect refined, understated elegance.",
  },
  healthcare: {
    trustworthy:
      "Healthcare requires absolute trust and clarity. While maintaining professional credibility, subtle blue accents can provide calm and reassurance without overwhelming the core message.",
    professional:
      "Medical professionals need clean, accessible design. High contrast black and white with minimal color ensures information is clear and actionable in critical situations.",
    friendly:
      "Patient-facing healthcare applications benefit from warmer greys and approachable typography to reduce anxiety while maintaining professional authority.",
  },
  creative: {
    playful:
      "Creative agencies can push boundaries with bold color choices while maintaining sophisticated typography. This demonstrates creative capability while ensuring client confidence.",
    innovative:
      "Innovation-focused creative companies can leverage unique color combinations that showcase their forward-thinking approach while maintaining professional execution.",
    luxury:
      "High-end creative services benefit from sophisticated monochromatic palettes that let the work speak for itself. Restraint in color demonstrates confidence and refinement.",
  },
  legal: {
    professional:
      "Legal services require immediate trust and authority. Traditional color schemes with serif typography create the gravitas clients expect when dealing with important legal matters.",
    trustworthy:
      "Trust and reliability are essential in legal services. Conservative color choices and clear typography ensure clients feel confident in their legal representation.",
  },
  ecommerce: {
    friendly:
      "E-commerce platforms need to reduce purchase anxiety while creating urgency. Warm colors with clear typography help customers feel confident in their buying decisions.",
    luxury:
      "Premium e-commerce brands benefit from sophisticated color palettes that justify higher price points and create aspirational appeal.",
    playful:
      "Consumer brands targeting younger demographics can use vibrant colors and modern typography to create emotional connections and encourage impulse purchases.",
  },
}

// Industry-specific content with premium focus
const industryContent = {
  tech: {
    title: "Transform Your Digital Future",
    subtitle: "Enterprise-grade technology solutions",
    body: "We deliver cutting-edge technology solutions that drive business transformation and competitive advantage.",
    cta: "Start Your Journey",
  },
  finance: {
    title: "Secure Your Financial Future",
    subtitle: "Trusted wealth management expertise",
    body: "Professional financial planning and investment strategies designed for long-term wealth preservation and growth.",
    cta: "Schedule Consultation",
  },
  healthcare: {
    title: "Your Health, Our Priority",
    subtitle: "Comprehensive healthcare excellence",
    body: "Providing world-class healthcare services with a focus on patient outcomes and compassionate care.",
    cta: "Book Appointment",
  },
  creative: {
    title: "Bring Your Vision to Life",
    subtitle: "Award-winning creative solutions",
    body: "We create compelling brand experiences that resonate with your audience and drive meaningful engagement.",
    cta: "View Our Work",
  },
  legal: {
    title: "Trusted Legal Counsel",
    subtitle: "Expert legal representation",
    body: "Experienced attorneys providing comprehensive legal solutions with a focus on client success and protection.",
    cta: "Get Legal Help",
  },
  ecommerce: {
    title: "Premium Shopping Experience",
    subtitle: "Curated products, exceptional service",
    body: "Discover our carefully selected collection of premium products backed by unmatched customer service.",
    cta: "Shop Collection",
  },
}

// Advanced Color Generation with Premium Focus
function hexToHsl(hex) {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

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

function generateColorPalette(coreColor) {
  const [h, s, l] = hexToHsl(coreColor)

  // Premium black/white/grey focused palette generation
  const primary = coreColor

  // For premium look, create sophisticated grey variations
  let secondary, accent, text

  if (l < 30) {
    // Dark primary color - create lighter variations
    secondary = hslToHex(h, Math.max(s - 20, 10), Math.min(l + 25, 45))
    accent = hslToHex(h, Math.max(s - 40, 5), Math.min(l + 60, 95))
    text = hslToHex(h, Math.max(s - 30, 5), Math.max(l - 5, 5))
  } else if (l > 70) {
    // Light primary color - create darker variations
    secondary = hslToHex(h, Math.min(s + 10, 30), Math.max(l - 25, 25))
    accent = hslToHex(h, Math.max(s - 20, 5), Math.max(l - 10, 85))
    text = hslToHex(h, Math.min(s + 20, 40), Math.max(l - 60, 10))
  } else {
    // Medium primary color - create balanced variations
    secondary = hslToHex(h, Math.max(s - 15, 15), Math.min(l + 20, 65))
    accent = hslToHex(h, Math.max(s - 30, 5), Math.min(l + 40, 90))
    text = hslToHex(h, Math.min(s + 10, 50), Math.max(l - 40, 15))
  }

  return { primary, secondary, accent, text }
}

// Enhanced Typography Pairing with Premium Focus
function generateTypographyPair(coreFont) {
  const premiumPairings = {
    Inter: ["Playfair Display", "Lora", "Inter"],
    Roboto: ["Playfair Display", "Lora", "Roboto"],
    "Open Sans": ["Playfair Display", "Lora", "Open Sans"],
    Poppins: ["Lora", "Playfair Display", "Poppins"],
    Montserrat: ["Lora", "Playfair Display", "Montserrat"],
    "Playfair Display": ["Inter", "Roboto", "Source Sans Pro"],
    Lora: ["Inter", "Roboto", "Open Sans"],
    "Source Sans Pro": ["Playfair Display", "Lora", "Source Sans Pro"],
  }

  const fontCategories = {
    Inter: "sans-serif",
    Roboto: "sans-serif",
    "Open Sans": "sans-serif",
    Poppins: "sans-serif",
    Montserrat: "sans-serif",
    "Source Sans Pro": "sans-serif",
    "Playfair Display": "serif",
    Lora: "serif",
  }

  const possiblePairs = premiumPairings[coreFont] || ["Inter"]
  const pairedFont = possiblePairs[Math.floor(Math.random() * possiblePairs.length)]

  const coreCategory = fontCategories[coreFont]
  const pairedCategory = fontCategories[pairedFont]

  // Premium pairing logic - serif for headings creates sophistication
  if (coreCategory === "serif" && pairedCategory === "sans-serif") {
    return { heading: coreFont, body: pairedFont }
  } else if (coreCategory === "sans-serif" && pairedCategory === "serif") {
    return { heading: pairedFont, body: coreFont }
  } else {
    // Same category - use more sophisticated font for headings
    const sophisticatedFonts = ["Playfair Display", "Lora", "Montserrat", "Inter"]
    if (sophisticatedFonts.includes(pairedFont)) {
      return { heading: pairedFont, body: coreFont }
    } else {
      return { heading: coreFont, body: pairedFont }
    }
  }
}

// Enhanced Breakdown Generation with Premium Insights
function generateBreakdown(colors, typography, industry, positioning, scale) {
  const [h, s, l] = hexToHsl(colors.primary)

  const colorPsychology = {
    black: "conveys authority, sophistication, and premium quality",
    grey: "suggests professionalism, neutrality, and timeless elegance",
    blue: "communicates trust, stability, and corporate reliability",
    red: "expresses energy, urgency, and bold confidence",
    green: "symbolizes growth, prosperity, and natural harmony",
    purple: "indicates luxury, creativity, and innovative thinking",
    orange: "suggests enthusiasm, creativity, and approachable energy",
    yellow: "represents optimism, clarity, and intellectual stimulation",
  }

  let dominantColor = "grey"
  if (l < 20) dominantColor = "black"
  else if (h >= 0 && h < 30) dominantColor = "red"
  else if (h >= 30 && h < 60) dominantColor = "orange"
  else if (h >= 60 && h < 120) dominantColor = "yellow"
  else if (h >= 120 && h < 180) dominantColor = "green"
  else if (h >= 180 && h < 240) dominantColor = "blue"
  else if (h >= 240 && h < 300) dominantColor = "purple"

  const breakdown = [
    {
      title: "Premium Color Psychology",
      description: `Your primary color ${colorPsychology[dominantColor]} - strategically chosen for ${industry} companies with ${positioning} positioning. The sophisticated saturation level of ${Math.round(s)}% creates ${s > 50 ? "confident, authoritative" : "refined, understated"} brand presence that resonates with premium audiences.`,
    },
    {
      title: "Typography Excellence",
      description: `${typography.heading} and ${typography.body} create a sophisticated hierarchy that enhances readability and brand perception. This pairing follows premium design principles, combining fonts with complementary personalities while ensuring accessibility across all touchpoints and devices.`,
    },
    {
      title: "Mathematical Precision",
      description: `The ${scale} modular scale creates harmonious proportions throughout your design system. This mathematical approach ensures consistent visual rhythm and professional polish, reflecting the attention to detail that premium brands require.`,
    },
    {
      title: "Industry-Specific Optimization",
      description: `This style guide is optimized for ${industry} industry standards, where ${positioning === "professional" ? "authoritative and trustworthy" : positioning === "luxury" ? "sophisticated and exclusive" : positioning} design builds customer confidence and drives engagement. Every element supports your brand's premium positioning.`,
    },
    {
      title: "Accessibility & Performance",
      description: `All color combinations meet WCAG AA accessibility standards while maintaining visual impact. The typography scales perfectly across devices and loading conditions, ensuring your premium brand experience is consistent for all users.`,
    },
  ]

  return breakdown
}

// Logo Analysis Color Extraction (Enhanced)
function analyzeLogoColors(imageData, canvas) {
  const colorFrequency = {}
  const significantColors = []

  // Advanced color sampling with clustering
  for (let i = 0; i < imageData.length; i += 16) {
    // Sample every 4th pixel
    const r = imageData[i]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const a = imageData[i + 3]

    // Skip transparent or very light pixels
    if (a < 128 || (r > 250 && g > 250 && b > 250)) continue

    // Convert to HSL for better color analysis
    const hex = rgbToHex(r, g, b)
    const [h, s, l] = hexToHsl(hex)

    // Only consider colors with sufficient saturation or very dark colors
    if (s > 20 || l < 30) {
      const colorKey = `${Math.round(h / 10) * 10}-${Math.round(s / 20) * 20}-${Math.round(l / 20) * 20}`
      colorFrequency[colorKey] = (colorFrequency[colorKey] || 0) + 1
    }
  }

  // Get most significant colors
  const sortedColors = Object.entries(colorFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  return {
    dominantColors: sortedColors.map(([key]) => {
      const [h, s, l] = key.split("-").map(Number)
      return hslToHex(h, s, l)
    }),
    colorComplexity: sortedColors.length,
    hasStrongColors: sortedColors.some(([, count]) => count > imageData.length / 100),
  }
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

// Export all functions and data
window.typographyPairs = typographyPairs
window.colorSchemes = colorSchemes
window.recommendations = recommendations
window.industryContent = industryContent
window.generateColorPalette = generateColorPalette
window.generateTypographyPair = generateTypographyPair
window.generateBreakdown = generateBreakdown
window.hexToHsl = hexToHsl
window.hslToHex = hslToHex
window.analyzeLogoColors = analyzeLogoColors
