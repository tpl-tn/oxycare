import * as React from "react";
import styled from "styled-components/macro";
import { Title } from "../components/Title";
import { Lead } from "../components/Lead";
import { SubTitle } from "../components/SubTitle";
import { P } from "../components/P";
import { A } from "app/components/A";
import { GithubRepoForm } from "./GithubRepoForm";
import { ThemeSwitch } from "./ThemeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";
import { ReactComponent as StateIcon } from "./assets/state.svg";
import { ReactComponent as CSSIcon } from "./assets/css.svg";
import { ReactComponent as INTLIcon } from "./assets/intl.svg";
import { ReactComponent as TSLogo } from "./assets/ts.svg";
import { ReactComponent as RouteIcon } from "./assets/route.svg";
import { ReactComponent as SEOIcon } from "./assets/seo.svg";
import { ReactComponent as InstantFeedbackIcon } from "./assets/instant-feedback.svg";
import { ReactComponent as ScaffoldingIcon } from "./assets/scaffolding.svg";
import { ReactComponent as CodeAnalysisIcon } from "./assets/code-analysis.svg";
import { useTranslation } from "react-i18next";
import { Link } from "app/components/Link";
import { messages } from "../messages";
import { initialState } from "./GithubRepoForm/slice";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectError,
  selectUsername,
  selectRepos,
  selectLoading,
  selectError2,
  selectUsername2,
  selectLoading2,
  selectRepos2,
} from "./GithubRepoForm/slice/selectors";
import { GiveRecieveSwitch } from "./GiveRecieveSwitch";
import { Name } from "./GithubRepoForm/Name";
export const Features = () => {
  const { t } = useTranslation();
  const username = useSelector(selectUsername);
  const username2 = useSelector(selectUsername2);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const submitHandler = () => {
    if (username && username2) {
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 5000);
  }, [error || success]);
  return (
    <>
      <Title as="h2">كيفاش تنجّم تعاون؟</Title>
      <Lead>
        بعض الخطوات إلي لازمك تتبعها، من هنا تعرف كيفاش تنجّم تبلغ على عبوات{" "}
        <strong>الاكسجين</strong> <strong>المتاحة 👇</strong>
      </Lead>
      <List>
        {error ? <Div1>عليك إدخال جميع المعطيات</Div1> : null}
        {success ? <Div2>تمت عملية إدخال معطياتك بنجاح</Div2> : null}
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle>الإسم و اللقب</SubTitle>

            <Name />
          </Content>
        </Feature>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>رقم الهـاتف</SubTitle>

            <P>رقم الهاتف متاعك يساعدنـا للإتصال بيك في حالة حصولك على عبوّة</P>
            <GithubRepoForm />
          </Content>
        </Feature>
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle> أنت تريد </SubTitle>

            <GiveRecieveSwitch />
          </Content>
        </Feature>

        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <SubTitle>إختار الولاية </SubTitle>
            <P>
              لازمك تحدد الولاية باش إنجّمو نعرفو المنطقة الجغرافية إلي أنت فيها
              <br />
              <small>(المعتمديات في مرحلة أخرى)</small>
            </P>
            <LanguageSwitch />
          </Content>
        </Feature>

        {/* <Feature>
          <RouteIcon className="feature-icon" />
          <Content>
            <SubTitle>تعديل فوري عبر أوكس كار</SubTitle>
            <P>
              ساهم في تطوير هذه المنصّة وبإمكانك التبرّع الآن
              <br />
            </P>
          </Content>
        </Feature> */}

        {/* <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>أبحث عن أقرب عبوّة أكسجين متاحة</SubTitle>
            <P>أنقر على ولايتك لتتعرّف على بعض المتطوعين</P>
          </Content>
        </Feature> */}

        <Button onClick={submitHandler} style={{ cursor: "pointer" }}>
          تفعييل
        </Button>
      </List>
    </>
  );
};

const Button = styled.button`
  background: #b99095;
  color: white;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 2em;
  border: 2px solid #b99095;
  border-radius: 3px;
`;
const Feature = styled.li`
  display: flex;
  margin: 2.25rem 0 3.25rem 2.25rem;

  .feature-icon {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
const Div1 = styled.div`
  color: red;
  margin: 0 0 2rem 0;
`;
const Div2 = styled.div`
  color: green;
  margin: 0 0 2rem 0;
`;
