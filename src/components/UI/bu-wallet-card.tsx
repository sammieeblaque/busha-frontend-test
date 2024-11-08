import React from "react";
import { ArrowIcon } from "../bu-icons.tsx";
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
  symbol: React.ReactNode;
  amount: string;
}

const WalletCard = ({ currency, symbol, amount }: WalletProps) => {
  return (
    <CardContainer>
      <Header>
        <IconWrapper>{symbol}</IconWrapper>
        <Currency>{currency}</Currency>
      </Header>
      <Amount>{amount}</Amount>
      <Button>
        <ArrowIcon />
      </Button>
    </CardContainer>
  );
};

export default WalletCard;
