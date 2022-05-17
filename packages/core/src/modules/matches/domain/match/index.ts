export type MatchProps = {
  id?: string
  user_id: string
  user_liked: boolean
  company_id: string
  company_liked: boolean
}

export class Match {
  props: MatchProps

  private constructor(props: MatchProps) {
    this.props = props
  }

  static create(props: MatchProps): Match {
    const match = new Match(props)
    return match
  }
}
