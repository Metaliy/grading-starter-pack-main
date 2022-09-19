import styled from 'styled-components';

const Container = styled.div `
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;


  &::after{
  animation: changeContent .8s linear infinite;
  display: block;
  content: "⠋";
  font-size: 80px;

}
`;

export {Container};
