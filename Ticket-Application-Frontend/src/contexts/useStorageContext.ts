import { ref, readonly } from "vue";

export default function useStorageContext() {
  function setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  function getItem(key: string) {
    return localStorage.getItem(key);
  }

  function removeItem(key: string) {
    localStorage.removeItem(key);
  }

  return {
    setItem,
    getItem,
    removeItem,
  };
}
