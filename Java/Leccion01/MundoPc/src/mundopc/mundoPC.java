package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden();//Inicializamos el arreglo vacio
        Orden orden2 = new Orden();//Una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadoraVarias = new Computadora("Computadora de diferentees marcas", monitorHP, tecladoGamer, ratonGamer);
        orden2.agregarComputadora(computadoraVarias);
        
        Computadora comp3 = new Computadora("Computadora 3", new Monitor("Samsung", 27), new Teclado("USB", "Genius"), new Raton("USB", "Logitech"));
        Computadora comp4 = new Computadora("Computadora 4", new Monitor("LG", 24), new Teclado("Bluetooth", "Logitech"), new Raton("Bluetooth", "Genius"));
        Computadora comp5 = new Computadora("Computadora 5", new Monitor("Acer", 22), new Teclado("USB", "Acer"), new Raton("USB", "Acer"));
        Computadora comp6 = new Computadora("Computadora 6", new Monitor("Dell", 19), new Teclado("USB", "Dell"), new Raton("USB", "Dell"));
        Computadora comp7 = new Computadora("Computadora 7", new Monitor("Lenovo", 21), new Teclado("Bluetooth", "Lenovo"), new Raton("Bluetooth", "Lenovo"));
        Computadora comp8 = new Computadora("Computadora 8", new Monitor("Philips", 20), new Teclado("Bluetooth", "Philips"), new Raton("Bluetooth", "Philips"));
        Computadora comp9 = new Computadora("Computadora 9", new Monitor("Sony", 25), new Teclado("USB", "Sony"), new Raton("USB", "Sony"));
        Computadora comp10 = new Computadora("Computadora 10", new Monitor("ViewSonic", 23), new Teclado("USB", "ViewSonic"), new Raton("USB", "ViewSonic"));

        orden1.agregarComputadora(comp3);
        orden1.agregarComputadora(comp4);
        orden1.agregarComputadora(comp5);
        orden1.agregarComputadora(comp6);
        orden1.agregarComputadora(comp7);
        orden1.agregarComputadora(comp8);
        orden1.agregarComputadora(comp9);
        orden1.agregarComputadora(comp10);

        orden1.mostrarOrden();
        orden2.mostrarOrden();
    }
}
