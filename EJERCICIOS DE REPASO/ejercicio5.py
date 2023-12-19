print ("bienvenido") 
def rectangulo(largo,ancho):
    area_rectangulo= largo * ancho
    return area_rectangulo

larg=float(input("ingrese el largo del rectangulo"))
anch=float(input("ingrese el ancho del rectangulo"))

area = rectangulo(larg,anch)
print("el area es",area)