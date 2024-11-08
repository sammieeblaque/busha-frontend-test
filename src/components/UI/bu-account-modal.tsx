import Modal from "../shared/Modal";
import {
  ButtonWrapper,
  CloseButton,
  Description,
  DescriptionText,
  Label,
  ModalButton,
  ModalHeader,
  ModalInnerContainer,
  ModalTitle,
  Select,
  SelectContainer,
} from "../shared/style";

const AddAccountModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  const dropdownMenu = [
    {
      currency: "XLM",
      name: "Stellar",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000381/alice_v3/XLM.svg",
    },
    {
      currency: "LTC",
      name: "Litecoin",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/LTC.svg",
    },
    {
      currency: "RMT",
      name: "SureRemit",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/RMT.svg",
    },
    {
      currency: "USDT",
      name: "Tether",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000381/alice_v3/USDT.svg",
    },
    {
      currency: "XRP",
      name: "Ripple",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1606747749/alice_v3/XRP.svg",
    },
    {
      currency: "DOGE",
      name: "Dogecoin",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1619043964/alice_v3/DOGE.svg",
    },
    {
      currency: "TRX",
      name: "TRON",
      type: "digital",
      imgURL:
        "https://res.cloudinary.com/dwoc5fknz/image/upload/v1600068604/alice_v3/TRX.svg",
    },
  ];
  return (
    <Modal isOpen={isOpen}>
      <ModalInnerContainer>
        <ModalHeader>
          <ModalTitle>Add new wallet</ModalTitle>
          <CloseButton
            onClick={setIsOpen}
            data-testid="close-button"
            aria-label="Close button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4834 12.9889C16.1722 13.6777 16.1722 14.7946 15.4834 15.4834C14.7946 16.1722 13.6777 16.1722 12.9889 15.4834L8 10.4945L3.01108 15.4834C2.32225 16.1722 1.20545 16.1722 0.51662 15.4834C-0.172207 14.7946 -0.172207 13.6777 0.51662 12.9889L5.50554 8L0.51662 3.01108C-0.172207 2.32225 -0.172207 1.20545 0.51662 0.51662C1.20545 -0.172207 2.32225 -0.172207 3.01108 0.51662L8 5.50554L12.9889 0.51662C13.6777 -0.172207 14.7946 -0.172207 15.4834 0.51662C16.1722 1.20545 16.1722 2.32225 15.4834 3.01108L10.4945 8L15.4834 12.9889Z"
                fill="black"
              />
            </svg>
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
          <Select aria-roledescription="combobox" id="selectId">
            <option value="" style={{ color: "#3E4C59", fontWeight: "bold" }}>
              Select a wallet
            </option>
            {dropdownMenu.map((wallet, index) => (
              <option key={index} value={wallet.currency}>
                {wallet.name}
              </option>
            ))}
          </Select>
        </SelectContainer>

        <ButtonWrapper>
          <ModalButton>{"Create wallet"}</ModalButton>
        </ButtonWrapper>
      </ModalInnerContainer>
    </Modal>
  );
};

export default AddAccountModal;
