import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const login = () => {
    AsyncStorage.setItem("token", "ssss");
    setIsAuth(true);
  };

  const logout = () => {
    AsyncStorage.clear();
    setIsAuth(false);
  };

  useEffect(() => {
    const token = AsyncStorage.getItem("token");
    if (!!token) {
      setIsAuth(true);
    }
  }, []);
  return { isAuth, login, logout };
};
