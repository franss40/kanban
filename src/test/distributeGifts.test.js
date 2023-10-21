import { describe, it, expect } from "vitest"

const distributeGifts = (packOfGifts, reindeers) => {
  // El undefined (packofgifts === undefined) sobra, ya que está incluido en el isArray
  if (!Array.isArray(packOfGifts)) throw new Error('el primer parámetro debe ser un array')
  if (!Array.isArray(reindeers)) throw new Error("el segundo parámetro debe ser un array")

  let pesoRegalos = 0
  let pesoRenos = 0

  for (const pack of packOfGifts) {
      if (pack.length === 0 || typeof pack !== 'string') throw new Error('Los regalos no pueden ser nulos')
      pesoRegalos += pack.length
  }
  for (const reindeer of reindeers) {
      if (reindeer.length === 0 || typeof reindeer !== "string") throw new Error("Los renos no pueden ser nulos");
      pesoRenos += reindeer.length
  }

  return Math.trunc(pesoRenos*2/pesoRegalos)
}

describe('Distributegifts', ()=> {
    // Daría igual que fuera cadena vacio o null, pasaría el test
    it("Ningún regalo puede ser nulo", () => {
      expect(() => distributeGifts(["book", '', "ball"], ["dasher", "dancer"])).toThrow();
    });

    it('Todos los regalos tienen que ser cadenas', ()=> {
        expect(() => distributeGifts(["book", 2, "ball"], ["dasher", "dancer"])).toThrow();
    })
    // Ahora con los renos, ni nulos ni cadenas vacias
    it("Ningún reno puede ser nulo", () => {
      expect(() => distributeGifts(["book", "bill", "ball"], ["dasher", ""])).toThrow();
    })

    it("Todos los renos tienen que ser cadenas", () => {
      expect(() => distributeGifts(["book", "bill", "ball"], ["dasher", 6])).toThrow();
    })

    it("Las entradas deben de ser arrays", () => {
      expect(() => distributeGifts(["book", "bill", "ball"], "kk")).toThrow();
      expect(() => distributeGifts('ff', ["dasher", "dancer"])).toThrow();
    })

    it("La salida debe de ser un entero", () => {
      expect(distributeGifts(["book", "bill", "ball"], ["dasher", "dancer"])).toBeTypeOf('number');
    })

    it("Cuántas cajas se pueden entregar?, en este caso sale entero", () => {
      expect(distributeGifts(["book", "bill", "ball"], ["dasher", "dancer"])).toBe(2)
      expect(distributeGifts(["book", "bill", "ball", "raton"], ["dasher", "dancer"])).toBe(1);
    })


})