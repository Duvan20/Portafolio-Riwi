

meses = {1:"enero tiene 31 dias",2:"febrero tiene 28 dias ",3:""}

num= int(input("Dame el numero del mes "))

for mes in meses:
    if mes == num:
     print(meses[mes])
