import { getInitials } from "../../utils";
import { BushaLogo } from "../bu-icons.tsx";
import {
  Avatar,
  Container,
  LeftSection,
  Name,
  RightSection,
  Title,
} from "./style";

const Header = () => {
  const name = "Oluwatobi Akindunjoye";
  return (
    <Container>
      <LeftSection>
        <Title>
          <BushaLogo />
        </Title>
      </LeftSection>
      <RightSection>
        <Avatar>{getInitials(name)}</Avatar>
        <Name>{name}</Name>
      </RightSection>
    </Container>
  );
};

export default Header;
