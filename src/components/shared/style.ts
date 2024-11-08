import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem; /* Equivalent to p-6 */
  background-color: #f9fafb; /* Equivalent to bg-gray-50 */
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`;

export const Title = styled.h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: bold; /* Equivalent to font-bold */
`;

export const AddButton = styled.button`
  color: #2563eb; /* Equivalent to text-blue-600 */
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
