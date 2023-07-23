import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./states/usersSlice";
import { EstadoMedicoSlice } from "./states/medicoSlice";
import { PlatosSlice } from "./states/platosSlice";

const persistanceMiddleware = (store) => (next) => (action) => {
  next(action);
  const { type, payload } = action;
  console.log({ type, payload });
  console.log(store.getState);
  localStorage.setItem("__redux__medico__", JSON.stringify(store.getState()));
}


export const store = configureStore({

  reducer: {
    estados_medicos: EstadoMedicoSlice.reducer,
    users: UserSlice.reducer,
    platos: PlatosSlice.reducer
  },
  middleware: [persistanceMiddleware]
});
