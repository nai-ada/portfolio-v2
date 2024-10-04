import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon.jsx';
import { SunIcon } from '../assets/SunIcon.jsx';



export default function SwitchTheme() {


  return (
    <Switch
      defaultSelected
      size="md"
      style={{ '--nextui-colors-primary': '#86A6F6' }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
