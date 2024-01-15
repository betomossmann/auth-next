import { CardWrapper } from './card-wrapper'

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login"
      children={undefined}
    />
  )
}
