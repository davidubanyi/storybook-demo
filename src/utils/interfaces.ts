/**
 * [QuestionOption description]
 */
export interface QuestionOption {
    id: string
    value: string
    label: string
    selected: boolean
    correct?: boolean
    answered?: boolean
  }