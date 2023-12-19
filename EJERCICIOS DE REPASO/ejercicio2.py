print("Bienvenido ")
edad1= int(input("ingrese la edad del primer compañero: ") )
edad2=int(input("ingrese la edad del segundo "))
edad3=int(input("ingrese la edad del tercero"))
maximo= max(edad1,edad2,edad3)
menor= min(edad1,edad2,edad3)
valor_medio =(edad1 +edad2 +edad3)-maximo -menor

print(f"el mayor tiene {maximo}")
print(f"el menor tiene {menor}")
print(f"el numero medio es {valor_medio}")