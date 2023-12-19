listaalimentos = []
precioalimentos = []

listatrasporte = []
preciotrasporte = []

listavivienda = []
preciovivienda = []

listaentretenieminto = []
precioentretenimenito = []

listaotros = []
preciootros = []
continuar = 1
print("Bienvendio a tu programa de salarios")
while continuar ==1:
    salario =int(input("ingrese su salario "))
    while continuar ==1:
        print("elige una opcion")
        categoria=int(input("(2)alimento (3)trasporte (4)vivienda (5)entretenimieto (6)otros"))
        if categoria == 2:
            alimento= input("ingrese el alimento: ")
            precioali=int( input("ingrese el valor: "))
            listaalimentos.append(alimento)
            precioalimentos.append(precioali)
        elif categoria==3:
            trasporte =input("en que medio de trasporte fue: ")
            preciotras= int(input("ingrese el precio"))
            listatrasporte.append(trasporte)
            preciotrasporte.append(preciotras)
        elif categoria ==4:
            vivienda =input("ingrese en que fue: ")
            preciovivi=int(input("ingrese el precio: "))
            listavivienda.append(vivienda)
            preciovivienda.append(preciovivi)
        elif categoria ==5:
            entretenimeinto = input("en que fue: ")
            precioentre=int(input("ingrese el valor"))
            listaentretenieminto.append(entretenimeinto)
            precioentretenimenito.append(precioentre)
        elif categoria ==6:
            otros=input("ingrese en que fue: ")
            preciootro=int(input("ingrese el valor: "))
            listaotros.append(otros)
            preciootros.append(preciootro)

        continuar=int(input("deseas agregar algo mas? (1)-si (0)-no"))
totaalimetos =sum(precioalimentos)
totaltrasporte= sum(preciotrasporte)
totalvivienda=sum(preciovivienda)
totalentretenimiento = sum(precioentretenimenito)
totalotros =sum(preciootros)
totalgastos= totaalimetos + totaltrasporte + totalvivienda +totalentretenimiento
salarioactual =salario -(totaalimetos +totaltrasporte + totalvivienda + totalentretenimiento + totalotros)

print(f"PRODUCTOS: {listaalimentos}")
print(f"VALOR{precioalimentos}")
print(f"TOTAL: {totaalimetos}")

print(f"TRASPORTE: {listatrasporte}")
print(f"VALOR: {preciotrasporte}")
print(f"TOTAL: {totaltrasporte}")

print(f"VIVIENDA: {listavivienda}")
print(f"VALOR: {preciovivienda}")
print(f"TOTAL: {totalvivienda}")

print(f"ENTRETENIMEINTO: {listaentretenieminto}")
print(f"VALOR: {precioentretenimenito}")
print(f"TOTAL: {totalentretenimiento}")

print(f"OTROS{listaotros}")
print(f"VALOR:{preciootro}")
print(f"TOTAL: {totalotros}")

print(f"TOTAL GASTOS: {totalgastos}")
print(f"SALARIO ACTUAL: {salarioactual}")
if 0>salarioactual:
    print("Estas gastando mas de lo que ganas")


  #ponerle for a las listas   