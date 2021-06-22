import React from "react";
import "./Team.css";
// import Sultan from '../../imgs/Sultan.jpg'
// import Bekarstan from '../../imgs/Bekarstan.jpg'
import ShowMoreText from "react-show-more-text";
export default function Team() {
  return (
    <div id="Team">
      <div id="imgs">
        <img src="../../imgs/Sultan.jpg" alt="" />
        <img src="../../imgs/Bekarstan.jpg" alt="" />
      </div>
      <div id="text">
        <ShowMoreText
          /* Default options */
          lines={3}
          more="Подробнее"
          less="Скрыть"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={onclick}
          expanded={false}
          width={242}
        >
          <p>
            {" "}
            Sultan Taalaibekov <br />
            sultan.taalaibekov@mail.ru <br />
            +(996) 708 535 328 <br />
          </p>
          Был рожден тогда здесь там и здесь, делал это то все
        </ShowMoreText>

        <ShowMoreText
          /* Default options */
          lines={3}
          more="Подробнее"
          less="Скрыть"
          className="content-css"
          anchorClass="my-anchor-css-class"
          onClick={onclick}
          expanded={false}
          width={242}
        >
          <p>
            {" "}
            Bekarstan Kubanychbekov <br />
            bekarstan.kubanychbekov@mail.ru <br />
            +(996) 559 544 469 <br />
          </p>
          этот тоже так же был рожден тогда здесь там и здесь, делал это то все
        </ShowMoreText>
      </div>
    </div>
  );
}
