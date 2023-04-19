"use client";

import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      isOpen={rentModal.isOpen}
      title="Airbnb Your Home"
    />
  );
};

export default RentModal;
