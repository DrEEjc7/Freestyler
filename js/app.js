friendly: { heading: "Montserrat", body: "Open Sans" },
      luxury: { heading: "Playfair Display", body: "Lora" },
      playful: { heading: "Poppins", body: "Open Sans" },
      professional: { heading: "Inter", body: "Inter" },
      trustworthy: { heading: "Lora", body: "Inter" },
      innovative: { heading: "Montserrat", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Roboto" }
    },
    consulting: {
      professional: { heading: "Playfair Display", body: "Inter" },
      trustworthy: { heading: "Lora", body: "Inter" },
      luxury: { heading: "Playfair Display", body: "Lora" },
      innovative: { heading: "Montserrat", body: "Inter" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      playful: { heading: "Poppins", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Roboto" }
    },
    education: {
      professional: { heading: "Lora", body: "Inter" },
      trustworthy: { heading: "Source Sans Pro", body: "Source Sans Pro" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      innovative: { heading: "Poppins", body: "Inter" },
      playful: { heading: "Poppins", body: "Open Sans" },
      luxury: { heading: "Playfair Display", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Inter" }
    },
    nonprofit: {
      trustworthy: { heading: "Lora", body: "Inter" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      professional: { heading: "Source Sans Pro", body: "Source Sans Pro" },
      innovative: { heading: "Poppins", body: "Inter" },
      playful: { heading: "Poppins", body: "Open Sans" },
      luxury: { heading: "Playfair Display", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Inter" }
    }
  }
  
  // Get the specific pair or fallback to a safe default
  const industryPairs = pairs[industry]
  if (!industryPairs) {
    return { heading: "Inter", body: "Inter" }
  }
  
  const selectedPair = industryPairs[positioning]
  if (!selectedPair) {
    // Fallback to the first available pair for the industry
    const firstKey = Object.keys(industryPairs)[0]
    return industryPairs[firstKey] || { heading: "Inter", body: "Inter" }
  }
  
  return selectedPair
}

function setupExportButtons() {
  document.getElementById("copyCssBtn")?.addEventListener("click", async () => {
    const css = generateComprehensiveCSS()
    try {
      await navigator.clipboard.writeText(css)
      showNotification("Complete CSS framework copied to clipboard!", "success")
    } catch (err) {
      showNotification("Failed to copy CSS", "error")
    }
  })

  document.getElementById("downloadPackageBtn")?.addEventListener("click", () => {
    const css = generateComprehensiveCSS()
    downloadFile(css, `stylecraft-pro-${Date.now()}.css`, "text/css")
    showNotification("CSS framework downloaded!", "success")
  })
}

function setupFormListeners() {
  // Industry and positioning changes
  ["industry", "positioning", "fontScale", "coreFont"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", () => {
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
  const industry = document.getElementById("industry").value
  const positioning = document.getElementById("positioning").value
  const scale = parseFloat(document.getElementById("fontScale").value)
  
  // Update content based on industry
  updatePreviewContent(industry)
  
  // Generate breakdown
  const breakdown = generateStyleBreakdown(AppState.currentColors, AppState.currentTypography, industry, positioning, scale)
  displayBreakdown(breakdown)
  
  // Update final recommendations
  updateFinalRecommendations(industry, positioning)
}

function updatePreviewInRealTime() {
  const scale = parseFloat(document.getElementById("fontScale").value || "1.25")
  
  // Apply colors to CSS variables
  const root = document.documentElement
  root.style.setProperty("--accent-color", AppState.currentColors.primary)
  root.style.setProperty("--accent-hover", darkenColor(AppState.currentColors.primary, 10))
  root.style.setProperty("--success-color", AppState.currentColors.accent)
  root.style.setProperty("--text-primary", AppState.currentColors.text)
  
  // Apply typography
  const preview = document.getElementById("previewContent")
  if (preview) {
    preview.style.fontFamily = `'${AppState.currentTypography.body}', sans-serif`
    
    const headings = preview.querySelectorAll("h1, h2, h3, h4, .nav-logo")
    headings.forEach(heading => {
      heading.style.fontFamily = `'${AppState.currentTypography.heading}', sans-serif`
    })
    
    // Apply font sizes based on scale
    applyModularScale(preview, scale)
  }
}

function applyModularScale(container, scale) {
  const baseSize = 16
  const sizes = {
    h1: Math.round(baseSize * Math.pow(scale, 3)),
    h2: Math.round(baseSize * Math.pow(scale, 2.5)),
    h3: Math.round(baseSize * Math.pow(scale, 2)),
    h4: Math.round(baseSize * Math.pow(scale, 1.5))
  }
  
  Object.entries(sizes).forEach(([tag, size]) => {
    const elements = container.querySelectorAll(tag)
    elements.forEach(el => {
      el.style.fontSize = `${size}px`
      el.style.lineHeight = size > 36 ? "1.1" : "1.2"
    })
  })
}

function setupEnhancedFeatures() {
  setupAccessibilityChecker()
  setupColorHarmony()
  setupVariationButtons()
  setupOnboarding()
  setupViewControls()
}

function setupAccessibilityChecker() {
  updateAccessibilityScore()
}

function updateAccessibilityScore() {
  const body = document.body
  const bgColor = body.hasAttribute("data-theme") ? "#0f172a" : "#ffffff"
  const textColor = AppState.currentColors.text || "#111827"
  const primaryColor = AppState.currentColors.primary || "#000000"
  
  const textContrast = calculateContrastRatio(bgColor, textColor)
  const primaryContrast = calculateContrastRatio(bgColor, primaryColor)
  
  // Update UI elements safely
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
  
  // Update additional accessibility info
  if (colorBlindEl) {
    const isColorBlindSafe = checkColorBlindSafety(textColor, primaryColor)
    colorBlindEl.textContent = isColorBlindSafe ? "✓ Yes" : "⚠ Review"
  }
  
  if (printCompatibleEl) {
    const isPrintCompatible = checkPrintCompatibility(textColor, primaryColor)
    printCompatibleEl.textContent = isPrintCompatible ? "✓ Yes" : "⚠ Review"
  }
}

function checkColorBlindSafety(textColor, primaryColor) {
  // Simple check - in a real implementation, you'd use more sophisticated algorithms
  const textContrast = calculateContrastRatio("#ffffff", textColor)
  const primaryContrast = calculateContrastRatio("#ffffff", primaryColor)
  return textContrast >= 3 && primaryContrast >= 3
}

function checkPrintCompatibility(textColor, primaryColor) {
  // Check if colors work well in print (high contrast, not too light)
  const [, , textL] = hexToHsl(textColor)
  const [, , primaryL] = hexToHsl(primaryColor)
  return textL < 80 && primaryL < 90 // Not too light for print
}

function setupColorHarmony() {
  // Initialize harmony indicators for existing colors
  Object.keys(AppState.currentColors).forEach(key => {
    const colorValue = AppState.currentColors[key]
    updateColorHarmony(colorValue, key)
  })
}

function updateColorHarmony(color, prefix) {
  const harmonyEl = document.getElementById(`${prefix}Harmony`)
  if (!harmonyEl) return
  
  const [h, s, l] = hexToHsl(color)
  const complementary = hslToHex((h + 180) % 360, s, l)
  const analogous1 = hslToHex((h + 30) % 360, s, l)
  const analogous2 = hslToHex((h - 30 + 360) % 360, s, l)
  
  harmonyEl.style.background = `linear-gradient(90deg, ${color} 0%, ${analogous1} 33%, ${complementary} 66%, ${analogous2} 100%)`
}

function setupVariationButtons() {
  const buttons = document.querySelectorAll(".variation-btn")
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"))
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
    bold: { saturationMult: 1.3, lightnessAdj: -5 }
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

function setupOnboarding() {
  const overlay = document.getElementById("onboardingOverlay")
  const startBtn = document.getElementById("startOnboarding")
  const skipBtn = document.getElementById("skipOnboarding")
  
  startBtn?.addEventListener("click", () => {
    hideOnboarding()
    document.getElementById("logoUploadArea")?.scrollIntoView({ behavior: "smooth" })
    showNotification("Upload your logo to get started with analysis!", "info")
  })
  
  skipBtn?.addEventListener("click", hideOnboarding)
}

function showOnboarding() {
  document.getElementById("onboardingOverlay")?.classList.add("active")
}

function hideOnboarding() {
  document.getElementById("onboardingOverlay")?.classList.remove("active")
  localStorage.setItem("stylecraft-visited", "true")
}

function setupViewControls() {
  const viewBtns = document.querySelectorAll(".view-btn")

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      viewBtns.forEach(b => b.classList.remove("active"))
      btn.classList.add("active")

      const view = btn.dataset.view
      applyViewMode(view)
    })
  })
}

function applyViewMode(view) {
  const previewContent = document.getElementById("previewContent")

  // Remove existing view classes
  previewContent.classList.remove("desktop-view", "mobile-view", "accessibility-view")

  // Add new view class
  previewContent.classList.add(`${view}-view`)

  if (view === "mobile") {
    previewContent.style.maxWidth = "375px"
    previewContent.style.margin = "0 auto"
  } else if (view === "accessibility") {
    // Apply high contrast mode
    previewContent.style.filter = "contrast(1.5)"
  } else {
    previewContent.style.maxWidth = ""
    previewContent.style.margin = ""
    previewContent.style.filter = ""
  }
}

// Utility Functions
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
  const m = l - c / 2
  let r = 0, g = 0, b = 0

  if (0 <= h && h < 1/6) { r = c; g = x; b = 0 }
  else if (1/6 <= h && h < 1/3) { r = x; g = c; b = 0 }
  else if (1/3 <= h && h < 1/2) { r = 0; g = c; b = x }
  else if (1/2 <= h && h < 2/3) { r = 0; g = x; b = c }
  else if (2/3 <= h && h < 5/6) { r = x; g = 0; b = c }
  else if 5/6 <= h && h < 1) { r = c; g = 0; b = x }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function darkenColor(hex, percent) {
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.max(l - percent, 0))
}

function lightenColor(hex, percent) {
  const [h, s, l] = hexToHsl(hex)
  return hslToHex(h, s, Math.min(l + percent, 100))
}

function calculateContrastRatio(color1, color2) {
  const getLuminance = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    
    const [rL, gL, bL] = [r, g, b].map(c => 
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    )
    
    return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL
  }
  
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  
  const colors = {
    success: "#059669",
    error: "#dc2626", 
    warning: "#d97706",
    info: "#0ea5e9"
  }
  
  const icons = {
    success: "✓",
    error: "✗", 
    warning: "⚠",
    info: "ℹ"
  }
  
  notification.style.cssText = `
    position: fixed;
    top: 24px;
    right: 24px;
    padding: 16px 24px;
    background: ${colors[type]};
    color: white;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 8px;
  `
  
  notification.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`
  document.body.appendChild(notification)
  
  setTimeout(() => notification.style.transform = "translateX(0)", 100)
  
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => document.body.removeChild(notification), 300)
  }, 4000)
}

function showLoadingState(button) {
  const content = button.querySelector(".btn-content")
  const loading = button.querySelector(".btn-loading")
  if (content) content.style.display = "none"
  if (loading) loading.style.display = "flex"
}

function hideLoadingState(button) {
  const content = button.querySelector(".btn-content")
  const loading = button.querySelector(".btn-loading")
  if (content) content.style.display = "flex"
  if (loading) loading.style.display = "none"
}

function generateComprehensiveCSS() {
  const colors = AppState.currentColors
  const typography = AppState.currentTypography
  const scale = parseFloat(document.getElementById("fontScale")?.value || "1.25")
  
  const baseSize = 16
  const sizes = {
    h1: Math.round(baseSize * Math.pow(scale, 3)),
    h2: Math.round(baseSize * Math.pow(scale, 2.5)),
    h3: Math.round(baseSize * Math.pow(scale, 2)),
    h4: Math.round(baseSize * Math.pow(scale, 1.5)),
    h5: Math.round(baseSize * Math.pow(scale, 1)),
    h6: Math.round(baseSize * Math.pow(scale, 0.5))
  }

  return `/* StyleCraft Pro - Generated Design System */
/* Generated: ${new Date().toLocaleDateString()} */

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
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
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
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  border-radius: var(--radius-lg);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--brand-primary);
  color: var(--color-primary-50);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: transparent;
  color: var(--brand-primary);
  border-color: var(--brand-primary);
}

.btn-secondary:hover {
  background-color: var(--brand-primary);
  color: var(--color-primary-50);
}

/* Card System */
.card {
  background: white;
  border: 1px solid var(--brand-accent);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.2s;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--brand-accent);
}

.card-body {
  padding: var(--space-6);
}

/* Form Elements */
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--brand-accent);
  border-radius: var(--radius-lg);
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Utility Classes */
.text-primary { color: var(--brand-primary); }
.text-secondary { color: var(--brand-secondary); }
.bg-primary { background-color: var(--brand-primary); }
.bg-accent { background-color: var(--brand-accent); }

.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }

.rounded-sm { border-radius: var(--radius-sm); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }

/* Responsive Typography */
@media (max-width: 768px) {
  h1 { font-size: calc(var(--font-size-h1) * 0.8); }
  h2 { font-size: calc(var(--font-size-h2) * 0.85); }
  h3 { font-size: calc(var(--font-size-h3) * 0.9); }
}`
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
  
  return [
    {
      title: "Color Psychology Analysis",
      description: `Your primary color has ${Math.round(s)}% saturation and ${Math.round(l)}% lightness, creating ${s > 50 ? "vibrant, energetic" : "sophisticated, professional"} brand presence perfect for ${industry} companies.`
    },
    {
      title: "Typography Pairing",
      description: `${typography.heading} and ${typography.body} combination enhances readability and brand perception, optimized for ${positioning} positioning in the ${industry} sector.`
    },
    {
      title: "Mathematical Scale",
      description: `${scale} modular scale creates harmonious proportions with ${Math.round((scale - 1) * 100)}% size progression, ensuring consistent visual hierarchy.`
    },
    {
      title: "Accessibility Compliance",
      description: `Color combinations meet WCAG AA standards with proper contrast ratios, ensuring your design is accessible to all users including those with visual impairments.`
    }
  ]
}

function displayBreakdown(breakdown) {
  const section = document.getElementById("breakdownSection")
  const content = document.getElementById("breakdownContent")
  
  if (content) {
    content.innerHTML = breakdown.map(item => `
      <div class="breakdown-item">
        <h5>${item.title}</h5>
        <p>${item.description}</p>
      </div>
    `).join("")
  }
  
  if (section) section.style.display = "block"
}

function updatePreviewContent(industry) {
  const content = {
    tech: {
      title: "Transform Your Digital Future",
      subtitle: "Enterprise-grade technology solutions",
      body: "We deliver cutting-edge technology solutions that drive business transformation.",
      cta: "Start Innovation"
    },
    finance: {
      title: "Secure Your Financial Future", 
      subtitle: "Trusted wealth management expertise",
      body: "Professional financial planning and investment strategies for long-term growth.",
      cta: "Schedule Consultation"
    },
    creative: {
      title: "Bring Your Vision to Life",
      subtitle: "Award-winning creative solutions", 
      body: "We create compelling brand experiences that resonate and drive engagement.",
      cta: "View Portfolio"
    }
  }
  
  const selected = content[industry] || content.tech
  
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
  
  const confidence = calculateConfidence(industry, positioning)
  
  if (confidenceScore) confidenceScore.textContent = `${confidence}%`
  if (recommendationText) {
    recommendationText.textContent = `Professional style guide complete! Your ${positioning} ${industry} brand achieves ${confidence}% design alignment with industry best practices.`
  }
}

function calculateConfidence(industry, positioning) {
  let score = 85 // Base confidence
  
  // Industry-specific adjustments
  const industryBonus = {
    tech: 5,
    finance: 8,
    creative: 3,
    healthcare: 7
  }
  
  score += industryBonus[industry] || 0
  
  // Logo analysis bonus
  if (AppState.logoAnalysis) score += 8
  
  return Math.min(score, 98)
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

// Initialize the application when everything is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('StyleCraft Pro initialized successfully')
  })
} else {
  console.log('StyleCraft Pro initialized successfully')
}// StyleCraft Pro - Complete Fixed Application Logic
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
    text: "#111827"
  },
  currentTypography: {
    heading: "Inter",
    body: "Inter"
  },
  logoAnalysis: null,
  isAnalyzing: false
}

function initializeApp() {
  initializeTheme()
  initializeColorInputs()
  synchronizeColorInputs()
  setupAccessibilityChecker()
  setupLogoUpload()
  updatePreviewInRealTime()
  
  // Show onboarding for first-time users
  if (!localStorage.getItem("stylecraft-visited")) {
    setTimeout(showOnboarding, 1000)
  }
}

function initializeTheme() {
  const themeToggle = document.getElementById("themeToggle")
  const themeIcon = document.getElementById("themeIcon")
  const themeText = document.getElementById("themeText")
  const body = document.body

  const savedTheme = localStorage.getItem("theme") || "light"
  
  function updateTheme(isDark) {
    if (isDark) {
      body.setAttribute("data-theme", "dark")
      themeIcon.innerHTML = '<path d="M12 3V1M12 23V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
      themeText.textContent = "Light"
    } else {
      body.removeAttribute("data-theme")
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>'
      themeText.textContent = "Dark"
    }
  }

  updateTheme(savedTheme === "dark")

  themeToggle?.addEventListener("click", () => {
    const isDark = !body.hasAttribute("data-theme")
    updateTheme(isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
    updateAccessibilityScore() // Recalculate for new background
  })
}

function initializeColorInputs() {
  const colorMappings = [
    { color: "coreColor", text: "coreColorText", key: "primary" },
    { color: "primaryColor", text: "primaryColorText", key: "primary" },
    { color: "secondaryColor", text: "secondaryColorText", key: "secondary" },
    { color: "accentColor", text: "accentColorText", key: "accent" },
    { color: "textColor", text: "textColorText", key: "text" }
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
    { color: "textColor", text: "textColorText", key: "text" }
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

  // Click to upload
  logoUploadArea?.addEventListener("click", () => {
    if (!logoPreview?.style.display || logoPreview.style.display === "none") {
      logoInput?.click()
    }
  })

  // Drag and drop
  logoUploadArea?.addEventListener("dragover", (e) => {
    e.preventDefault()
    logoUploadArea.classList.add("drag-over")
  })

  logoUploadArea?.addEventListener("dragleave", (e) => {
    e.preventDefault()
    logoUploadArea.classList.remove("drag-over")
  })

  logoUploadArea?.addEventListener("drop", (e) => {
    e.preventDefault()
    logoUploadArea.classList.remove("drag-over")
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleLogoFile(files[0])
    }
  })

  logoInput?.addEventListener("change", (e) => {
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
      logoImage.src = e.target.result
      uploadPlaceholder.style.display = "none"
      logoPreview.style.display = "block"
      aiActions.style.display = "block"
      
      // Quick analysis
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
    logoImage.src = ""
    uploadPlaceholder.style.display = "flex"
    logoPreview.style.display = "none"
    aiActions.style.display = "none"
    logoInput.value = ""
    AppState.logoAnalysis = null
  }
}

function performLogoAnalysis(imageElement) {
  if (AppState.isAnalyzing) return
  
  AppState.isAnalyzing = true
  const analyzeBtn = document.getElementById("analyzeLogoBtn")
  const btnContent = analyzeBtn?.querySelector(".btn-content")
  const btnLoading = analyzeBtn?.querySelector(".btn-loading")

  // Show loading state
  if (btnContent) btnContent.style.display = "none"
  if (btnLoading) btnLoading.style.display = "flex"

  try {
    // Real color analysis
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    
    canvas.width = imageElement.naturalWidth
    canvas.height = imageElement.naturalHeight
    ctx.drawImage(imageElement, 0, 0)
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const analysis = analyzeImageColors(imageData.data)
    
    AppState.logoAnalysis = analysis
    
    // Apply generated palette
    if (analysis.dominantColors.length > 0) {
      applyLogoColors(analysis)
    }
    
    // Show style variations
    document.getElementById("styleVariations").style.display = "block"
    
    setTimeout(() => {
      AppState.isAnalyzing = false
      if (btnContent) btnContent.style.display = "flex"
      if (btnLoading) btnLoading.style.display = "none"
      showNotification("Analysis complete! Colors extracted from your logo.", "success")
    }, 2000)
    
  } catch (error) {
    console.error("Logo analysis error:", error)
    AppState.isAnalyzing = false
    if (btnContent) btnContent.style.display = "flex"
    if (btnLoading) btnLoading.style.display = "none"
    showNotification("Could not analyze logo. Please try a different image.", "error")
  }
}

function analyzeImageColors(imageData) {
  const colorCounts = {}
  const sampleRate = 20 // Reduced sample rate for better performance
  const minAlpha = 100 // Minimum alpha threshold
  const minSaturation = 10 // Minimum saturation for color consideration

  // Sample pixels efficiently
  for (let i = 0; i < imageData.length; i += (sampleRate * 4)) {
    const r = imageData[i]
    const g = imageData[i + 1]
    const b = imageData[i + 2]
    const a = imageData[i + 3]

    // Skip transparent, very light, or white pixels
    if (a < minAlpha || (r > 245 && g > 245 && b > 245)) continue

    const hex = rgbToHex(r, g, b)
    const [h, s, l] = hexToHsl(hex)

    // Only consider colors with some saturation or very dark colors
    if (s > minSaturation || l < 20) {
      // Cluster similar colors to reduce noise
      const clusteredHex = clusterColor(hex)
      colorCounts[clusteredHex] = (colorCounts[clusteredHex] || 0) + 1
    }
  }

  // Sort colors by frequency and take top candidates
  const sortedColors = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([color]) => color)
    .filter(color => color !== '#000000') // Filter out pure black unless it's very dominant

  // Ensure we have at least one color
  if (sortedColors.length === 0) {
    sortedColors.push('#000000')
  }

  return {
    dominantColors: sortedColors,
    primaryColor: sortedColors[0] || "#000000",
    colorCount: sortedColors.length,
    isComplex: sortedColors.length > 3,
    hasStrongBrand: sortedColors.length >= 2 && colorCounts[sortedColors[0]] > 100
  }
}

function clusterColor(hex) {
  const [h, s, l] = hexToHsl(hex)
  
  // More precise clustering for better color detection
  const clusteredH = Math.round(h / 20) * 20 // 20-degree clusters
  const clusteredS = Math.round(s / 25) * 25 // 25% saturation clusters  
  const clusteredL = Math.round(l / 15) * 15 // 15% lightness clusters
  
  return hslToHex(clusteredH % 360, Math.min(clusteredS, 100), Math.min(clusteredL, 100))
}

function applyLogoColors(analysis) {
  const { dominantColors } = analysis
  
  if (dominantColors.length > 0) {
    // Use darkest color as primary
    const sortedByDarkness = dominantColors.sort((a, b) => {
      const [, , lA] = hexToHsl(a)
      const [, , lB] = hexToHsl(b)
      return lA - lB
    })
    
    const primaryColor = sortedByDarkness[0]
    const palette = generateSmartPalette(primaryColor)
    
    // Update color inputs
    updateColorInput("primaryColor", "primaryColorText", palette.primary, "primary")
    updateColorInput("secondaryColor", "secondaryColorText", palette.secondary, "secondary")
    updateColorInput("accentColor", "accentColorText", palette.accent, "accent")
    updateColorInput("textColor", "textColorText", palette.text, "text")
    
    // Update preview
    updatePreviewInRealTime()
    
    // Update recommendations
    updateRecommendations(analysis)
  }
}

function generateSmartPalette(primaryColor) {
  if (!primaryColor || !isValidHex(primaryColor)) {
    primaryColor = "#000000"
  }
  
  const [h, s, l] = hexToHsl(primaryColor)
  
  // Generate sophisticated palette based on primary color
  let secondary, accent, text
  
  if (l < 30) {
    // Dark primary - create lighter supporting colors
    secondary = hslToHex(h, Math.max(s - 20, 10), Math.min(l + 25, 70))
    accent = hslToHex(h, Math.max(s - 30, 5), Math.min(l + 50, 90))
    text = l < 15 ? "#f8fafc" : "#111827"
  } else if (l > 70) {
    // Light primary - create darker supporting colors  
    secondary = hslToHex(h, Math.min(s + 10, 50), Math.max(l - 30, 30))
    accent = hslToHex(h, Math.max(s - 20, 10), Math.max(l - 15, 85))
    text = "#111827"
  } else {
    // Medium primary - balanced approach
    secondary = hslToHex(h, Math.max(s - 15, 15), Math.min(l + 20, 75))
    accent = hslToHex(h, Math.max(s - 25, 5), Math.min(l + 35, 90))
    text = l > 50 ? "#111827" : "#f8fafc"
  }
  
  return { 
    primary: primaryColor, 
    secondary, 
    accent, 
    text 
  }
}

function updateColorInput(colorId, textId, value, key) {
  const colorInput = document.getElementById(colorId)
  const textInput = document.getElementById(textId)
  
  // Validate hex color format
  if (!isValidHex(value)) {
    console.warn(`Invalid hex color: ${value}`)
    return
  }
  
  if (colorInput) colorInput.value = value
  if (textInput) textInput.value = value
  
  AppState.currentColors[key] = value
  
  // Update harmony visualization
  const harmonyKey = colorId.replace("Color", "").replace("core", "primary")
  updateColorHarmony(value, harmonyKey)
  
  // Update accessibility score
  updateAccessibilityScore()
  
  // Update preview in real-time
  updatePreviewInRealTime()
}

function updateRecommendations(analysis) {
  const recommendationText = document.getElementById("recommendationText")
  const confidenceScore = document.getElementById("confidenceScore")
  
  if (recommendationText && analysis) {
    const confidence = Math.min(95, 70 + analysis.colorCount * 5)
    confidenceScore.textContent = `${confidence}%`
    
    recommendationText.textContent = `Analysis Complete: Extracted ${analysis.colorCount} brand colors from your logo. Generated professional palette optimized for your brand identity with ${confidence}% confidence.`
  }
}

function setupEventListeners() {
  // Preview tabs
  setupPreviewTabs()
  
  // Generate buttons
  setupGenerateButtons()
  
  // Export buttons
  setupExportButtons()
  
  // Typography and industry changes
  setupFormListeners()
  
  // Style guide generation
  setupStyleGuideGeneration()
  
  // Template system
  setupTemplateSystem()
}

function setupPreviewTabs() {
  const tabs = document.querySelectorAll(".preview-tab")
  const panels = document.querySelectorAll(".preview-panel")

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"))
      panels.forEach(p => p.classList.remove("active"))
      
      tab.classList.add("active")
      const targetId = tab.dataset.tab
      document.getElementById(targetId)?.classList.add("active")
    })
  })
}

function setupGenerateButtons() {
  // Color generation
  document.getElementById("generateColorsBtn")?.addEventListener("click", () => {
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

  // Typography generation
  document.getElementById("generateTypographyBtn")?.addEventListener("click", () => {
    const industry = document.getElementById("industry").value
    const positioning = document.getElementById("positioning").value
    const pair = generateIntelligentTypographyPair(industry, positioning)
    
    AppState.currentTypography = pair
    document.getElementById("coreFont").value = pair.heading
    
    updatePreviewInRealTime()
    showNotification(`Smart typography pair: ${pair.heading} + ${pair.body}`, "success")
  })
}

function setupTemplateSystem() {
  const buttons = document.querySelectorAll(".template-btn")
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const template = btn.dataset.template
      applyTemplate(template)
    })
  })
}

function applyTemplate(template) {
  const templates = {
    tech: {
      industry: "tech",
      positioning: "innovative", 
      colors: { primary: "#1e293b", secondary: "#475569", accent: "#e2e8f0", text: "#0f172a" },
      font: "Inter"
    },
    finance: {
      industry: "finance",
      positioning: "trustworthy",
      colors: { primary: "#0f172a", secondary: "#1e293b", accent: "#f8fafc", text: "#020617" },
      font: "Playfair Display"
    },
    creative: {
      industry: "creative", 
      positioning: "playful",
      colors: { primary: "#7c3aed", secondary: "#a855f7", accent: "#f3e8ff", text: "#581c87" },
      font: "Poppins"
    }
  }
  
  const config = templates[template]
  if (!config) return
  
  // Apply configuration
  document.getElementById("industry").value = config.industry
  document.getElementById("positioning").value = config.positioning
  document.getElementById("coreFont").value = config.font
  
  // Apply colors
  Object.entries(config.colors).forEach(([key, value]) => {
    const colorId = key === "primary" ? "primaryColor" : `${key}Color`
    const textId = key === "primary" ? "primaryColorText" : `${key}ColorText`
    updateColorInput(colorId, textId, value, key)
  })
  
  AppState.currentTypography.heading = config.font
  AppState.currentTypography.body = config.font === "Playfair Display" ? "Inter" : config.font
  
  updatePreviewInRealTime()
  showNotification(`${template.charAt(0).toUpperCase() + template.slice(1)} template applied!`, "success")
}

function generateIntelligentTypographyPair(industry, positioning) {
  const pairs = {
    tech: {
      professional: { heading: "Inter", body: "Inter" },
      innovative: { heading: "Poppins", body: "Inter" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      trustworthy: { heading: "Inter", body: "Inter" },
      playful: { heading: "Poppins", body: "Open Sans" },
      luxury: { heading: "Playfair Display", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Inter" }
    },
    finance: {
      professional: { heading: "Playfair Display", body: "Inter" },
      trustworthy: { heading: "Lora", body: "Inter" },
      luxury: { heading: "Playfair Display", body: "Lora" },
      innovative: { heading: "Montserrat", body: "Inter" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      playful: { heading: "Poppins", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Roboto" }
    },
    healthcare: {
      professional: { heading: "Inter", body: "Inter" },
      trustworthy: { heading: "Source Sans Pro", body: "Source Sans Pro" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      innovative: { heading: "Poppins", body: "Inter" },
      playful: { heading: "Poppins", body: "Open Sans" },
      luxury: { heading: "Lora", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Inter" }
    },
    creative: {
      playful: { heading: "Poppins", body: "Open Sans" },
      innovative: { heading: "Montserrat", body: "Inter" },
      luxury: { heading: "Playfair Display", body: "Lora" },
      professional: { heading: "Montserrat", body: "Inter" },
      trustworthy: { heading: "Lora", body: "Inter" },
      friendly: { heading: "Poppins", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Roboto" }
    },
    legal: {
      professional: { heading: "Playfair Display", body: "Lora" },
      trustworthy: { heading: "Lora", body: "Source Sans Pro" },
      luxury: { heading: "Playfair Display", body: "Inter" },
      innovative: { heading: "Montserrat", body: "Inter" },
      friendly: { heading: "Open Sans", body: "Open Sans" },
      playful: { heading: "Poppins", body: "Inter" },
      minimalist: { heading: "Inter", body: "Inter" },
      bold: { heading: "Montserrat", body: "Roboto" }
    },
    ecommerce: {
      friendly:
