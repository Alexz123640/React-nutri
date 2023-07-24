import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ESTADO_MEDICO =
[{
  id: "",
  id_user: "",
  masa_corporal: "",
  fecha_nacimiento: "",
  peso: "",
  altura: "",
  enfermedades: "",
  alergias: [],
}]

let initialState = DEFAULT_ESTADO_MEDICO
const persistedState = localStorage.getItem("__redux__medico__");
if (persistedState) {
	initialState = JSON.parse(persistedState).estados_medicos;
}

export const EstadoMedicoSlice = createSlice({
  name: "estados_medicos",
  initialState: initialState,
  reducers: {
    createEstadoMedico: (state, action) => {
      return [{...action.payload}]
    },
    ReiniciarEstadoMedico:()=>{
       return initialState;
    }
  },
  
});

export const { createEstadoMedico,ReiniciarEstadoMedico } = EstadoMedicoSlice.actions;
