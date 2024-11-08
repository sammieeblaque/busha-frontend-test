import React from "react";
import { BTCIcon, ETHIcon, LTCIcon, NGNIcon } from "../bu-icons.tsx";
import WalletCard from "../ui/bu-wallet-card";
import Modal from "./Modal";
import { AddButton, Container, GridContainer, Header, Title } from "./style";

const LayoutContainer = () => {
  const wallets = [
    {
      currency: "Naira",
      symbol: <NGNIcon />,
      amount: "N 105,160,076.51",
    },
    {
      currency: "Bitcoin",
      symbol: <BTCIcon />,
      amount: "10.36490987 BTC",
    },
    {
      currency: "Ethereum",
      symbol: <ETHIcon />,
      amount: "10.36490987 ETH",
    },
    {
      currency: "Litecoin",
      symbol: <LTCIcon />,
      amount: "10.36490987 LTC",
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
