import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem; /* Equivalent to p-6 */
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const Title = styled.h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: bold; /* Equivalent to font-bold */
`;

export const AddButton = styled.div`
  /* color: #2563eb; */
  cursor: pointer;
  color: black;
  font-weight: bold;
  &:hover {
    color: #1d4ed8; /* Equivalent to hover:text-blue-700 */
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default for small screens */
  gap: 1rem; /* Equivalent to gap-4 */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Equivalent to md:grid-cols-2 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Equivalent to lg:grid-cols-3 */
  }
`;

// Modal

export const ModalInnerContainer = styled.div`
  padding-left: 1.75rem; /* Equivalent to px-7 */
  padding-right: 1.75rem; /* Equivalent to px-7 */
  padding-top: 3rem; /* Equivalent to py-[80px] */
  padding-bottom: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem; /* Equivalent to text-[24px] */
  color: black;
`;

export const CloseButton = styled.span`
  cursor: pointer;
`;

export const Description = styled.div`
  margin-top: 1.25rem; /* Equivalent to mt-5 */
  display: flex;
  align-items: center;
`;

export const DescriptionText = styled.p`
  font-size: 0.9375rem; /* Equivalent to text-[15px] */
  font-weight: 400;
  color: #3e4c59; /* Equivalent to text-[#3E4C59] */
`;

export const SelectContainer = styled.div`
  margin-top: 1.25rem; /* Equivalent to mt-5 */
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Equivalent to gap-3 */
`;

export const Label = styled.label`
  font-size: 1rem; /* Equivalent to text-[16px] */
  color: #3e4c59; /* Equivalent to text-[#3E4C59] */
`;

export const Select = styled.select`
  height: 4rem; /* Equivalent to h-[64px] */
  width: 100%; /* Full width */
  border-radius: 0.25rem; /* Equivalent to rounded-sm */
  border: 1px solid #cbd2d9; /* Equivalent to border-[#CBD2D9] */
  padding-left: 0.75rem; /* Equivalent to px-3 */
  padding-right: 0.75rem; /* Equivalent to px-3 */
  cursor: pointer;
  font-weight: 400;
  font-size: inherit;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.25rem; /* Equivalent to mt-5 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  height: 3.375rem; /* Equivalent to h-[54px] */
  width: 15rem; /* Equivalent to w-[180px] */
  border-radius: 9999px; /* Equivalent to rounded-full */
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 5px;

  &:disabled {
    background-color: #cccccc; /* Disabled state color */
    cursor: not-allowed;
  }
`;
