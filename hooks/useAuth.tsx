import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLodaing] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const authStatus = await AsyncStorage.getItem("auth_status");
      setIsAuth(authStatus === "true");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLodaing(false);
    }
  };

  const login = async () => {
    try {
      await AsyncStorage.setItem("auth_status", "true");
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem("auth_status", "false");
      setIsAuth(false);
    } catch (err) {
      console.error(err);
    }
  };

  return { isAuth, login, logout, isLoading };
};

export type AuthContextType = ReturnType<typeof useAuth>;
