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
  font-weight: 700;
  margin-bottom: 10px;
  color: ${(props) => props.theme.mainColor};
  font-size: 14px;
  letter-spacing: 0.2px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  input[type="checkbox"] {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.mainColor};
    cursor: pointer;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.mainColor}40;
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
  padding: 6px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  input[type="radio"] {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.mainColor};
    cursor: pointer;
  }
`;
