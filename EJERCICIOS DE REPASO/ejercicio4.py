print("Bienvenido")
def triangulo(base,altura):
    area_triangulo = (base * altura)
    return area_triangulo

B =float(input("ingrese la Base del triagulo: "))
H=float(input("ingrese la altura del triangulo"))

area = triangulo(B,H)
print("EL AREA ES",area)