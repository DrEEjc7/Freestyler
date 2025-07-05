// Export functionality for Style Guide Generator

// Generate CSS variables and classes
function generateCSS() {
    const primary = document.getElementById('primaryColorText').value;
    const secondary = document.getElementById('secondaryColorText').value;
    const accent = document.getElementById('accentColorText').value;
    const text = document.getElementById('textColorText').value;
    const scale = document.getElementById('fontScale').value;
    
    // Use current typography pair or fallback
    const selectedPair = window.currentTypographyPair || { heading: 'Inter', body: 'Inter' };
    
    return `:root {
    /* Colors */
    --primary-color: ${primary};
    --secondary-color: ${secondary};
    --accent-color: ${accent};
    --text-color: ${text};
    
    /* Typography */
    --heading-font: '${selectedPair.heading}', sans-serif;
    --body-font: '${selectedPair.body}', sans-serif;
    --font-scale: ${scale};
    
    /* Font Sizes (using modular scale) */
    --h1-size: ${Math.round(16 * Math.pow(scale, 3))}px;
    --h2-size: ${Math.round(16 * Math.pow(scale, 2.5))}px;
    --h3-size: ${Math.round(16 * Math.pow(scale, 2))}px;
    --h4-size: ${Math.round(16 * Math.pow(scale, 1.5))}px;
    --body-size: 16px;
    --small-size: ${Math.round(16 * Math.pow(scale, -0.5))}px;
    
    /* Line Heights */
    --h1-line-height: ${16 * Math.pow(scale, 3) > 36 ? '1.1' : '1.2'};
    --h2-line-height: 1.2;
    --h3-line-height: 1.3;
    --h4-line-height: 1.4;
    --body-line-height: 1.6;
    
    /* Spacing (based on modular scale) */
    --space-xs: ${Math.round(16 * Math.pow(scale, -2))}px;
    --space-sm: ${Math.round(16 * Math.pow(scale, -1))}px;
    --space-md: 16px;
    --space-lg: ${Math.round(16 * Math.pow(scale, 1))}px;
    --space-xl: ${Math.round(16 * Math.pow(scale, 2))}px;
    --space-2xl: ${Math.round(16 * Math.pow(scale, 3))}px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
}

/* Typography Classes */
h1 { 
    font-family: var(--heading-font); 
    font-size: var(--h1-size); 
    line-height: var(--h1-line-height);
    color: var(--text-color);
    margin-bottom: var(--space-md);
}

h2 { 
    font-family: var(--heading-font); 
    font-size: var(--h2-size); 
    line-height: var(--h2-line-height);
    color: var(--text-color);
    margin-bottom: var(--space-sm);
}

h3 { 
    font-family: var(--heading-font); 
    font-size: var(--h3-size); 
    line-height: var(--h3-line-height);
    color: var(--text-color);
    margin-bottom: var(--space-sm);
}

h4 { 
    font-family: var(--heading-font); 
    font-size: var(--h4-size); 
    line-height: var(--h4-line-height);
    color: var(--text-color);
    margin-bottom: var(--space-xs);
}

body, p { 
    font-family: var(--body-font); 
    font-size: var(--body-size); 
    line-height: var(--body-line-height);
    color: var(--text-color);
    margin-bottom: var(--space-md);
}

/* Component Classes */
.btn-primary {
    background-color: var(--primary-color);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    border: none;
    border-radius: var(--radius-md);
    font-family: var(--body-font);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background-color: var(--secondary-color);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    padding: var(--space-sm) var(--space-lg);
    border: 2px solid var(--primary-color);
    border-radius: var(--radius-md);
    font-family: var(--body-font);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: white;
}

.card {
    background-color: white;
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid #e5e7eb;
}

.card-elevated {
    box-shadow: var(--shadow-lg);
}`;
}

// Generate CSV data
function generateCSV() {
    const selectedPair = window.currentTypographyPair || { heading: 'Inter', body: 'Inter' };
    
    const data = [
        ['Property', 'Value', 'Description'],
        ['Industry', document.getElementById('industry').value, 'Target industry for style guide'],
        ['Positioning', document.getElementById('positioning').value, 'Brand positioning strategy'],
        ['Typography Scale', document.getElementById('fontScale').value, 'Mathematical ratio for font sizing'],
        ['Core Color', document.getElementById('coreColorText').value, 'Base color for palette generation'],
        ['Primary Color', document.getElementById('primaryColorText').value, 'Main brand color'],
        ['Secondary Color', document.getElementById('secondaryColorText').value, 'Supporting brand color'],
        ['Accent Color', document.getElementById('accentColorText').value, 'Highlight and CTA color'],
        ['Text Color', document.getElementById('textColorText').value, 'Primary text color'],
        ['Core Font', document.getElementById('coreFont').value, 'Base font selection'],
        ['Heading Font', selectedPair.heading, 'Font for headings and titles'],
        ['Body Font', selectedPair.body, 'Font for body text and paragraphs'],
        ['H1 Size', `${Math.round(16 * Math.pow(document.getElementById('fontScale').value, 3))}px`, 'Main heading size'],
        ['H2 Size', `${Math.round(16 * Math.pow(document.getElementById('fontScale').value, 2.5))}px`, 'Section heading size'],
        ['H3 Size', `${Math.round(16 * Math.pow(document.getElementById('fontScale').value, 2))}px`, 'Subsection heading size'],
        ['H4 Size', `${Math.round(16 * Math.pow(document.getElementById('fontScale').value, 1.5))}px`, 'Minor heading size'],
        ['Body Size', '16px', 'Base body text size'],
        ['Generated Date', new Date().toISOString().split('T')[0], 'Date of style guide creation'],
        ['Generated Time', new Date().toLocaleTimeString(), 'Time of style guide creation'],
        ['Tool Version', '1.0.0', 'Style Guide Generator version']
    ];
    
    return data.map(row => row.join(',')).join('\n');
}

// Generate style guide summary for PNG export
function generateStyleGuideSummary() {
    const selectedPair = window.currentTypographyPair || { heading: 'Inter', body: 'Inter' };
    const industry = document.getElementById('industry').value;
    const positioning = document.getElementById('positioning').value;
    const scale = document.getElementById('fontScale').value;
    
    return {
        title: `${industry.charAt(0).toUpperCase() + industry.slice(1)} Style Guide`,
        subtitle: `${positioning.charAt(0).toUpperCase() + positioning.slice(1)} Positioning`,
        colors: {
            primary: document.getElementById('primaryColorText').value,
            secondary: document.getElementById('secondaryColorText').value,
            accent: document.getElementById('accentColorText').value,
            text: document.getElementById('textColorText').value
        },
        typography: {
            heading: selectedPair.heading,
            body: selectedPair.body,
            scale: scale
        },
        timestamp: new Date().toLocaleDateString()
    };
}

// Download file utility
function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Copy to clipboard utility
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
        return success;
    }
}

// Show temporary notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// PNG export preparation (requires html2canvas library)
function preparePNGExport() {
    const summary = generateStyleGuideSummary();
    
    // Create a styled summary card for PNG export
    const exportCard = document.createElement('div');
    exportCard.style.cssText = `
        width: 800px;
        padding: 40px;
        background: linear-gradient(135deg, ${summary.colors.primary}, ${summary.colors.secondary});
        color: white;
        font-family: 'Inter', sans-serif;
        border-radius: 16px;
        position: fixed;
        top: -9999px;
        left: -9999px;
    `;
    
    exportCard.innerHTML = `
        <h1 style="font-size: 32px; margin-bottom: 8px; font-weight: 700;">${summary.title}</h1>
        <p style="font-size: 18px; margin-bottom: 32px; opacity: 0.9;">${summary.subtitle}</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <div>
                <h3 style="font-size: 20px; margin-bottom: 16px;">Colors</h3>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 24px; height: 24px; border-radius: 4px; background: ${summary.colors.primary};"></div>
                        <span>Primary: ${summary.colors.primary}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 24px; height: 24px; border-radius: 4px; background: ${summary.colors.accent};"></div>
                        <span>Accent: ${summary.colors.accent}</span>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 style="font-size: 20px; margin-bottom: 16px;">Typography</h3>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div>Headings: ${summary.typography.heading}</div>
                    <div>Body: ${summary.typography.body}</div>
                    <div>Scale: ${summary.typography.scale}</div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2); font-size: 14px; opacity: 0.8;">
            Generated on ${summary.timestamp} • Style Guide Generator
        </div>
    `;
    
    document.body.appendChild(exportCard);
    
    return exportCard;
}
