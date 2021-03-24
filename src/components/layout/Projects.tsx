import React from "react";
import styled from "styled-components";

import {
  nicegdl,
  pokedex,
  course,
  weather,
  nextric,
} from "../../data/projectsData";
import { themes } from "../styles/ColorStyles";
import { H3, MediumText } from "../styles/TextStyles";

const Projects = () => {
  return (
    <Wrapper>
      <Container className="nicegdl">
        <ImageWrapper>
          <AppImage src={nicegdl.image} resizeMode="contain" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{nicegdl.title}</Title>
          <Description>
            Aplicación móvil con el objetivo de clasificar los lugares de
            interés que los usuarios publiquen y reseñen sobre la ciudad de
            Guadalajara, Jalisco. Donde podremos encontrar secciones como :
            <br /> <Strong>Lugares publicados</Strong> y su información
            detallada.
            <br /> <Strong>Favoritos</Strong> ( si es que el usuario ya esta
            registrado).
            <br /> <Strong>Los 5 mejores lugares</Strong>, basado en las mejores
            puntuaciones de todos los lugares publicados a la fecha.
            <br /> <Strong>Buscador</Strong> dentro de la aplicación.
            <br /> <Strong>Cuenta</Strong>, donde podrá gestionar su información
            y cambiar su nombre de usuario, foto de perfil, email y contraseña.
            <br />
            <br />
            Tecnologias usadas : Expo, React Native, Firebase.
          </Description>
          <a href={nicegdl.getApp} target="_blank" rel="noopener noreferrer">
            Descargar la app (solo android)
          </a>
          <a href={nicegdl.github} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </TextWrapper>
      </Container>
      <Container className="nextric">
        <ImageWrapper id="nextImage">
          <WebImage src={nextric.image} resizeMode="contain" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{nextric.title}</Title>
          <Description>
            Nextric es una demo full-stack de una plataforma social de blogs,
            inspirada en sitios como DEV.to y Medium.
            <br />
            Los autores pueden crear contenido con su nombre de usuario
            personalizado y luego publicarlo públicamente con una representación
            compatible con SEO, mientras que los lectores pueden marcar o dar me
            gusta a las publicaciones en tiempo real.
            <br />
            <br />
            Tecnologias usadas : NextJS, React, Sass, Firebase.
          </Description>
          <a href={nextric.getApp} target="_blank" rel="noopener noreferrer">
            Visitar Web
          </a>
          <a href={nextric.github} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </TextWrapper>
      </Container>
      <Container className="course-app">
        <ImageWrapper>
          <AppImage src={course.image} resizeMode="contain" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{course.title}</Title>
          <Description>
            Aplicación móvil que simula una aplicacion de aprendizaje, ¡disfruta
            de animaciones al registrarte, mirar la configuracion, mirar las
            notificaciones y más!
            <br />
            <br />
            Podremos encontrar secciones como :
            <br />
            <Strong>Inicio/Home</Strong> donde podremos registrarnos/cerrar
            sesión tocando el avatar y ver nuestras notificaciones tocando la
            campana, asi como abrir las tarjetas.
            <br />
            <Strong>Cursos/Courses</Strong> con tarjetas con el progreso actual
            de tus cursos.
            <br />
            <Strong>Proyectos/projects</Strong> con tarjetas adaptables y una
            animacion arrastar y soltar.
            <br />
            <br />
            Tecnologias usadas : Expo, React Native, Firebase, GraphQL.
          </Description>
          <a href={course.getApp} target="_blank" rel="noopener noreferrer">
            Descargar la app (solo android)
          </a>
          <a href={course.github} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </TextWrapper>
      </Container>
      <Container className="pokedex">
        <ImageWrapper id="pokeImage">
          <WebImage src={pokedex.image} resizeMode="contain" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{pokedex.title}</Title>
          <Description>
            Aplicación Web que nos muestra un listado de pokemones traido de una
            Api externa (pokeapi.co), podremos ver algunos de los atributos y la
            apariencia del pokemon que seleccionemos.
            <br />
            La web utiliza un <Strong>sistema de rutas protegidas</Strong> donde
            solo el usuario registrado tiene acceso al listado asi como a otras
            caracteristicas como cambiar su foto de perfil y su nombre de
            usuario.
            <br />
            <br />
            Tecnologias usadas : React, Redux, Firebase.
          </Description>
          <a href={pokedex.getApp} target="_blank" rel="noopener noreferrer">
            Visitar Web
          </a>
          <a href={pokedex.github} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </TextWrapper>
      </Container>
      <Container className="weather">
        <ImageWrapper id="weatherImage">
          <WebImage src={weather.image} resizeMode="contain" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{weather.title}</Title>
          <Description>
            Aplicación Web de clima donde podemos solicitar el tiempo actual en
            alguna ciudad, obteniendo los datos de una Api externa
            (openweathermap.org) y actualizándolos en pantalla.
            <br />
            La aplicacion solo requiere que escriba el nombre de la ciudad y el
            codigo de su pais, ej: city : guadalajara | coutry code: mx.
            <br />
            <br />
            Tecnologias usadas : React.
          </Description>
          <a href={weather.getApp} target="_blank" rel="noopener noreferrer">
            Visitar Web
          </a>
          <a href={weather.github} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 100px 15px 100px 15px;
  display: grid;
  gap: 60px;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 790px) {
    grid-template-columns: auto;
    gap: 20px;
  }

  div#pokeImage,
  div#weatherImage,
  div#nextImage {
    order: 1;

    @media (max-width: 790px) {
      order: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppImage = styled.img`
  height: 700px;

  @media (max-width: 1200px) {
    height: 490px;
  }
  @media (max-width: 943px) {
    height: 350px;
  }
`;

const WebImage = styled.img`
  width: 792px;
  height: 516px;
  border-radius: 30px;

  @media (max-width: 1200px) {
    width: 554px;
    height: 361px;
  }
  @media (max-width: 943px) {
    width: 396px;
    height: 258px;
  }
  @media (max-width: 450px) {
    width: 296px;
    height: 190px;
  }
`;

const TextWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 550px;
  }
  @media (max-width: 943px) {
    max-width: 400px;
  }
  @media (max-width: 450px) {
    max-width: 280px;
  }

  a {
    color: ${themes.dark.text2};
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s ease-out;

    :last-child {
      margin-left: 10px;
    }

    @media (prefers-color-scheme: light) {
      color: ${themes.light.text1};
    }
    @media (max-width: 1200px) {
      font-size: 17px;
    }
    @media (max-width: 943px) {
      font-size: 15px;
    }
    @media (max-width: 450px) {
      font-size: 11px;
    }
  }

  a:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);

    @media (prefers-color-scheme: light) {
      box-shadow: -7px -7px 20px 0 rgba(255, 255, 255, 0.7),
        7px 7px 20px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const Title = styled(H3)`
  color: ${themes.dark.text1};
  padding: 20px;

  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
`;

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
  text-align: justify;
  margin-bottom: 40px;
  line-height: 25px;

  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
  @media (max-width: 1200px) {
    font-size: 17px;
  }
  @media (max-width: 943px) {
    font-size: 15px;
    line-height: 130%;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
`;
