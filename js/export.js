class StyleGuideExporter {
  constructor() {
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")
  }

  export(data, options) {
    if (options.png) {
      this.exportPNG(data)
    }

    if (options.csv) {
      this.exportCSV(data)
    }

    if (options.json) {
      this.exportJSON(data)
    }
  }

  exportPNG(data) {
    // Create a high-quality PNG export of the style guide
    const previewContainer = document.getElementById("previewContainer")

    // Use html2canvas library alternative - create canvas manually
    this.createStyleGuideCanvas(data).then((canvas) => {
      const link = document.createElement("a")
      link.download = "style-guide.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    })
  }

  async createStyleGuideCanvas(data) {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Set canvas size
    canvas.width = 1200
    canvas.height = 1600

    // White background
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let yOffset = 60

    // Title
    ctx.fillStyle = "#111827"
    ctx.font = "bold 48px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Brand Style Guide", canvas.width / 2, yOffset)
    yOffset += 80

    // Logo (if exists)
    if (data.logo) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      await new Promise((resolve) => {
        img.onload = () => {
          const logoWidth = Math.min(300, img.width)
          const logoHeight = (img.height / img.width) * logoWidth
          const logoX = (canvas.width - logoWidth) / 2

          ctx.drawImage(img, logoX, yOffset, logoWidth, logoHeight)
          yOffset += logoHeight + 60
          resolve()
        }
        img.src = data.logo
      })
    }

    // Color palette
    ctx.fillStyle = "#111827"
    ctx.font = "bold 32px Inter, sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Color Palette", 60, yOffset)
    yOffset += 50

    const colorSize = 120
    const colorSpacing = 20
    const colorsPerRow = Math.floor((canvas.width - 120) / (colorSize + colorSpacing))

    data.colors.forEach((color, index) => {
      const row = Math.floor(index / colorsPerRow)
      const col = index % colorsPerRow
      const x = 60 + col * (colorSize + colorSpacing)
      const y = yOffset + row * (colorSize + 80)

      // Color swatch
      ctx.fillStyle = color.hex
      ctx.fillRect(x, y, colorSize, colorSize)

      // Color info
      ctx.fillStyle = "#111827"
      ctx.font = "bold 16px Inter, sans-serif"
      ctx.fillText(color.name, x, y + colorSize + 20)

      ctx.font = "14px Monaco, monospace"
      ctx.fillStyle = "#6b7280"
      ctx.fillText(color.hex, x, y + colorSize + 40)
    })

    return canvas
  }

  exportCSV(data) {
    const csvContent = this.generateCSVContent(data)
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)
    link.download = "style-guide-data.csv"
    link.click()
  }

  generateCSVContent(data) {
    let csv = "Type,Name,Value,Usage\n"

    // Colors
    data.colors.forEach((color) => {
      csv += `Color,"${color.name}","${color.hex}","${color.usage}"\n`
      csv += `Color,"${color.name} RGB","${color.rgb}","${color.usage}"\n`
      csv += `Color,"${color.name} HSL","${color.hsl}","${color.usage}"\n`
    })

    // Typography
    const typography = this.getTypographyPairing(data.typography)
    csv += `Typography,"Primary Font","${typography.primary}","Headings and important text"\n`
    csv += `Typography,"Secondary Font","${typography.secondary}","Body text and descriptions"\n`

    // Settings
    csv += `Setting,"Color Harmony","${data.harmony}","Color generation method"\n`
    csv += `Setting,"Typography Style","${data.typography}","Font pairing style"\n`
    csv += `Setting,"Primary Color","${data.primaryColor}","Base color for palette"\n`

    return csv
  }

  exportJSON(data) {
    const jsonData = {
      metadata: {
        title: "Brand Style Guide",
        generated: new Date().toISOString(),
        version: "1.0",
      },
      brand: {
        logo: data.logo ? "base64_encoded_logo" : null,
        primaryColor: data.primaryColor,
      },
      colors: data.colors.map((color) => ({
        name: color.name,
        hex: color.hex,
        rgb: color.rgb,
        hsl: color.hsl,
        usage: color.usage,
      })),
      typography: {
        style: data.typography,
        fonts: this.getTypographyPairing(data.typography),
      },
      settings: {
        colorHarmony: data.harmony,
        typographyStyle: data.typography,
      },
    }

    const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "application/json;charset=utf-8;",
    })
    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)
    link.download = "style-guide-config.json"
    link.click()
  }

  getTypographyPairing(typography) {
    // Placeholder for actual implementation
    return {
      primary: "Primary Font Placeholder",
      secondary: "Secondary Font Placeholder",
    }
  }
}
