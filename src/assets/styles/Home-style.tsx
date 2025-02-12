import styled from 'styled-components';
document.body.style.overflowX = "hidden";
document.body.style.overflowY = "visible";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 10vh;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
`;

export const Title = styled.h2`
  display: flex;
  align-items: start;
  justify-content: center;
  /* position: fixed; */
  width: 99vw;
  top: 0vh;
  /* z-index: 1000; */
  /* height: 100vh; */
  padding: 0;
`;