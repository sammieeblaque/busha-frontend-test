import {
  Amount,
  Button,
  CardContainer,
  Currency,
  Header,
  IconWrapper,
} from "./style";

export interface WalletProps {
  currency: string;
  symbol: string;
  amount: string;
  iconColor: string;
}

const WalletCard = ({ currency, symbol, amount, iconColor }: WalletProps) => {
  return (
    <CardContainer>
      <Header>
        <IconWrapper iconColor={iconColor}>{symbol}</IconWrapper>
        <Currency>{currency}</Currency>
      </Header>
      <Amount>{amount}</Amount>
      <Button>{/* <ChevronRight size={20} /> */}</Button>
    </CardContainer>
  );
};

export default WalletCard;
