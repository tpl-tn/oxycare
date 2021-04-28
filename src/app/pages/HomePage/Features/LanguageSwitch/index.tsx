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
