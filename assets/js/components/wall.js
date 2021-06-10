// Obstacles
const wallsInfos = [
    {width: 650, height: 30, left: 15, top:20},
    {width: 650, height: 30, left: 15, top:650},
    {width: 30, height: 300, left: 15, top:20},
    {width: 30, height: 250, left: 15, top:430},
    {width: 30, height: 300, left: 650, top:20},
    {width: 30, height: 250, left: 650, top:430},
    {width: 70, height: 180, left: 130, top: 260},
    {width: 70, height: 180, left: 480, top: 260},
    {width: 100, height: 70, left: 120, top: 520},
    {width: 100, height: 70, left: 460, top: 520},
    {width: 100, height: 20, left: 290, top: 570},
    {width: 100, height: 70, left: 120, top: 110},
    {width: 100, height: 70, left: 460, top: 110},
    {width: 100, height: 20, left: 290, top: 110},
    {width: 10, height: 178, left: 270, top: 260},
    {width: 10, height: 178, left: 400, top: 260},
];

// Create walls
const walls = wallsInfos.map((wall, i) => {
    const w = document.createElement('div');
    w.setAttribute('id', `wall-${i}`);
    w.style.width = `${wall.width}px`;
    w.style.height = `${wall.height}px`;
    w.style.border = '#3F51B5 7px double';
    w.style.boxSizing = 'border-box';
    w.style.borderRadius = '2px';
    w.style.backgroundColor = 'black';
    w.style.position = 'absolute';
    w.style.top = `${wall.top}px`;
    w.style.left = `${wall.left}px`;
    return w;
});

export {walls,wallsInfos};