import { useTheme } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`nav ${theme}`}>
      <div className="logo">
        <img src={theme=="light"? "https://ramico.com.mx/logo_light.png" : "https://ramico.com.mx/logo.png"} />
      </div>
      <div className="settings">
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;