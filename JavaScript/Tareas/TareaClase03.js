class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
      this._tipoEntrada = tipoEntrada;
      this._marca = marca;
    }
  
    get tipoEntrada() {
      return this._tipoEntrada;
    }
  
    set tipoEntrada(value) {
      this._tipoEntrada = value;
    }
  
    get marca() {
      return this._marca;
    }
  
    set marca(value) {
      this._marca = value;
    }
  
    toString() {
      return `DispositivoEntrada: [Tipo: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
  }
  
  class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idRaton = ++Raton.contadorRatones;
    }
  
    toString() {
      return `Raton [ID: ${this._idRaton}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }
  
  class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idTeclado = ++Teclado.contadorTeclados;
    }
  
    toString() {
      return `Teclado [ID: ${this._idTeclado}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }
  
  class Monitor {
    static contadorMonitores = 0;
  
    constructor(marca, tamaño) {
      this._idMonitor = ++Monitor.contadorMonitores;
      this._marca = marca;
      this._tamaño = tamaño;
    }
  
    get marca() {
      return this._marca;
    }
  
    set marca(value) {
      this._marca = value;
    }
  
    get tamaño() {
      return this._tamaño;
    }
  
    set tamaño(value) {
      this._tamaño = value;
    }
  
    toString() {
      return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
  }
  
  class Computadora {
    static contadorComputadoras = 0;
  
    constructor(nombre, monitor, teclado, raton) {
      this._idComputadora = ++Computadora.contadorComputadoras;
      this._nombre = nombre;
      this._monitor = monitor;
      this._teclado = teclado;
      this._raton = raton;
    }
  
    toString() {
      return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]\n  ${this._monitor.toString()}\n  ${this._teclado.toString()}\n  ${this._raton.toString()}`;
    }
  }
  
  class Orden {
    static contadorOrdenes = 0;
    static MAX_PRODUCTOS = 5;
  
    constructor() {
      this._idOrden = ++Orden.contadorOrdenes;
      this._computadoras = [];
    }
  
    agregarComputadora(computadora) {
      if (this._computadoras.length < Orden.MAX_PRODUCTOS) {
        this._computadoras.push(computadora);
      } else {
        console.log("No se pueden agregar más computadoras a la orden.");
      }
    }
  
    mostrarOrden() {
      console.log(`Orden [ID: ${this._idOrden}]`);
      this._computadoras.forEach(c => console.log(c.toString()));
    }
  }
  
  // Método que aplica POLIMORFISMO
  function mostrarDispositivo(dispositivo) {
    console.log(dispositivo.toString());
  }
  
  // Creación de objetos
  const raton1 = new Raton("USB", "Logitech");
  const teclado1 = new Teclado("USB", "Redragon");
  const monitor1 = new Monitor("LG", '27"');
  const compu1 = new Computadora("Oficina", monitor1, teclado1, raton1);
  
  // Aplicación de polimorfismo
  console.log("Mostrando dispositivos con polimorfismo");
  mostrarDispositivo(raton1);
  mostrarDispositivo(teclado1);
  mostrarDispositivo(monitor1);
  mostrarDispositivo(compu1);
  
  // Orden con computadoras
  const orden1 = new Orden();
  orden1.agregarComputadora(compu1);
  
  // Mostrar orden
  console.log("Mostrando orden completa");
  orden1.mostrarOrden();