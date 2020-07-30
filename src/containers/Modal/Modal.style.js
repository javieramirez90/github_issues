import styled from 'styled-components';

const MainModal =  styled.div`
  display: ${props => props.hide ? 'none' : 'block'};
  width: 40%;
  padding: 50px;
  background-image: url('https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  position: relative;
  z-index: 1000;
  color: white;
  >h2 {
    font-size:2em;
    font-weight: bolder;
    margin-bottom: 5%;
  }
  >p {
    margin-bottom: 5%;
  }
  >div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  >div a {
    text-decoration: none;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: lightgrey;
    border-radius: 5%;
  }
  >div button {
    text-decoration: none;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: #CA3433;
    border-radius: 5%;
  }
`;


export { MainModal };