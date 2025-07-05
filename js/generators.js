class StyleGuideGenerator {
  constructor() {
    this.colorNames = [
      "Primary",
      "Secondary",
      "Accent",
      "Neutral",
      "Success",
      "Warning",
      "Error",
      "Info",
      "Light",
      "Dark",
    ]

    this.typographyPairings = {
      modern: {
        primary: "Inter",
        secondary: "Inter",
        description: "Clean and contemporary",
      },
      classic: {
        primary: "Playfair Display",
        secondary: "Source Sans Pro",
        description: "Timeless and elegant",
      },
      playful: {
        primary: "Poppins",
        secondary: "Open Sans",
        description: "Friendly and approachable",
      },
      elegant: {
        primary: "Cormorant Garamond",
        secondary: "Lato",
        description: "Sophisticated and refined",
      },
    }
  }

  generateColorPalette(primaryHex, harmonyType) {
    const primaryHsl = this.hexToHsl(primaryHex)
    let colors = []

    switch (harmonyType) {
      case "monochromatic":
        colors = this.generateMonochromatic(primaryHsl)
        break
      case "complementary":
        colors = this.generateComplementary(primaryHsl)
        break
      case "triadic":
        colors = this.generateTriadic(primaryHsl)
        break
      case "analogous":
        colors = this.generateAnalogous(primaryHsl)
        break
      default:
        colors = this.generateMonochromatic(primaryHsl)
    }

    return colors.map((color, index) => ({
      name: this.colorNames[index] || `Color ${index + 1}`,
      hex: color.hex,
      rgb: color.rgb,
      hsl: color.hsl,
      usage: this.getColorUsage(index),
    }))
  }

  generateMonochromatic(hsl) {
    const [h, s, l] = hsl
    const colors = []

    // Generate variations by adjusting lightness and saturation
    const variations = [
      [h, s, l], // Original
      [h, Math.max(0, s - 20), Math.min(100, l + 30)], // Lighter
      [h, Math.min(100, s + 10), Math.max(0, l - 20)], // Darker
      [h, Math.max(0, s - 40), Math.min(100, l + 50)], // Very light
      [h, Math.min(100, s + 20), Math.max(0, l - 40)], // Very dark
    ]

    variations.forEach(([h, s, l]) => {
      colors.push({
        hex: this.hslToHex(h, s, l),
        rgb: this.hslToRgb(h, s, l),
        hsl: `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`,
      })
    })

    return colors
  }

  generateComplementary(hsl) {
    const [h, s, l] = hsl
    const complementaryH = (h + 180) % 360

    const colors = [
      [h, s, l], // Primary
      [complementaryH, s, l], // Complementary
      [h, Math.max(0, s - 30), Math.min(100, l + 40)], // Primary light
      [complementaryH, Math.max(0, s - 30), Math.min(100, l + 40)], // Complementary light
      [0, 0, 95], // Near white
    ]

    return colors.map(([h, s, l]) => ({
      hex: this.hslToHex(h, s, l),
      rgb: this.hslToRgb(h, s, l),
      hsl: `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`,
    }))
  }

  generateTriadic(hsl) {
    const [h, s, l] = hsl
    const triadic1 = (h + 120) % 360
    const triadic2 = (h + 240) % 360

    const colors = [
      [h, s, l], // Primary
      [triadic1, s, l], // Triadic 1
      [triadic2, s, l], // Triadic 2
      [h, Math.max(0, s - 40), Math.min(100, l + 50)], // Primary light
      [0, 0, 20], // Dark neutral
    ]

    return colors.map(([h, s, l]) => ({
      hex: this.hslToHex(h, s, l),
      rgb: this.hslToRgb(h, s, l),
      hsl: `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`,
    }))
  }

  generateAnalogous(hsl) {
    const [h, s, l] = hsl

    const colors = [
      [h, s, l], // Primary
      [(h + 30) % 360, s, l], // Analogous 1
      [(h - 30 + 360) % 360, s, l], // Analogous 2
      [h, Math.max(0, s - 30), Math.min(100, l + 40)], // Primary light
      [h, Math.min(100, s + 20), Math.max(0, l - 30)], // Primary dark
    ]

    return colors.map(([h, s, l]) => ({
      hex: this.hslToHex(h, s, l),
      rgb: this.hslToRgb(h, s, l),
      hsl: `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`,
    }))
  }

  getColorUsage(index) {
    const usages = [
      "Primary actions, links, brand elements",
      "Secondary actions, hover states",
      "Accent elements, highlights",
      "Text, borders, subtle elements",
      "Success states, confirmations",
      "Warning states, cautions",
      "Error states, alerts",
      "Information, neutral states",
      "Background, light elements",
      "Text, dark elements",
    ]

    return usages[index] || "General purpose"
  }

  getTypographyPairing(style) {
    return this.typographyPairings[style] || this.typographyPairings.modern
  }

  // Color conversion utilities
  hexToHsl(hex) {
    const r = Number.parseInt(hex.slice(1, 3), 16) / 255
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
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

  hslToHex(h, s, l) {
    h /= 360
    s /= 100
    l /= 100

    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let r, g, b

    if (s === 0) {
      r = g = b = l // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    const toHex = (c) => {
      const hex = Math.round(c * 255).toString(16)
      return hex.length === 1 ? "0" + hex : hex
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  hslToRgb(h, s, l) {
    const hex = this.hslToHex(h, s, l)
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex.slice(3, 5), 16)
    const b = Number.parseInt(hex.slice(5, 7), 16)
    return `rgb(${r}, ${g}, ${b})`
  }
}
