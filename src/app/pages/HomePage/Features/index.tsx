import * as React from "react";
import styled from "styled-components/macro";
import { Title } from "../components/Title";
import { Lead } from "../components/Lead";
import { SubTitle } from "../components/SubTitle";
import { P } from "../components/P";
import { GithubRepoForm } from "./GithubRepoForm";
import { LanguageSwitch } from "./LanguageSwitch";
import { ReactComponent as StateIcon } from "./assets/state.svg";
import { ReactComponent as INTLIcon } from "./assets/intl.svg";
import { useSelector } from "react-redux";
import {
  selectUsername,
  selectUsername2,
} from "./GithubRepoForm/slice/selectors";
import { GiveRecieveSwitch } from "./GiveRecieveSwitch";
import { Name } from "./GithubRepoForm/Name";

export const Features = () => {
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
  }, []);
  
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

        <Button onClick={submitHandler} style={{ cursor: "pointer" }}>
          تفعيل
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
