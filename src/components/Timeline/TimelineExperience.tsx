import "./TimelineExperience.css";

"use client";

import {Timeline } from "flowbite-react";
// import { HiArrowNarrowRight } from "react-icons/hi";

export function TimelineExperience() {
  return (
    <section id="timeLine-container" className="timeline-experience-container">
      <h2>Experience</h2>
    <Timeline className="timeline-experience-content">
      <Timeline.Item className="timeline-info">
        <Timeline.Point/>
        <Timeline.Content className="timeline-content">
          <Timeline.Time className="timeline-date">February 2022</Timeline.Time>
          <Timeline.Title className="timeline-title">Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className="timeline-body-info">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="timeline-info">
        <Timeline.Point />
        <Timeline.Content className="timeline-content">
          <Timeline.Time className="timeline-date">March 2022</Timeline.Time>
          <Timeline.Title className="timeline-title">Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body className="timeline-body-info">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="timeline-info">
        <Timeline.Point />
        <Timeline.Content className="timeline-content">
          <Timeline.Time className="timeline-date">April 2022</Timeline.Time>
          <Timeline.Title className="timeline-title">E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className="timeline-body-info">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="timeline-info">
        <Timeline.Point />
        <Timeline.Content className="timeline-content">
          <Timeline.Time className="timeline-date">April 2022</Timeline.Time>
          <Timeline.Title className="timeline-title">E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className="timeline-body-info">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </section>
  );
}
