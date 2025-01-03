import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color:${(props) => props.theme.mainColor};
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: ${(props) => props.theme.mainColor}; /* Change this color to your desired checkbox color */
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  &:active{
    outline: none;
    border: 0px;

  }
  `;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  input[type="radio"] {
    margin-right: 8px;
    accent-color:${(props) => props.theme.mainColor}; /* Change this color to your desired radio button color */
  }
`;
