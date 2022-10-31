class libro {
    constructor(titulo, autor, año, paginas, precio, coleccion, id, img) {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.paginas = paginas;
      this.precio = precio;
      this.coleccion = coleccion;
  
      this.id = id;
      this.img = img;
    }
  }
  
  const dosVueltas = new libro(
    "Dos vueltas",
    "Fernando Loy",
    2019,
    170,
    1800,
    "Narrativa",
    1,
    "/libros/libroid1.png"
  );
  const unaAdvertencia = new libro(
    "Una Advertencia",
    "Paula Visser",
    2019,
    146,
    1800,
    "Narrativa",
    2,
    "/libros/libroid2.png"
  );
  const informaciónAnticipada = new libro(
    "Información Anticipada",
    "Carlos Herrera Sien",
    2019,
    192,
    1800,
    "Narrativa",
    3,
    "/libros/libroid3.png"
  );
  const nubesQueVuelanBajo = new libro(
    "Nubes que vuelan bajo",
    "Lorena Paula",
    "2019",
    124,
    1800,
    "Narrativa",
    4,
    "/libros/libroid4.png"
  );
  const unaCasaComoLasDeAntes = new libro(
    "Una casa com olas de antes",
    "Miguel Eyt",
    2019,
    259,
    2100,
    "Narrativa",
    5,
    "/libros/libroid5.png"
  );
  const elProblemaDeLaInfinitud = new libro(
    "El problema de la infinitud",
    "Katja Boyd",
    2019,
    418,
    2300,
    "Narrativa",
    6,
    "/libros/libroid6.png"
  );
  const comoSiLaNocheBastara = new libro(
    "Como si la noche bastara",
    "Santiago Ribón",
    2020,
    130,
    1800,
    "Narrativa",
    7,
    "/libros/libroid7.png"
  );
  const hemosHablado = new libro(
    "Hemos hablado",
    "Vilma Zubiría",
    2020,
    104,
    1800,
    "Narrativa",
    8,
    "/libros/libroid8.png"
  );
  const losCambiosEsperados = new libro(
    "Los cambios esperados",
    "Nicolás Finch",
    2020,
    140,
    1800,
    "Narrativa",
    9,
    "/libros/libroid9.png"
  );
  const siempreQueHayaTiempoParaElEspectáculo = new libro(
    "Siempre que haya tiempo para el espectáculo",
    "Marco Biondi",
    2021,
    470,
    2300,
    "Narrativa",
    10,
    "/libros/libroid10.png"
  );
  const losReportes = new libro(
    "Los reportes",
    "Dominique Demound",
    2021,
    185,
    1800,
    "Narrativa",
    11,
    "/libros/libroid11.png"
  );
  const yoAlguien = new libro(
    "Yo, Alguien",
    "Lucas Ducaux",
    2022,
    200,
    2100,
    "Narrativa",
    12,
    "/libros/libroid12.png"
  );
  const saltosEntreLíneas = new libro(
    "Saltos entre líneas",
    "Katja Boyd",
    2019,
    220,
    2100,
    "Ensayos",
    13,
    "/libros/libroid13.png"
  );
  const otrosLados = new libro(
    "Otros lados",
    "Nicolás Hernández",
    2020,
    120,
    1800,
    "Ensayos",
    14,
    "/libros/libroid14.png"
  );
  const literaturasNoVistas = new libro(
    "Literaturas no-vistas",
    "Fernán Vinetti",
    2020,
    240,
    2100,
    "Ensayos",
    15,
    "/libros/libroid15.png"
  );
  const laInexistenciaDeLaLectura = new libro(
    "La inexistencia de la lectura",
    "Fernán Vinetti",
    2020,
    177,
    1800,
    "Ensayos",
    16,
    "/libros/libroid16.png"
  );
  const movidas = new libro(
    "Movidas",
    "Laura Sint",
    2021,
    185,
    1800,
    "Ensayos",
    17,
    "/libros/libroid17.png"
  );
  const musicaDelTexto = new libro(
    "Música del texto",
    "Jimena Sirvén",
    2022,
    140,
    1800,
    "Ensayos",
    18,
    "/libros/libroid18.png"
  );
  const asincronías = new libro(
    "Asincronías",
    "Claudio Boes",
    2021,
    210,
    2300,
    "Exotopías",
    19,
    "/libros/libroid19.png"
  );
  const ruidoFiebre = new libro(
    "Ruido Fiebre",
    "Mariana Streick",
    2021,
    530,
    2800,
    "Exotopías",
    20,
    "/libros/libroid20.png"
  );
  const reverberaciones = new libro(
    "Reverberaciones",
    "Mariana Streick",
    2022,
    610,
    2800,
    "Exotopías",
    21,
    "/libros/libroid21.png"
  );
  const distanciaFluvial = new libro(
    "Distancia fluvial",
    "Don Lloyd",
    2022,
    305,
    2300,
    "Exotopías",
    22,
    "/libros/libroid22.png"
  );
  const unAbismo = new libro(
    "Un abismo",
    "Francisco Ciguera",
    2022,
    340,
    2300,
    "Exotopías",
    23,
    "/libros/libroid23.png"
  );
  const elAuscultado = new libro(
    "El Auscultado",
    "Fabián Groisman",
    2022,
    356,
    2800,
    "Exotopías",
    24,
    "/libros/libroid24.png"
  );
  
  arrayCatalogoLibros = [];
  arrayCatalogoLibros.push(
    dosVueltas,
    unaAdvertencia,
    informaciónAnticipada,
    nubesQueVuelanBajo,
    unaCasaComoLasDeAntes,
    elProblemaDeLaInfinitud,
    comoSiLaNocheBastara,
    hemosHablado,
    losCambiosEsperados,
    siempreQueHayaTiempoParaElEspectáculo,
    losReportes,
    yoAlguien,
    saltosEntreLíneas,
    otrosLados,
    literaturasNoVistas,
    laInexistenciaDeLaLectura,
    movidas,
    musicaDelTexto,
    asincronías,
    ruidoFiebre,
    reverberaciones,
    distanciaFluvial,
    unAbismo,
    elAuscultado
  );