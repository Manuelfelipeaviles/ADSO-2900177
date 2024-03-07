TALLER
1) Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
Pseudocodigo
INICIO

  Dfinir p1, p2, p3, por1, por2, por3, totl Como Real

  p1 = 0.0
  p2 = 0.0
  p3 = 0.0
  por1 = 0.0
  por2 = 0.0
  por3 = 0.0
  totl = 0.0

  Escribir "Por favor ingrese la inversión de la persona 1"
  Leer p1
  Escribir "Por favor ingrese la inversión de la persona 1"
  Leer p2
  Escribir "Por favor ingrese la inversión de la persona 1"
  Leer p3

  totl = p1+p2+p3
  por1 = (p1/totl)*100
  por2 = (p2/totl)*100
  por3 = (p3/totl)*100

  Escribir "La inversión total fue de ",totl,"$"
  Escribir " El porcentaje de inversión de la persona 1 es de ",por1,"%"
  Escribir " El porcentaje de inversión de la persona 2 es de ",por2,"%"
  Escribir " El porcentaje de inversión de la persona 3 es de ",por3,"%"

FIN
Python
p1 = float(input("Por favor ingrese la inversión de la persona 1: "))
p2 = float(input("Por favor ingrese la inversión de la persona 2: "))
p3 = float(input("Por favor ingrese la inversión de la persona 3: "))

totl = p1+p2+p3
por1 = (p1/totl)*100
por2 = (p2/totl)*100
por3 = (p3/totl)*100

print("La inversión total fue de ",totl,"$")
print("El porcentaje de inversión de la persona 1 es de ",por1,"%")
print("El porcentaje de inversión de la persona 2 es de ",por2,"%")
print("El porcentaje de inversión de la persona 3 es de ",por3,"%")
2) Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:
- La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

- La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

- La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.
Pseudocodigo
INICIO

  Definir exm, tm1, tm2, tm3, protm, prom, exf, tf1, tf2, protf, prof, exq, tq1, tq2, tq3, protq, proq, pro Como Real

  exm = 0.0
  tm1 = 0.0
  tm2 = 0.0
  tm3 = 0.0
  protm = 0.0
  prom = 0.0
  exf = 0.0
  tf1 = 0.0
  tf2 = 0.0
  protf = 0.0
  prof = 0.0
  exq = 0.0
  tq1 = 0.0
  tq2 = 0.0
  tq3 = 0.0
  protq = 0.0
  proq = 0.0
  pro = 0.0

  Escribir "Ingrese el puntaje obtenido en el examen de matemáticas"
  Leer exm
  Escribir "Ingrese el puntaje obtenido en la tarea 1 de matemáticas"
  Leer tm1
  Escribir "Ingrese el puntaje obtenido en la tarea 2 de matemáticas"
  Leer tm2
  Escribir "Ingrese el puntaje obtenido en la tarea 3 de matemáticas"
  Leer tm3
  Escribir "Ingrese el puntaje obtenido en el examen de física"
  Leer exf
  Escribir "Ingrese el puntaje obtenido en la tarea 1 de física"
  Leer tf1
  Escribir "Ingrese el puntaje obtenido en la tarea 2 de física"
  Leer tf2
  Escribir "Ingrese el puntaje obtenido en el examen de químicia"
  Leer exq
  Escribir "Ingrese el puntaje obtenido en la tarea 1 de química"
  Leer tq1
  Escribir "Ingrese el puntaje obtenido en la tarea 2 de química"
  Leer tq2
  Escribir "Ingrese el puntaje obtenido en la tarea 3 de química"
  Leer tq3

  protm = (tm1+tm2+tm3)/3
  prom = (exm*0.9)+(protm*0.1)
  protf = (tf1+tf2)/2
  prof = (exf*0.8)+(protf*0.2)
  protq = (tq1+tq2+tq3)/3
  proq = (exq*0.85)+(protq*0.15)
  pro = (prom+prof+proq)/3

  Escribir "El promedio de matemáticas es de ",prom
  Escribir "El promedio de física es de ",prof
  Escribir "El promedio de química es de ",proq
  Escribir "El promedio total de las 3 materias es de ",pro

FIN
Python
exm = float(input("Ingrese el puntaje obtenido en el examen de matemáticas: "))
tm1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de matemáticas: "))
tm2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de matemáticas: "))
tm3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de matemáticas: "))
exf = float(input("Ingrese el puntaje obtenido en el examen de física: "))
tf1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de física: "))
tf2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de física: "))
exq = float(input("Ingrese el puntaje obtenido en el examen de Química: "))
tq1 = float(input("Ingrese el puntaje obtenido en la tarea 1 de Química: "))
tq2 = float(input("Ingrese el puntaje obtenido en la tarea 2 de Química: "))
tq3 = float(input("Ingrese el puntaje obtenido en la tarea 3 de Química: "))

protm = (tm1+tm2+tm3)/3
prom = (exm*0.9)+(protm*0.1)
protf = (tf1+tf2)/2
prof = (exf*0.8)+(protf*0.2)
protq = (tq1+tq2+tq3)/3
proq = (exq*0.85)+(protq*0.15)
pro = (prom+prof+proq)/3

print("El promedio de matemáticas es de ",prom)
print("El promedio de física es de ",prof)
print("El promedio de química es de ",proq)
print("El promedio total de las 3 materias es de ",pro)
3) Leer un real e imprimir si el número es positivo o negativo.
Pseudocodigo
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (num<0):
    Escribir "El número digitado es negativo"
  Sino:
    Escribir "El número digitado es positivo"
  Finsi

FIN
Python
num = float(input("Digite el número que desee: "))

if(num<0):
  print("El número digitado es negativo")
else:
  print("El número digitado es positivo")
4) Leer un real e imprimir si el número es mayor a 200 o no.
Pseudocodigo
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (num>200):
    Escribir "El número digitado es mayor que 200"
  Sino:
    Escribir "El número digitado es menor que 200"
  Finsi

FIN
Python
num = float(input("Digite el número que desee: "))

if(num>200):
  print("El número digitado es mayor que 200")
else:
  print("El número digitado es menor que 200")
5) Leer un real e imprimir si el número está en el rango de 50 y 100.
Pseudocodigo
INICIO

  Definir num Como Real

  num = 0.0
  
  Escribir "Digite el número que desee"
  Leer num

  Si (50<num<100):
    Escribir "El número digitado está en el rango de 50 y 100"
  Sino:
    Escribir "El número digitado no está en el rango de 50 y 100"
  Finsi

FIN
Python
num = float(input("Digite el número que desee: "))

if(50<num<100):
  print("El número digitado está en el rango de 50 y 100")
else:
  print("El número digitado no está en el rango de 50 y 100")

