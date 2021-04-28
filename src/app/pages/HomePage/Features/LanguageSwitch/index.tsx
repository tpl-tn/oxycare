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

    setGov(location);
  };

  return (
    <Wrapper>
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
          id="3"
          label="بن عروس"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="3"
          isSelected={gov === 3}
        />
        <Radio
          id="4"
          label="بنزرت"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="4"
          isSelected={gov === 4}
        />
        <Radio
          id="5"
          label=" تطاوين"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="5"
          isSelected={gov === 5}
        />
        <Radio
          id="6"
          label="توزر"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="6"
          isSelected={gov === 6}
        />
        <Radio
          id="7"
          label="تونس"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="7"
          isSelected={gov === 7}
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
    margin-right: 1.5rem;
  }
`;
