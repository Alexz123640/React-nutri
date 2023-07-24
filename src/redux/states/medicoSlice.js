import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ESTADO_MEDICO =
[{
  id: "1",
  id_user: "00",
  masa_corporal: "00",
  fecha_nacimiento: "00",
  peso: "00",
  altura: "00",
  enfermedades: "Ninguna",
  alergias: ["ninguna"],
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
