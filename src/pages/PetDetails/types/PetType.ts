export interface OrgType {
  id: string
  nome: string
  address: string
  cep: string
  whatsappNumber: string
}

export interface PetType {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: string
  photo: string
  orgId: string
  org: OrgType
  photo_url: string
}
