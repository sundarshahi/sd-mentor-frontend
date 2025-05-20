import { useState } from "react";

interface FaqAccordionProps {
  data: {
    question: string;
    answer: string;
  }[];
}

const FaqAccordion = ({ data }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-[100%] h-[100vh] p-5 flex items-center  justify-center">
      <div className=" bg-white rounded-lg p-[20px]">
        <div className="text-3xl font-bold">FAQs</div>
        <div>
          {data.map((item, index) => (
            <div className="mt-[15px] mb-[15px] border-b border-gray-200">
              <div
                key={index}
                className="text-[18px] flex back cursor-pointer p-[10px] transition-[0.5s] ease-in-out"
                onClick={() => handleClick(index)}
              >
                <div className="max-w-[500px]font-medium">{item.question}</div>
                <div
                  className={`ml-auto w-[28px] h-[30px] rounded-[50%] text-center text-white pb-0.5
                     ${
                       activeIndex === index
                         ? "bg-purple-900"
                         : "bg-purple-500 hover:bg-purple-900"
                     }`}
                >
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
              </div>
              {activeIndex === index && (
                <div
                  key={index}
                  className="max-w-[500px] text-gray-500 text-[15px] p-[10px]"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
