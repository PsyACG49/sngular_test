export class serie {
  constructor() {}
}

export class serieTriangular extends serie {
  constructor() {
    super();
  }

  searchNesimo(value) {
    let auxN = value;
    let resolve = (auxN * (auxN + 1)) / 2;
    return resolve;
  }
}

export class serieFibonaci extends serie {
  constructor() {
    super();
  }

  searchNesimo(valor) {
    let auxN = valor;
    let a = 1;
    let b = 1;
    for (let i = 3; i <= auxN; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

export class seriePrimo extends serie {
  constructor() {
    super();
  }

  primo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return numero !== 1;
  }

  eratosthenes = () => {
    let c = 1000;
    let j = 2;
    let numerosPrimos = [];

    for (; j < c; j++) {
      if (this.primo(j)) {
        numerosPrimos.push(j);
      }
    }
    return numerosPrimos;
  };

  searchNesimo(valor) {
    let arrPrimos = this.eratosthenes();
    return arrPrimos[valor - 1];
  }
}

export class serieSpecial extends serie {
  constructor() {
    super();
  }

  searchNesimo(valor) {
    let fibonaci = new serieFibonaci();
    let triangular = new serieTriangular();
    let primo = new seriePrimo();
    let result =
      (2 *
        primo.searchNesimo(valor - 2) *
        3 *
        triangular.searchNesimo(valor - 2)) /
      (7 * fibonaci.searchNesimo(valor - 1));
    return parseFloat(result.toFixed(2));
  }
}
