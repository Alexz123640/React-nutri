import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ESTADO_MEDICO = 
  {
    id: "",
    id_user: "",
    masa_corporal: "",
    fecha_nacimiento: "",
    peso: "",
    altura: "",
    enfermedades: "",
    alergias: ""
  }
  
;

export const EstadoMedicoSlice = createSlice({
  name: "estados_medicos",
  initialState: DEFAULT_ESTADO_MEDICO,
  reducers: {
    createEstadoMedico: (state, action) => {
      return action.payload 
    },
  },
});

export const { createEstadoMedico } = EstadoMedicoSlice.actions;
