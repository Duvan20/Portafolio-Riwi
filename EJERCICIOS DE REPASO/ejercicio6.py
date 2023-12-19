print("Bienvenido")
def circulo(radio):
    pi = 3.1416
    area_circulo= pi*(radio**2)
    return area_circulo

r=float(input("ingrese el radio del circulo: "))

area = circulo(r)
print("el area del ciruculo es ",area)