import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
  width: window.innerWidth,
  breakPointNavigation: 1279,
  breakPointUserMenu: 767,
  isModalOpen: false,
  isModalOpenTask: false,
  modalName: "header",
};

const useModal = () => {
  const [stateModal, setOptionModal] = useState(initialState);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    location && closeModalOnLocation();
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const closeModalOnLocation = () =>
    setOptionModal((prev) => ({ ...prev, isModalOpen: false }));

  const handleResizeWindow = () =>
    setOptionModal((prev) => ({ ...prev, width: window.innerWidth }));

  const setOpenModal = () =>
    setOptionModal((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));

  const setOpenModalTask = () =>
    setOptionModal((prev) => ({
      ...prev,
      isModalOpenTask: !prev.isModalOpenTask,
    }));

  return [stateModal, setOpenModal, setOpenModalTask, setOptionModal];
};

export default useModal;
