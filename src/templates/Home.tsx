import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Simulator from '@element/Simulator/Wrapper'
import Statistics from '@module/Statistics/List'

const App = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Simulator>
        <Statistics />
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
