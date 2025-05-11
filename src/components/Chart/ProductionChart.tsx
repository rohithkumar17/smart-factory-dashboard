import { Paper, Title, Text } from '@mantine/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import type { DailyProduction } from '../../services/types';

interface ProductionChartProps {
  data: DailyProduction[];
}

export function ProductionChart({ data }: ProductionChartProps) {
  const { t } = useTranslation();

  return (
    <Paper withBorder shadow="sm" p="md" mt="xl">
      <Title order={3} mb="md">{t('chartTitle')}</Title>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" name={t('chartTitle')} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Text>No production data available for chart.</Text>
      )}
    </Paper>
  );
}