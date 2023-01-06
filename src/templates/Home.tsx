import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Simulator from '@element/Simulator/Wrapper'

const App = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Simulator>
        <div>Statistics</div>
        <div>
          <div>numbers 1</div>
          <div>numbers 2</div>
        </div>
        <div>summary</div>
        <div>slider</div>
      </Simulator>
    </Container>
  </>
)
export default App
