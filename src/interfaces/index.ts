export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}

export interface ICreated {
  affectedRows: number,
  fieldCount: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus: number
}

export interface IProdCreated {
  id: number,
  name: string,
  amount: string
}

export interface ICharacter {
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface IUser {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface IUpdate {
  userId: number,
  productsIds: number[],
}