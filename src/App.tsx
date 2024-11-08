import styled from "styled-components";
import LayoutContainer from "./components/shared/Layout";
import Header from "./components/ui/bu-header";
import SideBar from "./components/ui/bu-sidebar";

const Container = styled.div`
  min-height: 100vh; /* Equivalent to min-h-screen */
  background-color: white;
  padding: 0px 120px; /* Equivalent to bg-white */
`;

const MainWrapper = styled.div`
  display: flex; /* Equivalent to flex */
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <MainWrapper>
          <SideBar />
          <LayoutContainer />
        </MainWrapper>
      </Container>
    </>
  );
}

export default App;
