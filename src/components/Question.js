import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

import "./Question.css";

const steps = 9;
const data = [
  {
    question:
      "크리스마스 배경의 영화 촬영이 한창인 뉴욕,\n스쳐 지나가는 엑스트라로 출연해 달라고 하는데\n당신의 선택은?",
    firstChoice:
      "아니 어떻게 내 얼굴을 전 세계에 팔아?\n먼 발치에서 구경만 하기",
    secondChoice: "뭐 어때 추억인데! 한 번 해보기",
  },
  {
    question:
      "친구들과의 크리스마스 파티가 예정되어 있던 당신,\n폭설로 오도가도 못하게 됐다면?",
    firstChoice: "파티? 영통으로 하면 돼.\n영상 통화로 친구들과 파티!",
    secondChoice: "올해는 가족들과 즐거운 크리스마스 보내기",
  },
  {
    question:
      "길거리에서 울던 아이가 나를 보더니\n울음을 멈추고 산타가 진짜 있냐고 묻는다.",
    firstChoice:
      '동심은 지켜줘야지!\n"당연하지! 산타 할아버지는 우는 아이한테 선물 안주니까 뚝!"',
    secondChoice:
      '아이의 귀에 대고 작게...\n"걱정마 울어도 돼. 사실 산타는 없거든"',
  },
  {
    question: "썸남 or 썸녀와 크리스마스에 만나기로 했는데,\n어디에서 만날까?",
    firstChoice: "나의 취향을 보여줄 수 있는 아지트같은 장소",
    secondChoice: "인스타 각! 트렌디함을 어필할 핫플로 직행",
  },
  {
    question:
      "이번 크리스마스에는 올 한 해 수고한 나에게\n선물을 해주고 싶다. 토닥토닥, 수고했어 내 자신!",
    firstChoice:
      "평소 가지고 싶었던 사랑스러운 곰인형이나 귀여운 소품 선물하기",
    secondChoice:
      "현금이 최고지! 내가 자유롭게 쓸 수 있는 현금을 나에게 허락한다!",
  },
  {
    question:
      "바디 프로필을 예약한 당신!\n친구의 크리스마스 파티에 치킨, 피자 등등\n기름진 음식이 잔뜩! 이때 당신은?",
    firstChoice: "이건 아니지 나 자신아.\n꾹 참고 식단 계속하기",
    secondChoice: "에라 모르겠다! 하루는 괜찮아.\n침도 안 닦고 닭 봉 잡기",
  },
  {
    question:
      "크리스마스 기념으로 마트에 간 당신,\n장난감 코너에서 일하는 산타가 당신의 이상형이라면?",
    firstChoice: "이런 기회는 흔치 않다! 번호 따기",
    secondChoice: "일하는 사람한테 무슨...\n아쉽지만 지나가기",
  },
  {
    question:
      "크리스마스 이브 아침, 눈을 떴는데\n산타클로스가 루돌프를 잃어버렸다며\n자동차를 빌려달라고 한다.",
    firstChoice: "산타클로스면 믿을 수 있지. 빌려주기",
    secondChoice: "산타라지만 나랑은 초면아님?\n빌려줄 수 없다.",
  },
  {
    question: "크리스마스 파티가 취소된 당신, 이제 어떡하지?",
    firstChoice: "가까운 친구들에게 크리스마스를 같이 보내자며 연락 돌리기",
    secondChoice: "어쩔 수 없지! 집에서 따뜻하게 특선 영화를 보며 유유자적하기",
  },
];

const stepperStyle = {
  backgroundColor: "rgb(25, 69, 51)",
  "& .MuiMobileStepper-progress": {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderRadius: "10px",
    width: "100vmin",
    height: "20px",
  },
  "& span.MuiLinearProgress-bar": { backgroundColor: "white" },
};

const choiceButtonStyle = {
  color: "black",
  backgroundColor: "white",
  marginTop: "9vmin",
  borderRadius: "10px",
  lineHeight: "1.1rem",
  fontFamily: "GangwonEdu_OTFBoldA",
  boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
  "&:focus": { color: "black", backgroundColor: "white" },
  "&:hover": { color: "black", backgroundColor: "white" },
};

const Question = () => {
  const navigate = useNavigate();

  const [mbtiCount, setMbtiCount] = useState({
    e: 0,
    i: 0,
    f: 0,
    t: 0,
    j: 0,
    p: 0,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [done, setDone] = useState(false);

  const postprocess = useCallback(() => {
    if (done) {
      return;
    } else if (activeStep < 8) {
      setActiveStep(activeStep + 1);
      setMbtiCount(mbtiCount);
      return;
    }

    setDone(true);

    let e, i, f, t, j, p;
    if (mbtiCount.e > mbtiCount.i) e = true;
    else i = true;

    if (mbtiCount.f > mbtiCount.t) f = true;
    else t = true;

    if (mbtiCount.j > mbtiCount.p) j = true;
    else p = true;

    if (e && f && j) navigate("/result/0");
    else if (i && t && j) navigate("/result/1");
    else if (e && t && j) navigate("/result/2");
    else if (e && f && p) navigate("/result/3");
    else if (i && f && p) navigate("/result/4");
    else if (i && t && p) navigate("/result/5");
    else if (i && f && j) navigate("/result/6");
    else if (e && t && p) navigate("/result/7");
  }, [activeStep, mbtiCount, done, navigate]);

  const firstChoiceHandler = useCallback(() => {
    if (activeStep >= steps || done) return;

    switch (activeStep) {
      case 0:
        mbtiCount.i++;
        break;
      case 1:
        mbtiCount.j++;
        break;
      case 2:
        mbtiCount.f++;
        break;
      case 3:
        mbtiCount.e++;
        break;
      case 4:
        mbtiCount.f++;
        break;
      case 5:
        mbtiCount.j++;
        break;
      case 6:
        mbtiCount.f++;
        break;
      case 7:
        mbtiCount.e++;
        break;
      case 8:
        mbtiCount.j++;
        break;
      default:
        break;
    }

    postprocess();
  }, [activeStep, mbtiCount, done, postprocess]);

  const secondChoiceHandler = useCallback(() => {
    if (activeStep >= steps || done) return;

    switch (activeStep) {
      case 0:
        mbtiCount.e++;
        break;
      case 1:
        mbtiCount.p++;
        break;
      case 2:
        mbtiCount.t++;
        break;
      case 3:
        mbtiCount.i++;
        break;
      case 4:
        mbtiCount.t++;
        break;
      case 5:
        mbtiCount.p++;
        break;
      case 6:
        mbtiCount.t++;
        break;
      case 7:
        mbtiCount.i++;
        break;
      case 8:
        mbtiCount.p++;
        break;
      default:
        break;
    }

    postprocess();
  }, [activeStep, mbtiCount, done, postprocess]);

  return (
    <div className="Question">
      <div className="Question-StepLabel">{`${activeStep + 1}/${steps}`}</div>
      <MobileStepper
        className="Question-Stepper"
        variant="progress"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={stepperStyle}
      />
      <img
        src={`https://static.kinolights.com/mbti/2022-christmas/q${activeStep + 1}.jpg`}
        className="Question-Image"
        alt="start"
      />
      <div className="Question-Number">Q{activeStep + 1}.</div>
      <div className="Question-Label">{data[activeStep].question}</div>
      <Button
        className="Question-Choice"
        disableRipple
        disableFocusRipple
        sx={choiceButtonStyle}
        onClick={firstChoiceHandler}
      >
        {data[activeStep].firstChoice}
      </Button>
      <Button
        className="Question-Choice"
        disableRipple
        disableFocusRipple
        sx={choiceButtonStyle}
        onClick={secondChoiceHandler}
      >
        {data[activeStep].secondChoice}
      </Button>
    </div>
  );
};

export default Question;
