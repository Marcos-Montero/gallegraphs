import logoGallega from '../../assets/gallega.png'

import { IconContainer } from './style'

export const Header = () => {
  return (
    <>
      <IconContainer>
        <img src={logoGallega} alt="logo La Gallega" width={100} />
        <h1>La Gallegraphs</h1>
      </IconContainer>
    </>
  )
}
