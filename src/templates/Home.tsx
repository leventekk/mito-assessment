import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Content from '@element/Content/Content'
import Statistics from '@module/Statistics/List'
import Numbers from '@module/Numbers/Numbers'
import Summary from '@module/Summary/Summary'
import Slider from '@module/Speed/Slider'
import Action from '@module/Action/Action'

const Home = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Content>
        <Statistics />
        <Numbers />
        <Summary />
        <Slider />
        <Action />
      </Content>
    </Container>
  </>
)
export default Home
