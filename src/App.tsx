import { A4 } from "./components/A4";
import { Heading } from "./components/Heading";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Section } from "./components/Section";
import { Entry } from "./components/Entry";
import { Tag } from "./components/Tag";
import { FC } from "react";

const App: FC = () => (
  <A4>
    <Box column centerItems style={{ marginBottom: 20 }}>
      <Heading>CHEUNG Daniel</Heading>
      <Box gap={32}>
        <Text size={16} color="#666">
          dcheungaa@connect.ust.hk
        </Text>
      </Box>
    </Box>
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
      <Entry dated="2012–2016">
        <strong>Newman Catholic College</strong> (Form 3–6)
      </Entry>
    </Section>
    <Section title="Skills">
      <ul>
        <li>
          <Box column>
            <strong>Computer languages</strong>
            <Text color="#666">
              <Box centerItems gap={5}>
                Fluent
                <Box gap={5}>
                  <Tag>HTML5</Tag>
                  <Tag>JavaScript/TypeScript</Tag>
                  <Tag>React</Tag>
                  <Tag>Vue</Tag>
                  <Tag>jQuery</Tag>
                  <Tag>CSS (SASS)</Tag>
                  <Tag>PHP (Laravel)</Tag>
                </Box>
              </Box>
            </Text>
            <Text color="#666">
              <Box centerItems gap={32}>
                <Box centerItems gap={5}>
                  Proficient
                  <Box gap={5}>
                    <Tag>Java/Kotlin</Tag>
                    <Tag>SQL</Tag>
                    <Tag>C++</Tag>
                  </Box>
                </Box>
                <Box gap={5}>
                  Adequate
                  <Box gap={5}>
                    <Tag>Embedded Programming</Tag>
                    <Tag>Redis/MongoDB</Tag>
                    <Tag>Docker</Tag>
                  </Box>
                </Box>
              </Box>
            </Text>
          </Box>
        </li>
        <li>
          <strong>Design</strong>{" "}
          <span>Familiar with Adobe Photoshop and Adobe Illustrator </span>
        </li>
        <li>
          <Box gap={16}>
            <strong>Blender (3D modeling)</strong>
            <strong>Fusion 360 (CAD)</strong>
          </Box>
        </li>
      </ul>
    </Section>

    <Section title="Qualifications">
      <Entry dated="2016">
        <strong>HKDSE</strong>
      </Entry>
      <Entry dated="2016">
        <strong>IELTS (8)</strong>
      </Entry>
    </Section>

    <Section title="Awards & Experiences">
      <ul>
        <li>
          <Entry dated="2020–2022">
            <strong>Credit Suisse</strong> Technical Analyst Program
          </Entry>
        </li>
        <li>
          <Entry dated="2020">
            <strong>Best Final Year Project</strong> Best FYP Video
          </Entry>
        </li>
        <li>
          <Entry dated="2019">
            <strong>Internship at PopTicket</strong> Software Engineer
          </Entry>
        </li>
        <li>
          <Entry dated="2018, 2019, 2020">
            <strong>HKUST School of Engineering Dean’s List</strong>
          </Entry>
        </li>
        <li>
          <Entry dated="2018, 2019">
            <strong>
              HKSAR Government Scholarship Fund–Talent Development Scholarship
            </strong>
          </Entry>
        </li>
        <li>
          <Entry dated="2018">
            <strong>
              HKUST Robotics Team–Recruitment/Robot Design Contest Committee
            </strong>{" "}
            Gamemaster
          </Entry>
        </li>
        <li>
          <Entry dated="2017">
            <Box column>
              <Text>
                <strong>HKUST Robotics Team–Intelligent Racing sub team</strong>{" "}
                Software Engineer
              </Text>
              <Text color="#666">
                First Class Award in Chinese Regional NXP Cup–Photoelectric
                Four-Wheel subgroup
              </Text>
            </Box>
          </Entry>
        </li>
        <li>
          <Entry dated="2016–2017">
            <Box column>
              <Text>
                <strong>HKUST Robotics Team–ROV sub team</strong> Software
                Engineer
              </Text>
              <Text color="#666">
                All-Rounded Champion in MATE International with Robot Beluga of
                Epoxsea Team
              </Text>
            </Box>
          </Entry>
        </li>
      </ul>
    </Section>

    <Section title="Interests & Profiles">
      <div>
        <strong style={{ width: 150, display: "inline-block" }}>
          Languages
        </strong>
        <span>Fluent in Cantonese, English, and Mandarin</span>
      </div>
      <div>
        <strong style={{ width: 150, display: "inline-block" }}>
          Programming
        </strong>
        <div style={{ paddingLeft: 25 }}>
          <div>
            <strong style={{ width: 250, display: "inline-block" }}>
              StackOverflow profile
            </strong>
            <a href="https://stackoverflow.com/users/1993909/daniel-cheung">
              https://stackoverflow.com/users/1993909/daniel-cheung
            </a>
          </div>
          <div>
            <strong style={{ width: 250, display: "inline-block" }}>
              GitHub personal page ∙ profile
            </strong>
            <a href="https://danvim.github.io">https://danvim.github.io</a>
            {" ∙ "}
            <a href="https://github.com/danvim/">https://github.com/danvim/</a>
          </div>
        </div>
      </div>
      <div>
        <strong style={{ width: 150, display: "inline-block" }}>
          Other interests
        </strong>
        <span>Calligraphy, Science, Graphic Design, Drawing</span>
      </div>
      <div>
        <strong style={{ width: 150, display: "inline-block" }}>
          LinkedIn
        </strong>
        <a href="https://www.linkedin.com/in/-daniel-cheung/">
          https://www.linkedin.com/in/-daniel-cheung/
        </a>
      </div>
    </Section>
  </A4>
);

export default App;
