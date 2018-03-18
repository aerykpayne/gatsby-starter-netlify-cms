import React from "react"
import { css } from "emotion"
import { NICER_BLUE, NICER_PINK } from "./constants"

const projectLink = css`
  position: relative;
  margin-bottom: 10px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    top: 6px;
    bottom: 10px;
    height: auto;
    border-radius: 2px;
    background: white;
    opacity: 0.2;
  }

  &::before {
    left: -6px;
  }

  &::after {
    right: -6px;
    background: white;
    transition: width 500ms cubic-bezier(0.8, 0.1, 0.1, 1);
  }

  &:hover::before {
    border-radius: 2px;
    background: white;
    width: 120%;
    transition: width 500ms cubic-bezier(0.8, 0.1, 0.1, 1);
  }

  &:hover::after {
    right: -6px;
    background: transparent;
    width: 120%;
    transition: 0s;
  }
  span {
    position: relative;
    z-index: 3;
    font-size: 18px;
    font-weight: 600;
    color: ${NICER_PINK};
  }
`

export function ProjectCard({ title, blurb, link, description }) {
  return (
    <div
      className={css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        padding: 30px;
        color: white;
        background-color: ${NICER_BLUE};
        border-radius: 4px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
        margin: 0px 0px 70px 0px;
      `}>
      <h4
        className={css`
          font-size: 18px;
          margin: 0;
        `}>
        {title}
      </h4>
      <h3
        className={css`
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 0.1px;
          line-height: 36px;
          margin: 30px 0px 50px 0px;
        `}>
        {blurb}
      </h3>
      <a href={link} className={projectLink}>
        <span>Visit Site</span>
      </a>
      <p
        className={css`
          opacity: 0.4;
          margin: 0;
        `}>
        {description}
      </p>
    </div>
  )
}

export default function ProjectCards({ projects = [] }) {
  return (
    <ul
      className={css`
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
        li {
          min-width: 475px;
          width: 48%;
          display: flex;
          align-items: stretch;
          @media (max-width: 728px) {
            width: 50%;
          }
          @media (max-width: 600px) {
            width: 100%;
          }
        }
      `}>
      {projects.map(project => (
        <li key={project.frontmatter.date}>
          <ProjectCard
            title={project.frontmatter.title}
            blurb={project.frontmatter.blurb}
            link={project.frontmatter.link}
            description={project.frontmatter.description}
          />
        </li>
      ))}
    </ul>
  )
}

export const fragment = graphql`
  fragment ProjectPreview on MarkdownRemark {
    frontmatter {
      date
      title
      blurb
      link
      description
    }
  }
`
