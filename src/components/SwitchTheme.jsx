import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon.jsx';
import { SunIcon } from '../assets/SunIcon.jsx';

export default function SwitchTheme() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <Switch
      defaultSelected
      size="sm"
      style={{ '--nextui-colors-primary': '#86A6F6' }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={(isSelected) => setIsDarkMode(isSelected)}
    />
  );
}
