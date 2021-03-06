import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  letter-spacing: 2px;
  align-items: center;

  h2 {
    margin: 20px 0 0 0;
    font-size: 35px;
    color: var(--fc-primary);
    border-bottom: 2px solid var(--fc-primary);
  }

  p {
    margin: 10px 0 20px 0;
    color: var(--fc-secondary);
    font-weight: 600;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    min-width: 320px;
    gap: 10px;

    label {
      color: var(--fc-primary);
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 24px;
      text-align: left;
    }

    input {
      height: 30px;
      font-size: 18px;
      font-family: "Helvetica Neue", sans-serif;
      letter-spacing: 3px;
      border: 1px solid var(--fc-primary);
      border-radius: 10px;
      margin: 0px 0 16px 0;
      padding: 10px;
      background-color: #ffffff;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    }

    .container {
      display: flex;

      .ingredientLi {
        padding: 0;
        margin: 0;
        align-content: center;
        list-style: none;
        input {
          width: 360px;
        }
      }
    }
  }

  .textarea {
    min-height: 300px;
    font-size: 18px;
    font-family: "Helvetica Neue", sans-serif;
    letter-spacing: 3px;
    border: 1px solid var(--fc-primary);
    border-radius: 10px;
    margin: 0px 0 16px 0;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      color: var(--fc-secondary);
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 50px;
    cursor: pointer;
    margin-top: 15px;
    color: var(--bg-primary);
    background-color: var(--fc-primary);
    font-family: "Merriweather", sans-serif;
    letter-spacing: 3px;
    font-size: 21px;
    font-weight: bolder;
    border-radius: 50px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    &::after {
      transition: transform ease-in;
    }
  }

  .add-recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .option__box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  .checkbox {
    margin-top: 10px;
    width: 30px;
  }

  .change-form {
    letter-spacing: 2px;
    margin-top: 25px;
    margin-bottom: 40px;
    font-size: 16px;
    &__link {
      color: var(--red);
      font-weight: bold;
    }
  }
`;

export default StyledForm;
