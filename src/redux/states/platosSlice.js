import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PLATOS = [
  {
    "id": '1',
    "nombre": "Spaghetti Carbonara",
    "autor": "Juan Perez",
    "descripcion": "Deliciosos espaguetis con una salsa cremosa a base de huevo, queso, panceta y pimienta negra.",
    "ingredientes": {
      "espagueti": "15g",
      "panceta": "150g",
      "huevos": "3",
      "queso": "50g",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "30g"
    },
    "preparacion": "Cocina los espaguetis en agua con sal hasta que esten al dente. Mientras tanto, en un sarten, saltea la panceta hasta que este dorada y crujiente. En un tazon aparte, mezcla las yemas de huevo con queso rallado y pimienta negra. Escurre los espaguetis cocidos y añadelos al sarten con la panceta. Agrega la mezcla de huevo y queso, revolviendo rapidamente para que la salsa se espese con el calor residual. Sirve inmediatamente con mas queso y pimienta negra.",
    "imagen": "espaghetti.jpg"
  },
  {
    "id": '2',
    "nombre": "Lomo Saltado",
    "autor": "Maria Gomez",
    "descripcion": "Delicioso plato peruano que combina carne de res, cebolla, tomate y papas fritas, sazonado con salsa de soja y servido con arroz blanco.",
    "ingredientes": {
      "carne": "200g",
      "cebolla": "1",
      "tomate": "1",
      "papas": "150g",
      "salsa de soja": "30ml",
      "arroz": "150g"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "15g",
      "carbohidratos": "50g",
      "hierro": "4mg",
      "calcio": "40mg"
    },
    "preparacion": "Corta la carne de res en tiras y marinala con salsa de soja y ajo picado. Calienta un sarten grande o wok con aceite y saltea la carne a fuego alto hasta que este dorada. Agrega cebolla y tomate en rodajas, y cocina hasta que esten tiernos. Incorpora papas fritas y un chorrito de salsa de soja extra. Sirve sobre arroz blanco y decora con cilantro picado.",
    "imagen": "lomo_saltado.jpg"
  },
  {
    "id": '3',
    "nombre": "Ceviche",
    "autor": "Carlos Ramirez",
    "descripcion": "Plato fresco y delicioso hecho con pescado o mariscos marinados en jugo de limon y mezclado con cebolla morada, aji, cilantro y camote.",
    "ingredientes": {
      "pescado": "200g",
      "limon": "4",
      "cebolla": "1",
      "aji": "1",
      "cilantro": "20g",
      "camote": "150g"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "10g",
      "carbohidratos": "30g",
      "hierro": "3mg",
      "calcio": "20mg"
    },
    "preparacion": "Corta el pescado o mariscos en trozos pequenos y colocalos en un tazon. Exprime el jugo de limon sobre el pescado y mezcla bien. Agrega cebolla morada y aji picados, asi como cilantro. Deja marinar en el refrigerador durante unos 20-30 minutos hasta que el pescado este opaco y cocido por el limon. Sirve con camote cocido y rodajas de aji.",
    "imagen": "ceviche.jpg"
  },
  {
    "id": '4',
    "nombre": "Anticuchos",
    "autor": "Ricardo Torres",
    "descripcion": "Brochetas de corazon de res marinadas en una sabrosa mezcla de aji panca, ajos y vinagre, asadas y servidas con papas y salsa de huacatay.",
    "ingredientes": {
      "corazon": "200g",
      "aji": "30g",
      "ajos": "2",
      "vinagre": "30ml",
      "papas": "150g",
      "salsa de huacatay": "50ml"
    },
    "valorNutricional": {
      "proteinas": "30",
      "lipidos": "20g",
      "carbohidratos": "40g",
      "hierro": "5mg",
      "calcio": "30mg"
    },
    "preparacion": "Corta el corazon de res en cubos y marinalos con aji panca, ajo y vinagre. Ensarta los cubos de carne en brochetas y asalos a la parrilla hasta que esten cocidos. Sirve con papas cocidas y salsa de huacatay.",
    "imagen": "anticuchos.jpg"
  },
  {
    "id": '5',
    "nombre": "Tacu Tacu",
    "autor": "Pedro Castro",
    "descripcion": "Plato a base de arroz y frijoles refritos, servido con bistec a la parrilla, platano frito y huevo frito.",
    "ingredientes": {
      "arroz": "150g",
      "frijoles": "200g",
      "bistec": "200g",
      "platano": "1",
      "huevos": "2"
    },
    "valorNutricional": {
      "proteinas": "30",
      "lipidos": "20g",
      "carbohidratos": "50g",
      "hierro": "4.5mg",
      "calcio": "60mg"
    },
    "preparacion": "Cocina arroz y frijoles hasta que esten bien cocidos y aplastalos juntos para formar un pure. En un sarten grande, saltea cebolla y ajo picados hasta que esten dorados y agrega el pure de arroz y frijoles. Forma una especie de torta y cocina hasta que este dorada por ambos lados. Sirve con bistec a la parrilla, platano frito y huevo frito.",
    "imagen": "tacu_tacu.jpg"
  },
  {
    "id": '6',
    "nombre": "Sandwich de Carne",
    "autor": "Marta Gomez",
    "descripcion": "Un delicioso sandwich relleno de jugosa carne asada, vegetales frescos y una sabrosa salsa.",
    "ingredientes": {
      "pan": "2 rebanadas",
      "carne": "150g",
      "cebolla": "1/2 unidad",
      "tomate": "1/2 unidad",
      "lechuga": "unas hojas",
      "mostaza": "al gusto",
      "mayonesa": "al gusto",
      "sal": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "15g",
      "carbohidratos": "40g",
      "hierro": "3mg",
      "calcio": "20mg"
    },
    "preparacion": "Prepara la carne asada a tu gusto y cortala en rebanadas delgadas. Tuesta dos rebanadas de pan de sandwich y unta mostaza y mayonesa al gusto. Coloca la carne sobre una de las rebanadas y agrega cebolla y tomate en rodajas, asi como lechuga. Condimenta con sal y pimienta y cierra el sandwich con la otra rebanada de pan.",
    "imagen": "sandwich_carne.jpg"
  },
  {
    "id": '7',
    "nombre": "Batido de Platano",
    "autor": "Laura Rodriguez",
    "descripcion": "Un batido cremoso y delicioso hecho con platano maduro, leche, proteina en polvo y un toque de canela.",
    "ingredientes": {
      "platano": "1 unidad",
      "leche": "250ml",
      "proteina": "1 cucharada",
      "miel": "al gusto",
      "canela": "una pizca",
      "hielo": "opcional"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "5g",
      "carbohidratos": "40g",
      "fibra": "3g",
      "calcio": "200mg",
      "potasio": "450mg"
    },
    "preparacion": "En una licuadora, mezcla un platano maduro pelado, leche, proteina en polvo con sabor a vainilla, miel o edulcorante y una pizca de canela en polvo. Agrega hielo si deseas una consistencia mas espesa. Licua hasta obtener un batido cremoso y sirve en un vaso.",
    "imagen": "batido_platano.jpg"
  },
  {
    "id": '9',
    "nombre": "Huevo Duro",
    "autor": "Maria Perez",
    "descripcion": "Huevos cocidos a punto de dureza, ideales para acompañar ensaladas o como un delicioso aperitivo.",
    "ingredientes": {
      "huevos": "2 unidades",
      "sal": "al gusto",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "16",
      "lipidos": "10g",
      "calorias": "155",
      "vitamina D": "27% del valor diario",
      "vitamina B12": "22% del valor diario",
      "selenio": "22% del valor diario"
    },
    "preparacion": "Coloca los huevos en una cacerola con agua fria y una pizca de sal. Lleva a ebullicion y cocina durante 10-12 minutos para obtener huevos cocidos a punto de dureza. Una vez cocidos, enfría rapidamente los huevos en agua fria y pelalos. Agrega sal y pimienta al gusto y disfruta de los huevos duros como un aperitivo o como parte de una ensalada.",
    "imagen": "huevo_duro.jpg"
  },
  {
    "id": '10',
    "nombre": "Pescado al Horno",
    "autor": "Carlos Mendoza",
    "descripcion": "Pescado fresco al horno con limón, hierbas y aceite de oliva.",
    "ingredientes": {
      "pescado": "200g",
      "limon": "1 unidad",
      "ajo": "2 dientes",
      "tomillo": "1 cucharadita",
      "romero": "1 cucharadita",
      "perejil": "al gusto",
      "aceite de oliva": "2 cucharadas",
      "sal": "al gusto",
      "pimienta": "al gusto",
      "rodajas de limón": "para decorar"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "12g",
      "calorias": "220",
      "vitamina D": "8% del valor diario",
      "vitamina B12": "30% del valor diario"
    },
    "preparacion": "Precalienta el horno a 200°C. En un tazón, mezcla el jugo de limón, el ajo picado, el tomillo, el romero, el perejil, el aceite de oliva, sal y pimienta. Coloca el filete de pescado en una bandeja para hornear y vierte la mezcla de hierbas y limón sobre el pescado. Decora con rodajas de limón. Hornea durante 15-20 minutos o hasta que el pescado esté cocido y se desprenda fácilmente con un tenedor. Sirve con guarniciones de tu elección.",
    "imagen": "pescado_al_horno.jpg"
  },
  
  {
    "id": '11',
    "nombre": "Paella",
    "autor": "Elena Gutiérrez",
    "descripcion": "Sabrosa paella española con arroz, mariscos, pollo y azafrán.",
    "ingredientes": {
      "arroz": "200g",
      "pollo": "200g",
      "calamares": "200g",
      "gambas": "200g",
      "mejillones": "200g",
      "cebolla": "1 unidad",
      "pimiento rojo": "1 unidad",
      "ajo": "3 dientes",
      "caldo de pescado": "600ml",
      "azafran": "1 pizca",
      "pimentón dulce": "1 cucharadita",
      "aceite de oliva": "3 cucharadas",
      "sal": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "10g",
      "calorias": "320",
      "vitamina C": "30% del valor diario",
      "hierro": "25% del valor diario"
    },
    "preparacion": "En una paellera o sartén grande, calienta el aceite de oliva y sofríe el pollo en trozos hasta que esté dorado. Agrega la cebolla, el pimiento rojo y el ajo picados y cocina hasta que estén tiernos. Añade los calamares y las gambas y cocina por unos minutos. Agrega el arroz y remueve para que se mezcle con los ingredientes. Vierte el caldo de pescado caliente, el azafrán, el pimentón dulce y la sal. Cocina a fuego medio hasta que el arroz esté tierno y haya absorbido el caldo. Añade los mejillones y cocina hasta que se abran. Retira del fuego y deja reposar unos minutos antes de servir.",
    "imagen": "paella.jpg"
  },
  
  {
    "id": '12',
    "nombre": "Fajitas de Pollo",
    "autor": "Miguel Ramírez",
    "descripcion": "Fajitas de pollo marinadas con especias y servidas con tortillas de maíz, pimientos y cebolla.",
    "ingredientes": {
      "pollo": "300g",
      "limon": "2 unidades",
      "comino": "1 cucharadita",
      
      
      "pimientos": "2 unidades",
      "cebolla": "1 unidad",
      "tortillas de maíz": "para servir",
      "guacamole": "para servir",
      "crema agria": "para servir",
      "salsa picante": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "10g",
      "calorias": "280",
      "vitamina C": "40% del valor diario",
      "vitamina B6": "15% del valor diario"
    },
    "preparacion": "Corta las pechugas de pollo en tiras y colócalas en un tazón. Exprime el jugo de limón sobre el pollo y agrega el comino en polvo, el pimentón en polvo y la pimienta cayena. Mezcla bien y deja marinar durante al menos 30 minutos. En una sartén grande, calienta un poco de aceite y cocina las tiras de pollo hasta que estén doradas y cocidas por completo. Retira el pollo de la sartén y reserva. En la misma sartén, agrega los pimientos y la cebolla en tiras y cocina hasta que estén tiernos. Calienta las tortillas de maíz y rellénalas con el pollo, los pimientos y la cebolla. Sirve con guacamole, crema agria y salsa picante al gusto.",
    "imagen": "fajitas_pollo.jpg"
  },
  
  {
    "id": '13',
    "nombre": "Tiramisú",
    "autor": "Isabella Rossi",
    "descripcion": "Tiramisú italiano, un postre suave y esponjoso con capas de bizcochos de café y crema mascarpone.",
    "ingredientes": {
      "huevos": "4 unidades",
      "azucar": "100g",
      "queso mascarpone": "250g",
      
      "cafe": "200ml",
      "cacao": "para espolvorear",
      "chocolate": "para decorar"
    },
    "valorNutricional": {
      "proteinas": "6",
      "lipidos": "15g",
      "calorias": "280",
      "calcio": "10% del valor diario",
      "vitamina A": "15% del valor diario"
    },
    "preparacion": "Separa las claras de las yemas de los huevos. Bate las yemas con el azúcar hasta que estén cremosas. Añade el queso mascarpone y mezcla bien. En otro tazón, bate las claras a punto de nieve y añádelas a la mezcla de mascarpone con movimientos suaves y envolventes. Prepara el café espresso y sumerge los bizcochos en él. Coloca una capa de bizcochos en el fondo de un molde o recipiente para el tiramisú. Vierte la mitad de la crema mascarpone encima. Repite con otra capa de bizcochos y el resto de la crema. Refrigera por al menos 4 horas o durante toda la noche. Antes de servir, espolvorea con cacao en polvo y decora con chocolate rallado.",
    "imagen": "tiramisu.jpg"
  },
  
  {
    "id": '14',
    "nombre": "Camarones al Ajillo",
    "autor": "Antonio López",
    "descripcion": "Camarones salteados en aceite de oliva con ajo y guindilla, un plato picante y delicioso.",
    "ingredientes": {
      "camarones": "300g",
      "ajo": "4 dientes",
      "guindilla roja": "1 unidad",
      "perejil": "al gusto",
      "aceite de oliva": "3 cucharadas",
      "sal": "al gusto",
      "pan": "para servir"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "12g",
      "calorias": "220",
      "vitamina C": "8% del valor diario",
      "calcio": "6% del valor diario"
    },
    "preparacion": "Pela los camarones y quítales las venas. Calienta el aceite de oliva en una sartén grande y añade los camarones. Cocina hasta que estén rosados y cocidos. Agrega el ajo picado y la guindilla roja en rodajas finas. Saltea por unos minutos hasta que el ajo esté fragante y la guindilla suelte su picante. Retira del fuego y espolvorea con perejil picado y sal al gusto. Sirve con pan tostado.",
    "imagen": "camarones_ajillo.jpg"
  },
  
  {
    "id": '15',
    "nombre": "Burritos de Frijoles y Queso",
    "autor": "Laura Gómez",
    "descripcion": "Burritos suaves rellenos de frijoles refritos, queso y tus ingredientes favoritos.",
    "ingredientes": {
      "tortillas de trigo": "4 unidades",
      "frijoles refritos": "1 lata",
      "queso": "100g",
      "aguacate": "1 unidad",
      "tomate": "1 unidad",
      "lechuga": "unas hojas",
      "salsa picante": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "10",
      "lipidos": "8g",
      "calorias": "200",
      "vitamina A": "15% del valor diario",
      "vitamina K": "10% del valor diario"
    },
    "preparacion": "Calienta las tortillas en un sartén o microondas para que sean más manejables. Extiende una cucharada de frijoles refritos en el centro de cada tortilla. Espolvorea con queso cheddar rallado. Agrega tiras de aguacate, rodajas de tomate y hojas de lechuga. Si te gusta el picante, añade salsa picante al gusto. Doble los lados izquierdo y derecho de la tortilla hacia el centro y luego enrolle desde la parte inferior hacia arriba, asegurándote de que el relleno quede bien envuelto. Repite con las demás tortillas. Puedes calentar los burritos nuevamente en el sartén para derretir el queso si lo deseas. Sirve caliente y disfruta.",
    "imagen": "burritos_frijoles_queso.jpg"
  },
  {
    "id": '16',
    "nombre": "Pollo al Curry",
    "autor": "Rajesh Patel",
    "descripcion": "Sabroso pollo en una deliciosa salsa de curry con leche de coco.",
    "ingredientes": {
      "pollo": "500g",
      "cebolla": "1 unidad",
      "jengibre": "1 trozo",
      "ajo": "4 dientes",
      "curry en polvo": "2 cucharadas",
      "leche de coco": "400ml",
      "caldo de pollo": "200ml",
      "aceite de oliva": "2 cucharadas",
      "sal": "al gusto",
      "cilantro": "al gusto",
      "arroz": "para servir"
    },
    "valorNutricional": {
      "proteinas": "30",
      "lipidos": "15g",
      "calorias": "350",
      "vitamina B6": "20% del valor diario",
      "hierro": "10% del valor diario"
    },
    "preparacion": "Corta las pechugas de pollo en trozos y sazonar con sal al gusto. En una sartén grande, calienta el aceite de oliva y dora el pollo por todos los lados. Retira el pollo de la sartén y reserva. En la misma sartén, agrega la cebolla picada, el jengibre rallado y el ajo picado. Sofríe hasta que estén dorados y fragantes. Añade el curry en polvo y mezcla bien. Vierte la leche de coco y el caldo de pollo y lleva a ebullición. Reduce el fuego y agrega el pollo nuevamente. Cocina a fuego lento hasta que el pollo esté bien cocido y la salsa espese. Sirve el pollo al curry sobre arroz blanco cocido y espolvorea con cilantro fresco.",
    "imagen": "pollo_curry.jpg"
  },
  
  {
    "id": '17',
    "nombre": "Gazpacho",
    "autor": "Carmen Morales",
    "descripcion": "Sopa fría de tomate, pepino, pimiento, cebolla y ajo, perfecta para los días calurosos.",
    "ingredientes": {
      "tomate": "500g",
      "pepino": "1 unidad",
      "pimiento verde": "1 unidad",
      "cebolla": "1 unidad",
      "ajo": "2 dientes",
      "pan duro": "50g",
      "vinagre blanco": "2 cucharadas",
      "aceite de oliva": "4 cucharadas",
      "sal": "al gusto",
      "pimienta": "al gusto",
      "agua fria": "200ml",
      "hielo": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "5",
      "lipidos": "10g",
      "calorias": "150",
      "vitamina C": "30% del valor diario",
      "vitamina K": "20% del valor diario"
    },
    "preparacion": "Pela los tomates y córtalos en trozos grandes. Pela el pepino y córtalo en rodajas gruesas. Lava y pica el pimiento verde y la cebolla. En un procesador de alimentos o licuadora, coloca los tomates, pepino, pimiento, cebolla, ajo, pan duro, vinagre de vino blanco y aceite de oliva. Tritura hasta obtener una mezcla suave. Añade agua fría y tritura nuevamente. Si lo deseas más líquido, añade más agua. Agrega sal y pimienta al gusto. Refrigera el gazpacho por al menos 1 hora antes de servir. Sirve frío con cubitos de hielo.",
    "imagen": "gazpacho.jpg"
  },
  
  {
    "id": '18',
    "nombre": "Sopa de Lentejas",
    "autor": "Ana Torres",
    "descripcion": "Sopa reconfortante de lentejas con vegetales y especias, ideal para días fríos.",
    "ingredientes": {
      "lentejas": "200g",
      "zanahoria": "1 unidad",
      "cebolla": "1 unidad",
      "apio": "1 tallo",
      "ajo": "2 dientes",
      "tomate triturado": "200ml",
      "caldo de verduras": "1 litro",
      "pimenton en polvo": "1 cucharadita",
      "comino en polvo": "1/2 cucharadita",
      "perejil": "al gusto",
      "aceite de oliva": "2 cucharadas",
      "sal": "al gusto",
      "pimienta": "al gusto",
      "pan": "para servir"
    },
    "valorNutricional": {
      "proteinas": "15",
      "lipidos": "5g",
      "calorias": "200",
      "fibra": "8g",
      "hierro": "20% del valor diario"
    },
    "preparacion": "Enjuaga las lentejas en un colador bajo el grifo. En una cacerola grande, calienta el aceite de oliva y sofríe la cebolla picada, el ajo picado y el apio picado hasta que estén dorados. Agrega la zanahoria en rodajas y cocina por unos minutos. Añade las lentejas y el tomate triturado y mezcla bien. Vierte el caldo de verduras caliente y agrega el pimentón en polvo, el comino en polvo, sal y pimienta al gusto. Lleva a ebullición y luego reduce el fuego. Cocina a fuego lento durante aproximadamente 20-25 minutos o hasta que las lentejas estén tiernas. Añade más caldo si es necesario. Sirve la sopa caliente y espolvorea con perejil picado. Acompaña con pan tostado.",
    "imagen": "sopa_lentejas.jpg"
  },
  {
    "id": '19',
    "nombre": "Enchiladas",
    "autor": "Diego Ramírez",
    "descripcion": "Enchiladas de pollo bañadas en salsa de tomate y gratinadas con queso.",
    "ingredientes": {
      "tortillas de maíz": "8 unidades",
      "pollo": "300g",
      "cebolla": "1 unidad",
      "pimiento verde": "1 unidad",
      "tomate": "2 unidades",
      "rocoto": "1 unidad",
      "queso": "200g",
      "aceite de oliva": "2 cucharadas",
      "comino en polvo": "1 cucharadita",
      "orégano seco": "1 cucharadita",
      "caldo de pollo": "200ml",
      "salsa de tomate": "400ml",
      "sal": "al gusto",
      "pimienta": "al gusto",
      "crema agria": "para servir",
      "cilantro": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "12g",
      "calorias": "300",
      "vitamina C": "25% del valor diario",
      "calcio": "15% del valor diario"
    },
    "preparacion": "En una sartén grande, calienta el aceite de oliva y sofríe la cebolla picada, el pimiento verde picado y el chile jalapeño picado hasta que estén tiernos. Agrega el pollo desmenuzado y mezcla bien. Añade el comino en polvo, el orégano seco, sal y pimienta al gusto. Vierte el caldo de pollo y cocina a fuego lento durante unos minutos. En otra sartén, calienta la salsa de tomate. Precalienta el horno a 180°C. En una fuente para horno, calienta las tortillas de maíz para que sean más manejables. Rellena cada tortilla con la mezcla de pollo y enrolla. Coloca las enchiladas en la fuente y baña con la salsa de tomate caliente. Espolvorea con queso cheddar rallado y hornea hasta que el queso esté derretido y dorado. Sirve las enchiladas calientes, acompañadas de crema agria y cilantro picado.",
    "imagen": "enchiladas.jpg"
  },
  {
    "id": '20',
    "nombre": "Pollo al Curry",
    "autor": "Ricardo Gómez",
    "descripcion": "Delicioso pollo cocinado con una exquisita mezcla de especias al curry, ideal para acompañar con arroz o naan.",
    "ingredientes": {
      "pollo": "500g",
      "cebolla": "1 unidad grande",
      "ajo": "3 dientes",
      "jengibre": "1 trozo de 2 cm",
      "tomate": "2 unidades",
      "yogur": "200ml",
      "aceite de oliva": "2 cucharadas",
      "curry en polvo": "2 cucharadas",
      "cilantro fresco": "al gusto",
      "sal": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "30",
      "lipidos": "15g",
      "calorias": "320",
      "vitamina C": "15% del valor diario",
      "vitamina B6": "25% del valor diario",
      "calcio": "10% del valor diario",
      "hierro": "20% del valor diario"
    },
    "preparacion": "Corta el pollo en trozos y sofríelo en aceite de oliva con la cebolla, ajo y jengibres picados. Agrega el curry en polvo y los tomates picados. Cocina hasta que el pollo esté tierno. Luego, incorpora el yogur y cocina por unos minutos más. Sirve con cilantro fresco y acompaña con arroz o naan.",
    "imagen": "pollo_al_curry.jpg"
  },
  {
    "id": "21",
    "nombre": "Ensalada César",
    "autor": "Ana Rodríguez",
    "descripcion": "Clásica ensalada César con pollo, lechuga romana, crutones y aderezo César.",
    "ingredientes": {
      "pollo": "250g",
      "lechuga": "1 cabeza",
      "crutones": "1 taza",
      "queso": "50g",
      "aderezo César": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "12g",
      "calorias": "280",
      "vitamina A": "50% del valor diario",
      "vitamina C": "30% del valor diario",
      "calcio": "15% del valor diario"
    },
    "preparacion": "Cocina el pollo a la parrilla y córtalo en tiras. Lava y corta la lechuga en trozos. Mezcla el pollo, la lechuga, los crutones y el queso parmesano. Añade el aderezo César y mezcla bien.",
    "imagen": "ensalada_cesar.jpg"
  },
  
  
  {
    "id": "22",
    "nombre": "Sushi Variado",
    "autor": "Takeshi Nakamura",
    "descripcion": "Una selección variada de sushi fresco: nigiri, maki y sashimi.",
    "ingredientes": {
      "salmon": "100g",
      "atun": "100g",
      "camarón": "100g",
      "arroz": "200g",
      "alga nori": "varias hojas",
      "salsa de soja": "al gusto",
      "wasabi": "al gusto",
      "jengibre encurtido": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "5g",
      "calorias": "220",
      "vitamina B12": "60% del valor diario",
      "selenio": "30% del valor diario"
    },
    "preparacion": "Cocina el arroz de sushi siguiendo las instrucciones del paquete. Corta el pescado en tiras finas. Coloca el arroz sobre las hojas de alga nori, agrega el pescado y enrolla. Corta en rodajas y sirve con salsa de soja, wasabi y jengibre encurtido.",
    "imagen": "sushi_variado.jpg"
  },
  
  {
    "id": "23",
    "nombre": "Pizza de Vegetales",
    "autor": "Luisa Martínez",
    "descripcion": "Deliciosa pizza vegetariana con una mezcla de vegetales frescos y queso derretido.",
    "ingredientes": {
      "masa para pizza": "1 unidad",
      "salsa de tomate": "1/2 taza",
      "mozzarella": "200g",
      "tomate": "1 unidad",
      "champiñones": "100g",
      "pimiento rojo": "1 unidad",
      "cebolla": "1 unidad",
      "aceitunas": "al gusto",
      "orégano": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "15",
      "lipidos": "8g",
      "calorias": "250",
      "vitamina A": "20% del valor diario",
      "vitamina C": "40% del valor diario",
      "calcio": "25% del valor diario"
    },
    "preparacion": "Extiende la masa para pizza y úntala con la salsa de tomate. Agrega el queso mozzarella y los vegetales cortados en rodajas. Hornea hasta que el queso esté derretido y la masa esté dorada. Espolvorea orégano al gusto.",
    "imagen": "pizza_vegetales.jpg"
  },
  
  {
    "id": "24",
    "nombre": "Pasta Alfredo",
    "autor": "Giovanni Rossi",
    "descripcion": "Fetuccini en una cremosa salsa Alfredo, espolvoreado con queso parmesano.",
    "ingredientes": {
      "fetuccini": "300g",
      "mantequilla": "4 cucharadas",
      "leche": "200ml",
      "ajo": "2 dientes",
      "queso": "100g",
      "perejil": "al gusto",
      "sal": "al gusto",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "18",
      "lipidos": "20g",
      "calorias": "380",
      "calcio": "20% del valor diario",
      "vitamina B12": "15% del valor diario"
    },
    "preparacion": "Cocina la pasta según las indicaciones del paquete. Mientras tanto, derrite la mantequilla en una sartén, agrega el ajo picado y cocina hasta que esté fragante. Vierte la nata o crema de leche y agrega el queso parmesano. Cocina a fuego medio hasta que la salsa espese. Mezcla la pasta con la salsa y sirve con perejil picado y un toque de pimienta.",
    "imagen": "pasta_alfredo.jpg"
  },
  
  {
    "id": "25",
    "nombre": "Ceviche de Camarones",
    "autor": "Elena Sánchez",
    "descripcion": "Refrescante ceviche de camarones con jugo de limón, cebolla, cilantro y aguacate.",
    "ingredientes": {
      "camarones": "250g",
      "limón": "4 unidades",
      "cebolla morada": "1/2 unidad",
      "tomate": "1 unidad",
      "cilantro": "al gusto",
      "aguacate": "1 unidad",
      "chile": "1 unidad (opcional)",
      "sal": "al gusto",
      "pimienta": "al gusto",
      "tostadas": "para servir"
    },
    "valorNutricional": {
      "proteinas": "20",
      "lipidos": "5g",
      "calorias": "180",
      "vitamina C": "45% del valor diario",
      "vitamina A": "10% del valor diario"
    },
    "preparacion": "Cocina los camarones en agua hirviendo hasta que estén rosados y cocidos. Exprime el jugo de limón sobre los camarones y mezcla bien. Agrega la cebolla morada picada, el tomate picado, el cilantro picado y el aguacate en cubos. Si prefieres un toque picante, añade chile serrano picado. Salpica con sal y pimienta al gusto. Refrigera por unos minutos antes de servir. Sirve con tostadas.",
    "imagen": "ceviche_camarones.jpg"
  },
  {
    "id": "26",
    "nombre": "Lasagna",
    "autor": "Carlo Russo",
    "descripcion": "Lasagna tradicional de capas de pasta, salsa boloñesa y bechamel, gratinada con queso.",
    "ingredientes": {
      "pasta de lasagna": "200g",
      "carne": "500g",
      "cebolla": "1 unidad",
      "ajo": "3 dientes",
      "tomate": "400g",
      "salsa bechamel": "500ml",
      "queso mozzarella": "200g",
      "queso": "50g",
      "orégano": "al gusto",
      "sal": "al gusto",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "25",
      "lipidos": "18g",
      "calorias": "340",
      "calcio": "30% del valor diario",
      "vitamina B12": "10% del valor diario"
    },
    "preparacion": "Sofríe la cebolla y el ajo picados en aceite hasta que estén dorados. Agrega la carne molida y cocina hasta que esté dorada. Añade el tomate triturado, sal, pimienta y orégano. Cocina a fuego lento hasta que la salsa esté espesa. En una fuente para horno, alterna capas de pasta, salsa boloñesa, salsa bechamel y queso mozzarella. Repite hasta terminar los ingredientes. Espolvorea queso parmesano sobre la última capa y hornea hasta que esté dorada y burbujeante.",
    "imagen": "lasagna.jpg"
  },
  
  {
    "id": "27",
    "nombre": "Tacos de Carne Asada",
    "autor": "Jorge González",
    "descripcion": "Tacos de carne asada marinada con especias y servidos con cebolla, cilantro y salsa.",
    "ingredientes": {
      "carne": "500g",
      "limón": "2 unidades",
      "ajo": "4 dientes",
      "comino en polvo": "1 cucharada",
      "pimentón": "1 cucharada",
      "cebolla": "1 unidad grande",
      "cilantro": "al gusto",
      "tortillas de maíz": "para servir",
      "salsa de tu elección": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "30",
      "lipidos": "10g",
      "calorias": "280",
      "vitamina C": "20% del valor diario",
      "hierro": "15% del valor diario"
    },
    "preparacion": "Mezcla el jugo de limón, el ajo picado, el comino y el pimentón en polvo en un tazón. Coloca la carne en la marinada y deja reposar durante al menos 30 minutos. Asa la carne en una parrilla o sartén caliente hasta que esté cocida al punto deseado. Corta la carne en tiras. Calienta las tortillas y rellénalas con la carne asada, cebolla picada y cilantro. Sirve con salsa de tu elección.",
    "imagen": "tacos_carne_asada.jpg"
  },
  {
    "id": "28",
    "nombre": "Pudín de Chocolate",
    "autor": "María Soto",
    "descripcion": "Irresistible pudín de chocolate con textura suave y un delicioso sabor.",
    "ingredientes": {
      "chocolate": "200g",
      "crema de leche": "400ml",
      "leche": "200ml",
      "azucar": "100g",
      "huevos": "3 unidades",
      "maicena": "2 cucharadas",
      "esencia de vainilla": "1 cucharadita",
      "nueces": "al gusto (opcional)"
    },
    "valorNutricional": {
      "proteinas": "8",
      "lipidos": "15g",
      "calorias": "280",
      "calcio": "10% del valor diario",
      "hierro": "8% del valor diario"
    },
    "preparacion": "En una cacerola, calienta la nata o crema de leche, la leche y el azúcar a fuego medio. Agrega el chocolate negro picado y mezcla hasta que se derrita y se integre bien. En un tazón aparte, mezcla las yemas de huevo, la maicena y la esencia de vainilla. Vierte esta mezcla en la cacerola con la nata y el chocolate, y sigue cocinando a fuego bajo hasta que espese. Remueve constantemente para evitar que se formen grumos. Retira del fuego y deja enfriar. Si lo deseas, añade nueces picadas antes de servir.",
    "imagen": "pudin_chocolate.jpg"
  },
  {
    "id": "29",
    "nombre": "Risotto de Champiñones",
    "autor": "Giulia Bianchi",
    "descripcion": "Risotto cremoso con champiñones frescos y queso parmesano.",
    "ingredientes": {
      "arroz": "200g",
      "champiñones": "250g",
      "cebolla": "1 unidad",
      "ajo": "2 dientes",
      "caldo de verduras": "1 litro",
      "vino blanco": "100ml",
      "queso": "50g",
      "mantequilla": "2 cucharadas",
      "aceite de oliva": "2 cucharadas",
      "perejil": "al gusto",
      "sal": "al gusto",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "10",
      "lipidos": "8g",
      "calorias": "250",
      "calcio": "6% del valor diario",
      "vitamina D": "2% del valor diario"
    },
    "preparacion": "En una sartén grande, calienta el aceite de oliva y derrite una cucharada de mantequilla. Agrega la cebolla y el ajo picados y sofríe hasta que estén dorados. Añade los champiñones en rodajas y cocina hasta que estén tiernos. Agrega el arroz Arborio y mezcla bien para que absorba los sabores. Vierte el vino blanco y cocina hasta que se evapore. Luego, añade el caldo de verduras caliente, una taza a la vez, removiendo constantemente hasta que el arroz esté al dente y el risotto tenga una textura cremosa. Agrega la cucharada restante de mantequilla y el queso parmesano rallado. Remueve hasta que se derrita. Salpica con perejil picado, sal y pimienta al gusto.",
    "imagen": "risotto_champinones.jpg"
  }
  
  

]

export const PlatosSlice = createSlice({
  name: "platos",
  initialState: DEFAULT_PLATOS,
  reducers: {
    rebornPlato:(estate,action)=>{
      return [...action.payload]
    },
    createPlato: (state, action) => {
      return [...state,{...action.payload}]
    },
    deletePlatoById: (state, action) => {
      const id = action.payload;
      return state.filter((plato) => plato.id != id);
    }
  },
});

export const { createPlato,rebornPlato } = PlatosSlice.actions;
export const selectPlatos = (state) => state.platos