export class serie {
  constructor(n) {
    this.enesimo = n;
  }
}

export class serieTriangular extends serie {
  constructor(n) {
    super(n);
  }

  searchNesimo() {
    let auxN = this.enesimo;
    let resolve = (auxN * (auxN + 1)) / 2;
    return resolve;
  }
}

export class serieFibonaci extends serie {
  constructor(n) {
    super(n);
  }

  searchNesimo() {
    let auxN = this.enesimo;
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
