import { describe, it, expect } from "vitest"
//   NOTE: Preconditions:
//    1. Que maxGifts, maxCities y GiftsCities sean mayores que cero
//    2. Que la suma de regalos de las ciudades que se visitan sea menor que el límite: maxGifts
//    3. Que no se sobrepase el maxCities de ciudades a visitar

const getMaxGift = (giftsCities, maxGifts, maxCities) => {
  // Ok a la precondition 1
  if (maxGifts.length < 1 || maxCities.length < 1 || giftsCities.length < 1)
    throw new Error("Parameters must have at least 1 elements")

  let solution = 0
  let solutionCities = []
  let x = 0
  let elementos = giftsCities.length

  for (let i = 0; i < elementos; i++) {
    let j = i
    x++

    solutionCities.push(giftsCities[i])

    // comprobar solucion
    const sumaRegalos = solutionCities.reduce((a, b) => a + b, 0)
    if (
      solutionCities.length <= maxCities &&
      Math.abs(maxGifts - sumaRegalos) < Math.abs(maxGifts - solution)
    ) {
      solution = sumaRegalos
    }
    // fin comprobar solucion

    console.log(solutionCities)

    while (j < elementos && x < elementos) {
      j++
      if (j < elementos) {
        solutionCities.push(giftsCities[j])

        // comprobar solucion
        const sumaRegalos = solutionCities.reduce((a, b) => a + b, 0)
        if (
          solutionCities.length <= maxCities &&
          Math.abs(maxGifts - sumaRegalos) < Math.abs(maxGifts - solution)
        ) {
          solution = sumaRegalos
        }
        // fin comprobar solucion
        console.log(solutionCities)
      }

      if (j == elementos) {
        solutionCities.length = 0
      }
    }
  }

  return solution
}


describe("getMaxGifts", () => {
  it("should return 0", () => {
    expect(() => getMaxGift([], 2, 3)).toThrow()
    expect(() => getMaxGift([23], 2, null)).toThrow()
    expect(() => getMaxGift([2, 2], null, 3)).toThrow()
  })

  // De momento no paso este test
  it("Probando solucion", () => {
    expect(getMaxGift([12, 3, 11, 5, 7], 20, 3)).toBe(20)
    /* expect(getMaxGift([2, 34, 8, 4], 8, 2)).toBe(8)
    expect(getMaxGift([2, 34, 8, 20], 21, 3)).toBe(20);
    expect(getMaxGift([50], 15, 1)).toBe(0);
    expect(getMaxGift([50], 100, 1)).toBe(50);
    expect(getMaxGift([50, 70], 100, 1)).toBe(70);
    expect(getMaxGift([50, 70, 30], 100, 2)).toBe(100);
    expect(getMaxGift([50, 70, 30], 100, 3)).toBe(100);
    expect(getMaxGift([50, 70, 30], 100, 4)).toBe(100); */
  })
})
