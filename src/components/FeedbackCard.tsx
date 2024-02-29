import { quotes } from "../assets";

const FeedbackCard = ({ img }) => (
  <div className="flex justify-between flex-col  md:mr-0 sm:mr-0 mr-0 my-0 feedback-card">
    <div className="flex flex-row">
      <img src={img} className="" />
    </div>
  </div>
);

export default FeedbackCard;
