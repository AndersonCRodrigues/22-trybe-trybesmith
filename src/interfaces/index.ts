export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}

export interface IProdCreate {
  affectedRows: number,
  fieldCount: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus: number
}

export interface ICreated {
  id: number,
  name: string,
  amount: string
}