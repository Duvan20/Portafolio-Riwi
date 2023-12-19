print("bienvenido a su programa de supermercado")
import datetime
hora = datetime.datetime.now()

totalfactura= 0
listaproducto =[]
listaprecio =[]
listacantidad =[]
continuar = 1
while continuar == 1:
    nombre=input("ingrese su nombre: ")
    direccion=input("ingrese su direccion: ")
    telefono= input("ingrese su numero de telefono: ") 
    continuar=int(input("elige una opcion (0)finalizar (1)editar (2)continuar " ))
    if continuar ==2:
        while continuar ==2:
            producto=input("ingrese el producto:  ")
            precio=int(input("ingrese el precio:  "))
            cantidad=int(input("ingrese la cantidad"))
            listaproducto.append(producto)
            listaprecio.append(precio)
            listacantidad.append(cantidad)


            total_producto= cantidad*precio
            totalfactura +=total_producto

            continuar=int(input("elige una opcion: (2)agregar algo mas (3)mostar factura (0)finalizar programa "))

            if continuar==3:
                print("PRODUCTO--CANTIDAD--PRECIO")
                print(F"NOMBRE: {nombre}-----TELEFONO: {telefono}-----DIRECCION:{direccion}")
                print(f"{hora}")
                for i in range(len(listacantidad)):
                    print(f"{listaproducto[i]}--{listacantidad[i]}--{listaprecio[i]}")
                print(F"TOTAL:{totalfactura}")
                print("¿Deseas hacer otra factura? (1)SI (0)NO")
    continuar=int(input("elige una opcion: "))

            



                
           
                


