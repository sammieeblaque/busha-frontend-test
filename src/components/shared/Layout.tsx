import WalletCard from "../UI/bu-wallet-card";
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
  return (
    <Container>
      <Header>
        <Title>Wallets</Title>
        <AddButton>+ Add new wallet</AddButton>
      </Header>
      <GridContainer>
        {wallets.map((wallet) => (
          <WalletCard key={wallet.currency} {...wallet} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default LayoutContainer;
