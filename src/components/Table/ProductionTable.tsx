import { Table, Title, Paper, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import type { MachineDetail } from '../../services/types';
import dayjs from 'dayjs';

interface ProductionTableProps {
  data: MachineDetail[];
}

export function ProductionTable({ data }: ProductionTableProps) {
  const { t } = useTranslation();

  const rows = data.map((machine) => (
    <Table.Tr key={machine.id}>
      <Table.Td>{machine.name}</Table.Td>
      <Table.Td>{machine.status}</Table.Td>
      <Table.Td>{machine.output.toLocaleString()}</Table.Td>
      <Table.Td>{dayjs(machine.lastUpdated).format('YYYY-MM-DD HH:mm')}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper withBorder shadow="sm" p="md" mt="xl">
      <Title order={3} mb="md">{t('tableTitle')}</Title>
      {data.length > 0 ? (
        <Table striped highlightOnHover withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>{t('tableHeaderMachineName')}</Table.Th>
              <Table.Th>{t('tableHeaderStatus')}</Table.Th>
              <Table.Th>{t('tableHeaderOutput')}</Table.Th>
              <Table.Th>{t('tableHeaderLastUpdated')}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : (
        <Text>No machine data available.</Text>
      )}
    </Paper>
  );
}