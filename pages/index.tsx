import React from "react";
import { useRouter } from "next/router";
import { AppDispatch } from "@redux/store";
import { resetState } from "@slices/score";
import { connect, ConnectedProps } from "react-redux";
import { imageNameMapping } from "@src/data/image-name-mapping";
import { Colors } from "@src/constants";
import HomeIconText from "@components/icon_texts/home_icon_text";

type HomeReduxProps = ConnectedProps<typeof connector>;

interface HomeProps extends HomeReduxProps {}

const Home: React.FC<HomeProps> = ({ resetState: ResetState }) => {
  const router = useRouter();
  const startSurvey = () => {
    ResetState();
    router.push("/survey");
  };
  return (
    <div
      className="justify-between flex items-center flex-col h-screen w-screen"
      style={rootStyle}
    >
      <div
        id="imageWrapper"
        className="bg-cover bg-center flex justify-center items-center w-full h-1/6"
        style={imageWrapperStyle}
      >
        <img src={imageNameMapping["logo1"]} />
      </div>
      <div
        id="subject"
        className="flex justify-center items-center w-full h-2/6"
      >
        <div className="w-7/12">
          <HomeIconText />
        </div>
      </div>
      <div
        id="interactions"
        className="flex flex-col gap-5 justify-center items-center w-full h-2/6"
      >
        <button
          style={buttonStyle}
          className="w-11/12 py-6 justify-center items-center flex rainbow"
          onClick={startSurvey}
        >
          <span style={buttonTextStyle}>여행 한 번 떠나볼까?</span>
        </button>
        <div className="justify-center items-center flex flex-col gap-1">
          <span style={subTextStyle}>인스타그램 공유 이벤트 진행 중!</span>
          <span style={subTextStyle}>@teamtripbuilder</span>
        </div>
      </div>
      <div
        id="infos"
        className="flex justify-center items-end w-full h-1/6 pb-8"
      >
        <span style={infoTextStyle}>
          이 페이지에는 네이버에서 제공한 나눔글꼴이 적용되어 있습니다.
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  resetState: () => dispatch(resetState()),
});

const connector = connect(null, mapDispatchToProps);

export default connector(Home);

const imageWrapperStyle: React.CSSProperties = {
  backgroundImage: `url(${imageNameMapping["home"]})`,
};

const rootStyle: React.CSSProperties = {
  backgroundColor: Colors.primary,
};

const infoTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareL",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "12px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2,
  textAlign: "center",
  letterSpacing: "normal",
};

const buttonTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "18px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  textAlign: "center",
  letterSpacing: "normal",
};

const subTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "14px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.43,
  textAlign: "center",
  letterSpacing: "normal",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#d6ebf4",
};
