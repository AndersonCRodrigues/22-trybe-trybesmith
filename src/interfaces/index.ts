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