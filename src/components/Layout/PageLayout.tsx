import { AppShell, Title, Group, Stack, Alert, Loader, Container, Center } from '@mantine/core'; // Removed Header from import
import { IconAlertCircle } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useProductionData } from '../../hooks/useProductionData';
import { ProductionChart } from '../Chart/ProductionChart';
import { ProductionFilters } from '../Filters/ProductionFilters';
import { ProductionTable } from '../Table/ProductionTable';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

export function PageLayout() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useProductionData();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }} // Define header height here for AppShell v7
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }} // Example if you had a navbar
      // aside={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }} // Example if you had an aside
    >
      <AppShell.Header p="xs"> {/* Use AppShell.Header */}
        <Group justify="space-between" style={{ height: '100%' }}> {/* Changed position to justify for AppShell v7 */}
          <Title order={2}>{t('pageTitle')}</Title>
          <LanguageSwitcher />
        </Group>
      </AppShell.Header>

      <AppShell.Main> {/* Content should be wrapped in AppShell.Main */}
        <Container fluid>
          {isLoading && (
            <Center style={{ height: 'calc(100vh - 120px)' }}>
              <Stack align="center">
                <Loader size="xl" />
                <Text>{t('loadingData')}</Text>
              </Stack>
            </Center>
          )}

          {isError && (
            <Alert icon={<IconAlertCircle size="1rem" />} title={t('errorData')} color="red" mt="xl">
              {error?.message || 'An unknown error occurred.'}
            </Alert>
          )}

          {!isLoading && !isError && data && (
            <Stack>
              <Paper withBorder shadow="sm" p="md">
                <Title order={4} mb="sm">{t('filterSectionTitle')}</Title>
                <ProductionFilters availableMachines={data.availableMachines || []} />
              </Paper>
              
              <ProductionChart data={data.dailyProduction || []} />
              <ProductionTable data={data.machineDetails || []} />
            </Stack>
          )}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

// You'll also need to import Paper, Text if they are not already:
import { Paper, Text } from '@mantine/core'; // Add Paper and Text to your imports in PageLayout.tsx if they were missing for the loading/error/data sections.
// They were likely already there, but just ensuring.