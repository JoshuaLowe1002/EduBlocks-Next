import { ref } from "vue";

type Modals = "" | "PlatformSelect" | "Settings" | "LoginModal" | "FilesModal";

export const currentModal = ref<Modals>("");

export const openModal: Function = (modal: Modals) => {
  currentModal.value = "";
  currentModal.value = modal;
};

export const closeModal: Function = () => {
  currentModal.value = "";
};
