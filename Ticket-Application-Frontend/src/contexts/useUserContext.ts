import { ref, readonly } from "vue";

export default function useUserContext() {
  const isAuthenticated = ref(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const username = ref(localStorage.getItem("username") || "");
  const userId = ref(localStorage.getItem("userId") || "");

  function setUser(userData: { username: string; userId: string }) {
    isAuthenticated.value = true;
    username.value = userData.username;
    userId.value = userData.userId;

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", userData.username);
    localStorage.setItem("userId", userData.userId);
  }

  function clearUser() {
    isAuthenticated.value = false;
    username.value = "";
    userId.value = "";

    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
  }

  return {
    isAuthenticated: readonly(isAuthenticated),
    username: readonly(username),
    userId: readonly(userId),
    setUser,
    clearUser,
  };
}
