import { useState } from "react";

import {
  ResumeWrapper,
  ResumeHeader,
  ResumeContent,
  Container,
} from "./styles";

import universe from "../../../../assets/images/universe.jpg";

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
                  <li>
                    <p>
                      Experiência em desenvolvimento Front-End web utilizando
                      HTML, CSS, SASS, Javascript, Typescript, React, Next.js e
                      consumo de API's;
                    </p>
                  </li>
                  <li>
                    <p>
                      Experiência em desenvolvimento Back-End utilizando
                      Node.js, Express, TypeORM, Python, Django, SQL,
                      PostgreSQL;
                    </p>
                  </li>
                  <li>
                    <p>
                      Familiaridade com Git, Github, metodologias ágeis Scrum e
                      Kanban;
                    </p>
                  </li>
                  <li>
                    <p>
                      Atuei em uma fintech como desenvolvedor front-end, onde
                      desenvolvi habilidades como subordinado, colaborador e
                      desenvolvedor;
                    </p>
                  </li>
                  <li>
                    <p>
                      Atuei em uma fintech como desenvolvedor front-end, onde
                      desenvolvi habilidades como subordinado, colaborador e
                      desenvolvedor;
                    </p>
                  </li>
                  <li>
                    <p>
                      Participei ativamente de projetos em equipe, contribuindo
                      para a criação de soluções criativas e inovadoras para
                      problemas complexos. Em alguns desses projetos, tive a
                      oportunidade de liderar a equipe, o que me permitiu
                      comprovar minhas habilidades técnicas e competências com
                      as tecnologias e metodologias mencionadas;
                    </p>
                  </li>
                  <li>
                    <p>Inglês básico;</p>
                  </li>
                  <li>
                    <p>Espanhol intermediário.</p>
                  </li>
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
