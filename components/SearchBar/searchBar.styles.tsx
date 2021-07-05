import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-image: url(https://cdn.pixabay.com/photo/2017/06/26/08/43/ribblehead-viaduct-2443085_960_720.jpg);
  background-repeat: no-repeat;
  background-size: 2000px 1000px;
  @media (max-width: 768px) {
    background-image: url();
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2vh;
  justify-content: center;
  align-items: center;
  background-color: #556270; /* For browsers that do not support gradients */
  background-image: linear-gradient(to bottom right, #4ecdc4, #556290);
  box-shadow: 5px 5px 5px 5px #888888;
  border-radius: 10px;
  height: 20vh;
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: inherit;
    width: 100%;
  }
`;

export const InnerSection = styled.div`
  width: 28vh;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const HeadingLabel = styled.label`
  font-size: 60px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #036d75;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const InputField = styled.input`
  height: 5.2vh;
  width: inherit;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
`;

export const SearchButton = styled.input`
  height: 5.2vh;
  width: 80%;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  background-color: #c4daf0;
`;

export const TextLabel = styled.label`
  color: #050065;
  font-weight: bold;
`;
