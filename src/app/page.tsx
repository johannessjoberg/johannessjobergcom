import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  Link,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes"
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

const socials = [
  {
    url: "https://github.com/johannessjoberg",
    icon: GitHubLogoIcon,
  },
  {
    url: "https://twitter.com/sjobergjohannes",
    icon: TwitterLogoIcon,
  },
  {
    url: "https://www.linkedin.com/in/johannes-sjöberg-08070571",
    icon: LinkedInLogoIcon,
  },
]

const projects = [
  {
    name: "Attested.tech",
    url: "https://attested-tech.vercel.app/",
    description:
      "An open source playground for decentralized identifiers (DIDs).",
    icon: GlobeIcon,
    backgroundColor: "bg-[color:var(--accent-a7)]",
  },
]

const work = [
  {
    date: "2023 - Present",
    role: "Engineer",
    companyName: "Milkywire",
    companyUrl: "https://milkywire.com",
    description:
      "Building the next-gen donation platform connecting corporations with vetted organizations around the world.",
  },
  {
    role: "Staff Engineer",
    companyName: "Proxy (acquired by Oura)",
    companyUrl: "https://www.crunchbase.com/organization/martians",
    date: "2020 - 2023",
    description: "Design and implementation of Proxy's identity platform.",
  },
  {
    role: "Tech lead",
    companyName: "DPOrganizer",
    companyUrl: "https://www.dporganizer.com",
    date: "2017 - 2020",
    description:
      "Design and implementation of a data protection management system. Involved in growing the tech team from 2 to 15 people.",
  },
  {
    role: "Consultant",
    companyName: "Netlight",
    companyUrl: "https://www.netlight.com",
    date: "2015 - 2017",
    description:
      "Worked as a software consultant at Bauer Media and Photowall.",
  },
]

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading size="6" mb="4">
      {children}
    </Heading>
  )
}

function BorderedContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box className="border-b border-dashed border-[color:var(--gray-8)]">
      <Container size="2">
        <Box
          pt="6"
          pb="6"
          px="4"
          className="border-x border-[color:var(--gray-8)]"
        >
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default function Home() {
  return (
    <main>
      <BorderedContainer>
        <Heading size="7">Johannes Sjöberg</Heading>
      </BorderedContainer>
      <BorderedContainer>
        <Flex justify="between">
          <Flex gap={{ initial: "4" }}>
            {socials.map((social, index) => (
              <IconButton
                key={index}
                asChild
                variant="ghost"
                color="gray"
                highContrast
              >
                <a href={social.url} target="_blank">
                  <social.icon width="24" height="24" />
                </a>
              </IconButton>
            ))}
          </Flex>
          <ThemeSwitcher />
        </Flex>
      </BorderedContainer>
      <BorderedContainer>
        <SubHeading>About me</SubHeading>
        <Text size="3">
          Hey! I create software for a living and I&lsquo;m passionate about
          sustainability, privacy and open source. I&lsquo;m based in Stockholm,
          Sweden. Aside from work, I love myself a good board game and I&lsquo;m
          currently trying to learn how to slap the bass. You can reach me at
          the above socials, or by{" "}
          <Link underline="always" href="mailto:johannes@johannessjoberg.com">
            email
          </Link>
          .
        </Text>
      </BorderedContainer>
      <BorderedContainer>
        <SubHeading>Projects</SubHeading>
        <Flex direction="column" gap="4">
          {projects.map((project, index) => (
            <Flex key={index}>
              <Box>
                <Link underline="always" href={project.url} target="_blank">
                  <Text>{project.name}</Text>
                </Link>
                <Text size="3"> - {project.description}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </BorderedContainer>
      <BorderedContainer>
        <SubHeading>Work</SubHeading>
        <Flex direction="column" gap="1">
          {work.map((work, index) => (
            <Box key={index}>
              <Text size="1">{work.date}</Text>
              <Text className="block">
                {work.role} at{" "}
                <Text>
                  <Link
                    underline="always"
                    href={work.companyUrl}
                    target="_blank"
                  >
                    {work.companyName}
                  </Link>
                </Text>
              </Text>
              {/* <Text size={{ initial: "2", sm: "3" }}>{work.description}</Text> */}
            </Box>
          ))}
        </Flex>
      </BorderedContainer>
    </main>
  )
}
