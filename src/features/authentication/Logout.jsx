import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../../hooks/auth/useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import ConfirmLogout from "../../ui/ConfirmLogout";
import Modal from "../../ui/Modal";

export default function Logout() {
  const { logout, isPendingLogout } = useLogout();

  return (
    <Modal>
      <Modal.Open show="logout">
        <ButtonIcon>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </Modal.Open>

      <Modal.Window name="logout">
        <ConfirmLogout disabled={isPendingLogout} onConfirm={logout} />
      </Modal.Window>
    </Modal>
  );
}
