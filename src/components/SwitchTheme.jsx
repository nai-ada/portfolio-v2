import { useTheme as useNextTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon.jsx';
import { SunIcon } from '../assets/SunIcon.jsx';

export default function SwitchTheme() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={(e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        console.log('Switch toggled, setting theme to:', newTheme);
        setTheme(newTheme);
      }}
    />
  );
}