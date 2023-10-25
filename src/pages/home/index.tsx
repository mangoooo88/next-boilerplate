import styled from "styled-components";

interface IText {
  $weight: string
}

const Text = styled.p<IText>`
  font-weight: ${props => props.$weight}
}`

function Index() {

  return (
    <div>
      <p>홈 홈 홈 홈 홈</p>
      <br/>
      <br/>
      <br/>
      <Text $weight="400">레귤러 텍스트</Text>
      <Text $weight="600">볼드 텍스트</Text>
    </div>
  );
}

export default Index;