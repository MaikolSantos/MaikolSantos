import { useState } from "react";

import {
  ResumeWrapper,
  ResumeHeader,
  ResumeContent,
  Container,
} from "./styles";

import universe from "../../../../assets/images/universe.jpg";
import { resume } from "../../../../data/resume";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  function changeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <ResumeHeader onClick={changeOpen}>
        <div>
          <h2>Resumo de experiências</h2>
        </div>
      </ResumeHeader>

      {isOpen && (
        <ResumeWrapper>
          <ResumeContent>
            <section>
              <div>
                <h3>Experiências</h3>
                <ul>
                  {resume.map(({ paragraph }, index) => {
                    return (
                      <li key={index}>
                        <p>
                          {paragraph +
                            (index !== resume.length - 1 ? ";" : ".")}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            <img src={universe} alt="Universe Pixel" />
          </ResumeContent>
        </ResumeWrapper>
      )}
    </Container>
  );
};

export default Resume;
