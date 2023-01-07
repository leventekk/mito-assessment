import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Simulator from '@element/Simulator/Wrapper'
import Statistics from '@module/Statistics/List'
import Numbers from '@module/Numbers/Numbers'

const App = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Simulator>
        <Statistics />
        <Numbers />
        <div>summary</div>
        <div>slider</div>
      </Simulator>
    </Container>
  </>
)
export default App
