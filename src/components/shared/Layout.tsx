import React from "react";
import { IAccounts, IWallets } from "../../@types";
import { useCreateWallet, useFetchAccounts, useFetchWallets } from "../../api";
import { CloseIcon, ErrorIcon, NetworkErrorIcon } from "../bu-icons.tsx";

import WalletCard from "../ui/bu-wallet-card";
import Loader from "./Loader";
import Modal from "./Modal";
import {
  AddButton,
  Container,
  GridContainer,
  Header,
  ModalButton,
  Title,
  ButtonWrapper,
  CloseButton,
  Description,
  DescriptionText,
  Label,
  ModalHeader,
  ModalInnerContainer,
  ModalTitle,
  Select,
  SelectContainer,
} from "./style";

const LayoutContainer = () => {
  const { data, isLoading, error, refetch } = useFetchAccounts();
  const wallets: IAccounts[] = data;

  const {
    data: walletData,
    isLoading: isWalletLoading,
    error: walletError,
    refetch: walletRefetch,
  } = useFetchWallets();

  const dropdownMenu: IWallets[] = walletData;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState(false);

  const [selectedCurrency, setSelectedCurrency] = React.useState("");

  const {
    mutate: createWallet,
    isLoading: createWalletLoading,
  } = useCreateWallet();

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
        <ModalButton onClick={() => refetch()}>Try Again</ModalButton>
      </div>
    );
  }
  if (isWalletLoading) {
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

  if (walletError) {
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
        <ModalButton onClick={() => walletRefetch()}>Try Again</ModalButton>
      </div>
    );
  }

  const onSubmitWalletCreation = () => {
    createWallet(selectedCurrency, {
      onSuccess: () => {
        setIsOpen(false);
      },
      onError: () => {
        setIsError(true);
      },
    });
  };
  return (
    <Container>
      <Header>
        <Title>Wallets</Title>
        <AddButton onClick={() => setIsOpen(true)}>+ Add new wallet</AddButton>
      </Header>
      <GridContainer>
        {wallets?.map((wallet) => (
          <WalletCard key={wallet.id} {...wallet} />
        ))}
      </GridContainer>
      <Modal isOpen={isOpen}>
        <ModalInnerContainer>
          <ModalHeader>
            <ModalTitle>Add new wallet</ModalTitle>
            <CloseButton
              onClick={() => setIsOpen(false)}
              data-testid="close-button"
              aria-label="Close button"
            >
              <CloseIcon />
            </CloseButton>
          </ModalHeader>

          <Description>
            <DescriptionText>
              The crypto wallet will be created instantly <br />
              and be available in your list of wallets.
            </DescriptionText>
          </Description>

          <SelectContainer>
            <Label htmlFor="selectId">Select wallet</Label>
            <Select
              aria-roledescription="combobox"
              id="selectId"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="" style={{ color: "#3E4C59", fontWeight: "bold" }}>
                Select a wallet
              </option>
              {dropdownMenu?.map((wallet, index) => (
                <option key={index} value={wallet.currency}>
                  {wallet.name}
                </option>
              ))}
            </Select>
          </SelectContainer>

          <ButtonWrapper>
            <ModalButton onClick={onSubmitWalletCreation}>
              {createWalletLoading ? "Creating wallet" : "Create wallet"}
            </ModalButton>
          </ButtonWrapper>

          {isError ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "100px",
                padding: "0.7rem 0.5rem",
                border: "1px solid #E0B3B2",
                color: "#D72C0D",
                borderRadius: "8px",
                background: "#FEF4F5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <ErrorIcon />
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Network Error
                </div>
              </div>
              <div
                onClick={() => setIsError(false)}
                style={{ cursor: "pointer" }}
              >
                <CloseIcon width="10" color="#D72C0D" />
              </div>
            </div>
          ) : null}
        </ModalInnerContainer>
      </Modal>{" "}
    </Container>
  );
};

export default LayoutContainer;
