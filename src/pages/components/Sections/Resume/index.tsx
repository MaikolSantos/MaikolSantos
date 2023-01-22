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
          <h2>Resumo do currículo</h2>
        </div>
      </ResumeHeader>

      {isOpen && (
        <ResumeWrapper>
          <ResumeContent>
            <section>
              <div>
                <h3>Formação Acadêmica</h3>
                <ul>
                  <li>
                    <h4>Tecnólogo Análise e Desenvolvimento de Sistemas</h4>
                    <p>Anhanguera - Uniderp | Concluído em 2021</p>
                  </li>
                  <li>
                    <h4>Desenvolvimento Web Full Stack </h4>
                    <p>Kenzie Academy Brasil | Conclusão em 06/2023</p>
                  </li>
                  <li>
                    <h4>Técnico Administrativo</h4>
                    <p>ETEC | Concluído em 2013 </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Experiências Profissionais</h3>
                <ul>
                  <li>
                    <h4>Monitor Front-end</h4>
                    <p>
                      [2022 – Atualmente] Responsabilidades: dar suporte aos
                      alunos de turmas anteriores referente aos assuntos de cada
                      módulo; supervisionar o desenvolvimento dos alunos, e
                      verificar as dificuldades dos mesmos; corrigir as
                      atividades realizadas pelos alunos durante o módulo;
                      tecnologias abordadas: HTML, CSS, JAVASCRIPT, TYPESCRIPT,
                      GIT, GITHUB, REACT, VITE & VERCEL.
                    </p>
                  </li>
                  <li>
                    <h4>
                      VExpenses – Programador de Sistemas Jr. I e Estagiário
                      Front-end
                    </h4>
                    <p>
                      [2021 – 2022] Responsável pelas demandas do time de
                      Marketing. Desenvolvimento web no blog e no site.
                    </p>
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
