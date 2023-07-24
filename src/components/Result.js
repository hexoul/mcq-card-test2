import { useLocation, Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { backgroundColor, color } from "./constant";
import "./Result.css";

const utm =
  "utm_source=kinolights&utm_medium=mbti&utm_campaign=mydestiny-female";
const data = [
  {
    title: "하쿠",
    description: `<b>"겁내지 마. 나는 그대의 편이야."</b>\n\n\n사교적인 당신은 사려 깊고 진실된 연인을 원하는군요!\n<a href="https://kinolights.com/title/12318?${utm}">&lt;센과 치히로의 행방불명&gt;</a> 속 하쿠와 잘 맞을 것으로 보여요.\n\n\n하쿠는 곤경에 빠진 치히로를 도와주는 수수께끼의 인물인데요.\n그는 상대방의 이야기를 늘 따뜻한 시선으로 들어주고, 깊은 관계를 갖죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n서로를 구원하는 치히로와 하쿠의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 욘두\n자기 주장이 너무 강한 인물과의 사랑은 상처만 남길 거예요",
  },
  {
    title: "셜록 홈즈",
    description: `<b>"불가능한 경우를 제외하고 남은 것은 아무리 이상하고 믿기지 않더라도 사실이기 마련이야."</b>\n\n\n독립적인 당신은 재미있고 지적인 연인을 원하는군요!\n<a href="https://kinolights.com/title/80230?${utm}">&lt;셜록 홈즈&gt;</a> 속 셜록 홈즈와 잘 맞을 것으로 보여요.\n\n\n셜록 홈즈는 통찰력과 괴짜적 성격이 매력적인 인물인데요.\n머리가 비상하고, 정말 가까운 인물들에게는 다정한 신사 같은 셜록 홈즈는\n늘 당신에게 재미있는 시선을 제안해줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 끊임없이 자극할 셜록 홈즈와의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 테드\n깊은 생각을 사치로 여기는 인물과의 사랑은 매일이 전쟁일 거예요",
  },
  {
    title: "코넬",
    description: `<b>"많은 사람들이 널 사랑하고 널 걱정하고 있어. 너도 그걸 알았으면 좋겠어."</b>\n\n\n에너지 넘치고 열정적인 당신은 배울 점이 많은 연인을 원하는군요!\n<a href="https://kinolights.com/title/84520?${utm}">&lt;노멀 피플&gt;</a> 속 코넬과 잘 맞을 것으로 보여요.\n\n\n차분하고 순한 성격의 코넬은 내면이 복잡하고 생각이 많은 인물이에요.\n하지만 이를 드러내지 않고 상대방을 먼저 배려하고 이야기를 들어주곤 하죠.\n당신의 활동성을 귀여워해주고, 가끔 과하다 싶을 때에는 붙잡아줄 수도 있는 안정감 있는 애인이 되어 줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신이 어떤 모습이던 묵묵히 지켜봐줄 코넬과의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 피터\n당신보다 적극적인 성격의 애인은 당신을 지치게 할 거예요",
  },
  {
    title: "브루스 배너",
    description: `<b>"그러니까 헐크가, 또 다른 내가 나를 살린 거다? 좋네요... 낭만적인 얘기예요. 근데 왜 살렸답디까?"</b>\n\n\n시간 낭비를 싫어하는 당신은 장기적인 관계를 맺을 수 있는 연애를 원하는군요!\n<a href="https://kinolights.com/title/41311?${utm}">&lt;어벤져스&gt;</a> 속 브루스 배너 잘 맞을 것으로 보여요.\n\n\n헐크와는 다른 성격을 지닌 브루스 배너는 사근사근한 말투에 점잖고 지적인 인물이에요.\n      감정을 쉽게 표현하지 않아서 시니컬한 듯 보이지만,사랑하는 사람에게는 한없이 헌신적인 로맨티스트랍니다.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 헌신적으로 응원해줄 뚱이와의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 로리\n독립적인 당신을 붙들어두고 싶어하는 로리는 당신과 맞지 않을 거예요",
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
  color,
  backgroundColor,
  marginTop: "2rem",
  borderRadius: "10px",
  lineHeight: "1.1rem",
  fontSize: "large",
  fontFamily: "GangwonEdu_OTFBoldA",
  boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
  "&:focus": { color, backgroundColor },
  "&:hover": { color, backgroundColor },
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
          backgroundImage: `url(https://static.kinolights.com/mbti/202307-fate/male-r${id}.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="Result-Card">
          <div className="Result-Title">당신의 운명은...</div>
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
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
              mt: 4,
              mb: 1,
            }}
          />
          <div
            className="Result-Description"
            dangerouslySetInnerHTML={{ __html: data[id].description2 }}
          />
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
              mt: 4,
              mb: 4,
            }}
          />
          <div>이 캐릭터가 진짜 당신의 운명인가요?</div>
          <Button
            className="Result-Button"
            component="a"
            href="https://kinolights.com" // FIXME
            disableRipple
            disableFocusRipple
            sx={buttonStyle}
          >
            확인하고 커피 마시기
          </Button>
          <Button
            className="Result-Button"
            component="a"
            href="https://kinolights.com" // FIXME
            disableRipple
            disableFocusRipple
            sx={buttonStyle}
          >
            당신의 운명의 여자 캐릭터가 궁금하다면?
          </Button>
          <div className="Result-Share">친구에게 공유하기</div>
          <IconButton
            color="inherit"
            component="label"
            sx={{ backgroundColor: "rgba(37, 48, 74, 0.2)" }}
            onClick={() =>
              navigator.clipboard
                .writeText(`https://2022christmas.kinolights.com/result/${id}`)
                .then(() =>
                  alert(
                    "주소가 복사되었습니다.\n원하는 곳에 붙여넣기 해주세요."
                  )
                )
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
