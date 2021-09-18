import { Box } from '../primitives/Box';
import { TreeItem } from '../primitives/TreeItem';
import { Text } from '../primitives/Text';
import { ScrollArea } from '../primitives/Scrollbar';
import {
  BarChartIcon,
  CubeIcon,
  EyeOpenIcon,
  GlobeIcon,
  Link1Icon,
  LockClosedIcon,
  MagicWandIcon,
  Pencil2Icon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Link } from '../primitives/Link';

export function Sidebar() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: '36px',
        left: '0',
        bottom: '0',
        width: '250px',
        borderRight: '1px solid $canvas',
        py: '$1',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <TreeItem as={Link} href={'/admin'} variant="zeus">
          <Box css={{ mr: '$2' }}>
            <BarChartIcon />
          </Box>
          <Text size="1">Activity</Text>
        </TreeItem>

        <TreeItem as={Link} href={'/applications'} variant="zeus">
          <Box css={{ mr: '$2' }}>
            <CubeIcon />
          </Box>
          <Text size="1">Applications</Text>
        </TreeItem>

        <TreeItem as={Link} href={'/admin'} variant="zeus">
          <Box css={{ mr: '$2' }}>
            <GlobeIcon />
          </Box>
          <Text size="1">APIs</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <Link1Icon />
          </Box>
          <Text size="1">Providers</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <PersonIcon />
          </Box>
          <Text size="1">Users</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <LockClosedIcon />
          </Box>
          <Text size="1">Roles</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <MagicWandIcon />
          </Box>
          <Text size="1">Branding</Text>
        </TreeItem>

        <TreeItem css={{ mt: '$2' }}>
          <Text size="1" css={{ color: '$slate7' }}>
            Tenant
          </Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
            <Pencil2Icon />
          </Box>
          <Text size="1">Settings</Text>
        </TreeItem>
      </ScrollArea>
    </Box>
  );
}
