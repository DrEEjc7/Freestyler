class FreestylerApp {
  constructor() {
    this.currentLogo = null
    this.currentColors = []
    this.currentTypography = "modern"
    this.currentHarmony = "monochromatic"
    this.primaryColor = "#2563eb"

    this.init()
  }

  init() {
    this.setupEventListeners()
    this.generateInitialPreview()
  }

  setupEventListeners() {
    // Logo upload
    const logoUpload = document.getElementById("logoUpload")
    const logoInput = document.getElementById("logoInput")
    const removeLogo = document.getElementById("removeLogo")

    logoUpload.addEventListener("click", () => logoInput.click())
    logoUpload.addEventListener("dragover", this.handleDragOver.bind(this))
    logoUpload.addEventListener("drop", this.handleDrop.bind(this))
    logoInput.addEventListener("change", this.handleLogoUpload.bind(this))
    removeLogo.addEventListener("click", this.removeLogo.bind(this))

    // Color harmony
    document.querySelectorAll('input[name="harmony"]').forEach((radio) => {
      radio.addEventListener("change", this.handleHarmonyChange.bind(this))
    })

    // Typography
    document.querySelectorAll('input[name="typography"]').forEach((radio) => {
      radio.addEventListener("change", this.handleTypographyChange.bind(this))
    })

    // Primary color
    const primaryColor = document.getElementById("primaryColor")
    const primaryColorHex = document.getElementById("primaryColorHex")

    primaryColor.addEventListener("change", this.handlePrimaryColorChange.bind(this))
    primaryColorHex.addEventListener("change", this.handlePrimaryColorHexChange.bind(this))

    // Actions
    document.getElementById("resetBtn").addEventListener("click", this.reset.bind(this))
    document.getElementById("exportBtn").addEventListener("click", this.showExportModal.bind(this))
    document.getElementById("refreshPreview").addEventListener("click", this.generatePreview.bind(this))

    // Modal
    document.getElementById("closeModal").addEventListener("click", this.hideExportModal.bind(this))
    document.getElementById("cancelExport").addEventListener("click", this.hideExportModal.bind(this))
    document.getElementById("confirmExport").addEventListener("click", this.handleExport.bind(this))

    // Close modal on overlay click
    document.getElementById("exportModal").addEventListener("click", (e) => {
      if (e.target.id === "exportModal") {
        this.hideExportModal()
      }
    })
  }

  handleDragOver(e) {
    e.preventDefault()
    e.currentTarget.classList.add("dragover")
  }

  handleDrop(e) {
    e.preventDefault()
    e.currentTarget.classList.remove("dragover")

    const files = e.dataTransfer.files
    if (files.length > 0) {
      this.processLogoFile(files[0])
    }
  }

  handleLogoUpload(e) {
    const file = e.target.files[0]
    if (file) {
      this.processLogoFile(file)
    }
  }

  processLogoFile(file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      this.currentLogo = e.target.result
      this.showLogoPreview()
      this.extractColorsFromLogo()
    }
    reader.readAsDataURL(file)
  }

  showLogoPreview() {
    const uploadArea = document.getElementById("logoUpload")
    const preview = document.getElementById("logoPreview")
    const logoImage = document.getElementById("logoImage")

    logoImage.src = this.currentLogo
    uploadArea.style.display = "none"
    preview.style.display = "block"
  }

  removeLogo() {
    this.currentLogo = null
    const uploadArea = document.getElementById("logoUpload")
    const preview = document.getElementById("logoPreview")

    uploadArea.style.display = "block"
    preview.style.display = "none"

    // Reset to default colors
    this.primaryColor = "#2563eb"
    this.updateColorInputs()
    this.generatePreview()
  }

  extractColorsFromLogo() {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const colors = this.extractDominantColors(imageData)

      if (colors.length > 0) {
        this.primaryColor = colors[0]
        this.updateColorInputs()
        this.generatePreview()
      }
    }
    img.src = this.currentLogo
  }

  extractDominantColors(imageData) {
    const data = imageData.data
    const colorMap = new Map()

    // Sample every 4th pixel for performance
    for (let i = 0; i < data.length; i += 16) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const a = data[i + 3]

      // Skip transparent pixels
      if (a < 128) continue

      // Skip very light or very dark colors
      const brightness = (r + g + b) / 3
      if (brightness < 30 || brightness > 225) continue

      const color = `${r},${g},${b}`
      colorMap.set(color, (colorMap.get(color) || 0) + 1)
    }

    // Sort by frequency and convert to hex
    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([color]) => {
        const [r, g, b] = color.split(",").map(Number)
        return this.rgbToHex(r, g, b)
      })

    return sortedColors
  }

  rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16)
          return hex.length === 1 ? "0" + hex : hex
        })
        .join("")
    )
  }

  updateColorInputs() {
    document.getElementById("primaryColor").value = this.primaryColor
    document.getElementById("primaryColorHex").value = this.primaryColor
  }

  handleHarmonyChange(e) {
    this.currentHarmony = e.target.value
    this.generatePreview()
  }

  handleTypographyChange(e) {
    this.currentTypography = e.target.value
    this.generatePreview()
  }

  handlePrimaryColorChange(e) {
    this.primaryColor = e.target.value
    document.getElementById("primaryColorHex").value = this.primaryColor
    this.generatePreview()
  }

  handlePrimaryColorHexChange(e) {
    const hex = e.target.value
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      this.primaryColor = hex
      document.getElementById("primaryColor").value = this.primaryColor
      this.generatePreview()
    }
  }

  generateInitialPreview() {
    this.generatePreview()
  }

  generatePreview() {
    const generator = window.StyleGuideGenerator // Declare StyleGuideGenerator
    const colors = generator.generateColorPalette(this.primaryColor, this.currentHarmony)
    const typography = generator.getTypographyPairing(this.currentTypography)

    this.currentColors = colors

    const previewHTML = this.buildPreviewHTML(colors, typography)
    document.getElementById("previewContainer").innerHTML = previewHTML
  }

  buildPreviewHTML(colors, typography) {
    return `
            <div class="style-guide">
                <div class="style-guide-header">
                    ${
                      this.currentLogo
                        ? `
                        <div class="brand-section">
                            <div class="brand-logo">
                                <img src="${this.currentLogo}" alt="Brand Logo">
                            </div>
                        </div>
                    `
                        : ""
                    }
                    <h1 class="style-guide-title">Brand Style Guide</h1>
                    <p class="style-guide-subtitle">A comprehensive guide to your brand's visual identity</p>
                </div>
                
                <section class="color-section">
                    <h2 class="section-title">Color Palette</h2>
                    <div class="color-palette">
                        ${colors
                          .map(
                            (color, index) => `
                            <div class="color-swatch">
                                <div class="color-preview" style="background-color: ${color.hex}"></div>
                                <div class="color-info">
                                    <div class="color-name">${color.name}</div>
                                    <div class="color-values">
                                        <div class="color-value">HEX: ${color.hex}</div>
                                        <div class="color-value">RGB: ${color.rgb}</div>
                                        <div class="color-value">HSL: ${color.hsl}</div>
                                    </div>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>
                
                <section class="typography-section">
                    <h2 class="section-title">Typography</h2>
                    <div class="font-showcase">
                        <div class="font-family" style="font-family: ${typography.primary}">
                            <div class="font-name">${typography.primary} (Primary)</div>
                            <div class="font-samples">
                                <div class="font-sample">
                                    <div class="font-label">H1</div>
                                    <div class="font-text heading-1">The quick brown fox</div>
                                </div>
                                <div class="font-sample">
                                    <div class="font-label">H2</div>
                                    <div class="font-text heading-2">The quick brown fox</div>
                                </div>
                                <div class="font-sample">
                                    <div class="font-label">H3</div>
                                    <div class="font-text heading-3">The quick brown fox</div>
                                </div>
                                <div class="font-sample">
                                    <div class="font-label">Body</div>
                                    <div class="font-text body">The quick brown fox jumps over the lazy dog</div>
                                </div>
                            </div>
                        </div>
                        <div class="font-family" style="font-family: ${typography.secondary}">
                            <div class="font-name">${typography.secondary} (Secondary)</div>
                            <div class="font-samples">
                                <div class="font-sample">
                                    <div class="font-label">Body</div>
                                    <div class="font-text body">The quick brown fox jumps over the lazy dog</div>
                                </div>
                                <div class="font-sample">
                                    <div class="font-label">Caption</div>
                                    <div class="font-text caption">The quick brown fox jumps over the lazy dog</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="components-section">
                    <h2 class="section-title">UI Components</h2>
                    <div class="component-grid">
                        <div class="component-example">
                            <div class="component-title">Buttons</div>
                            <div class="button-examples">
                                <button class="preview-btn primary" style="--preview-primary: ${colors[0].hex}">Primary</button>
                                <button class="preview-btn secondary" style="--preview-primary: ${colors[0].hex}">Secondary</button>
                                <button class="preview-btn outline">Outline</button>
                            </div>
                        </div>
                        
                        <div class="component-example">
                            <div class="component-title">Cards</div>
                            <div class="card-examples">
                                <div class="preview-card">
                                    <div class="card-header">Card Title</div>
                                    <div class="card-content">This is a sample card component with your brand colors and typography.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="usage-section">
                    <h2 class="section-title">Usage Guidelines</h2>
                    <div class="usage-grid">
                        <div class="usage-item">
                            <div class="usage-title">Primary Color</div>
                            <div class="usage-description">Use for main actions, links, and brand elements. Ensure sufficient contrast for accessibility.</div>
                        </div>
                        <div class="usage-item">
                            <div class="usage-title">Typography</div>
                            <div class="usage-description">Use primary font for headings and important text. Secondary font for body text and descriptions.</div>
                        </div>
                        <div class="usage-item">
                            <div class="usage-title">Spacing</div>
                            <div class="usage-description">Maintain consistent spacing using multiples of 8px for a harmonious layout.</div>
                        </div>
                        <div class="usage-item">
                            <div class="usage-title">Accessibility</div>
                            <div class="usage-description">Ensure color contrast ratios meet WCAG guidelines. Test with screen readers.</div>
                        </div>
                    </div>
                </section>
            </div>
        `
  }

  reset() {
    this.currentLogo = null
    this.primaryColor = "#2563eb"
    this.currentHarmony = "monochromatic"
    this.currentTypography = "modern"

    // Reset UI
    document.getElementById("logoUpload").style.display = "block"
    document.getElementById("logoPreview").style.display = "none"
    document.querySelector('input[name="harmony"][value="monochromatic"]').checked = true
    document.querySelector('input[name="typography"][value="modern"]').checked = true
    this.updateColorInputs()

    this.generatePreview()
  }

  showExportModal() {
    document.getElementById("exportModal").style.display = "flex"
  }

  hideExportModal() {
    document.getElementById("exportModal").style.display = "none"
  }

  handleExport() {
    const exporter = window.StyleGuideExporter // Declare StyleGuideExporter
    const options = {
      png: document.getElementById("exportPNG").checked,
      csv: document.getElementById("exportCSV").checked,
      json: document.getElementById("exportJSON").checked,
    }

    const data = {
      logo: this.currentLogo,
      colors: this.currentColors,
      typography: this.currentTypography,
      harmony: this.currentHarmony,
      primaryColor: this.primaryColor,
    }

    exporter.export(data, options)
    this.hideExportModal()
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new FreestylerApp()
})
