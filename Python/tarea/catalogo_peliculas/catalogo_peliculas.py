import os

class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        if not os.path.exists(CatalogoPeliculas.ruta_archivo):
            print("No hay películas registradas.")
            return
        with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
            print("Películas:")
            for linea in archivo:
                print(f"- {linea.strip()}")

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado.")
        else:
            print("El archivo no existe.")