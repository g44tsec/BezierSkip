(function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '10px';
    overlay.style.right = '10px';
    overlay.style.backgroundColor = '#333';
    overlay.style.color = '#fff';
    overlay.style.padding = '10px 20px';
    overlay.style.borderRadius = '10px';
    overlay.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    overlay.style.zIndex = '1000';
    overlay.style.cursor = 'pointer';
    overlay.style.fontFamily = 'Arial, sans-serif';
    overlay.style.fontSize = '16px';
    overlay.style.textAlign = 'center';
    overlay.style.display = 'none';

    const skipLevelBtn = document.createElement('button');
    skipLevelBtn.textContent = 'Skip Level';
    skipLevelBtn.style.backgroundColor = '#4CAF50';
    skipLevelBtn.style.color = 'white';
    skipLevelBtn.style.border = 'none';
    skipLevelBtn.style.padding = '10px 20px';
    skipLevelBtn.style.borderRadius = '5px';
    skipLevelBtn.style.fontSize = '16px';
    skipLevelBtn.style.cursor = 'pointer';
    skipLevelBtn.style.transition = 'background-color 0.3s';
    skipLevelBtn.onmouseover = () => skipLevelBtn.style.backgroundColor = '#45a049';
    skipLevelBtn.onmouseout = () => skipLevelBtn.style.backgroundColor = '#4CAF50';

    overlay.appendChild(skipLevelBtn);
    document.body.appendChild(overlay);

    function clickInvisibleSVG() {
        const svgElement = document.getElementById('ui_next_stage');
        if (svgElement) {
            svgElement.style.visibility = 'visible';
            svgElement.style.display = 'block';
            const clickEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
            svgElement.dispatchEvent(clickEvent);
            setTimeout(() => {
                svgElement.style.visibility = '';
                svgElement.style.display = '';
            }, 1000);
        } else {
            console.error('SVG element not found');
        }
    }

    function toggleOverlay() {
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    }

    function autoSkip() {
        clickInvisibleSVG();
    }

    skipLevelBtn.addEventListener('click', clickInvisibleSVG);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Delete') {
            toggleOverlay();
        } else if (event.key === 'Shift' && event.code === 'ShiftRight') {
            autoSkip();
        }
    });
})();
