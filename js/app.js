// Enhanced Premium Style Guide Generator - Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  setupAccessibilityChecker()
  setupLogoUpload()
})

function initializeApp() {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Initialize theme
  initializeTheme()

  // Set initial premium black/white/grey palette
  document.getElementById("coreColor").value = "#000000"
  document.getElementById("coreColorText").value = "#000000"
  document.getElementById("primaryColor").value = "#000000"
  document.getElementById("primaryColorText").value = "#000000"
  document.getElementById("secondaryColor").value = "#6b7280"
  document.getElementById("secondaryColorText").value = "#6b7280"
  document.getElementById("accentColor").value = "#f3f4f6"
  document.getElementById("accentColorText").value = "#f3f4f6"
  document.getElementById("textColor").value = "#111827"
  document.getElementById("textColorText").value = "#111827"

  // Initialize color inputs synchronization
  synchronizeColorInputs()

  // Apply initial premium styling
  applyPremiumStyling()
}

function initializeTheme() {
  const themeToggle = document.getElementById("themeToggle")
  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.getElementById("themeText")
  const body = document.body

  // Set default to light mode
  const savedTheme = localStorage.getItem("theme") || "light"

  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark")
    themeIcon.innerHTML =
      '<path d="M12 3V1M12 23V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    themeText.textContent = "Light"
  } else {
    body.removeAttribute("data-theme")
    themeIcon.innerHTML =
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>'
    themeText.textContent = "Dark"
  }

  themeToggle.addEventListener("click", () => {
    if (body.hasAttribute("data-theme")) {
      body.removeAttribute("data-theme")
      themeIcon.innerHTML =
        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>'
      themeText.textContent = "Dark"
      localStorage.setItem("theme", "light")
    } else {
      body.setAttribute("data-theme", "dark")
      themeIcon.innerHTML =
        '<path d="M12 3V1M12 23V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
      themeText.textContent = "Light"
      localStorage.setItem("theme", "dark")
    }
  })
}

function setupLogoUpload() {
  const logoUploadArea = document.getElementById("logoUploadArea")
  const logoInput = document.getElementById("logoInput")
  const logoPreview = document.getElementById("logoPreview")
  const logoImage = document.getElementById("logoImage")
  const uploadPlaceholder = document.getElementById("uploadPlaceholder")
  const removeLogo = document.getElementById("removeLogo")
  const analyzeLogoBtn = document.getElementById("analyzeLogoBtn")

  // Click to upload
  logoUploadArea.addEventListener("click", () => {
    if (!logoPreview.style.display || logoPreview.style.display === "none") {
      logoInput.click()
    }
  })

  // Drag and drop
  logoUploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    logoUploadArea.style.borderColor = "var(--accent-color)"
    logoUploadArea.style.background = "var(--accent-light)"
  })

  logoUploadArea.addEventListener("dragleave", (e) => {
    e.preventDefault()
    logoUploadArea.style.borderColor = ""
    logoUploadArea.style.background = ""
  })

  logoUploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    logoUploadArea.style.borderColor = ""
    logoUploadArea.style.background = ""

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleLogoFile(files[0])
    }
  })

  // File input change
  logoInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleLogoFile(e.target.files[0])
    }
  })

  // Remove logo
  removeLogo.addEventListener("click", (e) => {
    e.stopPropagation()
    resetLogoUpload()
  })

  // Analyze logo
  analyzeLogoBtn.addEventListener("click", () => {
    if (logoImage.src) {
      analyzeLogo(logoImage)
    }
  })

  function handleLogoFile(file) {
    // Validate file
    if (!file.type.startsWith("image/")) {
      showNotification("Please upload an image file", "error")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      showNotification("File size must be less than 5MB", "error")
      return
    }

    // Read and display file
    const reader = new FileReader()
    reader.onload = (e) => {
      logoImage.src = e.target.result
      uploadPlaceholder.style.display = "none"
      logoPreview.style.display = "block"
      analyzeLogoBtn.style.display = "block"
      showNotification("Logo uploaded successfully!", "success")
    }
    reader.readAsDataURL(file)
  }

  function resetLogoUpload() {
    logoImage.src = ""
    uploadPlaceholder.style.display = "flex"
    logoPreview.style.display = "none"
    analyzeLogoBtn.style.display = "none"
    logoInput.value = ""
  }
}

function analyzeLogo(imageElement) {
  showNotification("Analyzing logo...", "info")

  // Create canvas to analyze image colors
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")

  // Set canvas size
  canvas.width = imageElement.naturalWidth
  canvas.height = imageElement.naturalHeight

  // Draw image to canvas
  ctx.drawImage(imageElement, 0, 0)

  try {
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    // Analyze colors
    const colorAnalysis = analyzeImageColors(data)

    // Generate style based on analysis
    generateStyleFromLogo(colorAnalysis)

    showNotification("Logo analyzed! Style guide generated based on your brand colors.", "success")
  } catch (error) {
    console.error("Error analyzing logo:", error)
    showNotification("Could not analyze logo colors. Please try a different image.", "error")
  }
}

function analyzeImageColors(imageData) {
  const colors = []
  const colorCounts = {}

  // Sample every 10th pixel for performance
  for (let i = 0; i < imageData.length; i += 40) {
    const r = imageData[i]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const a = imageData[i + 3]

    // Skip transparent pixels
    if (a < 128) continue

    // Skip very light colors (likely background)
    if (r > 240 && g > 240 && b > 240) continue

    const hex = rgbToHex(r, g, b)
    colorCounts[hex] = (colorCounts[hex] || 0) + 1
  }

  // Get most common colors
  const sortedColors = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([color]) => color)

  return {
    dominantColors: sortedColors,
    primaryColor: sortedColors[0] || "#000000",
    hasMultipleColors: sortedColors.length > 3,
  }
}

function generateStyleFromLogo(colorAnalysis) {
  const primaryColor = colorAnalysis.primaryColor

  // Set core color
  document.getElementById("coreColor").value = primaryColor
  document.getElementById("coreColorText").value = primaryColor

  // Generate palette based on logo's primary color
  const palette = generateColorPalette(primaryColor)

  // Apply generated colors
  document.getElementById("primaryColor").value = palette.primary
  document.getElementById("primaryColorText").value = palette.primary
  document.getElementById("secondaryColor").value = palette.secondary
  document.getElementById("secondaryColorText").value = palette.secondary
  document.getElementById("accentColor").value = palette.accent
  document.getElementById("accentColorText").value = palette.accent
  document.getElementById("textColor").value = palette.text
  document.getElementById("textColorText").value = palette.text

  // Generate typography based on color analysis
  const industry = document.getElementById("industry").value
  const positioning = colorAnalysis.hasMultipleColors ? "creative" : "professional"

  // Update positioning if logo suggests creativity
  if (colorAnalysis.hasMultipleColors) {
    document.getElementById("positioning").value = "creative"
  }

  // Generate typography pair
  const coreFont = document.getElementById("coreFont").value
  const typographyPair = generateTypographyPair(coreFont)
  window.currentTypographyPair = typographyPair

  // Update recommendations
  const recommendationText = `Logo analysis complete! Detected ${colorAnalysis.dominantColors.length} key colors. Generated a ${positioning} style guide that complements your brand identity. The color palette maintains visual harmony while ensuring accessibility standards.`
  document.getElementById("recommendationText").textContent = recommendationText

  // Check accessibility
  checkColorContrast()

  // Auto-generate style guide
  setTimeout(() => {
    document.getElementById("generateBtn").click()
  }, 500)
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function setupEventListeners() {
  // Preview tabs functionality
  setupPreviewTabs()

  // Core color and typography generation
  setupGenerators()

  // Main style guide generation
  setupStyleGuideGeneration()

  // Export functionality
  setupExportButtons()
}

function setupPreviewTabs() {
  const previewTabs = document.querySelectorAll(".preview-tab")
  const previewPanels = document.querySelectorAll(".preview-panel")

  previewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      previewTabs.forEach((t) => t.classList.remove("active"))
      previewPanels.forEach((p) => p.classList.remove("active"))

      tab.classList.add("active")
      const targetTab = tab.dataset.tab
      document.getElementById(targetTab).classList.add("active")
    })
  })
}

function setupGenerators() {
  // Core color input synchronization
  const coreColorInput = document.getElementById("coreColor")
  const coreColorText = document.getElementById("coreColorText")

  coreColorInput.addEventListener("input", (e) => {
    coreColorText.value = e.target.value.toUpperCase()
  })

  coreColorText.addEventListener("change", (e) => {
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e.target.value)) {
      coreColorInput.value = e.target.value
    }
  })

  // Generate Colors functionality
  document.getElementById("generateColorsBtn").addEventListener("click", () => {
    const coreColor = document.getElementById("coreColorText").value
    const palette = generateColorPalette(coreColor)

    document.getElementById("primaryColor").value = palette.primary
    document.getElementById("primaryColorText").value = palette.primary
    document.getElementById("secondaryColor").value = palette.secondary
    document.getElementById("secondaryColorText").value = palette.secondary
    document.getElementById("accentColor").value = palette.accent
    document.getElementById("accentColorText").value = palette.accent
    document.getElementById("textColor").value = palette.text
    document.getElementById("textColorText").value = palette.text

    checkColorContrast()
    showNotification("Color palette generated successfully!", "success")
  })

  // Generate Typography functionality
  document.getElementById("generateTypographyBtn").addEventListener("click", () => {
    const coreFont = document.getElementById("coreFont").value
    const pair = generateTypographyPair(coreFont)

    window.currentTypographyPair = pair

    document.getElementById("recommendationText").textContent =
      `Generated typography pair: ${pair.heading} for headings, ${pair.body} for body text. This combination creates excellent visual hierarchy and readability across all devices.`

    showNotification("Typography pair generated successfully!", "success")
  })
}

function setupStyleGuideGeneration() {
  document.getElementById("generateBtn").addEventListener("click", () => {
    const industry = document.getElementById("industry").value
    const positioning = document.getElementById("positioning").value
    const fontScale = Number.parseFloat(document.getElementById("fontScale").value)

    // Use current typography pair or generate industry-specific one
    let selectedPair = window.currentTypographyPair
    if (!selectedPair) {
      const industryTypography = typographyPairs[industry]
      const pairs =
        industryTypography?.[positioning] || industryTypography?.professional || typographyPairs.tech.professional
      selectedPair = pairs[Math.floor(Math.random() * pairs.length)]
      window.currentTypographyPair = selectedPair
    }

    // Get current colors
    const currentColors = {
      primary: document.getElementById("primaryColorText").value,
      secondary: document.getElementById("secondaryColorText").value,
      accent: document.getElementById("accentColorText").value,
      text: document.getElementById("textColorText").value,
    }

    // Apply styles to preview
    applyPreviewStyles(selectedPair, currentColors, fontScale)

    // Update content
    updatePreviewContent(industry)

    // Generate and display breakdown
    const breakdown = generateBreakdown(currentColors, selectedPair, industry, positioning, fontScale)
    displayBreakdown(breakdown)

    // Update recommendations
    const recommendationText =
      recommendations[industry]?.[positioning] ||
      recommendations[industry]?.professional ||
      "Generated premium style guide optimized for your industry and positioning. The design follows modern best practices for accessibility and user experience."
    document.getElementById("recommendationText").textContent = recommendationText

    // Check accessibility
    checkColorContrast()

    showNotification("Premium style guide generated successfully!", "success")
  })
}

function setupExportButtons() {
  // Copy CSS functionality
  document.getElementById("copyCssBtn").addEventListener("click", async () => {
    const cssVariables = generateCSS()
    const success = await copyToClipboard(cssVariables)

    if (success) {
      showNotification("CSS variables copied to clipboard!", "success")
    } else {
      showNotification("Failed to copy CSS", "error")
    }
  })

  // Download CSV functionality
  document.getElementById("downloadCsvBtn").addEventListener("click", () => {
    const csvData = generateCSV()
    const fileName = `stylecraft-pro-${new Date().toISOString().split("T")[0]}.csv`
    downloadFile(csvData, fileName, "text/csv")
    showNotification("Style guide data downloaded as CSV!", "success")
  })

  // Download PNG functionality
  document.getElementById("downloadPngBtn").addEventListener("click", () => {
    // For now, show a message about PNG export
    showNotification("PNG export feature coming soon! Use CSS export for now.", "info")
  })
}

function synchronizeColorInputs() {
  const colorInputs = [
    { color: "primaryColor", text: "primaryColorText" },
    { color: "secondaryColor", text: "secondaryColorText" },
    { color: "accentColor", text: "accentColorText" },
    { color: "textColor", text: "textColorText" },
  ]

  colorInputs.forEach(({ color, text }) => {
    const colorInput = document.getElementById(color)
    const textInput = document.getElementById(text)

    colorInput.addEventListener("input", (e) => {
      textInput.value = e.target.value.toUpperCase()
      checkColorContrast()
    })

    textInput.addEventListener("change", (e) => {
      if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e.target.value)) {
        colorInput.value = e.target.value
        checkColorContrast()
      }
    })
  })
}

function setupAccessibilityChecker() {
  checkColorContrast()

  const colorInputs = ["primaryColorText", "secondaryColorText", "accentColorText", "textColorText"]
  colorInputs.forEach((inputId) => {
    document.getElementById(inputId).addEventListener("input", checkColorContrast)
  })
}

function applyPremiumStyling() {
  // Apply premium black/white/grey styling to the preview
  const root = document.documentElement
  root.style.setProperty("--accent-color", "#000000")
  root.style.setProperty("--accent-hover", "#1e293b")
  root.style.setProperty("--success-color", "#059669")
}

// Accessibility functions
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

function getLuminance(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0

  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

function checkColorContrast() {
  const body = document.body
  const bgColor = body.hasAttribute("data-theme") ? "#0f172a" : "#ffffff"
  const textColor = document.getElementById("textColorText").value
  const primaryColor = document.getElementById("primaryColorText").value

  const textContrast = getContrastRatio(bgColor, textColor)
  const primaryContrast = getContrastRatio(bgColor, primaryColor)

  const warningEl = document.getElementById("accessibilityWarning")
  const successEl = document.getElementById("accessibilitySuccess")

  const meetsStandards = textContrast >= 4.5 && primaryContrast >= 3.0

  if (meetsStandards) {
    warningEl.style.display = "none"
    successEl.style.display = "flex"
  } else {
    warningEl.style.display = "flex"
    successEl.style.display = "none"
  }
}

function applyPreviewStyles(typography, colors, scale) {
  const preview = document.getElementById("previewContent")
  const root = document.documentElement

  // Calculate font sizes using modular scale
  const baseSize = 16
  const sizes = {
    h1: Math.round(baseSize * Math.pow(scale, 3)),
    h2: Math.round(baseSize * Math.pow(scale, 2.5)),
    h3: Math.round(baseSize * Math.pow(scale, 2)),
    h4: Math.round(baseSize * Math.pow(scale, 1.5)),
    body: baseSize,
    small: Math.round(baseSize * Math.pow(scale, -0.5)),
  }

  // Apply typography
  preview.style.fontFamily = `'${typography.body}', sans-serif`

  const headings = preview.querySelectorAll("h1, h2, h3, h4, .nav-logo")
  headings.forEach((heading) => {
    heading.style.fontFamily = `'${typography.heading}', sans-serif`
  })

  // Apply font sizes with proper line heights
  const h1Elements = preview.querySelectorAll("h1")
  h1Elements.forEach((h1) => {
    h1.style.fontSize = `${sizes.h1}px`
    h1.style.lineHeight = sizes.h1 > 36 ? "1.1" : "1.2"
  })

  const h2Elements = preview.querySelectorAll("h2")
  h2Elements.forEach((h2) => {
    h2.style.fontSize = `${sizes.h2}px`
    h2.style.lineHeight = "1.2"
  })

  const h3Elements = preview.querySelectorAll("h3")
  h3Elements.forEach((h3) => {
    h3.style.fontSize = `${sizes.h3}px`
    h3.style.lineHeight = "1.3"
  })

  const h4Elements = preview.querySelectorAll("h4")
  h4Elements.forEach((h4) => {
    h4.style.fontSize = `${sizes.h4}px`
    h4.style.lineHeight = "1.4"
  })

  // Apply colors to CSS variables
  root.style.setProperty("--accent-color", colors.primary)
  root.style.setProperty("--accent-hover", colors.secondary)
  root.style.setProperty("--success-color", colors.accent)
}

function updatePreviewContent(industry) {
  const content = industryContent[industry] || industryContent.tech

  const heroTitle = document.querySelector("#hero h1")
  const heroSubtitle = document.querySelector("#hero .subtitle")
  const heroBody = document.querySelector("#hero .body-text")
  const heroCta = document.querySelector("#hero .cta-button.primary")

  if (heroTitle) heroTitle.textContent = content.title
  if (heroSubtitle) heroSubtitle.textContent = content.subtitle
  if (heroBody) heroBody.textContent = content.body
  if (heroCta) heroCta.textContent = content.cta
}

function displayBreakdown(breakdown) {
  const breakdownSection = document.getElementById("breakdownSection")
  const breakdownContent = document.getElementById("breakdownContent")

  breakdownContent.innerHTML = breakdown
    .map(
      (item) => `
        <div class="breakdown-item">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
        </div>
    `,
    )
    .join("")

  breakdownSection.style.display = "block"
}

// Utility functions
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
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

function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`

  const colors = {
    success: "#059669",
    error: "#dc2626",
    warning: "#d97706",
    info: "#0ea5e9",
  }

  notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        font-size: 14px;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background-color: ${colors[type]};
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        word-wrap: break-word;
    `

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Error handling
window.addEventListener("error", (event) => {
  console.error("Application error:", event.error)
  showNotification("An unexpected error occurred. Please try again.", "error")
})

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason)
  showNotification("An error occurred while processing your request.", "error")
  event.preventDefault()
})

// Declare variables before using them
const generateColorPalette = (primaryColor) => {
  // Placeholder function for generateColorPalette
  return {
    primary: primaryColor,
    secondary: "#6b7280",
    accent: "#f3f4f6",
    text: "#111827",
  }
}

const generateTypographyPair = (coreFont) => {
  // Placeholder function for generateTypographyPair
  return {
    heading: coreFont,
    body: "Arial",
  }
}

const generateBreakdown = (colors, typography, industry, positioning, fontScale) => {
  // Placeholder function for generateBreakdown
  return [
    {
      title: "Colors",
      description: `Primary: ${colors.primary}, Secondary: ${colors.secondary}, Accent: ${colors.accent}, Text: ${colors.text}`,
    },
    { title: "Typography", description: `Heading: ${typography.heading}, Body: ${typography.body}` },
    { title: "Industry", description: industry },
    { title: "Positioning", description: positioning },
    { title: "Font Scale", description: fontScale },
  ]
}

const generateCSS = () => {
  // Placeholder function for generateCSS
  return `
        :root {
            --accent-color: #000000;
            --accent-hover: #1e293b;
            --success-color: #059669;
        }
    `
}

const generateCSV = () => {
  // Placeholder function for generateCSV
  return "Colors,Typography,Industry,Positioning,Font Scale\n#000000,#000000,Tech,Creative,1.5"
}

const typographyPairs = {
  tech: {
    creative: [
      { heading: "Roboto", body: "Open Sans" },
      { heading: "Inter", body: "Fira Sans" },
    ],
    professional: [
      { heading: "Helvetica", body: "Arial" },
      { heading: "Times New Roman", body: "Georgia" },
    ],
  },
  // Add other industries here
}

const recommendations = {
  tech: {
    creative: "Creative style guide for tech industry.",
    professional: "Professional style guide for tech industry.",
  },
  // Add other industries here
}

const industryContent = {
  tech: {
    title: "Welcome to TechCraft",
    subtitle: "Experience the future of technology",
    body: "Our style guide is designed to help you create a modern and professional tech brand.",
    cta: "Get Started",
  },
  // Add other industries here
}
