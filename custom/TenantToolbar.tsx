import { Avatar } from '../primitives/Avatar';
import { Box } from '../primitives/Box';
import { Button } from '../primitives/Button';
import { Flex } from '../primitives/Flex';
import { IconButton } from '../primitives/IconButton';
import { Separator } from '../primitives/Separator';
import { Text } from '../primitives/Text';
import { Tooltip } from '../primitives/Tooltip';
import { VirtualCollectorLogo } from '../primitives/VirtualCollectorLogo';

import { HamburgerMenuIcon, PlayIcon, PlusIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@primitives/DropdownMenu';

export function TenantToolbar() {
  return (
    <Box
      css={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        py: '$1',
        px: '$2',
        backgroundColor: '$loContrast',
        borderBottom: '1px solid $canvas',
      }}
    >
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Flex css={{ alignItems: 'center' }}>
          <Box css={{ mr: '$1' }}>
            <VirtualCollectorLogo />
            {/* <IconButton>
              <HamburgerMenuIcon />
            </IconButton> */}
          </Box>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button ghost css={{ fontWeight: 400 }}>
                Virtual Collector{' '}
                <Text size="1" css={{ color: '$slate7', ml: '$1' }}>
                  vc-dev
                </Text>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Tenants</DropdownMenuLabel>
                <DropdownMenuItem>Virtual Collector</DropdownMenuItem>
                <DropdownMenuItem css={{ color: '$zeus', jc: 'start' }}>
                  <PlusIcon /> <Text css={{ ml: '$1', color: '$zeus', size: '$3' }}>Create</Text>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Text css={{ color: '$slate6' }}>/</Text>
          <Button ghost css={{ fontWeight: 400 }}>
            Activity
          </Button>
        </Flex>

        <Flex css={{ alignItems: 'center' }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar size="2" shape="circle" fallback="E" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Eric Campbell</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>My Tenants</DropdownMenuLabel>
                <DropdownMenuItem>Virtual Collector</DropdownMenuItem>
                <DropdownMenuItem>Create</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <Button variant="blue" css={{ ml: '$3' }}>
            Invite
          </Button> */}
          {/* <IconButton css={{ ml: '$2' }}>
            <PlayIcon />
          </IconButton> */}
          {/* <Box css={{ width: '50px', flexShrink: 0, textAlign: 'center' }}>
            <Text size="1" css={{ color: '$slate11', userSelect: 'none' }}>
              100%
            </Text>
          </Box> */}
        </Flex>
      </Flex>
    </Box>
  );
}
