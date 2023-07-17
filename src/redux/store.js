import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./states/usersSlice";
import { EstadoMedicoSlice } from "./states/medicoSlice";
import { PlatosSlice } from "./states/platosSlice";

export const store = configureStore({
  reducer: {
    estados_medicos: EstadoMedicoSlice.reducer,
    users: UserSlice.reducer,
    platos: PlatosSlice.reducer
  },
});
