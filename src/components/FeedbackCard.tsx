import { quotes } from "../assets";

const FeedbackCard = ({ img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
      <img src={img} className="w-[100px] h-[100px] rounded-full" />
    </div>
  </div>
);

export default FeedbackCard;
