import React from "react";
import { IAccounts } from "../../@types";
import { useFetchWallet } from "../../api";
import { NetworkErrorIcon } from "../bu-icons.tsx";
import AddAccountModal from "../ui/bu-account-modal";
import WalletCard from "../ui/bu-wallet-card";
import Loader from "./Loader";
import {
  AddButton,
  Container,
  GridContainer,
  Header,
  ModalButton,
  Title,
} from "./style";

const LayoutContainer = () => {
  const { data, isLoading, error } = useFetchWallet();

  const wallets: IAccounts[] = data;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const closeModal = () => setIsOpen(false);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "25%",
          marginTop: "10%",
        }}
      >
        <Loader />;
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "25%",
          marginTop: "10%",
        }}
      >
        <NetworkErrorIcon />
        Network Error
        <ModalButton>Try Again</ModalButton>
      </div>
    );
  }
  return (
    <>
      <Container>
        <Header>
          <Title>Wallets</Title>
          <AddButton onClick={() => setIsOpen((prev) => !prev)}>
            + Add new wallet
          </AddButton>
        </Header>
        <GridContainer>
          {wallets?.map((wallet) => (
            <WalletCard key={wallet.id} {...wallet} />
          ))}
        </GridContainer>
      </Container>
      <AddAccountModal isOpen={isOpen} setIsOpen={closeModal} />
    </>
  );
};

export default LayoutContainer;
