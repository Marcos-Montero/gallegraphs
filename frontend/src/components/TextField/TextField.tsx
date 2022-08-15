import { Key, TextFieldContainer, Value } from './style'

export const TextField = ({ k, v }: { k: string; v: string }) => {
  return (
    <TextFieldContainer>
      <Key>{k}:</Key>
      <Value>{v}</Value>
    </TextFieldContainer>
  )
}
