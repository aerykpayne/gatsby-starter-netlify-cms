import React from "react"
import { cx, css } from "emotion"
import Wrapper from "./Wrapper"
import { NICER_BLUE, SECONDARY_TEXT, TERTIARY_TEXT } from "./constants"

import aeryk from "../img/aeryk.png"
import jay from "../img/jay.jpg"
import robert from "../img/robert.jpg"

const people = css`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 30px 25px;
  img {
    width: 45px;
    border-radius: 45px;
    border: 2px solid white;
  }
`

const peopleInfo = css`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    position: relative;
    bottom: 5px;
    margin-right: 15px;
  }
  h5 {
    font-size: 22px;
    letter-spacing: 0.1px;
  }
  p {
    opacity: 0.7;
  }
`

export default function OurTeam({ className }) {
  const headerClass = css`
    width: 100%;
    color: white;
    background-color: ${NICER_BLUE};
    h2 {
      color: ${SECONDARY_TEXT};
      font-size: 48px;
      font-weight: 600;
      line-height: 52px;
      margin-top: 30px;
      margin-bottom: 0px;
    }
  `
  return (
    <div className={headerClass}>
      <h4
        className={css`
          font-weight: 600;
          font-size: 22px;
          letter-spacing: 0.1px;
          color: ${TERTIARY_TEXT};
        `}>
        Our Team
      </h4>
      <h2>Meet Nicer</h2>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          h4 {
            font-weight: 600;
            letter-spacing: 0.1px;
            font-size: 22px;
          }
          p {
            line-height: 28px;
            font-size: 18px;
          }
        `}>
        <div
          className={css`
            display: flex;
            position: relative;
            right: 25px;
          `}>
          <div className={people}>
            <div className={peopleInfo}>
              <img src={aeryk} />
              <div>
                <h5>Aeryk Payne</h5>
                <p>Digital Designer</p>
              </div>
            </div>
            <p>
              Aeryk is an experienced designer and front-end developer
              specializing in digital product design. He's worked at several
              agencies creating digital products and experiences for clients
              such as NikeSB, Chick-fil-a, TUMI, Lenovo, and Verizon. He now
              heads up design at Nicer.
            </p>
          </div>
          <div className={people}>
            <div className={peopleInfo}>
              <img src={jay} />
              <div>
                <h5>Jay Harris</h5>
                <p>Software Engineer</p>
              </div>
            </div>
            <p>
              Jay is a full-stack developer focused on building applications
              that help businesses manage data more efficiently. He has led
              development on data automation products used by companies like
              Spotify and Wells Fargo, and built internal data management
              products used by some of the largest airports in the US.
            </p>
          </div>
          <div className={people}>
            <div className={peopleInfo}>
              <img src={robert} />
              <div>
                <h5>Robert Gonzales</h5>
                <p>Software Engineer</p>
              </div>
            </div>
            <p>
              Robert is a designer, and full stack developer focused on building
              human-friendly user interfaces and APIs. He’s also involved in
              code education and teaches javascript locally. He’s built and led
              development on apps used by companies all over the world,
              including Allrecipes, Codepen, & GrabCar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
