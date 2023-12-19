print("Bienvenido")
def trapecio(base1,base2,altura):
    area_trapecio=(base1 +base2)*altura/2
    return area_trapecio

base_1 =int(input("ingrese la base 1 del trapecio: "))
base_2 =int(input("ingrese la base 2 del trapecio: "))
alt =int(input("ingrese la altura del trapecio: "))
area =trapecio(base_1,base_2,alt)
print("el area es",area)