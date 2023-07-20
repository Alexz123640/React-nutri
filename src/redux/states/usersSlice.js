import { createSlice } from "@reduxjs/toolkit";


const DEFAULT_USERS = [
  {
    id: '108235119319585714932',
    nombre: "Alex C. H.",
    apellidos: 'González',
    correo: "alwx162@gmail.com",
    password: 'contraseña1',
    rol: 'rol_DyQ2kMC4DITwe6y9',//admin
    estado: 'activo',
    imagen: "https://lh3.googleusercontent.com/a/AAcHTtfEymNF00U0bnXPkkhXbtPBZ3R7GAGIWGyMphOzKN5ZkqU=s96-c",
    telefono: '111111111',
  },
  {
    id: "64ab97d29d26ee7e140487a1",
    nombre: "alex@gmail.com",
    apellidos: 'Hernández',
    correo: "alex@gmail.com",
    password: 'contraseña2',
    rol: 'rol_5ZRs2l5BYD9lw06G',//cocinero
    estado: 'activo',
    imagen: "https://s.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fal.png",
    telefono: '222222222',
  },
  {
    id: "64ab97d29d26ee7e140487a2",
    nombre: "alex@gmail.com",
    apellidos: 'Hernández',
    correo: "alex@gmail.com",
    password: 'contraseña2',
    rol: 'rol_JhEcS4TzKnGAbaZC',//USUARIO
    estado: 'activo',
    imagen: "https://s.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fal.png",
    telefono: '222222222',
  },
]


export const UserSlice = createSlice({
  name: 'users',
  initialState: DEFAULT_USERS,
  reducers: {
    createUser:(state,action)=>{
      return [...state,{...action.payload}]
    },
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    }
  }
})


export const { createUser,deleteUserById } = UserSlice.actions;
