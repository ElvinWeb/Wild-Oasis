import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "../ui/SpinnerMini";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export default function ConfirmLogout({ onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading type="h3">Logout</Heading>
      <p>Are you sure you want to logout?</p>
      <div>
        <Button
          variation="secondary"
          onClick={onCloseModal}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          {!disabled ? "Log out" : <SpinnerMini />}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}
