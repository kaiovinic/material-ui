import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme, LightTheme } from "../themes";
import { Box } from "@mui/material";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeConstext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
