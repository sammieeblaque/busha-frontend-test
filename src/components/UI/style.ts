import styled from "styled-components";

// Side bar
export const Sidebar = styled.div`
  width: 30rem; /* 48 units in Tailwind */
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;
`;

export const MenuItem = styled.div<{ active: boolean }>`
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 0.375rem; /* Tailwind's rounded */
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "rgba(243, 244, 246)" : "transparent"}; /* bg-gray-100 */

  &:hover {
    background-color: ${(props) =>
      props.active
        ? "rgba(243, 244, 246)"
        : "rgba(249, 250, 251)"}; /* hover:bg-gray-50 */
  }
`;

// Header
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem; /* Equivalent to p-4 */
  border-bottom: 1px solid #e5e7eb; /* Equivalent to border-b (gray-200) */
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  color: #16a34a; /* Equivalent to text-green-600 */
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 700; /* Equivalent to font-bold */
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Equivalent to gap-2 */
  background-color: #f3f4f6; /* Equivalent to bg-gray-100 */
  padding: 0.5rem 1rem; /* Equivalent to px-4 py-2 */
  border-radius: 9999px; /* Equivalent to rounded-full */
`;

export const Avatar = styled.div`
  width: 2rem; /* Equivalent to w-8 */
  height: 2rem; /* Equivalent to h-8 */
  background-color: #e5e7eb; /* Equivalent to bg-gray-300 */
  border-radius: 9999px; /* Equivalent to rounded-full */
`;

export const Name = styled.span`
  font-size: 1rem; /* Default size */
`;

// Wallet Card

export const CardContainer = styled.div`
  background-color: black;
  color: white;
  padding: 1.5rem; /* Equivalent to p-6 */
  border-radius: 1rem; /* Equivalent to rounded-xl */
  width: 20rem; /* Equivalent to w-80 */
  position: relative;
  overflow: hidden;
  height: 10rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Equivalent to gap-2 */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
`;

export const IconWrapper = styled.div<{ iconColor: string }>`
  width: 2rem; /* Equivalent to w-8 */
  height: 2rem; /* Equivalent to h-8 */
  background-color: ${(props) => props.iconColor || "gray"};
  border-radius: 9999px; /* Equivalent to rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Currency = styled.span``;

export const Amount = styled.div`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: bold; /* Equivalent to font-bold */
`;

export const Button = styled.button`
  position: absolute;
  bottom: 1rem; /* Equivalent to bottom-4 */
  right: 1rem; /* Equivalent to right-4 */
  padding: 0.5rem; /* Equivalent to p-2 */
  background-color: transparent;
  border: none;
  border-radius: 9999px; /* Equivalent to rounded-full */
  cursor: pointer;

  &:hover {
    background-color: #2d2d2d; /* Equivalent to hover:bg-gray-800 */
  }
`;
