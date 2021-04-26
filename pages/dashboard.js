import Head from 'next/head';
import useSWR from 'swr'
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher)

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
        {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard;