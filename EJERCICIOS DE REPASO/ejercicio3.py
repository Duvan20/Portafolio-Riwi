print("Bienvenido ")
def cuadrado(lado1,lado2):
    area_cuadrado = lado1*lado2
    return area_cuadrado

lad1=float(input("ingrese un lado del cuadrado"))
lad2= float(input("ingrese el segundo lado del cuadrado"))

area =cuadrado(lad1,lad2)
print("el area es ",area )