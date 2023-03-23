/* eslint-disable no-unused-vars */
export enum URLS {
  LISTA_ESTADOS = '/location/states',
  LISTA_CIDADE_POR_ESTADO = 'location/citys/:UF',
  LISTA_PETS = 'pets/:city',
  PET_DETAILS = 'pets/show/:pet_id',
  PET_GALLERY = 'pets/gallery/:pet_id',
  COORDINATES = '/location/coordinates/:cep',
}
