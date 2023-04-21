"use client";
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";

const SearchModal = () => {
  const searchModal = useSearchModal();
  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title="Filters"
      actionLabel="Searchs"
    />
  );
};

export default SearchModal;
