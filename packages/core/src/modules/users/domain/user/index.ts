export type UserProps = {
  id?: string
  avatar_url: string
  name: string
  surname: string
  username: string
  email: string
  password: string
}

export class User {
  props: UserProps

  private constructor(props: UserProps) {
    this.props = props
  }

  static create(props: UserProps): User {
    const user = new User(props)
    return user
  }
}
