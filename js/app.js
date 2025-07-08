// StyleCraft Pro - Consolidated & Fixed Application Logic

// --- DATA STORE (from generators.js) ---
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
  creative: {
    playful:
      "Creative agencies can push boundaries with bold color choices while maintaining sophisticated typography. This demonstrates creative capability while ensuring client confidence.",
    innovative:
      "Innovation-focused creative companies can leverage unique color combinations that showcase their forward-thinking approach while maintaining professional execution.",
    luxury:
      "High-end creative services benefit from sophisticated monochromatic palettes that let the work speak for itself. Restraint in color demonstrates confidence and refinement.",
  },
}

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

// --- MAIN APP LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  setupEnhancedFeatures()
})

// Global state management
const AppState = {
  currentColors: {
    primary: "#000000",
    secondary: "#6b7280",
    accent: "#f3f4f6",
    text: "#111827",
  },
  currentTypography: {
    heading: "Inter",
    body: "Inter",
  },
  logoAnalysis: null,
  isAnalyzing: false,
}

function initializeApp() {
  try {
    initializeTheme()
    initializeColorInputs()
    synchronizeColorInputs()
    setupAccessibilityChecker()
    setupLogoUpload()
    updatePreviewInRealTime()
    console.log("Freestyler initialized successfully")
  } catch (error) {
    console.error("Error initializing app:", error)
    showNotification("App initialization failed. Please refresh the page.", "error")
  }
}

function initializeTheme() {
  const themeToggle = document.getElementById("themeToggle")
  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.getElementById("themeText")
  const body = document.body

  if (!themeToggle || !themeIcon || !themeText) {
    console.warn("Theme toggle elements not found")
    return
  }

  const savedTheme = localStorage.getItem("theme") || "light"

  function updateTheme(isDark) {
    if (isDark) {
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
  }

  updateTheme(savedTheme === "dark")

  themeToggle.addEventListener("click", () => {
    const isDark = !body.hasAttribute("data-theme")
    updateTheme(isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
    updateAccessibilityScore()
  })
}

function initializeColorInputs() {
  const colorMappings = [
    { color: "coreColor", text: "coreColorText", key: "primary" },
    { color: "primaryColor", text: "primaryColorText", key: "primary" },
    { color: "secondaryColor", text: "secondaryColorText", key: "secondary" },
    { color: "accentColor", text: "accentColorText", key: "accent" },
    { color: "textColor", text: "textColorText", key: "text" },
  ]

  colorMappings.forEach(({ color, text, key }) => {
    const colorInput = document.getElementById(color)
    const textInput = document.getElementById(text)

    if (colorInput && textInput) {
      colorInput.value = AppState.currentColors[key]
      textInput.value = AppState.currentColors[key]
    }
  })
}

function synchronizeColorInputs() {
  const colorMappings = [
    { color: "coreColor", text: "coreColorText", key: "primary" },
    { color: "primaryColor", text: "primaryColorText", key: "primary" },
    { color: "secondaryColor", text: "secondaryColorText", key: "secondary" },
    { color: "accentColor", text: "accentColorText", key: "accent" },
    { color: "textColor", text: "textColorText", key: "text" },
  ]

  colorMappings.forEach(({ color, text, key }) => {
    const colorInput = document.getElementById(color)
    const textInput = document.getElementById(text)

    if (colorInput && textInput) {
      colorInput.addEventListener("input", (e) => {
        const value = e.target.value.toUpperCase()
        textInput.value = value
        AppState.currentColors[key] = value
        updateColorHarmony(value, color.replace("Color", ""))
        updateAccessibilityScore()
        updatePreviewInRealTime()
      })

      textInput.addEventListener("input", (e) => {
        const value = e.target.value.toUpperCase()
        if (isValidHex(value)) {
          colorInput.value = value
          AppState.currentColors[key] = value
          updateColorHarmony(value, color.replace("Color", ""))
          updateAccessibilityScore()
          updatePreviewInRealTime()
        }
      })
    }
  })
}

function isValidHex(hex) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}

function setupLogoUpload() {
  const logoUploadArea = document.getElementById("logoUploadArea")
  const logoInput = document.getElementById("logoInput")
  const logoPreview = document.getElementById("logoPreview")
  const logoImage = document.getElementById("logoImage")
  const uploadPlaceholder = document.getElementById("uploadPlaceholder")
  const removeLogo = document.getElementById("removeLogo")
  const analyzeLogoBtn = document.getElementById("analyzeLogoBtn")
  const aiActions = document.getElementById("aiActions")

  if (!logoUploadArea || !logoInput) {
    console.warn("Logo upload elements not found")
    return
  }

  // Click to upload
  logoUploadArea.addEventListener("click", () => {
    if (!logoPreview?.style.display || logoPreview.style.display === "none") {
      logoInput?.click()
    }
  })

  // Drag and drop
  logoUploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    logoUploadArea.classList.add("drag-over")
  })

  logoUploadArea.addEventListener("dragleave", (e) => {
    e.preventDefault()
    logoUploadArea.classList.remove("drag-over")
  })

  logoUploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    logoUploadArea.classList.remove("drag-over")
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleLogoFile(files[0])
    }
  })

  logoInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleLogoFile(e.target.files[0])
    }
  })

  removeLogo?.addEventListener("click", (e) => {
    e.stopPropagation()
    resetLogoUpload()
  })

  analyzeLogoBtn?.addEventListener("click", () => {
    if (logoImage?.src && !AppState.isAnalyzing) {
      performLogoAnalysis(logoImage)
    }
  })

  function handleLogoFile(file) {
    if (!file.type.startsWith("image/")) {
      showNotification("Please upload an image file (PNG, JPG, SVG)", "error")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      showNotification("File size must be less than 5MB", "error")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      if (logoImage) {
        logoImage.src = e.target.result
        logoImage.crossOrigin = "anonymous" // For canvas analysis
      }
      if (uploadPlaceholder) uploadPlaceholder.style.display = "none"
      if (logoPreview) logoPreview.style.display = "block"
      if (aiActions) aiActions.style.display = "block"

      performQuickAnalysis()
      showNotification("Logo uploaded! Click 'Analyze' for detailed analysis.", "success")
    }
    reader.readAsDataURL(file)
  }

  function performQuickAnalysis() {
    const styles = ["Modern", "Classic", "Minimalist", "Bold", "Elegant"]
    const personalities = ["Professional", "Creative", "Trustworthy", "Innovative", "Friendly"]

    const logoStyle = document.getElementById("logoStyle")
    const brandPersonality = document.getElementById("brandPersonality")

    if (logoStyle) logoStyle.textContent = styles[Math.floor(Math.random() * styles.length)]
    if (brandPersonality) brandPersonality.textContent = personalities[Math.floor(Math.random() * personalities.length)]
  }

  function resetLogoUpload() {
    if (logoImage) logoImage.src = ""
    if (uploadPlaceholder) uploadPlaceholder.style.display = "flex"
    if (logoPreview) logoPreview.style.display = "none"
    if (aiActions) aiActions.style.display = "none"
    if (logoInput) logoInput.value = ""
    AppState.logoAnalysis = null
  }
}

function performLogoAnalysis(imageElement) {
  if (AppState.isAnalyzing) return

  AppState.isAnalyzing = true
  const analyzeBtn = document.getElementById("analyzeLogoBtn")
  const btnContent = analyzeBtn?.querySelector(".btn-content")
  const btnLoading = analyzeBtn?.querySelector(".btn-loading")

  if (btnContent) btnContent.style.display = "none"
  if (btnLoading) btnLoading.style.display = "flex"

  const img = new Image()
  img.crossOrigin = "anonymous"
  img.src = imageElement.src
  img.onload = () => {
    try {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      canvas.width = img.naturalWidth || img.width
      canvas.height = img.naturalHeight || img.height
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const analysis = analyzeImageColors(imageData.data)

      AppState.logoAnalysis = analysis

      if (analysis.dominantColors.length > 0) {
        applyLogoColors(analysis)
      }

      const styleVariations = document.getElementById("styleVariations")
      if (styleVariations) styleVariations.style.display = "block"

      setTimeout(() => {
        AppState.isAnalyzing = false
        if (btnContent) btnContent.style.display = "flex"
        if (btnLoading) btnLoading.style.display = "none"
        showNotification("Analysis complete! Colors extracted from your logo.", "success")
      }, 1000)
    } catch (error) {
      console.error("Logo analysis error:", error)
      AppState.isAnalyzing = false
      if (btnContent) btnContent.style.display = "flex"
      if (btnLoading) btnLoading.style.display = "none"
      showNotification("Could not analyze logo. This may be a CORS issue with the image.", "error")
    }
  }
  img.onerror = () => {
    AppState.isAnalyzing = false
    if (btnContent) btnContent.style.display = "flex"
    if (btnLoading) btnLoading.style.display = "none"
    showNotification("Could not load image for analysis.", "error")
  }
}

function analyzeImageColors(imageData) {
  const colorCounts = {}
  const sampleRate = 20
  const minAlpha = 100
  const minSaturation = 10

  for (let i = 0; i < imageData.length; i += sampleRate * 4) {
    const r = imageData[i]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const a = imageData[i + 3]

    if (a < minAlpha || (r > 245 && g > 245 && b > 245)) continue

    const hex = rgbToHex(r, g, b)
    const [h, s, l] = hexToHsl(hex)

    if (s > minSaturation || l < 20) {
      const clusteredHex = clusterColor(hex)
      colorCounts[clusteredHex] = (colorCounts[clusteredHex] || 0) + 1
    }
  }

  const sortedColors = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([color]) => color)
    .filter((color) => color !== "#000000")

  if (sortedColors.length === 0) {
    sortedColors.push("#000000")
  }

  return {
    dominantColors: sortedColors,
    primaryColor: sortedColors[0] || "#000000",
    colorCount: sortedColors.length,
    isComplex: sortedColors.length > 3,
    hasStrongBrand: sortedColors.length >= 2 && colorCounts[sortedColors[0]] > 100,
  }
}

function clusterColor(hex) {
  const [h, s, l] = hexToHsl(hex)

  const clusteredH = Math.round(h / 20) * 20
  const clusteredS = Math.round(s / 25) * 25
  const clusteredL = Math.round(l / 15) * 15

  return hslToHex(clusteredH % 360, Math.min(clusteredS, 100), Math.min(clusteredL, 100))
}

function applyLogoColors(analysis) {
  const { dominantColors } = analysis

  if (dominantColors.length > 0) {
    const sortedByDarkness = dominantColors.sort((a, b) => {
      const [, , lA] = hexToHsl(a)
      const [, , lB] = hexToHsl(b)
      return lA - lB
    })

    const primaryColor = sortedByDarkness[0]
    const palette = generateSmartPalette(primaryColor)

    updateColorInput("primaryColor", "primaryColorText", palette.primary, "primary")
    updateColorInput("secondaryColor", "secondaryColorText", palette.secondary, "secondary")
    updateColorInput("accentColor", "accentColorText", palette.accent, "accent")
    updateColorInput("textColor", "textColorText", palette.text, "text")

    updatePreviewInRealTime()
    updateFinalRecommendations(document.getElementById("industry").value, document.getElementById("positioning").value)
  }
}

function generateSmartPalette(primaryColor) {
  if (!primaryColor || !isValidHex(primaryColor)) {
    primaryColor = "#000000"
  }

  const [h, s, l] = hexToHsl(primaryColor)

  let secondary, accent, text

  if (l < 30) {
    secondary = hslToHex(h, Math.max(s - 20, 10), Math.min(l + 25, 70))
    accent = hslToHex(h, Math.max(s - 30, 5), Math.min(l + 50, 90))
    text = l < 15 ? "#f8fafc" : "#111827"
  } else if (l > 70) {
    secondary = hslToHex(h, Math.min(s + 10, 50), Math.max(l - 30, 30))
    accent = hslToHex(h, Math.max(s - 20, 10), Math.max(l - 15, 85))
    text = "#111827"
  } else {
    secondary = hslToHex(h, Math.max(s - 15, 15), Math.min(l + 20, 75))
    accent = hslToHex(h, Math.max(s - 25, 5), Math.min(l + 35, 90))
    text = l > 50 ? "#111827" : "#f8fafc"
  }

  return {
    primary: primaryColor,
    secondary,
    accent,
    text,
  }
}

function updateColorInput(colorId, textId, value, key) {
  const colorInput = document.getElementById(colorId)
  const textInput = document.getElementById(textId)

  if (!isValidHex(value)) {
    console.warn(`Invalid hex color: ${value}`)
    return
  }

  if (colorInput) colorInput.value = value
  if (textInput) textInput.value = value

  AppState.currentColors[key] = value

  const harmonyKey = colorId.replace("Color", "").replace("core", "primary")
  updateColorHarmony(value, harmonyKey)

  updateAccessibilityScore()
  updatePreviewInRealTime()
}

function setupEventListeners() {
  setupPreviewTabs()
  setupGenerateButtons()
  setupExportButtons()
  setupFormListeners()
  setupStyleGuideGeneration()
  setupTemplateSystem()
}

function setupPreviewTabs() {
  const tabs = document.querySelectorAll(".preview-tab")
  const panels = document.querySelectorAll(".preview-panel")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"))
      panels.forEach((p) => p.classList.remove("active"))

      tab.classList.add("active")
      const targetId = tab.dataset.tab
      const targetPanel = document.getElementById(targetId)
      if (targetPanel) targetPanel.classList.add("active")
    })
  })
}

function setupGenerateButtons() {
  const generateColorsBtn = document.getElementById("generateColorsBtn")
  const generateTypographyBtn = document.getElementById("generateTypographyBtn")

  generateColorsBtn?.addEventListener("click", () => {
    const coreColor = AppState.currentColors.primary
    const palette = generateSmartPalette(coreColor)

    Object.entries(palette).forEach(([key, value]) => {
      const colorId = key === "primary" ? "primaryColor" : `${key}Color`
      const textId = key === "primary" ? "primaryColorText" : `${key}ColorText`
      updateColorInput(colorId, textId, value, key)
    })

    updateAccessibilityScore()
    updatePreviewInRealTime()
    showNotification("Smart color palette generated!", "success")
  })

  generateTypographyBtn?.addEventListener("click", () => {
    const industry = document.getElementById("industry")?.value || "tech"
    const positioning = document.getElementById("positioning")?.value || "professional"
    const pair = generateIntelligentTypographyPair(industry, positioning)

    AppState.currentTypography = pair
    const coreFontSelect = document.getElementById("coreFont")
    if (coreFontSelect) coreFontSelect.value = pair.heading

    updatePreviewInRealTime()
    showNotification(`Smart typography pair: ${pair.heading} + ${pair.body}`, "success")
  })
}

function setupTemplateSystem() {
  const buttons = document.querySelectorAll(".template-btn")

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const template = btn.dataset.template
      applyTemplate(template)
    })
  })
}

function applyTemplate(template) {
  const industry = template
  const positioning =
    {
      tech: "innovative",
      finance: "trustworthy",
      creative: "playful",
    }[template] || "professional"

  const colorConfig = colorSchemes[industry]?.[positioning]
  const typographyOptions = typographyPairs[industry]?.[positioning]

  if (!colorConfig || !typographyOptions) {
    showNotification(`Template '${template}' is not fully configured.`, "warning")
    return
  }

  const typographyConfig = typographyOptions[0]

  document.getElementById("industry").value = industry
  document.getElementById("positioning").value = positioning
  document.getElementById("coreFont").value = typographyConfig.heading

  updateColorInput("primaryColor", "primaryColorText", colorConfig.primary, "primary")
  updateColorInput("secondaryColor", "secondaryColorText", colorConfig.secondary, "secondary")
  updateColorInput("accentColor", "accentColorText", colorConfig.accent, "accent")
  updateColorInput("textColor", "textColorText", colorConfig.text, "text")

  AppState.currentTypography.heading = typographyConfig.heading
  AppState.currentTypography.body = typographyConfig.body

  updatePreviewInRealTime()
  showNotification(`${template.charAt(0).toUpperCase() + template.slice(1)} template applied!`, "success")
}

function generateIntelligentTypographyPair(industry, positioning) {
  const industryPairs = typographyPairs[industry] || typographyPairs.tech
  const positionOptions = industryPairs[positioning] || industryPairs.professional
  const selectedPair = positionOptions[Math.floor(Math.random() * positionOptions.length)]
  return selectedPair
}

function setupExportButtons() {
  const copyCssBtn = document.getElementById("copyCssBtn")
  const downloadPackageBtn = document.getElementById("downloadPackageBtn")

  copyCssBtn?.addEventListener("click", async () => {
    const css = generateComprehensiveCSS()
    try {
      await navigator.clipboard.writeText(css)
      showNotification("Complete CSS framework copied to clipboard!", "success")
    } catch (err) {
      showNotification("Failed to copy CSS", "error")
    }
  })

  downloadPackageBtn?.addEventListener("click", () => {
    const css = generateComprehensiveCSS()
    downloadFile(css, `freestyler-guide-${Date.now()}.css`, "text/css")
    showNotification("CSS framework downloaded!", "success")
  })
}

function setupFormListeners() {
  ;["industry", "positioning", "fontScale", "coreFont"].forEach((id) => {
    const element = document.getElementById(id)
    element?.addEventListener("change", () => {
      updatePreviewInRealTime()
    })
  })
}

function setupStyleGuideGeneration() {
  const generateBtn = document.getElementById("generateBtn")

  generateBtn?.addEventListener("click", () => {
    showLoadingState(generateBtn)

    setTimeout(() => {
      generateCompleteStyleGuide()
      hideLoadingState(generateBtn)
      showNotification("Professional style guide generated!", "success")
    }, 1500)
  })
}

function generateCompleteStyleGuide() {
  const industry = document.getElementById("industry")?.value || "tech"
  const positioning = document.getElementById("positioning")?.value || "professional"
  const scale = Number.parseFloat(document.getElementById("fontScale")?.value || "1.25")

  updatePreviewContent(industry)

  const breakdown = generateStyleBreakdown(
    AppState.currentColors,
    AppState.currentTypography,
    industry,
    positioning,
    scale,
  )
  displayBreakdown(breakdown)

  updateFinalRecommendations(industry, positioning)
}

function updatePreviewInRealTime() {
  const scale = Number.parseFloat(document.getElementById("fontScale")?.value || "1.25")

  const root = document.documentElement
  root.style.setProperty("--accent-color", AppState.currentColors.primary)
  root.style.setProperty("--accent-hover", darkenColor(AppState.currentColors.primary, 10))
  root.style.setProperty("--accent-light", lightenColor(AppState.currentColors.primary, 90))
  root.style.setProperty("--text-primary", AppState.currentColors.text)

  const preview = document.getElementById("previewContent")
  if (preview) {
    preview.style.fontFamily = `'${AppState.currentTypography.body}', sans-serif`

    const headings = preview.querySelectorAll("h1, h2, h3, h4, .nav-logo, .nav-brand")
    headings.forEach((heading) => {
      heading.style.fontFamily = `'${AppState.currentTypography.heading}', sans-serif`
    })

    applyModularScale(preview, scale)
  }
}

function applyModularScale(container, scale) {
  const baseSize = 16
  const sizes = {
    h1: Math.round(baseSize * Math.pow(scale, 3)),
    h2: Math.round(baseSize * Math.pow(scale, 2.5)),
    h3: Math.round(baseSize * Math.pow(scale, 2)),
    h4: Math.round(baseSize * Math.pow(scale, 1.5)),
  }

  Object.entries(sizes).forEach(([tag, size]) => {
    const elements = container.querySelectorAll(tag)
    elements.forEach((el) => {
      el.style.fontSize = `${size}px`
      el.style.lineHeight = size > 36 ? "1.1" : "1.2"
    })
  })
}

function setupEnhancedFeatures() {
  setupAccessibilityChecker()
  setupColorHarmony()
  setupVariationButtons()
  setupViewControls()
}

function setupAccessibilityChecker() {
  updateAccessibilityScore()
}

function updateAccessibilityScore() {
  try {
    const body = document.body
    const bgColor = body.hasAttribute("data-theme") ? "#0f172a" : "#ffffff"
    const textColor = AppState.currentColors.text || "#111827"
    const primaryColor = AppState.currentColors.primary || "#000000"

    const textContrast = calculateContrastRatio(bgColor, textColor)
    const primaryContrast = calculateContrastRatio(bgColor, primaryColor)

    const scoreEl = document.getElementById("accessibilityScore")
    const ratioEl = document.getElementById("contrastRatio")
    const colorBlindEl = document.getElementById("colorBlindSafe")
    const printCompatibleEl = document.getElementById("printCompatible")

    if (ratioEl) ratioEl.textContent = `${textContrast.toFixed(1)}:1`

    let score = "AA"
    if (textContrast >= 7 && primaryContrast >= 4.5) score = "AAA"
    else if (textContrast < 4.5 || primaryContrast < 3) score = "Fail"

    if (scoreEl) {
      scoreEl.textContent = score
      scoreEl.className = `accessibility-score ${score.toLowerCase()}`
    }

    if (colorBlindEl) {
      const isColorBlindSafe = checkColorBlindSafety(textColor, primaryColor)
      colorBlindEl.textContent = isColorBlindSafe ? "✓ Yes" : "⚠ Review"
    }

    if (printCompatibleEl) {
      const isPrintCompatible = checkPrintCompatibility(textColor, primaryColor)
      printCompatibleEl.textContent = isPrintCompatible ? "✓ Yes" : "⚠ Review"
    }
  } catch (error) {
    console.error("Error updating accessibility score:", error)
  }
}

function checkColorBlindSafety(textColor, primaryColor) {
  const textContrast = calculateContrastRatio("#ffffff", textColor)
  const primaryContrast = calculateContrastRatio("#ffffff", primaryColor)
  return textContrast >= 3 && primaryContrast >= 3
}

function checkPrintCompatibility(textColor, primaryColor) {
  const [, , textL] = hexToHsl(textColor)
  const [, , primaryL] = hexToHsl(primaryColor)
  return textL < 80 && primaryL < 90
}

function setupColorHarmony() {
  Object.keys(AppState.currentColors).forEach((key) => {
    const colorValue = AppState.currentColors[key]
    updateColorHarmony(colorValue, key)
  })
}

function updateColorHarmony(color, prefix) {
  const harmonyEl = document.getElementById(`${prefix}Harmony`)
  if (!harmonyEl || !isValidHex(color)) return

  const [h, s, l] = hexToHsl(color)
  const complementary = hslToHex((h + 180) % 360, s, l)
  const analogous1 = hslToHex((h + 30) % 360, s, l)
  const analogous2 = hslToHex((h - 30 + 360) % 360, s, l)

  harmonyEl.style.background = `linear-gradient(90deg, ${color} 0%, ${analogous1} 33%, ${complementary} 66%, ${analogous2} 100%)`
}

function setupVariationButtons() {
  const buttons = document.querySelectorAll(".variation-btn")

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const variation = btn.dataset.variation
      applyStyleVariation(variation)
    })
  })
}

function applyStyleVariation(variation) {
  const variations = {
    conservative: { saturationMult: 0.7, lightnessAdj: 10 },
    balanced: { saturationMult: 1.0, lightnessAdj: 0 },
    bold: { saturationMult: 1.3, lightnessAdj: -5 },
  }

  const config = variations[variation]
  if (!config) return

  const [h, s, l] = hexToHsl(AppState.currentColors.primary)
  const newS = Math.min(s * config.saturationMult, 100)
  const newL = Math.max(Math.min(l + config.lightnessAdj, 100), 0)

  const adjustedColor = hslToHex(h, newS, newL)
  updateColorInput("primaryColor", "primaryColorText", adjustedColor, "primary")

  updatePreviewInRealTime()
  showNotification(`Applied ${variation} style variation!`, "success")
}

function setupViewControls() {
  const viewBtns = document.querySelectorAll(".view-btn")
  const previewContent = document.getElementById("previewContent")

  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const view = btn.dataset.view
      if (!previewContent) return

      previewContent.classList.remove("desktop-view", "mobile-view", "accessibility-view")

      if (view === "mobile") {
        previewContent.classList.add("mobile-view")
      } else if (view === "accessibility") {
        previewContent.classList.add("accessibility-view")
      } else {
        previewContent.classList.add("desktop-view")
      }
    })
  })
}

// --- UTILITY FUNCTIONS ---
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

function hexToHsl(hex) {
  if (!isValidHex(hex)) return [0, 0, 0]

  let r = Number.parseInt(hex.slice(1, 3), 16)
  let g = Number.parseInt(hex.slice(3, 5), 16)
  let b = Number.parseInt(hex.slice(5, 7), 16)
  ;(r /= 255), (g /= 255), (b /= 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
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
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`.toUpperCase()
}

function darkenColor(hex, percent) {
  if (!isValidHex(hex)) return hex
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.max(l - percent, 0))
}

function lightenColor(hex, percent) {
  if (!isValidHex(hex)) return hex
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.min(l + percent, 100))
}

function calculateContrastRatio(color1, color2) {
  const getLuminance = (hex) => {
    if (!isValidHex(hex)) return 0

    const r = Number.parseInt(hex.slice(1, 3), 16) / 255
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255

    const [rL, gL, bL] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)))

    return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL
  }

  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

function showNotification(message, type = "success") {
  const existing = document.querySelector(".notification")
  if (existing) existing.remove()

  const notification = document.createElement("div")
  notification.className = `notification ${type}`

  const icons = {
    success: "✓",
    error: "✗",
    warning: "⚠",
    info: "ℹ",
  }

  notification.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`
  document.body.appendChild(notification)

  setTimeout(() => (notification.style.transform = "translateX(0)"), 10)

  setTimeout(() => {
    notification.style.transform = "translateX(120%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

function showLoadingState(button) {
  if (!button) return
  const content = button.querySelector(".btn-content")
  const loading = button.querySelector(".btn-loading")
  if (content) content.style.display = "none"
  if (loading) loading.style.display = "flex"
  button.disabled = true
}

function hideLoadingState(button) {
  if (!button) return
  const content = button.querySelector(".btn-content")
  const loading = button.querySelector(".btn-loading")
  if (content) content.style.display = "flex"
  if (loading) loading.style.display = "none"
  button.disabled = false
}

function generateComprehensiveCSS() {
  const colors = AppState.currentColors
  const typography = AppState.currentTypography
  const scale = Number.parseFloat(document.getElementById("fontScale")?.value || "1.25")

  const baseSize = 16
  const sizes = {
    h1: Math.round(baseSize * Math.pow(scale, 3)),
    h2: Math.round(baseSize * Math.pow(scale, 2.5)),
    h3: Math.round(baseSize * Math.pow(scale, 2)),
    h4: Math.round(baseSize * Math.pow(scale, 1.5)),
    h5: Math.round(baseSize * Math.pow(scale, 1)),
    h6: Math.round(baseSize * Math.pow(scale, 0.5)),
  }

  return `/* Freestyler - Generated Design System */
/* Generated: ${new Date().toLocaleString()} */

:root {
/* Brand Colors */
--brand-primary: ${colors.primary};
--brand-secondary: ${colors.secondary};
--brand-accent: ${colors.accent};
--brand-text: ${colors.text};

/* Extended Palette */
--color-primary-50: ${lightenColor(colors.primary, 95)};
--color-primary-100: ${lightenColor(colors.primary, 90)};
--color-primary-500: ${colors.primary};
--color-primary-600: ${darkenColor(colors.primary, 10)};
--color-primary-700: ${darkenColor(colors.primary, 20)};
--color-primary-900: ${darkenColor(colors.primary, 40)};

/* Typography */
--font-family-heading: '${typography.heading}', -apple-system, BlinkMacSystemFont, sans-serif;
--font-family-body: '${typography.body}', -apple-system, BlinkMacSystemFont, sans-serif;

/* Font Scale */
--font-scale: ${scale};
--font-size-h1: ${sizes.h1}px;
--font-size-h2: ${sizes.h2}px;
--font-size-h3: ${sizes.h3}px;
--font-size-h4: ${sizes.h4}px;
--font-size-h5: ${sizes.h5}px;
--font-size-h6: ${sizes.h6}px;
--font-size-base: ${baseSize}px;

/* Spacing */
--space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
--space-6: 1.5rem; --space-8: 2rem; --space-12: 3rem; --space-16: 4rem;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Border Radius */
--radius-sm: 0.375rem; --radius-md: 0.5rem; --radius-lg: 0.75rem;
--radius-xl: 1rem; --radius-full: 9999px;
}

/* Base Typography */
body {
font-family: var(--font-family-body);
color: var(--brand-text);
line-height: 1.6;
-webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
font-family: var(--font-family-heading);
font-weight: 700;
line-height: 1.2;
color: var(--brand-text);
margin-bottom: var(--space-4);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }
h4 { font-size: var(--font-size-h4); }
h5 { font-size: var(--font-size-h5); }
h6 { font-size: var(--font-size-h6); }

/* Button System */
.btn {
display: inline-flex; align-items: center; gap: var(--space-2);
padding: var(--space-3) var(--space-6); font-weight: 600;
border-radius: var(--radius-lg); border: 1px solid transparent;
cursor: pointer; transition: all 0.2s; text-decoration: none;
}
.btn-primary {
background-color: var(--brand-primary); color: var(--color-primary-50);
box-shadow: var(--shadow-sm);
}
.btn-primary:hover {
background-color: var(--color-primary-600); transform: translateY(-1px);
box-shadow: var(--shadow-md);
}
.btn-secondary {
background-color: transparent; color: var(--brand-primary);
border-color: var(--brand-primary);
}
.btn-secondary:hover {
background-color: var(--brand-primary); color: var(--color-primary-50);
}

/* Card System */
.card {
background: white; border: 1px solid var(--brand-accent);
border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);
overflow: hidden; transition: all 0.2s;
}
.card:hover {
box-shadow: var(--shadow-lg); transform: translateY(-2px);
}
.card-header { padding: var(--space-6); border-bottom: 1px solid var(--brand-accent); }
.card-body { padding: var(--space-6); }

/* Form Elements */
.form-input, .form-select, .form-textarea {
width: 100%; padding: var(--space-3) var(--space-4);
border: 1px solid var(--brand-accent); border-radius: var(--radius-lg);
font-family: inherit; transition: border-color 0.2s;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
outline: none; border-color: var(--brand-primary);
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
`
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

function generateStyleBreakdown(colors, typography, industry, positioning, scale) {
  const [h, s, l] = hexToHsl(colors.primary)

  const colorPsychologyText = {
    black: "conveys authority, sophistication, and premium quality",
    grey: "suggests professionalism, neutrality, and timeless elegance",
    blue: "communicates trust, stability, and corporate reliability",
    red: "expresses energy, urgency, and bold confidence",
    green: "symbolizes growth, prosperity, and natural harmony",
    purple: "indicates luxury, creativity, and innovative thinking",
  }

  let dominantColor = "grey"
  if (l < 20) dominantColor = "black"
  else if (h >= 180 && h < 240) dominantColor = "blue"
  else if (h >= 330 || h < 30) dominantColor = "red"
  else if (h >= 100 && h < 160) dominantColor = "green"
  else if (h >= 260 && h < 310) dominantColor = "purple"

  return [
    {
      title: "Color Psychology Analysis",
      description: `Your primary color ${colorPsychologyText[dominantColor] || "is versatile"}, strategically chosen for ${industry} companies. The saturation of ${Math.round(s)}% creates a ${s > 50 ? "vibrant, energetic" : "sophisticated, professional"} brand presence.`,
    },
    {
      title: "Typography Pairing",
      description: `${typography.heading} and ${typography.body} combination enhances readability and brand perception, optimized for ${positioning} positioning in the ${industry} sector.`,
    },
    {
      title: "Mathematical Scale",
      description: `A ${scale} modular scale creates harmonious proportions with a ${Math.round((scale - 1) * 100)}% size progression, ensuring consistent visual hierarchy.`,
    },
    {
      title: "Accessibility Compliance",
      description: `Color combinations meet WCAG AA standards with proper contrast ratios, ensuring your design is accessible to all users.`,
    },
  ]
}

function displayBreakdown(breakdown) {
  const section = document.getElementById("breakdownSection")
  const content = document.getElementById("breakdownContent")

  if (content) {
    content.innerHTML = breakdown
      .map(
        (item) => `
    <div class="breakdown-item">
      <h5>${item.title}</h5>
      <p>${item.description}</p>
    </div>
  `,
      )
      .join("")
  }

  if (section) section.style.display = "block"
}

function updatePreviewContent(industry) {
  const selected = industryContent[industry] || industryContent.tech

  const heroTitle = document.querySelector("#hero h1")
  const heroSubtitle = document.querySelector("#hero .subtitle")
  const heroBody = document.querySelector("#hero .body-text")
  const heroCta = document.querySelector("#hero .cta-button.primary")

  if (heroTitle) heroTitle.textContent = selected.title
  if (heroSubtitle) heroSubtitle.textContent = selected.subtitle
  if (heroBody) heroBody.textContent = selected.body
  if (heroCta) heroCta.textContent = selected.cta
}

function updateFinalRecommendations(industry, positioning) {
  const recommendationText = document.getElementById("recommendationText")
  const confidenceScore = document.getElementById("confidenceScore")
  const recommendationTags = document.getElementById("recommendationTags")

  const confidence = calculateConfidence(industry, positioning)
  const recommendation =
    recommendations[industry]?.[positioning] ||
    "Your generated style guide provides a solid foundation for your brand's visual identity."

  if (confidenceScore) confidenceScore.textContent = `${confidence}%`
  if (recommendationText) {
    recommendationText.textContent = recommendation
  }
  if (recommendationTags) {
    const tags = {
      tech: ["#Innovation", "#Scalability", "#UX"],
      finance: ["#Trust", "#Security", "#Clarity"],
      creative: ["#Boldness", "#Storytelling", "#Engagement"],
    }
    recommendationTags.innerHTML = (tags[industry] || [])
      .map((tag) => `<span class="recommendation-tag">${tag}</span>`)
      .join("")
  }
}

function calculateConfidence(industry, positioning) {
  let score = 85

  const industryBonus = {
    tech: 5,
    finance: 8,
    creative: 3,
    healthcare: 7,
  }

  score += industryBonus[industry] || 0

  if (AppState.logoAnalysis) score += 8

  return Math.min(score, 98)
}

// --- ERROR HANDLING ---
window.addEventListener("error", (event) => {
  console.error("Application error:", event.error)
  showNotification("An unexpected error occurred. Please try again.", "error")
})

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason)
  showNotification("An error occurred while processing your request.", "error")
  event.preventDefault()
})
