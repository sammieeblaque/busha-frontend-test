import React from "react";
import { IAccounts } from "../../@types";
import { ArrowIcon } from "../bu-icons.tsx";
import {
  Amount,
  Button,
  CardContainer,
  Currency,
  Header,
  IconWrapper,
} from "./style";

import { BTCIcon, ETHIcon, LTCIcon, NGNIcon } from "../bu-icons.tsx";

const wallets = [
  {
    currency: "Naira",
    symbol: <NGNIcon />,
  },
  {
    currency: "Bitcoin",
    symbol: <BTCIcon />,
  },
  {
    currency: "Ethereum",
    symbol: <ETHIcon />,
  },
  {
    currency: "Litecoin",
    symbol: <LTCIcon />,
  },
];

const WalletCard = ({ currency, balance, name }: IAccounts) => {
  return (
    <CardContainer>
      <Header>
        <IconWrapper>
          {wallets.find((wal) => wal.currency === name)?.symbol}
        </IconWrapper>
        <Currency>{currency}</Currency>
      </Header>
      <Amount>
        {name === "Naira"
          ? Number(balance).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          : balance}{" "}
        {currency}
      </Amount>
      <Button>
        <ArrowIcon />
      </Button>
    </CardContainer>
  );
};

export default WalletCard;
