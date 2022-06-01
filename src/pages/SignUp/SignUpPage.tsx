import LogoComplete from "../../components/LogoComplete/LogoComplete";
import SignUpForm from "../../components/SignUp/SignUpForm";
import StyledFormsPage from "../../components/styles/StyledFormsPage";

export const SignUpPage = (): JSX.Element => {
  return (
    <StyledFormsPage>
      <LogoComplete />
      <SignUpForm />
    </StyledFormsPage>
  );
};
