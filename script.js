/**
 * Fear of Forgetting (FoF) Webpage Logic
 * Scrapbook Text Engine, Syncopated Slideshow, and Interactive Data Visualization
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize the Scrapbook Ransom Note Typography Engine
  initRansomNoteEngine();

  // 2. Initialize the Syncopated Polaroid Split Slideshow
  initSplitSlideshow();

  // 3. Initialize the Interactive Plotly.js Time-Series Chart
  initInteractiveChart();
  
  // 4. Polaroid Collage Hover Effect Tweaks
  initPolaroidCollage();
});

/* =========================================================================
 * 1. Scrapbook Ransom Note Typography Engine
 * ========================================================================= */
function initRansomNoteEngine() {
  const ransomElements = document.querySelectorAll('[data-ransom]');
  
  ransomElements.forEach(element => {
    const text = element.getAttribute('data-ransom').trim();
    element.innerHTML = ''; // Clear original text
    
    // Check if it's the hero title or nav logo for the staggered load animation
    const isIntroElement = element.tagName === 'H1' || element.id === 'nav-logo';
    
    // Split text into words to handle wrapping correctly
    const words = text.split(' ');
    
    words.forEach((word, wordIdx) => {
      const wordContainer = document.createElement('span');
      wordContainer.className = 'ransom-word';
      wordContainer.style.display = 'inline-flex';
      wordContainer.style.marginRight = '12px'; // Space between words
      wordContainer.style.whiteSpace = 'nowrap';
      
      const chars = word.split('');
      chars.forEach((char, charIdx) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'ransom-char';
        charSpan.textContent = char;
        
        // Randomly select one of 5 distinct styles
        const styleNum = Math.floor(Math.random() * 5);
        charSpan.classList.add(`char-style-${styleNum}`);
        
        // Random rotation: -6deg to +6deg for visual "glued" imperfection
        const rotation = (Math.random() * 12 - 6).toFixed(1);
        
        // Random scale variance: 0.95 to 1.05
        const scale = (0.95 + Math.random() * 0.1).toFixed(2);
        
        // Random slight vertical offset: -3px to +3px
        const yOffset = (Math.random() * 6 - 3).toFixed(0);
        
        charSpan.style.transform = `rotate(${rotation}deg) scale(${scale}) translateY(${yOffset}px)`;
        
        if (isIntroElement) {
          charSpan.classList.add('animate-in');
          // Stagger delays based on global letter position
          charSpan.style.animationDelay = `${(charIdx + wordIdx * 3) * 0.12}s`;
        }
        
        wordContainer.appendChild(charSpan);
      });
      
      element.appendChild(wordContainer);
    });
  });
}

/* =========================================================================
 * 2. Syncopated Polaroid Split Slideshow (Spotify Canvas Rhythm)
 * ========================================================================= */
function initSplitSlideshow() {
  const topCols = document.querySelectorAll('.hero-top .slideshow-container');
  const bottomCols = document.querySelectorAll('.hero-bottom .slideshow-container');
  const heroDivider = document.querySelector('.hero-divider');
  
  if (topCols.length === 0 || bottomCols.length === 0 || !heroDivider) return;

  // Premium, desaturated film-aesthetic Unsplash images as placeholders
  const topImages = [
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600', // Red fabric, warm light
    'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600', // Forest, deep warm greens
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600', // Vintage Polaroid Camera
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600', // Desaturated blue beach
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600', // Trees & warm sky glow
    'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600', // Hand-woven orange yarn
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600', // Retro Polaroid on table
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600'  // Sunbeams in deep woods
  ];

  const bottomImages = [
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600', // B&W stone spiral stairs
    'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=600', // B&W misty lake mountains
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600', // B&W open retro notebook
    'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=600', // B&W trees / branch detail
    'https://images.unsplash.com/photo-1495616811223-4d98c6e968ab?q=80&w=600', // B&W flock of birds soaring
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600', // B&W stacked retro items
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600', // B&W foggy valley trees
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600'  // B&W rows of old books
  ];

  // Paper card divider background tones
  const dividerColors = [
    '#e2decb', // Vintage tan
    '#fafaf9', // Polaroid off-white
    '#e8e6df', // Light grey paper
    '#dad5c3'  // Muted beige card
  ];

  // Offsets for each of the 4 columns to ensure all 8 panels display different pictures
  const colOffsets = [0, 2, 4, 6];

  // Populate color grid cells
  topCols.forEach((col, colIdx) => {
    const offset = colOffsets[colIdx];
    for (let i = 0; i < topImages.length; i++) {
      const imgIdx = (i + offset) % topImages.length;
      const topSlide = document.createElement('div');
      topSlide.className = `slide-img ${i === 0 ? 'active' : ''}`;
      topSlide.style.backgroundImage = `url('${topImages[imgIdx]}')`;
      col.appendChild(topSlide);
    }
  });

  // Populate B&W grid cells
  bottomCols.forEach((col, colIdx) => {
    const offset = colOffsets[colIdx];
    for (let i = 0; i < bottomImages.length; i++) {
      const imgIdx = (i + offset) % bottomImages.length;
      const bottomSlide = document.createElement('div');
      bottomSlide.className = `slide-img ${i === 0 ? 'active' : ''}`;
      bottomSlide.style.backgroundImage = `url('${bottomImages[imgIdx]}')`;
      col.appendChild(bottomSlide);
    }
  });

  // Precise transition beats in milliseconds mapped from the subagent's video analysis
  const cuts = [
    { time: 0, index: 0 },
    { time: 500, index: 1 },
    { time: 850, index: 2 }, 
    { time: 920, index: 3 },
    { time: 1300, index: 4 },
    { time: 1700, index: 5 },
    { time: 2000, index: 6 },
    { time: 2900, index: 7 }, 
    { time: 4400, index: 0 }, 
    { time: 5900, index: 1 },
    { time: 6700, index: 2 },
    { time: 7400, index: 3 },
    { time: 7900, index: 4 }, 
    { time: 8300, index: 5 }  
  ];

  const totalCycleDuration = 8800; // Loop cycle time

  function executeCut(slideIdx) {
    topCols.forEach(col => {
      const slides = col.querySelectorAll('.slide-img');
      slides.forEach(slide => slide.classList.remove('active'));
      if (slides[slideIdx]) slides[slideIdx].classList.add('active');
    });

    bottomCols.forEach(col => {
      const slides = col.querySelectorAll('.slide-img');
      slides.forEach(slide => slide.classList.remove('active'));
      if (slides[slideIdx]) slides[slideIdx].classList.add('active');
    });

    const colIdx = slideIdx % dividerColors.length;
    heroDivider.style.backgroundColor = dividerColors[colIdx];
  }

  function startSyncopatedLoop() {
    cuts.forEach(cut => {
      setTimeout(() => {
        executeCut(cut.index);
      }, cut.time);
    });
  }

  // Initial cycle
  startSyncopatedLoop();

  // Run infinite interval looping every 8.8s
  setInterval(() => {
    startSyncopatedLoop();
  }, totalCycleDuration);
}

/* =========================================================================
 * 3. Interactive Plotly.js Time-Series Chart
 * ========================================================================= */
function initInteractiveChart() {
  const chartElement = document.getElementById('plotly-chart');
  if (!chartElement) return;

  // Extracted clean parsed JSON dataset arrays
  const dates = ["2021-09-01", "2021-10-01", "2021-11-01", "2021-12-01", "2022-01-01", "2022-02-01", "2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01", "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01", "2022-11-01", "2022-12-01", "2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", "2023-05-01", "2023-06-01", "2023-07-01", "2023-08-01", "2023-09-01", "2023-10-01", "2023-11-01", "2023-12-01", "2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-07-01", "2024-08-01", "2024-09-01", "2024-10-01", "2024-11-01", "2024-12-01", "2025-01-01", "2025-02-01", "2025-03-01", "2025-04-01", "2025-05-01", "2025-06-01", "2025-07-01", "2025-08-01", "2025-09-01", "2025-10-01", "2025-11-01", "2025-12-01", "2026-01-01", "2026-02-01", "2026-03-01", "2026-04-01"];
  const responsibility = [0.0, 0.0, 0.0, 16.67, 16.67, 16.67, 0.0, 16.67, 16.67, 16.67, 0.0, 0.0, 0.0, 0.0, 0.0, 16.67, 0.0, 29.17, 30.0, 29.17, 25.0, 16.67, 0.0, 0.0, 0.0, 0.0, 16.67, 0.0, 16.67, 43.33, 43.33, 43.33, 43.33, 25.0, 0.0, 0.0, 20.83, 33.33, 41.67, 33.33, 54.17, 50.0, 37.5, 66.67, 83.33, 62.5, 33.33, 0.0, 25.0, 50.0, 50.0, 83.33, 83.33, 83.33, 66.67, 100.0];
  const media_intensity = [43.79, 81.59, 54.48, 95.46, 50.7, 20.63, 43.63, 39.47, 41.09, 43.68, 73.92, 59.83, 86.99, 41.52, 78.62, 40.39, 32.83, 48.22, 28.89, 70.84, 62.58, 28.51, 61.39, 100.0, 58.86, 25.32, 48.43, 33.15, 29.43, 19.01, 26.3, 34.45, 17.49, 44.49, 75.86, 66.04, 12.74, 31.86, 25.59, 50.16, 69.22, 12.47, 33.48, 27.92, 36.39, 30.13, 39.9, 40.5, 10.26, 11.23, 55.56, 27.92, 7.29, 0.0, 16.85, 14.63];
  const journaling_intensity = [7.69, 11.54, 38.46, 19.23, 7.69, 0.0, 0.0, 0.0, 3.85, 0.0, 0.0, 0.0, 11.54, 0.0, 0.0, 15.38, 0.0, 0.0, 0.0, 0.0, 0.0, 7.69, 0.0, 0.0, 0.0, 0.0, 0.0, 3.85, 3.85, 0.0, 0.0, 7.69, 19.23, 38.46, 7.69, 0.0, 30.77, 26.92, 30.77, 46.15, 57.69, 38.46, 61.54, 88.46, 80.77, 57.69, 69.23, 34.62, 65.38, 76.92, 100.0, 84.62, 61.54, 73.08, 92.31, 69.23];

  // Tooltip details to make it incredibly informative on hover!
  const iphone_media = [667, 753, 546, 713, 558, 389, 496, 558, 767, 788, 811, 730, 998, 556, 989, 527, 492, 585, 566, 898, 792, 446, 753, 958, 928, 505, 613, 536, 479, 269, 384, 564, 338, 317, 507, 603, 230, 320, 322, 567, 783, 281, 385, 368, 496, 386, 583, 533, 255, 273, 747, 467, 216, 103, 363, 231];
  const camera_media = [270, 884, 589, 1181, 507, 119, 438, 299, 120, 147, 684, 504, 739, 339, 593, 347, 242, 434, 95, 540, 493, 208, 510, 1020, 288, 90, 410, 204, 192, 209, 229, 200, 112, 633, 1024, 746, 132, 396, 278, 488, 625, 76, 361, 275, 304, 298, 282, 343, 61, 61, 408, 176, 45, 23, 75, 166];
  const journal_pages = [2, 3, 10, 5, 2, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 5, 10, 2, 0, 8, 7, 8, 12, 15, 10, 16, 23, 21, 15, 18, 9, 17, 20, 26, 22, 16, 19, 24, 18];
  const exams = [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 3, 3, 2, 0, 0, 1, 1, 3, 3, 2, 1, 3];
  const work_hours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 10, 0, 0, 25, 40, 50, 40, 25, 40, 45, 40, 40, 15, 0, 0, 30, 40, 40, 40, 40, 60, 60, 60];

  // Custom tooltips detailing exact values on hover!
  const responsibilityHover = responsibility.map((val, idx) => 
    `<b>Responsibility Index</b>: ${val}%<br>` +
    `• Exams prepared: ${exams[idx]}<br>` +
    `• Work hours: ${work_hours[idx]} h<extra></extra>`
  );

  const mediaHover = media_intensity.map((val, idx) => 
    `<b>Media Intensity</b>: ${val}%<br>` +
    `• iPhone photos/videos: ${iphone_media[idx]}<br>` +
    `• Camera photos/videos: ${camera_media[idx]}<br>` +
    `• Total files: ${iphone_media[idx] + camera_media[idx]}<extra></extra>`
  );

  const journalingHover = journaling_intensity.map((val, idx) => 
    `<b>Journaling Intensity</b>: ${val}%<br>` +
    `• Journal pages written: ${journal_pages[idx]} pages<extra></extra>`
  );

  // Setup the lines (scatters)
  const traceResponsibility = {
    x: dates,
    y: responsibility,
    text: responsibilityHover,
    hoverinfo: 'text',
    mode: 'lines+markers',
    name: 'Responsibility Index',
    line: {
      color: '#3c4f3f', // Muted desaturated green
      dash: 'dot',
      width: 2.5
    },
    marker: {
      size: 5,
      symbol: 'circle'
    }
  };

  const traceMedia = {
    x: dates,
    y: media_intensity,
    text: mediaHover,
    hoverinfo: 'text',
    mode: 'lines+markers',
    name: 'Captured Media Intensity',
    line: {
      color: '#2d4554', // Desaturated blue
      width: 2.8
    },
    marker: {
      size: 5,
      symbol: 'square'
    }
  };

  const traceJournaling = {
    x: dates,
    y: journaling_intensity,
    text: journalingHover,
    hoverinfo: 'text',
    mode: 'lines+markers',
    name: 'Journaling Intensity',
    line: {
      color: '#8f3833', // Muted crimson red accent
      width: 2.8
    },
    marker: {
      size: 5,
      symbol: 'diamond'
    }
  };

  // Define shaded rectangular areas for each university year
  const years = [
    { start: "2021-09-01", end: "2022-08-01", label: "Year 1" },
    { start: "2022-09-01", end: "2023-08-01", label: "Year 2" },
    { start: "2023-09-01", end: "2024-08-01", label: "Year 3" },
    { start: "2024-09-01", end: "2025-08-01", label: "Year 4" },
    { start: "2025-09-01", end: "2026-04-01", label: "Year 5" }
  ];

  const shapes = years.map(yr => ({
    type: 'rect',
    xref: 'x',
    yref: 'paper',
    x0: yr.start,
    x1: yr.end,
    y0: 0,
    y1: 1,
    fillcolor: 'rgba(200, 200, 200, 0.12)',
    opacity: 1,
    layer: 'below',
    line: { width: 0 }
  }));

  const annotations = years.map(yr => ({
    x: yr.start,
    y: 106,
    xref: 'x',
    yref: 'y',
    text: yr.label,
    showarrow: false,
    xanchor: 'left',
    yanchor: 'bottom',
    font: {
      size: 11,
      color: 'rgba(80, 80, 80, 0.8)',
      family: 'Courier New, monospace',
      weight: 'bold'
    }
  }));

  // Title and subtitle annotation inside chart area
  const titleText = "<b>The Memory Trade-off: How Responsibilities Reshaped My Fear of Forgetting</b>";
  
  const subtitleText = "Monthly time series comparing three activity dimensions: total media production " +
    "(photos and videos captured via phone and camera), journal pages, and a responsibility index " +
    "(exams prepared and work hours). All variables are rescaled to 0–100% to enable direct comparability, " +
    "where each percentage reflects the relative intensity of that activity within a given month across 5 university years.";

  // Push wrapped subtitle annotation
  annotations.push({
    xref: 'paper',
    yref: 'paper',
    x: 0,
    y: 1.16,
    xanchor: 'left',
    yanchor: 'top',
    text: `<span style='font-size: 18px; font-weight: bold; color: #1b1b1b;'>${titleText}</span><br>` +
          `<span style='font-size: 12.5px; color: #555555; line-height: 1.4; display: block;'><i>${subtitleText}</i></span>`,
    showarrow: false,
    align: 'left'
  });

  // Chart Layout Configuration
  const layout = {
    font: {
      family: "'Indie Flower', cursive, sans-serif", // User Google Font stack
      color: '#1b1b1b'
    },
    plot_bgcolor: '#fafaf9',  // Warm off-white plot back
    paper_bgcolor: '#ffffff', // Clean white border back
    margin: {
      t: 140, // Expanded top margin for stacked titles
      b: 80,
      l: 60,
      r: 30
    },
    hovermode: 'x unified',
    hoverlabel: {
      bgcolor: '#ffffff',
      bordercolor: '#dad5c3',
      font: {
        family: 'monospace',
        size: 12
      }
    },
    xaxis: {
      type: 'date',
      range: ['2021-08-01', '2026-05-15'],
      tickformat: '%b-%y',
      dtick: 'M3', // Tick every 3 months
      tickangle: -45,
      showgrid: true,
      gridcolor: '#e8e6df',
      linecolor: '#dad5c3',
      title: {
        text: 'University Years Timeline',
        font: { size: 14, weight: 'bold' },
        standoff: 15
      }
    },
    yaxis: {
      range: [-5, 112],
      showgrid: true,
      gridcolor: '#e8e6df',
      linecolor: '#dad5c3',
      zeroline: false,
      title: {
        text: 'Activity Intensity (0 - 100%)',
        font: { size: 14, weight: 'bold' },
        standoff: 12
      }
    },
    legend: {
      orientation: 'h',
      xanchor: 'center',
      x: 0.5,
      y: -0.22,
      bgcolor: 'rgba(255, 255, 255, 0.9)',
      bordercolor: '#dad5c3',
      borderwidth: 1
    },
    shapes: shapes,
    annotations: annotations
  };

  const config = {
    responsive: true,
    displayModeBar: false // Clean display, hides utility bars
  };

  // Render using CDN Plotly.js library
  Plotly.newPlot(chartElement, [traceResponsibility, traceMedia, traceJournaling], layout, config);
  
  // Custom helper to force chart resize on wrapper adjustments
  window.addEventListener('resize', () => {
    Plotly.Plots.resize(chartElement);
  });
}

/* =========================================================================
 * 4. Polaroid Collage Hover Effect Tweaks
 * ========================================================================= */
function initPolaroidCollage() {
  const cards = document.querySelectorAll('.polaroid-card');
  let maxZIndex = 5;

  cards.forEach(card => {
    // Generate a subtle random default rotation offset for the collage feel
    const randomRot = (Math.random() * 12 - 6).toFixed(1);
    card.style.transform = `rotate(${randomRot}deg)`;

    card.addEventListener('mouseenter', () => {
      maxZIndex++;
      card.style.zIndex = maxZIndex;
    });
  });
}
