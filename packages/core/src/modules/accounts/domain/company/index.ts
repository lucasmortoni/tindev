export type CompanyProps = {
  id?: string
  avatar_url?: string
  name: string
  username: string
  email: string
  password: string
}

export class Company {
  props: CompanyProps

  private constructor(props: CompanyProps) {
    this.props = props
  }

  static create(props: CompanyProps): Company {
    const company = new Company(props)
    return company
  }
}
