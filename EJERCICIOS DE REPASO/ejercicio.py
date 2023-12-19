print("Bienvenido")
nombre = input("ingrese su nombre: ")
materia=input("ingrese la materia: ")
nota1=float(input("ingrese su primera nota: "))
nota2=float(input("ingrese su segunda nota: "))
nota3=float(input("ingrese su tercera toda"))
nota4 =float(input("ingrese su cuarta nota: "))

definitiva= (nota1 + nota2 + nota3 + nota4)/4
if definitiva >= 3.0:
    print(f"felicitaciones aprobaste la meteria{materia} con una nota de {definitiva}")
elif definitiva < 3.0:
    print(f"reporbaste la materia {materia}con una nota de {definitiva}")
elif definitiva < 0:
    print("no ingresaste los datos bien")
