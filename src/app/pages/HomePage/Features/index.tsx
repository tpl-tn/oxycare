import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from '../components/Title';
import { Lead } from '../components/Lead';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';
import { A } from 'app/components/A';
import { GithubRepoForm } from './GithubRepoForm';
import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitch } from './LanguageSwitch';
import { ReactComponent as StateIcon } from './assets/state.svg';
import { ReactComponent as CSSIcon } from './assets/css.svg';
import { ReactComponent as INTLIcon } from './assets/intl.svg';
import { ReactComponent as TSLogo } from './assets/ts.svg';
import { ReactComponent as RouteIcon } from './assets/route.svg';
import { ReactComponent as SEOIcon } from './assets/seo.svg';
import { ReactComponent as InstantFeedbackIcon } from './assets/instant-feedback.svg';
import { ReactComponent as ScaffoldingIcon } from './assets/scaffolding.svg';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'app/components/Link';
import { messages } from '../messages';

export function Features() {
  const { t } = useTranslation();

  return (
    <>
      <Title as="h2">كيفاش تنجّم تعاون؟</Title>
      <Lead>
        <Dir direction={ 'rtl' }>
        بعض الخطوات إلي لازمك تتبعها، من هنا تعرف كيفاش تنجّم تبلغ على عبوات  <strong>الاكسجين</strong>{' '}
        <strong>المتاحة 👇</strong>
        
      </Lead>
      <List>
        <Feature>
          <StateIcon className="feature-icon" />
          <Content>
            <SubTitle>رقم الهـاتف</SubTitle>
            
            <P>
            رقم الهاتف متاعك يساعدنـا للإتصال بيك في حالة حصولك على عبوّة
            </P>
              </Dir>
            <GithubRepoForm />
          </Content>
        </Feature>
        
        <Feature>
          <INTLIcon className="feature-icon" />
          <Content>
            <Dir direction={ 'rtl' }>
            <SubTitle>إختار الولاية </SubTitle>
            <P>
            لازمك تحدد الولاية باش إنجّمو نعرفو المنطقة الجغرافية إلي أنت فيها
              <br />
              <small>
                (المعتمديات في مرحلة أخرى)
              </small>
            </P>
            <LanguageSwitch />
            
          </Content>
        </Feature>
        <Feature>
          <RouteIcon className="feature-icon" />
          <Content>
            <SubTitle>تعديل فوري عبر أوكس كار</SubTitle>
            <P>
              ساهم في تطوير هذه المنصّة وبإمكانك التبرّع الآن
              <br />
            </P>
          </Content>
        </Feature>
              <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>أبحث عن أقرب عبوّة أكسجين متاحة</SubTitle>
            <P>
            أنقر على ولايتك لتتعرّف على بعض المتطوعين
            </P>
            </Dir>
          </Content>
        </Feature>
      </List>
    </>
  );
}

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
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
