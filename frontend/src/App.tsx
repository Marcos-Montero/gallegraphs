import logoGallega from './assets/gallega.png'
import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const App = () => {
  return (
    <div className="App">
      <IconContainer>
        <img src={logoGallega} alt="logo La Gallega" width={100} />
      </IconContainer>
      <h1>La Gallega</h1>
    </div>
  )
}

export default App
