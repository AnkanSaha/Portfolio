/* eslint-disable react/prop-types */
import React from "react";
import { useMemo } from "react";

const ContainerCard = ({ imageDimensions, propTop, propLeft }) => {
  const frameFrameFrameStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="w-[23.31rem] shrink-0 flex flex-row items-start justify-start relative text-center text-[1.75rem] text-solid-heading-dark-mode font-poppins">
      <img
        className="h-[16.25rem] w-[23.44rem] absolute my-0 mx-[!important] top-[-0.19rem] left-[0rem] rounded-t-xl rounded-b-none object-cover z-[1]"
        loading="eager"
        alt=""
        src={imageDimensions}
        style={frameFrameFrameStyle}
      />
      <div className="flex-1 rounded-xl bg-darkslategray shadow-[2px_2px_100px_rgba(0,_0,_0,_0.2)] flex flex-col items-center justify-start pt-[17.75rem] pb-[1.56rem] pr-[1.94rem] pl-[1.75rem] box-border gap-[0.75rem] max-w-full mq750:pt-[11.56rem] mq750:pb-[1.25rem] mq750:box-border">
        <div className="w-[23.31rem] h-[35.44rem] relative rounded-xl bg-darkslategray shadow-[2px_2px_100px_rgba(0,_0,_0,_0.2)] hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.06rem]">
          <h3 className="m-0 relative text-inherit leading-[1.63rem] font-medium font-inherit z-[1] mq450:text-[1.38rem] mq450:leading-[1.31rem]">
            Project Tile goes here
          </h3>
          <div className="self-stretch h-[8.13rem] relative text-[1.13rem] leading-[1.63rem] font-light text-left flex items-center z-[1]">
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.31rem] text-left text-[1rem]">
          <div className="self-stretch relative leading-[1.63rem] z-[1]">
            <span>Tech stack :</span>
            <span className="text-[0.88rem] font-light">
              {" "}
              HTML , JavaScript, SASS, React
            </span>
          </div>
          <div className="flex flex-row items-start justify-start gap-[3rem] text-white mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[0.63rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/akariconslinkchain1.svg"
              />
              <div className="relative [text-decoration:underline] leading-[1.63rem] z-[1]">
                Live Preview
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/akariconsgithubfill-11.svg"
              />
              <div className="relative [text-decoration:underline] leading-[1.63rem] z-[1]">
                View Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
