import * as React from "react";
import { FormLabel } from "app/components/FormLabel";
import { Radio } from "app/components/Radio";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { messages } from "./messages";

export function LanguageSwitch() {
  const [gov, setGov] = React.useState(1);
  // const { t, i18n } = useTranslation();
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const location = Number(event.target.value);
    console.log({ location: location });
    setGov(location);
    // i18n.changeLanguage(language);
  };

  return (
    <Wrapper>

      <Languages>
        <Radio
          id="3s"
          label="تونس العاصمة"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="3s"
          isSelected={i18n.language === '3s'}
        />
        <Radio
          id="tr"
          label="نابل"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="de"
          isSelected={i18n.language === 'nb'}

      {/* <FormLabel>{t(...messages.selectLanguage())}</FormLabel> */}
      <Languages>
        <Radio
          id="1"
          label="أريانة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="1"
          isSelected={gov === 1}
        />
        <Radio
          id="2"
          label="باجة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="2"
          isSelected={gov === 2}

        />
        <Radio
          id="tr"
          label="أريانة"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="de"
          isSelected={i18n.language === 'rn'}
        />
        <Radio
          id="tr"
          label="بنزرت"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="de"
          isSelected={i18n.language === 'bz'}
        />
        <Radio
          id="tr"
          label="صفاقس"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="de"
          isSelected={i18n.language === 'sf'}
        />
        <Radio
          id="tr"
          label="منستير"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="de"
          isSelected={i18n.language === 'ms'}
        />

      </Languages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
const Languages = styled.div`
  display: flex;

  .radio {
    margin-right: 5rem;
  }
`;
