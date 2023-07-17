import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_USERS = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'González',
    correo: 'juan.gonzalez@ejemplo.com',
    password: 'contraseña1',
    rol: 'cliente',
    estado: 'activo',
    imagen: 'ruta/de/imagen1.jpg',
    telefono: '111111111',
  },
  {
    id: 2,
    nombre: 'Alex',
    apellidos: 'Hernández',
    correo: 'alex.hernandez@ejemplo.com',
    password: 'contraseña2',
    rol: 'cliente',
    estado: 'activo',
    imagen: 'ruta/de/imagen2.jpg',
    telefono: '222222222',
  },
  {
    id: 3,
    nombre: 'Juan',
    apellidos: 'López',
    correo: 'juan.lopez@ejemplo.com',
    password: 'contraseña3',
    rol: 'cocinero',
    estado: 'activo',
    imagen: 'ruta/de/imagen3.jpg',
    telefono: '333333333',
  },
  {
    id: 4,
    nombre: 'Alex',
    apellidos: 'Martínez',
    correo: 'alex.martinez@ejemplo.com',
    password: 'contraseña4',
    rol: 'cliente',
    estado: 'inactivo',
    imagen: 'ruta/de/imagen4.jpg',
    telefono: '444444444',
  },
  {
    id: 5,
    nombre: 'Juan',
    apellidos: 'Pérez',
    correo: 'juan.perez@ejemplo.com',
    password: 'contraseña5',
    rol: 'admin',
    estado: 'activo',
    imagen: 'ruta/de/imagen5.jpg',
    telefono: '555555555',
  },
  {
    id: 6,
    nombre: 'Alex',
    apellidos: 'Ramírez',
    correo: 'alex.ramirez@ejemplo.com',
    password: 'contraseña6',
    rol: 'cliente',
    estado: 'activo',
    imagen: 'ruta/de/imagen6.jpg',
    telefono: '666666666',
  },
  {
    id: 7,
    nombre: 'Juan',
    apellidos: 'Sánchez',
    correo: 'juan.sanchez@ejemplo.com',
    password: 'contraseña7',
    rol: 'cocinero',
    estado: 'activo',
    imagen: 'ruta/de/imagen7.jpg',
    telefono: '777777777',
  }
]

const User = {
  nombre: '',
  apellidos: '',
  correo: '',
  password: '',
  rol: '',
  estado: '',
  imagen: '',
  telefono: ''
};
const UserWithId = {
  ...User,
  id: '',
};


export const UserSlice = createSlice({
  name: 'users',
  initialState: DEFAULT_USERS,
  reducers: {
    deleteUserById: (state, action) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    }
  }
})


export const { deleteUserById } = UserSlice.actions;
