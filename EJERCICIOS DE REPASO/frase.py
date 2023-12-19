def letras_vocales(frase):
    vocales = "aeiouAEIOU"
    return [c for c in  frase if c in vocales]

texto =input("ingrese una frase")
letras_vocales(texto)