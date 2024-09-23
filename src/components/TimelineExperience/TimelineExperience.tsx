import "./TimelineExperience.css";

("use client");

import { Timeline } from "flowbite-react";
// import { HiArrowNarrowRight } from "react-icons/hi";

export function TimelineExperience() {
  return (
    <section id="timeLine-container" className="timeline-experience-container">
      <h2>Experience</h2>
      <Timeline className="timeline-experience-content">
        <Timeline.Item className="timeline-info">
          <Timeline.Point />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">Sep 2023 - Sep 2024</Timeline.Time>
            <Timeline.Title className="timeline-title">
              Full Stack Developer
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
              <p>
                - Formé parte de equipos de desarrollo enfocados en la creación
                de aplicaciones <strong>( sistemas CRM )</strong>.
              </p>
              <p>
                - Aplicar metodologías ágiles y prácticas de{" "}
                <strong>desarrollo colaborativo</strong>.
              </p>
              <p>
                - Trabajé en la integración de <strong>bases de datos</strong> y
                el diseño de interfaces de usuario modernas y eficientes.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <Timeline.Point />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">Feb 2024 - Feb 2024</Timeline.Time>
            <Timeline.Title className="timeline-title">
            Desarrollador Frontend
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
            Página web que está diseñada para presentar los <strong>servicios de la empresa </strong> de forma clara y atractiva, facilitando el <strong>contacto directo</strong> entre los clientes y la empresa mediante <strong>formularios sencillos y accesibles</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <Timeline.Point />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">Jan 2024 - Jan 2024</Timeline.Time>
            <Timeline.Title className="timeline-title">
            Desarrollador Frontend
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
            Página web que está diseñada para presentar los <strong>servicios de la empresa </strong> de forma clara y atractiva, facilitando el <strong>contacto directo</strong> entre los clientes y la empresa mediante <strong>formularios sencillos y accesibles</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <Timeline.Point />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">Jul 2019 - Feb 2024</Timeline.Time>
            <Timeline.Title className="timeline-title">
            Asistente de Gerente
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
            Mi tarea principal consistía en <strong>gestionar y guiar</strong>  al grupo en sus actividades diarias para <strong>alcanzar los objetivos</strong>  de la empresa.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </section>
  );
}
