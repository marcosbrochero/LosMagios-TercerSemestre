from pelicula import Pelicula
from catalogo_peliculas import CatalogoPeliculas

def mostrar_menu():
    print("\nCatálogo de Películas")
    print("1) Agregar película")
    print("2) Listar películas")
    print("3) Eliminar archivo de películas")
    print("4) Salir")

while True:
    mostrar_menu()
    opcion = input("Selecciona una opción: ")

    if opcion == '1':
        nombre = input("Nombre de la película: ")
        pelicula = Pelicula(nombre)
        CatalogoPeliculas.agregar_pelicula(pelicula)
    elif opcion == '2':
        CatalogoPeliculas.listar_peliculas()
    elif opcion == '3':
        CatalogoPeliculas.eliminar()
    elif opcion == '4':
        print("Saliendo del programa...")
        break
    else:
        print("Opción inválida, intentá de nuevo.")