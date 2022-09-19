import styled from 'styled-components';
import { Link } from 'components/common/common';


const Main = styled.main `
max-width: 960px;
  width: 100%; 
  margin: 30px auto;
  transform: scale(0.8);
`;

const PageContent = styled.section `
	max-width: 960px;
  height: 475px;
  margin: 0;
  box-shadow: 0px 0px 8px 1px #ccc;
  background: #fafafa;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	text-align:center
`;

const Svg = styled.svg `
width: 50%;
max-height: 225px;
height: auto;
margin: 0 0 15px;
`;

const H1 = styled.h1 `
font-size: 48px;
margin: 0;
`;

const P = styled.p `
font-size: 16px;
width: 35%; 
margin: 16px auto 24px;
text-align: center;
`;
const BackLink = styled(Link) `
	border-radius: 50px;
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  background-color: #62AD9B;
  color: #fff;
  border: #62AD9B;
  box-shadow: 0 4px 8px 0 #ccc;
`;

export { Main, PageContent, Svg, H1, P, BackLink};
