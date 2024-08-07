import { A4 } from "./components/A4";
import { Heading } from "./components/Heading";
import { Box } from "./components/Box";
import { Desc, Text } from "./components/Text";
import { Section } from "./components/Section";
import { Entry } from "./components/Entry";
import { Label, Legend, NiceTag, PerfectTag, Tag } from "./components/Tag";
import React, { FC } from "react";
import { LI, UL } from "./components/LI";
import identityImg from "./identity.png";
import { Logo } from "./components/Logo";
import { GitHub } from "react-feather";

const tel = import.meta.env.VITE_TEL;

const App: FC = () => (
  <A4>
    <Box column centerItems style={{ marginBottom: 20 }}>
      <Heading>Daniel Cheung</Heading>
      <Box gap={32}>
        {typeof tel === "string" && tel !== "" ? (
          <Text size={16} color="#666">
            {tel}
          </Text>
        ) : null}
        <Text size={16} color="#666">
          dcheungaa<span className="obfuscation">@</span>connect.ust.hk
        </Text>
      </Box>
    </Box>

    <Section title="Experiences">
      <UL>
        <LI>
          <Box column>
            <Entry dated="2020–">
              <Text>
                <strong>UBS</strong> Associate Director (Full stack developer,
                Wealth Management)
              </Text>
            </Entry>
            <Box gap={5}>
              <PerfectTag>React</PerfectTag>
              <PerfectTag>TypeScript</PerfectTag>
              <PerfectTag>Node.js</PerfectTag>
              <PerfectTag>Design tokens</PerfectTag>
              <NiceTag>Vite</NiceTag>
              <NiceTag>Figma</NiceTag>
              <Tag>Java/Kotlin</Tag>
              <Tag>MongoDB</Tag>
              <Tag>Playwright</Tag>
              <Tag>Docker</Tag>
            </Box>
            <Desc>
              <p>
                Full stack engineer developing a web platform using React,
                Node.js, and TypeScript. Maintaining a React UI component
                library and kick-started a design tokens library with design
                team to ease brand transition. Using latest packages and
                tooling, drastically optimized CI pipelines of multiple projects
                across different teams.
              </p>
              <p>
                During 2020–2022 as a Technology Analyst under Credit Suisse, I
                was in 4 team rotations under different business areas (Wealth
                Management, Investment Banking, Risk) learning and developing
                software solution to support business.
              </p>
            </Desc>
          </Box>
        </LI>
        <LI>
          <Box column>
            <Entry dated="2020">
              <Text>
                <strong>Best Final Year Project</strong> ZINC - Automatic
                grading platform
              </Text>
            </Entry>
            <Box gap={5}>
              <NiceTag>PHP (Laravel)</NiceTag>
              <NiceTag>Next.js</NiceTag>
              <Tag>PostgresQL</Tag>
              <Tag>Redis</Tag>
              <Tag>Kotlin</Tag>
              <Tag>Docker</Tag>
            </Box>
            <Desc>
              Platform designed to collect and automatically process programming
              submissions. System is now adopted at HKUST.
            </Desc>
          </Box>
        </LI>
        <LI>
          <Entry dated="2019">
            <Box column>
              <Text>
                <strong>Internship at PopTicket</strong> Software Engineer
              </Text>
              <Box gap={5}>
                <PerfectTag>React</PerfectTag>
                <PerfectTag>jQuery</PerfectTag>
                <NiceTag>PHP (Laravel)</NiceTag>
                <Tag>Docker</Tag>
              </Box>
            </Box>
          </Entry>
        </LI>
        {/*<LI>*/}
        {/*  <Entry dated="2016-2018">*/}
        {/*    <Box column>*/}
        {/*      <Text>*/}
        {/*        <strong>HKUST Robotics Team</strong> Software Engineer & Game*/}
        {/*        Master*/}
        {/*      </Text>*/}
        {/*      <Box gap={5}>*/}
        {/*        <NiceTag>Fusion 360 (CAD)</NiceTag>*/}
        {/*        <NiceTag>PHP (Laravel)</NiceTag>*/}
        {/*        <LesserTag>C++ Embedded</LesserTag>*/}
        {/*      </Box>*/}
        {/*    </Box>*/}
        {/*  </Entry>*/}
        {/*</LI>*/}
      </UL>
    </Section>

    <Section title="Side projects">
      <UL>
        <LI>
          <Box column>
            <Entry dated="2023">
              <Text>
                <strong>React pdfmake Reconciler</strong>, a React renderer for
                pdfmake
              </Text>
            </Entry>
            <Box gap={5}>
              <PerfectTag>React</PerfectTag>
              <PerfectTag>TypeScript</PerfectTag>
              <NiceTag>pdfmake</NiceTag>
            </Box>
            <Desc>
              Started as a weekend project that solves a problem I encountered
              at work. This package renders the React node tree with custom
              intrinsic elements into the declarative object input for pdfmake.{" "}
              <a href="https://github.com/danvim/react-pdfmake-reconciler">
                <GitHub size="1em" style={{ verticalAlign: "text-bottom" }} />{" "}
                danvim/react-pdfmake-reconciler
              </a>
            </Desc>
          </Box>
        </LI>
        <LI>
          <Box column>
            <Entry dated="2020-2022">
              <Text>
                <strong>Photosynthesis</strong>, a web-base 3D P2P board game
                clone
              </Text>
            </Entry>
            <Box gap={5}>
              <PerfectTag>React</PerfectTag>
              <PerfectTag>TypeScript</PerfectTag>
              <NiceTag>ECS</NiceTag>
              <Tag>Three.js</Tag>
              <Tag>Peer.js</Tag>
              <Tag>WebRTC</Tag>
              <Tag>Blender (3D modeling)</Tag>
            </Box>
            <Desc>
              Fun project coded with a friend, where I provided 3D assets
              modeled and textured in Blender, and staged in Three.js using the
              ECS pattern and React.{" "}
              <a href="https://github.com/dipsywong98/photosynthesis">
                <GitHub size="1em" style={{ verticalAlign: "text-bottom" }} />{" "}
                dipsywong98/photosynthesis
              </a>
            </Desc>
          </Box>
        </LI>
      </UL>
    </Section>

    <Section title="Other skills">
      <UL>
        <LI>
          <Box column>
            <strong>Languages</strong>
            <Text>
              <Box gap={5}>
                <PerfectTag>Cantonese</PerfectTag>
                <PerfectTag>English</PerfectTag>
                <Tag>Mandarin</Tag>
              </Box>
            </Text>
          </Box>
        </LI>
      </UL>

      <Box
        column
        style={{ alignItems: "end", justifyContent: "end", marginTop: "-2em" }}
      >
        <Label>🡒 fluency</Label>
        <Box centerItems gap={5}>
          {/*<Legend $styleName="lesserStyle" />*/}
          <Legend $styleName="normalStyle" />
          <Legend $styleName="niceStyle" />
          <Legend $styleName="perfectStyle" />
        </Box>
      </Box>
    </Section>

    {/*<Box*/}
    {/*  column*/}
    {/*  style={{ alignItems: "end", justifyContent: "end", marginTop: "-2em" }}*/}
    {/*>*/}
    {/*  <Label>🡒 fluency</Label>*/}
    {/*  <Box centerItems gap={5}>*/}
    {/*    /!*<Legend $styleName="lesserStyle" />*!/*/}
    {/*    <Legend $styleName="normalStyle" />*/}
    {/*    <Legend $styleName="niceStyle" />*/}
    {/*    <Legend $styleName="perfectStyle" />*/}
    {/*  </Box>*/}
    {/*</Box>*/}

    <Section title="Education">
      <Entry dated="2016-2020">
        <Box column>
          <Text>
            <strong>BEng in Computer Science, HKUST</strong> (First Class
            Honors)
          </Text>
          <Text color="#666">Minor in Robotics</Text>
        </Box>
      </Entry>
    </Section>

    <Section title="Profiles">
      <div>
        <strong style={{ width: 200, display: "inline-block" }}>
          StackOverflow
        </strong>
        <a href="https://stackoverflow.com/users/1993909/daniel-cheung">
          https://stackoverflow.com/users/1993909/daniel-cheung
        </a>
      </div>
      <div>
        <strong style={{ width: 200, display: "inline-block" }}>
          Personal website
        </strong>
        <a href="https://danvim.github.io">https://danv.im</a>
      </div>
      <div>
        <strong style={{ width: 200, display: "inline-block" }}>
          GitHub profile
        </strong>
        <a href="https://github.com/danvim/">https://github.com/danvim/</a>
      </div>
      <div>
        <strong style={{ width: 200, display: "inline-block" }}>
          LinkedIn
        </strong>
        <a href="https://www.linkedin.com/in/-daniel-cheung">
          https://www.linkedin.com/in/-daniel-cheung
        </a>
      </div>
    </Section>

    <Logo src={identityImg} />
  </A4>
);

export default App;
