import { SegmentedControl } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.split('-')[0]; // Handles 'en-US' -> 'en'

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <SegmentedControl
      value={currentLanguage}
      onChange={changeLanguage}
      data={[
        { label: 'EN', value: 'en' },
        { label: 'KO', value: 'ko' },
      ]}
    />
  );
}