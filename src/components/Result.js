import { useLocation, Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import "./Result.css";

const utm = "utm_source=kinolights&utm_medium=mbti&utm_campaign=christmas2022";
const data = [
  {
    title: "배드 맘스 크리스마스",
    link: `https://m.kinolights.com/title/63166?${utm}`,
    description:
      "누구보다 행복한 크리스마스를 위해 계획 중인 당신!\n\n\n모두가 즐거울 파티 준비를 마쳤는데, 갑자기 불청객이 찾아온다면 어떨까요? 😨 생각만해도 벌써 속상하다고요?\n\n\n여기, 갑자기 들이닥친 엄마를 피해 행복한 크리스마스를 보내려는 세 사람이 있습니다.\n\n\n<배드 맘스 크리스마스>와 함께 어쩐지 공감가는 이들의 이야기와 그들만의 색다른 크리스마스에 빠져들어 볼까요?",
  },
  {
    title: "크리스마스 건너뛰기",
    link: `https://m.kinolights.com/title/38833?${utm}`,
    description:
      "크리스마스는 크리스마스 다워야지! 크리스마스에 진심인 당신!\n\n\n하지만 굳이 시끌벅적 요란하게 보내지 않더라도 가족들과 따뜻하고 행복한 시간을 보내면 충분하다고 생각해요.\n\n\n거기에 매년 크리스마스에 지키던 전통(규칙)까지 있으면 더 완벽한 크리스마스라고 느껴질거예요. 그런 당신에게 딱 어울리는 영화는 <크리스마스 건너뛰기>!\n\n\n특별한 날 가족들과, 가까운 사람들과 따뜻한 마음을 나누는게 얼마나 중요한지 아는 당신에게 잘 어울리는 영화입니다. 💕",
  },
  {
    title: "크리스마스 스피릿",
    link: `https://m.kinolights.com/title/104135?${utm}`,
    description:
      "에라 모르겠다, 그저 신나게 크리스마스를 즐기고 싶은 당신!\n\n\n이번 크리스마스는 유쾌하면서 감동적인 뮤지컬 영화와 함께 보내보는 건 어떨까요?\n\n\n코미디의 대가 라이언 레이놀즈와 윌 퍼렐이 재해석한 골때리는 '스크루지 영감' 이야기가 당신의 크리스마스를 환히 밝혀줄 거예요.\n\n\n쌀쌀한 크리스마스, <크리스마스 스피릿>과 함께 텐션을 한껏 끌어올려~! 보아요! 🪩",
  },
  {
    title: "클라우스",
    link: `https://m.kinolights.com/title/78612?${utm}`,
    description:
      "마음만 먹으면 산타 할아버지와도 친구가 될 수 있을 것 같은 당신!\n\n\n이번 크리스마스는 산타 할아버지와 함께 선물을 배달해보는 건 어떨까요? 🎁\n\n\n산타 할아버지를 도와 착한 일을 하면 다음 크리스마스에 더 좋은 선물을 받을지도 모르잖아요!\n\n\n<클라우스>와 함께 마음 한 구석에 숨어있던 동심을 더 밝게 빛내보자고요!",
  },
  {
    title: "저스트 프렌드",
    link: `https://m.kinolights.com/title/44382?${utm}`,
    description:
      "밖에 나가기는 싫지만, 운명적인 사랑은 만나고픈 당신!\n\n\n이번 크리스마스는 10년 만에 만난 여(남)사친과 빠지는 코믹한 로맨스 이야기에 빠져보는 건 어떨까요?\n\n\n비행기 불시착에 폭설까지, 운명이 이끈 듯 다시 만난 첫사랑 이야기가 당신의 크리스마스를 유쾌하게 만들어 줄 거예요!\n\n\n<저스트 프렌드>와 함께 신나게 웃고 또 겁나게 설레는 크리스마스를 보내보세요! 🎄",
  },
  {
    title: "팀 버튼의 크리스마스 악몽",
    link: `https://m.kinolights.com/title/37091?${utm}`,
    description:
      "상상력이 풍부해 곧잘 나만의 세계로 빨려 들어가는 당신에게 크리스마스 타운을 발굴한 기쁨으로 신이 난 잭의 여행에 동행할 기회를 드릴게요!\n\n\n어디로 튈지 모르는 변덕쟁이, 잭이 벌이는 소동은 크리스마스를 즐겁게 만들어 줄 거에요!\n\n\n팀 버튼의 색깔을 담아 귀엽지만 어딘지 으스스한 캐릭터들은 덤이랍니다. 😎",
  },
  {
    title: "캐롤",
    link: `https://m.kinolights.com/title/10157?${utm}`,
    description:
      "다른 사람과 깊고 진실한 관계를 추구하는 당신!\n\n\n크리스마스에는 거부할 수 없는 운명처럼 빠져드는 아름다운 멜로 영화를 만나보는 건 어떨까요?\n\n\n케이트 블란쳇과 루니 마라의 한마디 말보다 더 많은 이야기를 담은 눈빛과 섬세한 연기, 레트로 느낌 물씬 나는 배경이 당신을 1952년 크리스마스 시즌 뉴욕으로 데려다 줄 거예요. 🎄",
  },
  {
    title: "라스트 홀리데이",
    link: `https://m.kinolights.com/title/28092?${utm}`,
    description:
      "크리스마스에 반짝이는 조명처럼 멋진 개성과 화끈한 성격을 가진 당신!\n\n\n이번 크리스마스에는 내일이 없는 것처럼 끝내주게 놀 생각이라고요?\n\n\n하고 싶은 일은 하고야 마는 <라스트 홀리데이> 속 주인공 조지아와 함께라면\n\n\n더 신나는 크리스마스, 지금 바로 예약입니다. 🔔",
  },
];

const buttonStyle = {
  color: "black",
  backgroundColor: "white",
  marginTop: "2rem",
  borderRadius: "10px",
  lineHeight: "1.1rem",
  fontSize: "large",
  fontFamily: "GangwonEdu_OTFBoldA",
  boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
  "&:focus": { color: "black", backgroundColor: "white" },
  "&:hover": { color: "black", backgroundColor: "white" },
};

const Result = () => {
  const location = useLocation();
  const id = +location.pathname.split("/")[2];

  return (
    <div className="Result">
      <Box
        className="Result-Box"
        component="span"
        alignItems="center"
        justifyContent="center"
        sx={{
          p: "100px 30px",
          backgroundImage: `url(https://static.kinolights.com/mbti/2022-christmas/r${id}.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="Result-Card">
          <div className="Result-Title">당신의 크리스마스 영화는,</div>
          <div className="Result-Subtitle">{`${data[id].title}`}</div>
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
            }}
          />
          <div
            className="Result-Description"
            dangerouslySetInnerHTML={{ __html: data[id].description }}
          />
          <Button
            className="Result-Button"
            component="a"
            href={data[id].link}
            disableRipple
            disableFocusRipple
            sx={buttonStyle}
          >
            지금 바로 보러가기!
          </Button>
          <div className="Result-Share">친구에게 공유하기</div>
          <IconButton
            color="inherit"
            component="label"
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            onClick={() =>
              navigator.clipboard
                .writeText(`https://2022christmas.kinolights.com/result/${id}`)
                .then(() => alert("주소가 복사되었습니다.\n원하는 곳에 붙여넣기 해주세요."))
            }
          >
            <LinkIcon />
          </IconButton>
        </div>
        <Button
          className="Result-Button"
          component={Link}
          to="/"
          disableRipple
          disableFocusRipple
          startIcon={<ReplayIcon />}
          sx={buttonStyle}
        >
          테스트 다시하기
        </Button>
      </Box>
    </div>
  );
};

export default Result;
