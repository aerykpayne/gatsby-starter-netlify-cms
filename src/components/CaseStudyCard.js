// import React from "react"
// import path from "path"
// import { css } from "emotion"
// import Link from "gatsby-link"
// import { NICER_BLUE } from "./constants"
//
// export function CaseStudyCard({ slug, client, title, blurb, image, type }) {
//   return (
//     <div
//       className={css`
//         position: relative;
//         width: 100%;
//         height: 250px;
//         display: flex;
//         border-radius: 2px;
//         overflow: hidden;
//         background-color: ${NICER_BLUE};
//         box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
//         transition: all 300ms ease;
//         :hover {
//           transform: translateY(-4px);
//           box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
//         }
//       `}>
//       <Link
//         to={path.join("/work", slug)}
//         className={css`
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//         `}
//       />
//       <div
//         className={css`
//           flex-grow: 1;
//           padding: 30px;
//         `}>
//         <h6
//           className={css`
//             font-weight: bold;
//             text-transform: uppercase;
//           `}>
//           {client}
//         </h6>
//         <h4
//           className={css`
//             margin: 20px 0;
//             overflow: hidden;
//             max-height: ${1.7 * 2}rem;
//           `}>
//           {title}
//         </h4>
//         <p
//           className={css`
//             font-size: 1.25rem;
//             line-height: 1.7rem;
//             overflow: hidden;
//             max-height: ${1.7 * 2}rem;
//           `}>
//           {blurb}
//         </p>
//         <p>{type}</p>
//       </div>
//       <div
//         className={css`
//           flex-shrink: 0;
//           width: 350px;
//           height: 250px;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           background-color: ${NICER_BLUE};
//           background-image: url(${image});
//         `}
//       />
//     </div>
//   )
// }
//
// export default function CaseStudyCards({ cases = [] }) {
//   console.log(cases)
//   return (
//     <ul
//       className={css`
//         margin: 0;
//         padding: 0;
//         list-style: none;
//       `}>
//       {cases.map(post => (
//         <li
//           className={css`
//             margin: 30px 0;
//           `}
//           key={post.frontmatter.slug}>
//           <CaseStudyCard
//             slug={post.frontmatter.slug}
//             title={post.frontmatter.title}
//             blurb={post.frontmatter.blurb}
//             image={post.frontmatter.image}
//             type={post.frontmatter.type}
//             client={post.frontmatter.client}
//           />
//         </li>
//       ))}
//     </ul>
//   )
// }
//
// export const fragment = graphql`
//   fragment CaseStudyPreview on MarkdownRemark {
//     frontmatter {
//       slug
//       title
//       blurb
//       image
//       type
//       client
//     }
//   }
// `
