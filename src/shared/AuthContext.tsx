// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useMemo,
//   useState,
// } from "react";

// type AuthContextValue = {
//   isSignedIn: boolean;
//   signIn: () => void;
//   signOut: () => void;
// };

// const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   const signIn = useCallback(() => {
//     setIsSignedIn(true);
//   }, []);

//   const signOut = useCallback(() => {
//     setIsSignedIn(false);
//   }, []);

//   const value = useMemo(
//     () => ({ isSignedIn, signIn, signOut }),
//     [isSignedIn, signIn, signOut]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = (): AuthContextValue => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return ctx;
// };
