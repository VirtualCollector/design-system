import React from 'react';
import { Box } from '../primitives/Box';
import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Toolbar } from '../custom/Toolbar';
import { Sidebar } from '../custom/Sidebar';
import { TenantToolbar } from '../custom/TenantToolbar';
import { Text } from '../primitives/Text';
import { Skeleton } from '../primitives/Skeleton';

function Admin() {
  return (
    <Box css={{ height: '100%' }}>
      {/* <Toolbar /> */}
      <TenantToolbar />
      <Box css={{ bc: '$canvas', height: '100%', px: 250, pt: '36px' }}>
        <Text>canvas</Text>
        <Skeleton variant="avatar3" />
        <Sidebar />
        {/* <Layers />
        <Properties /> */}
      </Box>
    </Box>
  );
}

export default Admin;
