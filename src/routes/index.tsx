import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeConstext } from "../shared/contexts";

const AppRoutes = () => {
  const { toggleTheme } = useAppThemeConstext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Teste
          </Button>
        }
      />

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default AppRoutes;
