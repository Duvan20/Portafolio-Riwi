usuario = input("ingrese su nombre: ")
cantidad_pc=int(input("ingrese cuantos copmutadores vas a comprar: "))
computador = 1100
if cantidad_pc <5:
    print("felicidades recibiras un 10% de descuento por tu compra")
    descuento10 = computador/100 *10
    valor10=computador- descuento10
    total10=valor10 *cantidad_pc
    print("cada computadora te queda en",valor10,"en total serian",total10)
elif cantidad_pc == 10 or cantidad_pc >10:
    print("felicidades tiene un 40% de desdcuento")
    descuento40= computador/100*40
    valor40 =computador-descuento40
    total10= cantidad_pc*valor40
    print(f"cada computadora te queda en {valor40} en total es{total10}")
elif cantidad_pc>5 or cantidad_pc ==5 or cantidad_pc<10:
    print("tiene 20% de descuento")
    descuento20=computador/100*20
    valor20= computador-descuento20
    total20= cantidad_pc*valor20
    print(f"el valor de cada conmputador es {valor20} y el total es {total20}")