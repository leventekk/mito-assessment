import { GlobalStyles } from '@module/Theme/Theme'
import Container from '@element/Grid/Container'
import Title from '@element/Text/Title'
import Content from '@element/Content/Content'
import Statistics from '@module/Statistics/List'
import Numbers from '@module/Numbers/Numbers'
import Summary from '@module/Summary/Summary'
import Slider from '@module/Speed/Speed'
import Action from '@module/Action/Action'
import Iterator from '@module/Iterator/Iterator'

const Home = (): React.ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      <Title>Lottery Simulator</Title>
      <Iterator>
        <Content>
          <Statistics />
          <Numbers />
          <Summary />
          <Slider />
          <Action />
        </Content>
      </Iterator>
    </Container>
  </>
)
export default Home
