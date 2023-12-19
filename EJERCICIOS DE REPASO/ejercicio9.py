print("Bienvenido ")
def paralelograma(base,altura):
    area = base * altura
    return area

B=int(input("ingrese la base: "))
H=int(input("ingrese la altura: "))
area_paralelograma=paralelograma(B,H)
print("El area ",area_paralelograma)