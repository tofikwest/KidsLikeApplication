import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
  width: window.innerWidth,
  breakPointNavigation: 1279,
  breakPointUserMenu: 767,
  isModalOpen: false,
  modalName: "header",
};

const useModal = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    location && closeModalOnLocation();
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const closeModalOnLocation = () => {
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const setOpenModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };

  return [state, setOpenModal];
};

export default useModal;

// ????????????????????????instruction how to use modal?????????????????????????????

// import useHeaderModal from "../../hooks/useModal";
// import Modal from "../../components/Modal/Modal";

// const ContactsPage = () => {
//   const [state, setOpenModal] = useHeaderModal();

//   return (
//     <>
//       <h3 onClick={setOpenModal}>test modal</h3>;

//       {state.isModalOpen && (
//         <Modal handleCloseModal={setOpenModal}>
//           <h2>very-good</h2>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
//           </p>
//         </Modal>
//       )}
//     </>
//   );
// };
// export default ContactsPage;
