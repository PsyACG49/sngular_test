import { expect } from "vitest";
import {
  serieFibonaci,
  serieTriangular,
  seriePrimo,
  serieSpecial,
} from "./serie";

describe("Testing with the series classes", () => {
  test("Testing Fibonaci serie", () => {
    const valuesFibonaci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    const serie = new serieFibonaci();
    for (let i = 1; i <= valuesFibonaci.length; i++) {
      expect(serie.searchNesimo(i)).toBe(valuesFibonaci[i - 1]);
    }
  });

  test("Testing Triangular serie", () => {
    const valuesTriangular = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
    const serie = new serieTriangular();
    for (let i = 1; i <= valuesTriangular.length; i++) {
      expect(serie.searchNesimo(i)).toBe(valuesTriangular[i - 1]);
    }
  });

  test("Testing Primos serie", () => {
    const valuesPrimo = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    const serie = new seriePrimo();
    for (let i = 1; i <= valuesPrimo.length; i++) {
      expect(serie.searchNesimo(i)).toBe(valuesPrimo[i - 1]);
    }
  });

  test("Testing Special serie, error with 1", () => {
    const nesimo = 1;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBeNaN();
  });

  test("Testing Special serie, error with 2", () => {
    const nesimo = 2;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBeNaN();
  });

  test("Testing Special serie evaluate with 3", () => {
    const nesimo = 3;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(1.71);
  });

  test("Testing Special serie evaluate with 4", () => {
    const nesimo = 4;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(3.86);
  });

  test("Testing Special serie evaluate with 5", () => {
    const nesimo = 5;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(8.57);
  });

  test("Testing Special serie evaluate with 6", () => {
    const nesimo = 6;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(12);
  });

  test("Testing Special serie evaluate with 7", () => {
    const nesimo = 7;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(17.68);
  });

  test("Testing Special serie evaluate with 8", () => {
    const nesimo = 8;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(18);
  });

  test("Testing Special serie evaluate with 9", () => {
    const nesimo = 9;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(19.43);
  });
  test("Testing Special serie evaluate with 10", () => {
    const nesimo = 10;
    const serie = new serieSpecial();
    expect(serie.searchNesimo(nesimo)).toBe(17.24);
  });
});
