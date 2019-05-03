export const shapes = (originX, originY) => {
    let tColor = "#F00"; 
    let lColor = "#ff0"; 
    let jColor = "#0f0"; 
    let oColor = "#F0f";  
    let iColor = "#fff"; 
    let sColor = "#00f"; 
    let zColor = "#0ff";

    let tBlocks = {
      0: [{ color: tColor, x: originX, y: originY }, { color: tColor, x: originX - 1, y: originY }, { color: tColor, x: originX + 1, y: originY }, { color: tColor, x: originX, y: originY + 1 }],
      1: [{ color: tColor, x: originX, y: originY }, { color: tColor, x: originX, y: originY - 1 }, { color: tColor, x: originX + 1, y: originY }, { color: tColor, x: originX, y: originY + 1 }],
      2: [{ color: tColor, x: originX, y: originY }, { color: tColor, x: originX - 1, y: originY }, { color: tColor, x: originX + 1, y: originY }, { color: tColor, x: originX, y: originY - 1 }],
      3: [{ color: tColor, x: originX, y: originY }, { color: tColor, x: originX - 1, y: originY }, { color: tColor, x: originX, y: originY - 1 }, { color: tColor, x: originX, y: originY + 1 }]
    }

    let lBlocks = {
      0: [{ color: lColor, x: originX, y: originY }, { color: lColor, x: originX + 1, y: originY }, { color: lColor, x: originX - 1, y: originY }, { color: lColor, x: originX - 1, y: originY + 1 }],
      1: [{ color: lColor, x: originX, y: originY }, { color: lColor, x: originX, y: originY - 1 }, { color: lColor, x: originX, y: originY + 1 }, { color: lColor, x: originX + 1, y: originY + 1 }],
      2: [{ color: lColor, x: originX, y: originY }, { color: lColor, x: originX + 1, y: originY }, { color: lColor, x: originX - 1, y: originY }, { color: lColor, x: originX + 1, y: originY - 1 }],
      3: [{ color: lColor, x: originX, y: originY }, { color: lColor, x: originX, y: originY + 1 }, { color: lColor, x: originX, y: originY - 1 }, { color: lColor, x: originX - 1, y: originY - 1 }],
    }

    let jBlocks = {
      0: [{ color: jColor, x: originX, y: originY }, { color: jColor, x: originX - 1, y: originY }, { color: jColor, x: originX + 1, y: originY }, { color: jColor, x: originX + 1, y: originY + 1 }],
      1: [{ color: jColor, x: originX, y: originY }, { color: jColor, x: originX, y: originY - 1 }, { color: jColor, x: originX + 1, y: originY - 1 }, { color: jColor, x: originX, y: originY + 1 }],
      2: [{ color: jColor, x: originX, y: originY }, { color: jColor, x: originX - 1, y: originY }, { color: jColor, x: originX - 1, y: originY - 1 }, { color: jColor, x: originX + 1, y: originY }],
      3: [{ color: jColor, x: originX, y: originY }, { color: jColor, x: originX, y: originY - 1 }, { color: jColor, x: originX, y: originY + 1 }, { color: jColor, x: originX - 1, y: originY + 1 }]
    }


    let oBlocks = {
      0: [{ color: oColor, x: originX, y: originY }, { color: oColor, x: originX + 1, y: originY }, { color: oColor, x: originX, y: originY + 1 }, { color: oColor, x: originX + 1, y: originY + 1 }],
      1: [{ color: oColor, x: originX, y: originY }, { color: oColor, x: originX + 1, y: originY }, { color: oColor, x: originX, y: originY + 1 }, { color: oColor, x: originX + 1, y: originY + 1 }],
      2: [{ color: oColor, x: originX, y: originY }, { color: oColor, x: originX + 1, y: originY }, { color: oColor, x: originX, y: originY + 1 }, { color: oColor, x: originX + 1, y: originY + 1 }],
      3: [{ color: oColor, x: originX, y: originY }, { color: oColor, x: originX + 1, y: originY }, { color: oColor, x: originX, y: originY + 1 }, { color: oColor, x: originX + 1, y: originY + 1 }]
    }


    let iBlocks = {
      0: [{ color: iColor, x: originX, y: originY }, { color: iColor, x: originX, y: originY - 1 }, { color: iColor, x: originX, y: originY + 1 }, { color: iColor, x: originX, y: originY + 2 }],
      1: [{ color: iColor, x: originX, y: originY }, { color: iColor, x: originX - 1, y: originY }, { color: iColor, x: originX + 1, y: originY }, { color: iColor, x: originX + 2, y: originY }],
      2: [{ color: iColor, x: originX, y: originY }, { color: iColor, x: originX, y: originY - 1 }, { color: iColor, x: originX, y: originY + 1 }, { color: iColor, x: originX, y: originY + 2 }],
      3: [{ color: iColor, x: originX, y: originY }, { color: iColor, x: originX - 1, y: originY }, { color: iColor, x: originX + 1, y: originY }, { color: iColor, x: originX + 2, y: originY }]
    }


    let sBlocks = {
      0: [{ color: sColor, x: originX, y: originY }, { color: sColor, x: originX + 1, y: originY }, { color: sColor, x: originX, y: originY + 1 }, { color: sColor, x: originX - 1, y: originY + 1 }],
      1: [{ color: sColor, x: originX, y: originY }, { color: sColor, x: originX, y: originY - 1 }, { color: sColor, x: originX + 1, y: originY }, { color: sColor, x: originX + 1, y: originY + 1 }],
      2: [{ color: sColor, x: originX, y: originY }, { color: sColor, x: originX + 1, y: originY }, { color: sColor, x: originX, y: originY + 1 }, { color: sColor, x: originX - 1, y: originY + 1 }],
      3: [{ color: sColor, x: originX, y: originY }, { color: sColor, x: originX, y: originY - 1 }, { color: sColor, x: originX + 1, y: originY }, { color: sColor, x: originX + 1, y: originY + 1 }]
    }


    let zBlocks = {
      0: [{ color: zColor, x: originX, y: originY }, { color: zColor, x: originX - 1, y: originY }, { color: zColor, x: originX, y: originY + 1 }, { color: zColor, x: originX + 1, y: originY + 1 }],
      1: [{ color: zColor, x: originX, y: originY }, { color: zColor, x: originX + 1, y: originY }, { color: zColor, x: originX + 1, y: originY - 1 }, { color: zColor, x: originX, y: originY + 1 }],
      2: [{ color: zColor, x: originX, y: originY }, { color: zColor, x: originX - 1, y: originY }, { color: zColor, x: originX, y: originY + 1 }, { color: zColor, x: originX + 1, y: originY + 1 }],
      3: [{ color: zColor, x: originX, y: originY }, { color: zColor, x: originX + 1, y: originY }, { color: zColor, x: originX + 1, y: originY - 1 }, { color: zColor, x: originX, y: originY + 1 }]
    }

    let shapes = { 0: tBlocks, 1: lBlocks, 2: jBlocks, 3: oBlocks, 4: iBlocks, 5: sBlocks, 6: zBlocks }
    return shapes;
  }
