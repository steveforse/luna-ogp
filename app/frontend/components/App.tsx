import React, { useState } from 'react';
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Container,
  Stack,
  Title,
  Badge,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconHome,
  IconSettings,
  IconUser,
  IconChartBar,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';

// Note: Install @tabler/icons-react with: npm install @tabler/icons-react

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [active, setActive] = useState('Home');

  const navItems = [
    { label: 'Home', icon: IconHome },
    { label: 'Dashboard', icon: IconChartBar },
    { label: 'Profile', icon: IconUser },
    { label: 'Settings', icon: IconSettings },
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text
              size="xl"
              fw={700}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            >
              MyApp
            </Text>
            <Badge variant="light" color="indigo" size="sm">
              Beta
            </Badge>
          </Group>

          <ActionIcon
            variant="light"
            onClick={toggleColorScheme}
            size="lg"
            radius="md"
          >
            {colorScheme === 'dark' ? (
              <IconSun size={20} />
            ) : (
              <IconMoon size={20} />
            )}
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section grow>
          <Stack gap="xs">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                active={active === item.label}
                label={item.label}
                leftSection={<item.icon size={20} stroke={1.5} />}
                onClick={() => setActive(item.label)}
                variant="filled"
              />
            ))}
          </Stack>
        </AppShell.Section>

        <AppShell.Section>
          <Text size="xs" c="dimmed" mt="md">
            Rails 8 + Mantine
          </Text>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="xl">
          <Stack gap="xl">
            <div>
              <Title order={1} mb="md">
                Welcome to {active}
              </Title>
              <Text c="dimmed" size="lg">
                Your Rails 8 application with Mantine UI is ready to go.
              </Text>
            </div>

            {/* Your page content goes here */}
            <Text>
              This is a production-ready layout with:
              <ul>
                <li>Responsive navigation</li>
                <li>Dark mode toggle</li>
                <li>Clean, modern design</li>
                <li>Customizable theme</li>
              </ul>
            </Text>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

