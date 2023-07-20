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
      "yemas de huevo": "3",
      "queso": "50g",
      "pimienta negra": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "20g",
      "lipidos": "30g"
    },
    "preparacion": "Cocina los espaguetis en agua con sal hasta que estén al dente. Mientras tanto, en un sartén, saltea la panceta hasta que esté dorada y crujiente. En un tazón aparte, mezcla las yemas de huevo con queso rallado y pimienta negra. Escurre los espaguetis cocidos y añádelos al sartén con la panceta. Agrega la mezcla de huevo y queso, revolviendo rápidamente para que la salsa se espese con el calor residual. Sirve inmediatamente con más queso y pimienta negra.",
    "imagen": "espaghetti.jpg"
  },
  {
    "id": '2',
    "nombre": "Lomo Saltado",
    "autor": "Maria Gomez",
    "descripcion": "Delicioso plato peruano que combina carne de res, cebolla, tomate y papas fritas, sazonado con salsa de soja y servido con arroz blanco.",
    "ingredientes": {
      "carne de res": "200g",
      "cebolla": "1",
      "tomate": "1",
      "papas": "150g",
      "salsa de soja": "30ml",
      "arroz blanco": "150g"
    },
    "valorNutricional": {
      "proteinas": "25g",
      "lipidos": "15g",
      "carbohidratos": "50g",
      "hierro": "4mg",
      "calcio": "40mg"
    },
    "preparacion": "Corta la carne de res en tiras y marínala con salsa de soja y ajo picado. Calienta un sartén grande o wok con aceite y saltea la carne a fuego alto hasta que esté dorada. Agrega cebolla y tomate en rodajas, y cocina hasta que estén tiernos. Incorpora papas fritas y un chorrito de salsa de soja extra. Sirve sobre arroz blanco y decora con cilantro picado.",
    "imagen": "lomo_saltado.jpg"
  },
  {
    "id": '3',
    "nombre": "Ceviche ",
    "autor": "Carlos Ramirez",
    "descripcion": "Plato fresco y delicioso hecho con pescado o mariscos marinados en jugo de limon y mezclado con cebolla morada, aji, cilantro y camote.",
    "ingredientes": {
      "pescado o mariscos": "200g",
      "limon": "4",
      "cebolla morada": "1",
      "aji": "1",
      "cilantro": "20g",
      "camote": "150g"
    },
    "valorNutricional": {
      "proteinas": "20g",
      "lipidos": "10g",
      "carbohidratos": "30g",
      "hierro": "3mg",
      "calcio": "20mg"
    },
    "preparacion": "Corta el pescado o mariscos en trozos pequeños y colócalos en un tazón. Exprime el jugo de limón sobre el pescado y mezcla bien. Agrega cebolla morada y ají picados, así como cilantro. Deja marinar en el refrigerador durante unos 20-30 minutos hasta que el pescado esté opaco y cocido por el limón. Sirve con camote cocido y rodajas de ají.",
    "imagen": "ceviche.jpg"
  },
  {
    "id": '4',
    "nombre": "Anticuchos",
    "autor": "Ricardo Torres",
    "descripcion": "Brochetas de corazon de res marinadas en una sabrosa mezcla de aji panca, ajos y vinagre, asadas y servidas con papas y salsa de huacatay.",
    "ingredientes": {
      "corazon de res": "200g",
      "aji panca": "30g",
      "ajos": "2",
      "vinagre": "30ml",
      "papas": "150g",
      "salsa de huacatay": "50ml"
    },
    "valorNutricional": {
      "proteinas": "30g",
      "lipidos": "20g",
      "carbohidratos": "40g",
      "hierro": "5mg",
      "calcio": "30mg"
    },
    "preparacion": "Corta el corazón de res en cubos y marínalos con ají panca, ajo y vinagre. Ensarta los cubos de carne en brochetas y ásalos a la parrilla hasta que estén cocidos. Sirve con papas cocidas y salsa de huacatay.",
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
      "huevo": "2"
    },
    "valorNutricional": {
      "proteinas": "30g",
      "lipidos": "20g",
      "carbohidratos": "50g",
      "hierro": "4.5mg",
      "calcio": "60mg"
    },
    "preparacion": "Cocina arroz y frijoles hasta que estén bien cocidos y aplástalos juntos para formar un puré. En un sartén grande, saltea cebolla y ajo picados hasta que estén dorados y agrega el puré de arroz y frijoles. Forma una especie de torta y cocina hasta que esté dorada por ambos lados. Sirve con bistec a la parrilla, plátano frito y huevo frito.",
    "imagen": "tacu_tacu.jpg"
  },
  {
    "id": '6',
    "nombre": "Sándwich de Carne",
    "autor": "Marta Gómez",
    "descripcion": "Un delicioso sándwich relleno de jugosa carne asada, vegetales frescos y una sabrosa salsa.",
    "ingredientes": {
      "pan de sándwich": "2 rebanadas",
      "carne asada": "150g",
      "cebolla": "1/2 unidad",
      "tomate": "1/2 unidad",
      "lechuga": "unas hojas",
      "mostaza": "al gusto",
      "mayonesa": "al gusto",
      "sal y pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "25g",
      "lipidos": "15g",
      "carbohidratos": "40g",
      "hierro": "3mg",
      "calcio": "20mg"
    },
    "preparacion": "Prepara la carne asada a tu gusto y córtala en rebanadas delgadas. Tuesta dos rebanadas de pan de sándwich y unta mostaza y mayonesa al gusto. Coloca la carne sobre una de las rebanadas y agrega cebolla y tomate en rodajas, así como lechuga. Condimenta con sal y pimienta y cierra el sándwich con la otra rebanada de pan.",
    "imagen": "sandwich_carne.jpg"
  },
  {
    "id": '7',
    "nombre": "Batido de Plátano",
    "autor": "Laura Rodríguez",
    "descripcion": "Un batido cremoso y delicioso hecho con plátano maduro, leche, proteína en polvo y un toque de canela.",
    "ingredientes": {
      "plátano maduro": "1 unidad",
      "leche": "250ml",
      "proteína en polvo (sabor vainilla)": "1 cucharada",
      "miel o edulcorante": "al gusto",
      "canela en polvo": "una pizca",
      "hielo": "opcional"
    },
    "valorNutricional": {
      "proteinas": "20g",
      "lipidos": "5g",
      "carbohidratos": "40g",
      "fibra": "3g",
      "calcio": "200mg",
      "potasio": "450mg"
    },
    "preparacion": "En una licuadora, mezcla un plátano maduro pelado, leche, proteína en polvo con sabor a vainilla, miel o edulcorante y una pizca de canela en polvo. Agrega hielo si deseas una consistencia más espesa. Licúa hasta obtener un batido cremoso y sirve en un vaso.",
    "imagen": "batido_platano.jpg"
  },
  {
    "id": '9',
    "nombre": "Huevo Duro",
    "autor": "María Pérez",
    "descripcion": "Huevos cocidos a punto de dureza, ideales para acompañar ensaladas o como un delicioso aperitivo.",
    "ingredientes": {
      "huevos": "2 unidades",
      "sal": "al gusto",
      "pimienta": "al gusto"
    },
    "valorNutricional": {
      "proteinas": "12g",
      "lipidos": "10g",
      "calorias": "155",
      "vitamina D": "27% del valor diario",
      "vitamina B12": "22% del valor diario",
      "selenio": "22% del valor diario"
    },
    "preparacion": "Coloca los huevos en una cacerola con agua fría y una pizca de sal. Lleva a ebullición y cocina durante 10-12 minutos para obtener huevos cocidos a punto de dureza. Una vez cocidos, enfría rápidamente los huevos en agua fría y pélalos. Agrega sal y pimienta al gusto y disfruta de los huevos duros como un aperitivo o como parte de una ensalada.",
    "imagen": "huevo_duro.jpg"
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