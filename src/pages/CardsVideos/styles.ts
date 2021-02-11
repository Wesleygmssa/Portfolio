import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: #fff;
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const FilmList = styled.div`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  width: 100%;
  font-family: 'Lato';
  display: flex;
  flex-direction: column;



  a {
    text-decoration: none;
    display: flex;
    width: 100%;
    border-radius: 4px;
    padding: 10px;

    & + a {
      padding: 10px;
      margin-top: 15px;
      display: flex;
    }
  }
`;

export const FilmBox = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  border: 4px solid #0000;
  transition: all 0.5s;


 &:hover{
  border: 4px solid #116193;
 }

`;


export const Poster = styled.img`
  display: flex;
  max-width: 200px;
  height: 100%;
  bottom: 0px;
  width:100%;

`;

export const Info = styled.div`
  flex: 1;
  flex-direction: column;
`;


export const Title = styled.h1`
width: 100%;
  background: #116193;
  font-family: 'Abel';
  font-weight: lighter;
  font-size: 40px;
  width: 100%;
  /* padding: 10px 95px; */
  color: #00e8e4;
`;

export const Rate = styled.h3`
  margin-top: 10px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  background: #116193;
  border-radius: 50%;
  border: 5px solid #00e8e4;
  box-shadow: 0px 0px 0px 3px #116193;
  padding-left: 1px;
  color: #00e8e4;
`;

export const Date = styled.h2`
  margin-top: -20px;
  margin-left: 95px;
  font-size: 19px;
  font-weight: lighter;
  color: #999;
`;

export const Overview = styled.div`
  margin: 25px 15px;
  color: #777;
  font-size: 17px;
  font-weight: normal;

  p{
      width: 100%;
  }
`;
