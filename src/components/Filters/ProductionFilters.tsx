import { Group, Select, Text } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import type { MachineOption } from '../../services/types';
import { useState } from 'react';

interface ProductionFiltersProps {
  availableMachines: MachineOption[];
  // Add onFilterChange props if actual filtering is implemented
}

export function ProductionFilters({ availableMachines }: ProductionFiltersProps) {
  const { t } = useTranslation();
  const [machine, setMachine] = useState<string | null>('all');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);


  return (
    <Group >
      <Select
        label={t('filterMachineNameLabel')}
        placeholder="Select machine"
        data={availableMachines}
        value={machine}
        onChange={setMachine}
        style={{ minWidth: 200 }}
      />
      <DatePickerInput
        type="range"
        label={t('filterDateRangeLabel')}
        placeholder="Select date range"
        value={dateRange}
        onChange={setDateRange}
        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
        style={{ minWidth: 280 }}
        clearable
      />
    </Group>
  );
}