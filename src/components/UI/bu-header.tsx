import {
  Avatar,
  Container,
  LeftSection,
  Name,
  RightSection,
  Title,
} from "./style";

const Header = () => {
  return (
    <Container>
      <LeftSection>
        <Title>:herb: busha</Title>
      </LeftSection>
      <RightSection>
        <Avatar />
        <Name>Oluwatobi Akindunjoye</Name>
      </RightSection>
    </Container>
  );
};

export default Header;
