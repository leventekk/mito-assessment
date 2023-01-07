import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Simulator from '@element/Simulator/Wrapper'
import Statistics from '@module/Statistics/List'
import Numbers from '@module/Numbers/Numbers'
import Summary from '@module/Summary/Summary'
import Slider from '@module/Speed/Slider'

const App = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Simulator>
        <Statistics />
        <Numbers />
        <Summary />
        <Slider />
      </Simulator>
    </Container>
  </>
)
export default App
