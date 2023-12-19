listaproducto=[]
listaprecios=[]
gaastostotales= 0
continuar=1
while continuar==1:
    salario=float(input("ingrese su salario"))
    continuar=int(input("elige una opcion (1)cambiar salario (2)continuar (0)finalizar"))
    if continuar==2:
        while continuar==2:
            producto=input("ingrese el producto")
            gasto=float(input(f"ingrese el valor del {producto} "))
            listaproducto.append(producto)
            listaprecios.append(gasto)

           
            gaastostotales= sum(listaprecios)
            salario_actual=salario - gaastostotales
            continuar=int(input("elige una opcion (1)contiunar (2)agregar otro gasto (0) finalizar "))
            if continuar == 1:
                for i in range(len(listaprecios)):
                    print("en total de gastaste",gaastostotales,"en los siguientes productos ",listaproducto,)
                    print(f"{listaproducto[i]}---------{listaprecios[i]}")
                print(f"tu salario es: {salario_actual} ")


