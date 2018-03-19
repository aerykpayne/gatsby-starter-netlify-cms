import React from "react"
import path from "path"
import { css } from "emotion"
import Link from "gatsby-link"
import {
  NICER_BLUE,
  TERTIARY_TEXT,
  TABLET_BREAKPOINT,
  MOBILE_BREAKPOINT
} from "./constants"

export function CaseStudyCard({ slug, client, title, blurb, image, type }) {
  return (
    <Link to={path.join("/work", slug)} className={css``}>
      <div
        className={css`
          display: flex;
          background-color: ${NICER_BLUE};
          border-radius: 8px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
          margin: 0px 0px 70px 0px;
          transition: all 250ms ease;
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);
          }
        `}>
        <div
          className={css`
            flex-grow: 1;
            padding: 35px;
          `}>
          <h5
            className={css`
              margin: 0px 0px 100px 0px;
              font-weight: 600;
              font-size: 18px;
              color: ${TERTIARY_TEXT};

              @media (max-width: ${TABLET_BREAKPOINT}) {
                margin: 0px 0px 40px 0px;
              }
            `}>
            {title}
          </h5>
          <h3
            className={css`
              margin: 0px 0px 100px 0px;
              font-size: 36px;
              font-weight: 600;
              line-height: 40px;
              max-width: 400px;
              color: white;

              @media (max-width: ${TABLET_BREAKPOINT}) {
                margin: 0px 0px 40px 0px;
              }
            `}>
            {blurb}
          </h3>
          <h5
            className={css`
              color: white;
              font-weight: 600;
              font-size: 18px;
            `}>
            {type}
          </h5>
          <h6
            className={css`
              font-weight: 400;
              font-size: 16px;
              color: ${TERTIARY_TEXT};
            `}>
            {client}
          </h6>
        </div>
        <div
          className={css`
            flex-shrink: 0;
            width: 50%;
            background-size: 100%;
            background-position: 80% 20%;
            background-repeat: no-repeat;
            background-color: ${NICER_BLUE};
            background-image: url(${image});
            transition: all 400ms ease;
            &:hover {
              background-position: 80% 25%;
            }

            @media (max-width: ${TABLET_BREAKPOINT}) {
              background-position: 80% 40%;
            }
          `}
        />
      </div>
    </Link>
  )
}

export default function CaseStudyCards({ cases = [] }) {
  console.log(cases)
  return (
    <ul
      className={css`
        margin: 0;
        padding: 0;
        list-style: none;
      `}>
      {cases.map(post => (
        <li
          className={css`
            margin: 30px 0;
          `}
          key={post.frontmatter.slug}>
          <CaseStudyCard
            slug={post.frontmatter.slug}
            title={post.frontmatter.title}
            blurb={post.frontmatter.blurb}
            image={post.frontmatter.image}
            type={post.frontmatter.type}
            client={post.frontmatter.client}
          />
        </li>
      ))}
    </ul>
  )
}

export const fragment = graphql`
  fragment CaseStudyPreview on MarkdownRemark {
    frontmatter {
      slug
      title
      blurb
      image
      type
      client
    }
  }
`
