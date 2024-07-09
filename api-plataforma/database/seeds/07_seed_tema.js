/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tema').del()
  await knex('tema').insert([
    {//1
      
      titulo: 'Bases de Conjuntos - Teoria de conjuntos',
      descripcion: 'Introducción y conceptos básicos de la Teoría de Conjuntos.',
      informacion: 'Un conjunto es una colección bien definida de objetos, llamados elementos del conjunto. <br>### Por ejemplo, el conjunto de números naturales menores que 10 es {1,2,3,4,5,6,7,8,9}. <br>### La teoría de conjuntos proporciona un marco formal para definir y estudiar las propiedades de los conjuntos, <br>### lo cual es esencial para desarrollar otras áreas de las matemáticas, como el álgebra, el análisis y la geometría.',
      id_temario: 1,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//2
      titulo: 'Operaciones de Conjuntos - Teoria de conjuntos',
      descripcion: 'Operaciones fundamentales como unión, intersección, diferencia y complemento.',
      informacion: 'Las operaciones básicas en teoría de conjuntos incluyen la unión, intersección, diferencia y complemento. <br>### La unión de dos conjuntos combina todos los elementos presentes en cualquiera de los conjuntos. <br>### La intersección devuelve solo los elementos que están presentes en ambos conjuntos. <br>### La diferencia devuelve los elementos presentes en el primer conjunto pero no en el segundo. <br>### Finalmente, el complemento respecto a un conjunto universal devuelve todos los elementos que no están en el conjunto dado.',
      id_temario: 1,
      id_tema_previo: 1,
      fecha_creacion: new Date().toISOString(),
    },
    {//3
      titulo: 'Sumas y Restas - Aritmetica',
      descripcion: 'Bases y ejercicios de las Sumas y Restas',
      informacion: 'En aritmética, la suma y resta son operaciones básicas utilizadas para calcular la combinación o diferencia de cantidades numéricas. <br>### La suma implica la combinación de dos o más números para obtener un total. Por ejemplo,',
      id_temario: 2,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//4
      titulo: 'Multiplicación y División - Aritmetica',
      descripcion: ' Bases y ejercicios de las Multiplicaciones y Divisiones',
      informacion: 'En aritmética, la multiplicación combina números para obtener un producto, como 3×4=12. <br>### La división divide una cantidad en partes iguales, por ejemplo, 12÷3=4. <br>### Estas operaciones son básicas para calcular resultados numéricos y se aplican en diversos contextos prácticos y científicos.',
      id_temario: 2,
      id_tema_previo: 3,
      fecha_creacion: new Date().toISOString(),
    },
    {//5
      titulo: 'Potencias y Raíces - Aritmetica',
      descripcion: ' Bases y ejercicios de las Potencias y Raíces',
      informacion: 'En aritmética, las potencias son resultados de multiplicar un número por sí mismo varias veces, como <br>### las raíces son inversas de las potencias. <br>### Estas operaciones son esenciales para cálculos avanzados en matemáticas y tienen aplicaciones prácticas en ciencia, ingeniería y otras disciplinas.',
      id_temario: 2,
      id_tema_previo: 4,
      fecha_creacion: new Date().toISOString(),
    },
    {//6
      titulo: 'Bases y Ecuaciones - Algebra 1',
      descripcion: ' Bases y ejercicios del Algebra',
      informacion: 'Las ecuaciones en álgebra son expresiones matemáticas que contienen incógnitas y están igualadas a una o más expresiones. <br>### Resolver ecuaciones implica encontrar valores para las incógnitas que satisfagan la igualdad. <br>### Por ejemplo, 2𝑥+3=7 tiene como solución 𝑥=2.',
      id_temario: 3,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//7
      titulo: 'Funciones y Graficas - Algebra 1',
      descripcion: ' Bases de las Funciones matemáticas y cómo graficar estas funciones.',
      informacion: 'En matemáticas, las funciones son reglas que relacionan entradas con salidas únicas, como 𝑓(𝑥)=2𝑥+1. <br>### Las gráficas visualizan funciones en un sistema coordenado, donde x representa entradas y 𝑦 representa salidas. <br>### Estos conceptos son esenciales para modelar y entender relaciones matemáticas en diversas aplicaciones prácticas y teóricas.',
      id_temario: 3,
      id_tema_previo: 6,
      fecha_creacion: new Date().toISOString(),
    },
    {//8
      titulo: 'Sistemas de Ecuaciones - Algebra 1',
      descripcion: ' Conceptos y resolución de sistemas con varias ecuaciones.',
      informacion: 'En álgebra, los sistemas de ecuaciones son conjuntos de dos o más ecuaciones que contienen las mismas variables. <br>### Resolver un sistema de ecuaciones implica encontrar valores para las variables que satisfagan todas las ecuaciones simultáneamente. ',
      id_temario: 3,
      id_tema_previo: 7,
      fecha_creacion: new Date().toISOString(),
    },
    {//9
      titulo: 'Secciones Cónicas - Algebra 1',
      descripcion: '  Conceptos y funcionamiento de secciones cónicas como círculos, elipses, parábolas e hipérbolas.',
      informacion: 'Las secciones cónicas son curvas obtenidas al cortar un cono doble o un plano a través de él. Incluyen círculos, <br>###elipses, parábolas y hipérbolas, que se distinguen por la posición relativa del plano con respecto al  <br>###cono y la dirección del corte. Estas curvas tienen aplicaciones extensas en geometría, física y astronomía para  <br>###modelar órbitas planetarias, trayectorias de proyectiles y más. ',
      id_temario: 3,
      id_tema_previo: 8,
      fecha_creacion: new Date().toISOString(),
    },
    {//10
      titulo: 'Triángulos - Trigonometría',
      descripcion: '  Concepto y solucion de Triangulos Rectangulos y No Rectángulos.',
      informacion: 'En trigonometría, los triángulos son fundamentales para entender las relaciones entre los ángulos y lados. La ley  <br>###de senos y la ley de cosenos son herramientas clave para resolver triángulos.',
      id_temario: 4,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//11
      titulo: 'Funciones Trigonométricas - Trigonometría',
      descripcion: ' Concepto y solución de las Funciones Trigonométricas.',
      informacion: 'En trigonometría, las funciones trigonométricas como el seno, coseno y tangente describen las relaciones entre los  <br>###ángulos y lados de triángulos rectángulos. Las identidades trigonométricas, como la identidad  <br>###fundamental sin^⁡2(𝜃)+cos^⁡2(𝜃)=1, son usadas para simplificar expresiones y resolver problemas en geometría y física.',
      id_temario: 4,
      id_tema_previo: 10,
      fecha_creacion: new Date().toISOString(),
    },
    {//12
      titulo: 'Identidades y Ecuaciones Trigonométricas - Trigonometría',
      descripcion: ' Concepto y solución de las Identidades y uso en las Ecuaciones Trigonométricas.',
      informacion: 'En trigonometría, las identidades trigonométricas son relaciones fundamentales entre las funciones seno, coseno,  <br>###tangente y cotangente. Se utilizan para simplificar expresiones y resolver ecuaciones trigonométricas, <br>###que involucran estas funciones en términos de ángulos.',
      id_temario: 4,
      id_tema_previo: 11,
      fecha_creacion: new Date().toISOString(),
    },
    {//13
      titulo: 'Polinomios - Algebra 2',
      descripcion: 'Bases y ejercicios de Polinomios Algebraicos.',
      informacion: 'Los polinomios son expresiones algebraicas compuestas por términos que involucran variables elevadas a potencias <br>###enteras no negativas. Por ejemplo, 2𝑥^3−3𝑥^2+4𝑥−1 es un polinomio de grado 3. Se utilizan para modelar una  <br>###variedad de fenómenos matemáticos y físicos, y se manipulan mediante operaciones como suma, resta,  <br>###multiplicación y división para resolver ecuaciones y problemas algebraicos.',
      id_temario: 5,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//14
      titulo: 'Exponentes y Logaritmos - Algebra 2',
      descripcion: 'Conceptos y resolución de sistemas con varias ecuaciones.',
      informacion: 'En matemáticas, exponentes y logaritmos son conceptos relacionados. Los exponentes indican el número de veces que  <br>###una base se multiplica por sí misma, como a^n=a×a×…×a, donde 𝑎 es la base y 𝑛 es el exponente. Los logaritmos  <br>###son el inverso de los exponentes y ayudan a encontrar el exponente necesario para obtener un cierto  <br>###resultado, como log⁡𝑎b = c significa que 𝑎^𝑐=𝑏 . Estos conceptos son cruciales para resolver ecuaciones exponenciales y modelar crecimiento y decaimiento en matemáticas aplicadas.',
      id_temario: 5,
      id_tema_previo: 13,
      fecha_creacion: new Date().toISOString(),
    },
    {//15
      titulo: 'Factorización - Algebra 2',
      descripcion: 'Concepto y ejercicios de Factorización de Polinomios.',
      informacion: 'En matemáticas, factorización es el proceso de expresar un número, polinomio o expresión algebraica como un producto de  <br>###factores irreducibles. Por ejemplo, la factorización de 15 es 3*5, y la factorizacion de x^2-4 es  <br>###(x-2)(x+2). Este proceso es fundamental para simplificar y resolver ecuaciones, y para entender las propiedades fundamentales de los números y polinomios.',
      id_temario: 5,
      id_tema_previo: 14,
      fecha_creacion: new Date().toISOString(),
    },
    {//16
      titulo: 'Modelado de Funciones - Algebra 2',
      descripcion: 'Modelado de funciones y su interpretación con dos o más variables.',
      informacion: 'El modelado de funciones matemáticas implica el proceso de seleccionar y ajustar funciones específicas para representar y  <br>###describir datos numéricos o fenómenos matemáticos. Este enfoque permite interpretar y predecir  <br>###comportamientos basados en relaciones matemáticas, facilitando análisis y toma de decisiones en diversas  <br>###disciplinas científicas y aplicadas.',
      id_temario: 5,
      id_tema_previo: 15,
      fecha_creacion: new Date().toISOString(),
    },
    {//17
      titulo: 'Modelado de Funciones - Algebra 2',
      descripcion: 'Modelado de funciones y su interpretación con dos o más variables.',
      informacion: 'El modelado de funciones matemáticas implica el proceso de seleccionar y ajustar funciones específicas para representar y  <br>###describir datos numéricos o fenómenos matemáticos. Este enfoque permite interpretar y predecir  <br>###comportamientos basados en relaciones matemáticas, facilitando análisis y toma de decisiones en diversas  <br>###disciplinas científicas y aplicadas.',
      id_temario: 5,
      id_tema_previo: 15,
      fecha_creacion: new Date().toISOString(),
    },
    {//17
      titulo: 'Números Primos - Teoría de Números',
      descripcion: ' Concepto de números primos, criba de Eratóstenes, propiedades básicas de los números primos.',
      informacion: 'Los números primos son números enteros mayores que 1 que tienen <br>###exactamente dos divisores positivos: 1 y ellos mismos. <br>### Por ejemplo, 2, 3, 5, 7 son números primos. Los números primos son <br>### fundamentales en matemáticas y tienen aplicaciones en criptografía, <br>### teoría de números y otros campos donde la seguridad y la eficiencia <br>### computacional son importantes.',
      id_temario: 6,
      id_tema_previo: null,
      fecha_creacion: new Date().toISOString(),
    },
    {//18
      titulo: 'Divisibilidad y Múltiplos - Teoría de Números',
      descripcion: ' Reglas de divisibilidad, MCD (Máximo Común Divisor), MCM (Mínimo Común Múltiplo).',
      informacion: ' La divisibilidad se refiere a la propiedad por la cual un número <br>###puede dividirse exactamente por otro sin dejar residuo. Los <br>###múltiplos son números que resultan de multiplicar un número por otro entero. Esta área es fundamental para entender conceptos como los <br>###números primos, los números compuestos y el máximo común divisor (MCD), entre otros.',
      id_temario: 6,
      id_tema_previo: 17,
      fecha_creacion: new Date().toISOString(),
    },
    {//18
      titulo: 'Teorema Fundamental de la Aritmética - Teoría de Números',
      descripcion: 'Descomposición de números en factores primos, unicidad de la factorización..',
      informacion: 'El Teorema Fundamental de la Aritmética establece que todo número entero <br>###positivo mayor que 1 puede descomponerse de manera única en un producto de números <br>###primos. Esta descomposición se conoce como la factorización prima de un número. Es uno de los <br>###pilares fundamentales de la teoría de números y tiene aplicaciones importantes en campos como <br>###la criptografía y la informática teórica.',
      id_temario: 6,
      id_tema_previo: 17,
      fecha_creacion: new Date().toISOString(),
    },
  ]);
};
