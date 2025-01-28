import { Sun, CloudSun, Cloud, CloudRain, CloudMoon } from "lucide-react";

export const getWeatherIcon = (condition) => {
  switch (condition) {
    case "cielo claro":
      return <Sun className="text-yellow-500 w-10 h-10" />;
    case "nubes dispersas":
      return <CloudSun className="text-gray-500 w-10 h-10" />;
    case "algo de nubes":
      return <Cloud className="text-gray-600 w-10 h-10" />;
    case "lluvia ligera":
      return <CloudRain className="text-blue-500 w-10 h-10" />;
    case "nubes":
      return <CloudMoon className="text-gray-400 w-10 h-10" />;
    default:
      return <Cloud className="text-gray-400 w-10 h-10" />;
  }
};
