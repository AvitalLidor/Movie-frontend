import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NoticationContext } from "../context/NotificationProvider";
import { ThemeContext } from "../context/ThemeProvider";

export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NoticationContext);
export const useAuth = () => useContext(AuthContext);
