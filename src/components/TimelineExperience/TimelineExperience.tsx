import "./TimelineExperience.css";

("use client");

import { Timeline } from "flowbite-react";

export default function TimelineExperience() {
  return (
    <section id="timeLine-container" className="timeline-experience-container">
      <h2>Experience</h2>
      <Timeline className="timeline-experience-content">
        <Timeline.Item className="timeline-info">
          <div className="timeline-point" />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">
              <p>Sep 2023 - Sep 2024</p>
            </Timeline.Time>
            <Timeline.Title className="timeline-title">
              Full Stack Developer
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
              <p>
                - I was part of development teams focused on creating
                applications <strong>(CRM systems)</strong>.
              </p>
              <p>
                - Applying agile methodologies and{" "}
                <strong>collaborative development</strong> practices.
              </p>
              <p>
                - I worked on integrating <strong>databases</strong> and
                designing modern and efficient user interfaces.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <div className="timeline-point" />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">
              <p> Feb 2024 - Feb 2024</p>
            </Timeline.Time>
            <Timeline.Title className="timeline-title">
              Frontend Developer
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
              A website designed to present the{" "}
              <strong>company's services</strong> clearly and attractively,
              facilitating <strong>direct contact</strong> between customers and
              the company through <strong>simple and accessible forms</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <div className="timeline-point" />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">
              <p>Jan 2024 - Jan 2024</p>
            </Timeline.Time>
            <Timeline.Title className="timeline-title">
              Frontend Developer
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
              A website designed to clearly and attractively present the{" "}
              <strong>company's services</strong>, facilitating{" "}
              <strong>direct contact</strong> between customers and the company
              through <strong>simple and accessible forms</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="timeline-info">
          <div className="timeline-point" />
          <Timeline.Content className="timeline-content">
            <Timeline.Time className="timeline-date">
              <p>Jul 2019 - Feb 2024</p>
            </Timeline.Time>
            <Timeline.Title className="timeline-title">
              Assistant Manager
            </Timeline.Title>
            <Timeline.Body className="timeline-body-info">
              My main task was to <strong>manage and guide</strong> the team in
              their daily activities to{" "}
              <strong>achieve the company's goals</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </section>
  );
}
