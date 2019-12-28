const sOpacity = 0.5;
const rect = new mojs.Shape({
  parent:       '#bouncy_circle',
  className:    'mojs-bg', 
  shape:        'rect',
  left:         '50%',
  fill:         'none',
  strokeOpacity: sOpacity,
  radius:       100,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 20: 5 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,
  onComplete (isForward, isYoyo) {
    polygon.play();
  },
});

const polygon = new mojs.Shape({
  parent:       '#bouncy_circle', 
  shape:        'polygon',
  className:    'mojs-bg', 
  points:       5,    
  left:         '50%',
  fill:         'none',
  strokeOpacity: sOpacity,
  radius:       100,
  stroke:       { 'cyan': 'yellow' },
  strokeWidth:  { 20: 5 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,

  onComplete (isForward, isYoyo) {
    circle.play();
  },
});

const circle = new mojs.Shape({
  parent:       '#bouncy_circle',
  className:    'mojs-bg',  
  shape:        'circle',
  left:         '50%',
  fill:         'none',
  strokeOpacity: sOpacity,
  radius:       100,
  stroke:       { 'magenta': 'red' },
  strokeWidth:  { 20: 5 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,

  onComplete (isForward, isYoyo) {
    triangle.play();
  },
});

const triangle = new mojs.Shape({
  parent:       '#bouncy_circle',
  className:    'mojs-bg',  
  shape:        'polygon',
  left:         '50%',
  fill:         'none',
  strokeOpacity: sOpacity,
  radius:       100,
  stroke:       { 'cyan': 'green' },
  strokeWidth:  { 20: 5 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  angle:        { 0: 180 },

  duration:     2000,
  onComplete (isForward, isYoyo) {
    rect.play();
  },
});
rect.play();