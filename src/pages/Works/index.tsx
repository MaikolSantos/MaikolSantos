import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LinkExternal from "../../components/LinkExternal";

import { WorksContext } from "../../contexts/WorksContext";
import Contact from "../components/Sections/Contact";

import { Container } from "./styles";

const Works = () => {
  const { filteredWorks, originalWorks, filterWorks } =
    useContext(WorksContext);

  const navigate = useNavigate();

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toLowerCase();

    const filtered = originalWorks.filter(({ title, description }) => {
      return (
        title.toLowerCase().includes(value) ||
        description.toLowerCase().includes(value)
      );
    });

    filtered ? filterWorks(filtered) : filterWorks(originalWorks);
  }

  function handleOnClick() {
    navigate(-1);
  }

  return (
    <main>
      <Header>
        <FaArrowLeft size={25} color={"#EDEDED"} onClick={handleOnClick} />
      </Header>
      <Container>
        <Input onChange={handleOnChange} />
        <ul>
          {filteredWorks.length > 0 ? (
            filteredWorks.map((item, index) => {
              const { title, description, repository, demo } = item;
              return (
                <Card
                  key={index}
                  title={title}
                  description={description}
                  repository={repository}
                  demo={demo}
                />
              );
            })
          ) : (
            <li>Nenum repositório encontrado :(</li>
          )}
        </ul>

        <p>Veja mais no Github</p>
        <LinkExternal
          text="Github"
          href="https://github.com/MaikolSantos"
          download="curriculo.pdf"
        />
      </Container>
      <Footer />
    </main>
  );
};

export default Works;
