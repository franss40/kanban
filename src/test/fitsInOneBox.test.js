import { describe, it, expect } from "vitest";

const fitsInOneBox = (boxes) => {
    let lSet = new Set()
    let wSet = new Set()
    let hSet = new Set()

    let mayorBox = null
    let minorBox = null

    if (boxes.length < 2) { return false }

    for (const box of boxes) {      
      if (lSet.has(box.l) || wSet.has(box.w) || hSet.has(box.h)) {
        return false;
      } else {
        lSet.add(box.l)
        wSet.add(box.w)
        hSet.add(box.h)
      }

      if (!mayorBox) {  mayorBox = box; continue }
      if (!minorBox) { 
        if (isMayor(box, mayorBox) === 1) {
            minorBox = mayorBox
            mayorBox = box
            continue
        } 
        if (isMayor(box, mayorBox) === -1) {
          console.log();
          minorBox = box
          continue
        }
        if (isMayor(box, mayorBox) === 0) {
          return false
        }
      }

      if (isMayor(box, mayorBox) === 0 || isMayor(box, minorBox) === 0) { return false }

      if (isMayor(mayorBox, box) === 1) { mayorBox = box; continue }
      if (isMayor(minorBox, box) === 1) { minorBox = box; continue }
    }
    return true
}

function isMayor(box1, box2) {
    if (box1.l < box2.l && box1.w < box2.w && box1.h < box2.h) {
        return -1
    }
    if (box1.l > box2.l && box1.w > box2.w && box1.h > box2.h) {
      return 1;
    }
    return 0
}

describe('fitsInOneBox', () => {
    it('should return false if alguna unidad de medida está duplicada', () => {
        expect(
          fitsInOneBox([
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 1, h: 2 },
          ])
        ).toBe(false);
    })

    const intro = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 4, h: 5 },
      { l: 2, w: 2, h: 2 },
    ];

    it('should return true if the boxes in', () => {
        expect(fitsInOneBox(intro)).toBe(true)
    })


})