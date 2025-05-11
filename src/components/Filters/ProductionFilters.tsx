// src/components/Filters/ProductionFilters.tsx
import { Group, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates'; // Removed DatesRangeValue import for now
// import { IconCalendar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import type { MachineOption } from '../../services/types';
import { useState } from 'react';

interface ProductionFiltersProps {
  availableMachines: MachineOption[];
}

export function ProductionFilters({ availableMachines }: ProductionFiltersProps) {
  const { t } = useTranslation();
  const [machine, setMachine] = useState<string | null>('all');

  // Explicitly define the type for the state
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  // // Define the handler separately for clarity
  // const handleDateRangeChange = (value: [Date | null, Date | null]) => {
  //   setDateRange(value);
  // };

  return (
    <Group>
      <Select
        label={t('filterMachineNameLabel')}
        placeholder="Select machine"
        data={availableMachines}
        value={machine}
        onChange={setMachine}
        style={{ minWidth: 200 }}
      />
      <DatePickerInput
        type="range" // This should make onChange expect [Date | null, Date | null]
        label={t('filterDateRangeLabel')}
        placeholder="Select date range"
        value={dateRange} // value is [Date | null, Date | null]
        //onChange={handleDateRangeChange} // handler expects [Date | null, Date | null]
        //icon={<IconCalendar size="1.1rem" stroke={1.5} />}
        style={{ minWidth: 280 }}
        clearable
      />
    </Group>
  );
}