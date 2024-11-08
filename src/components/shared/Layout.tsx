import React from "react";
import WalletCard from "../ui/bu-wallet-card";
import Modal from "./Modal";
import { AddButton, Container, GridContainer, Header, Title } from "./style";

const LayoutContainer = () => {
  const wallets = [
    {
      currency: "Naira",
      symbol: "N",
      amount: "N 105,160,076.51",
      iconColor: "bg-green-500",
    },
    {
      currency: "Bitcoin",
      symbol: "B",
      amount: "10.36490987 BTC",
      iconColor: "bg-orange-500",
    },
    {
      currency: "Ethereum",
      symbol: "E",
      amount: "10.36490987 ETH",
      iconColor: "bg-blue-500",
    },
    {
      currency: "Litecoin",
      symbol: "L",
      amount: "10.36490987 LTC",
      iconColor: "bg-blue-400",
    },
  ];

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Container>
      <Header>
        <Title>Wallets</Title>
        <AddButton onClick={() => setIsOpen((prev) => !prev)}>
          + Add new wallet
        </AddButton>
      </Header>
      <GridContainer>
        {wallets.map((wallet) => (
          <WalletCard key={wallet.currency} {...wallet} />
        ))}
      </GridContainer>

      <Modal isOpen={isOpen}>
        <span onClick={() => setIsOpen((prev) => !prev)}>close</span>
      </Modal>
    </Container>
  );
};

export default LayoutContainer;
