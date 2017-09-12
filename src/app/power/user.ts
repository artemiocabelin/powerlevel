export class User {
  constructor(
    public id: number = null,
    public power: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}