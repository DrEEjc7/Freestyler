// Main application logic for Style Guide Generator

document.addEventListener('DOMContentLoaded', () => {
    // Initialize application
    initializeApp();
    setupEventListeners();
    setupAccessibilityChecker();
});

function initializeApp() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize theme
    initializeTheme();
    
    // Set initial core color
    document.getElementById('coreColor').value = '#3b82f6';
    document.getElementById('coreColorText').value = '#3b82f6';
    
    // Initialize color inputs
    synchronizeColorInputs();
}

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const body = document.body;

    // Set default to light mode if no preference stored
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
    } else {
        // Ensure light mode is default
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
        if (!savedTheme) {
            localStorage.setItem('theme', 'light');
        }
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'dark');
        }
    });
}

function setupEventListeners() {
    // Preview tabs functionality
    setupPreviewTabs();
    
    // Core color and typography generation
    setupGenerators();
    
    // Main style guide generation
    setupStyleGuideGeneration();
    
    // Export functionality
    setupExportButtons();
}

function setupPreviewTabs() {
    const previewTabs = document.querySelectorAll('.preview-tab');
    const previewPanels = document.querySelectorAll('.preview-panel');

    previewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            previewTabs.forEach(t => t.classList.remove('active'));
            previewPanels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetTab = tab.dataset.tab;
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function setupGenerators() {
    // Core color and typography input synchronization
    const coreColorInput = document.getElementById('coreColor');
    const coreColorText = document.getElementById('coreColorText');
    
    coreColorInput.addEventListener('input', (e) => {
        coreColorText.value = e.target.value.toUpperCase();
    });
    
    coreColorText.addEventListener('change', (e) => {
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e.target.value)) {
            coreColorInput.value = e.target.value;
        }
    });

    // Generate Colors functionality
    document.getElementById('generateColorsBtn').addEventListener('click', () => {
        const coreColor = document.getElementById('coreColorText').value;
        const palette = generateColorPalette(coreColor);
        
        document.getElementById('primaryColor').value = palette.primary;
        document.getElementById('primaryColorText').value = palette.primary;
        document.getElementById('secondaryColor').value = palette.secondary;
        document.getElementById('secondaryColorText').value = palette.secondary;
        document.getElementById('accentColor').value = palette.accent;
        document.getElementById('accentColorText').value = palette.accent;
        document.getElementById('textColor').value = palette.text;
        document.getElementById('textColorText').value = palette.text;
        
        checkColorContrast();
        showNotification('Color palette generated successfully!');
    });

    // Generate Typography functionality
    document.getElementById('generateTypographyBtn').addEventListener('click', () => {
        const coreFont = document.getElementById('coreFont').value;
        const pair = generateTypographyPair(coreFont);
        
        // Store the generated pair for use in style application
        window.currentTypographyPair = pair;
        
        // Update recommendation text
        document.getElementById('recommendationText').textContent = 
            `Generated typography pair: ${pair.heading} for headings, ${pair.body} for body text. This combination creates excellent visual hierarchy and readability.`;
        
        showNotification('Typography pair generated successfully!');
    });
}

function setupStyleGuideGeneration() {
    document.getElementById('generateBtn').addEventListener('click', () => {
        const industry = document.getElementById('industry').value;
        const positioning = document.getElementById('positioning').value;
        const fontScale = parseFloat(document.getElementById('fontScale').value);
        
        // Use current typography pair or generate industry-specific one
        let selectedPair = window.currentTypographyPair;
        if (!selectedPair) {
            const industryTypography = typographyPairs[industry];
            const pairs = industryTypography?.[positioning] || industryTypography?.professional || typographyPairs.tech.professional;
            selectedPair = pairs[Math.floor(Math.random() * pairs.length)];
            window.currentTypographyPair = selectedPair;
        }
        
        // Get current colors
        const currentColors = {
            primary: document.getElementById('primaryColorText').value,
            secondary: document.getElementById('secondaryColorText').value,
            accent: document.getElementById('accentColorText').value,
            text: document.getElementById('textColorText').value
        };
        
        // Apply styles to preview
        applyPreviewStyles(selectedPair, currentColors, fontScale);
        
        // Update content
        updatePreviewContent(industry);
        
        // Generate and display breakdown
        const breakdown = generateBreakdown(currentColors, selectedPair, industry, positioning, fontScale);
        displayBreakdown(breakdown);
        
        // Update recommendations
        const recommendationText = recommendations[industry]?.[positioning] || 
                                 recommendations[industry]?.professional || 
                                 "Generated style guide optimized for your industry and positioning.";
        document.getElementById('recommendationText').textContent = recommendationText;
        
        // Check accessibility
        checkColorContrast();
        
        showNotification('Style guide generated successfully!');
    });
}

function setupExportButtons() {
    // Copy CSS functionality
    document.getElementById('copyCssBtn').addEventListener('click', async () => {
        const cssVariables = generateCSS();
        const success = await copyToClipboard(cssVariables);
        
        if (success) {
            showNotification('CSS copied to clipboard!');
        } else {
            showNotification('Failed to copy CSS', 'error');
        }
    });
    
    // Download CSV functionality
    document.getElementById('downloadCsvBtn').addEventListener('click', () => {
        const csvData = generateCSV();
        const fileName = `style-guide-${new Date().toISOString().split('T')[0]}.csv`;
        downloadFile(csvData, fileName, 'text/csv');
        showNotification('CSV downloaded successfully!');
    });
    
    // Download PNG functionality
    document.getElementById('downloadPngBtn').addEventListener('click', () => {
        // Check if html2canvas is available
        if (typeof html2canvas === 'undefined') {
            showNotification('PNG export requires html2canvas library. Please add the library to enable this feature.', 'error');
            return;
        }
        
        const exportCard = preparePNGExport();
        
        html2canvas(exportCard, {
            backgroundColor: null,
            scale: 2
        }).then(canvas => {
            // Remove the temporary card
            document.body.removeChild(exportCard);
            
            // Download the image
            const link = document.createElement('a');
            link.download = `style-guide-${new Date().toISOString().split('T')[0]}.png`;
            link.href = canvas.toDataURL();
            link.click();
            
            showNotification('PNG downloaded successfully!');
        }).catch(error => {
            document.body.removeChild(exportCard);
            showNotification('Failed to generate PNG', 'error');
            console.error('PNG export error:', error);
        });
    });
}

function synchronizeColorInputs() {
    const colorInputs = [
        { color: 'primaryColor', text: 'primaryColorText' },
        { color: 'secondaryColor', text: 'secondaryColorText' },
        { color: 'accentColor', text: 'accentColorText' },
        { color: 'textColor', text: 'textColorText' }
    ];

    colorInputs.forEach(({ color, text }) => {
        const colorInput = document.getElementById(color);
        const textInput = document.getElementById(text);
        
        colorInput.addEventListener('input', (e) => {
            textInput.value = e.target.value.toUpperCase();
            checkColorContrast();
        });
        
        textInput.addEventListener('change', (e) => {
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e.target.value)) {
                colorInput.value = e.target.value;
                checkColorContrast();
            }
        });
    });
}

function setupAccessibilityChecker() {
    // Initial accessibility check
    checkColorContrast();
    
    // Check accessibility whenever colors change
    const colorInputs = ['primaryColorText', 'secondaryColorText', 'accentColorText', 'textColorText'];
    colorInputs.forEach(inputId => {
        document.getElementById(inputId).addEventListener('input', checkColorContrast);
    });
}

// Accessibility functions
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    const shortHex = hex.length === 4;
    if (shortHex) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    } else {
        return null;
    }
    return { r, g, b };
}

function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;

    const a = [rgb.r, rgb.g, rgb.b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getContrastRatio(color1, color2) {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

function checkColorContrast() {
    const body = document.body;
    const bgColor = body.hasAttribute('data-theme') ? '#111827' : '#ffffff';
    const textColor = document.getElementById('textColorText').value;
    const primaryColor = document.getElementById('primaryColorText').value;
    
    const textContrast = getContrastRatio(bgColor, textColor);
    const primaryContrast = getContrastRatio(bgColor, primaryColor);
    
    const warningEl = document.getElementById('accessibilityWarning');
    const successEl = document.getElementById('accessibilitySuccess');
    
    const meetsStandards = textContrast >= 4.5 && primaryContrast >= 3.0;
    
    if (meetsStandards) {
        warningEl.style.display = 'none';
        successEl.style.display = 'block';
    } else {
        warningEl.style.display = 'block';
        successEl.style.display = 'none';
    }
}

// Apply styles to preview
function applyPreviewStyles(typography, colors, scale) {
    const preview = document.getElementById('previewContent');
    const root = document.documentElement;
    
    // Calculate font sizes using modular scale
    const baseSize = 16;
    const sizes = {
        h1: Math.round(baseSize * Math.pow(scale, 3)),
        h2: Math.round(baseSize * Math.pow(scale, 2.5)),
        h3: Math.round(baseSize * Math.pow(scale, 2)),
        h4: Math.round(baseSize * Math.pow(scale, 1.5)),
        body: baseSize,
        small: Math.round(baseSize * Math.pow(scale, -0.5))
    };
    
    // Apply typography
    preview.style.fontFamily = `'${typography.body}', sans-serif`;
    
    const headings = preview.querySelectorAll('h1, h2, h3, h4, .nav-logo');
    headings.forEach(heading => {
        heading.style.fontFamily = `'${typography.heading}', sans-serif`;
    });
    
    // Apply font sizes with proper line heights
    const h1Elements = preview.querySelectorAll('h1');
    h1Elements.forEach(h1 => {
        h1.style.fontSize = `${sizes.h1}px`;
        h1.style.lineHeight = sizes.h1 > 36 ? '1.1' : '1.2';
    });
    
    const h2Elements = preview.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.style.fontSize = `${sizes.h2}px`;
        h2.style.lineHeight = '1.2';
    });
    
    const h3Elements = preview.querySelectorAll('h3');
    h3Elements.forEach(h3 => {
        h3.style.fontSize = `${sizes.h3}px`;
        h3.style.lineHeight = '1.3';
    });
    
    const h4Elements = preview.querySelectorAll('h4');
    h4Elements.forEach(h4 => {
        h4.style.fontSize = `${sizes.h4}px`;
        h4.style.lineHeight = '1.4';
    });
    
    // Apply colors to CSS variables
    root.style.setProperty('--accent-color', colors.primary);
    root.style.setProperty('--accent-hover', colors.secondary);
    root.style.setProperty('--success-color', colors.accent);
}

// Update preview content based on industry
function updatePreviewContent(industry) {
    const content = industryContent[industry] || industryContent.tech;
    
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero .subtitle');
    const heroBody = document.querySelector('#hero .body-text');
    const heroCta = document.querySelector('#hero .cta-button');
    
    if (heroTitle) heroTitle.textContent = content.title;
    if (heroSubtitle) heroSubtitle.textContent = content.subtitle;
    if (heroBody) heroBody.textContent = content.body;
    if (heroCta) heroCta.textContent = content.cta;
}

function displayBreakdown(breakdown) {
    const breakdownSection = document.getElementById('breakdownSection');
    const breakdownContent = document.getElementById('breakdownContent');
    
    breakdownContent.innerHTML = breakdown.map(item => `
        <div class="breakdown-item">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
        </div>
    `).join('');
    
    breakdownSection.style.display = 'block';
}

// Error handling
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    showNotification('An error occurred. Please try again.', 'error');
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    showNotification('An error occurred. Please try again.', 'error');
    event.preventDefault();
});
