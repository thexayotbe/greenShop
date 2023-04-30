import React from "react";
import { useSelector } from "react-redux";
import AuthSection from "../AuthSection";
import OrderModal from "../OrderModal";

const ModalController = () => {
  const { authModalVisibility, orderModalVisibility } = useSelector(
    (state) => state.modal
  );
  return (
    <>
      {/* Contolling auth : login & signup */}
      {authModalVisibility && <AuthSection />}
      {orderModalVisibility && <OrderModal />}
      {}
    </>
  );
};

export default ModalController;
