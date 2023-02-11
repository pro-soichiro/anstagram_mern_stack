import styled from "styled-components";

const Description = styled.p`
  text-align: center;
`

const Home = () => {

  return (
    <div className="container">

      <h1 className="page-title">anstagram</h1>
      <Description>これはアン・コンサルティングで働くメンバーのプロフィール帳です！</Description>
    </div>
  );
}


export default Home;