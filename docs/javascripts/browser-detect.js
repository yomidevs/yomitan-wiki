// Auto-detect browser and switch to appropriate tab
document.addEventListener('DOMContentLoaded', function() {
  // Function to detect browser
  function detectBrowser() {
    const ua = navigator.userAgent;
    
    if (ua.indexOf('Edg') > -1) {
      return 'edge';
    } else if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
      return 'chrome';
    } else if (ua.indexOf('Firefox') > -1) {
      return 'firefox';
    }
    
    // Default to Chrome if uncertain
    return 'chrome';
  }

  // Wait a brief moment for MkDocs Material to render tabs
  setTimeout(function() {
    const browser = detectBrowser();
    
    // Find all tab labels and click the matching one
    const tabLabels = document.querySelectorAll('.tabbed-labels label');
    
    tabLabels.forEach(function(label) {
      const text = label.textContent.toLowerCase();
      
      if (text.includes(browser)) {
        label.click();
      }
    });
  }, 100);
});