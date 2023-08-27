import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes"
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
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
    name: "attested.tech",
    url: "https://attested.tech",
    description:
      "An open source playground for decentralized identifiers. Created with Anton Johansson.",
    icon: GlobeIcon,
  },
  // {
  //   name: "johannessjobergcom",
  //   url: "https://johannessjoberg.com",
  //   description: "This site. Feel free to make it your own.",
  //   icon: GitHubLogoIcon,
  // },
]

const experience = [
  {
    date: "2023 - Present",
    role: "Engineering",
    companyName: "Milkywire",
    companyUrl: "https://milkywire.com",
    description:
      "Working on a system that helps companies donate to vetted non-profits.",
  },
  {
    role: "Staff Engineer",
    companyName: "Proxy",
    companyUrl: "https://www.crunchbase.com/organization/martians",
    date: "2020 - 2023",
    description:
      "Design and implementation of a decentralized identity platform.",
  },
  {
    role: "Tech lead",
    companyName: "DPOrganizer",
    companyUrl: "https://www.dporganizer.com",
    date: "2017 - 2020",
    description:
      "Design and implementation of a privacy management system. Helped grow the tech team from 2 to 15 people.",
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
    <Heading
      className="mb-4 border-b border-[color:var(--gray-a5)]"
      size={{ initial: "5", sm: "6" }}
    >
      {children}
    </Heading>
  )
}

export default function Home() {
  return (
    <main>
      <Grid
        my={{ sm: "8", initial: "4" }}
        px={{ sm: "8", initial: "4" }}
        direction="column"
      >
        <Section size="2">
          <Heading
            className="mb-3 border-b border-dashed border-[color:var(--gray-a10)]"
            size={{ initial: "7", sm: "8" }}
          >
            Johannes Sjöberg
          </Heading>
          <Flex justify="between" mb="2">
            <Flex gap={{ initial: "4" }} mb="2">
              {socials.map((social, index) => (
                <IconButton key={index} asChild variant="ghost" color="gray">
                  <a href={social.url} target="_blank">
                    <social.icon width="20" height="20" />
                  </a>
                </IconButton>
              ))}
            </Flex>
            <ThemeSwitcher />
          </Flex>
        </Section>
        <Section size="2">
          <SubHeading>About me</SubHeading>
          <Text size={{ initial: "2", sm: "3" }}>
            Hi, I'm Johannes Sjöberg! I create software for a living and I'm
            passionate about privacy and open source. I'm based in Stockholm,
            Sweden. Avid{" "}
            <a className="underline" href="https://hdtgm.com" target="_blank">
              HDTGM
            </a>{" "}
            podcast listener and I love myself a good board game. You can reach
            me at the above socials, or by{" "}
            <a className="underline" href="mailto:johannes@johannessjoberg.com">
              email
            </a>
            .
          </Text>
        </Section>
        <Section size="2">
          <SubHeading>Side projects</SubHeading>
          <Flex direction="column" gap="4">
            {projects.map((project, index) => (
              <Card key={index} size="1" asChild>
                <a href={project.url} target="_blank">
                  <Flex>
                    <Inset side="left" pr="current">
                      <Flex
                        align="center"
                        justify="center"
                        px="5"
                        className="bg-[color:var(--accent-a5)]"
                        style={{ height: "100%" }}
                      >
                        <project.icon height="30" width="30" />
                      </Flex>
                    </Inset>
                    <Box>
                      <Heading color="gray" mb="1" size="4">
                        <Strong>{project.name}</Strong>
                      </Heading>
                      <Text size="2">{project.description}</Text>
                    </Box>
                  </Flex>
                </a>
              </Card>
            ))}
          </Flex>
        </Section>
        <Section size="2">
          <SubHeading>Experience</SubHeading>
          <Flex direction="column" gap="4">
            {experience.map((work, index) => (
              <Box key={index}>
                <Text size="1">{work.date}</Text>
                <Text className="block">
                  <Strong>{work.role}</Strong> at{" "}
                  <Text className="underline">
                    <a href={work.companyUrl} target="_blank">
                      {work.companyName}
                    </a>
                  </Text>
                </Text>
                <Text size={{ initial: "2", sm: "3" }}>{work.description}</Text>
              </Box>
            ))}
          </Flex>
        </Section>
      </Grid>
    </main>
  )
}
