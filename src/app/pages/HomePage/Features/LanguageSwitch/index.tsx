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
<<<<<<< HEAD
    console.log({ location: location });
    setGov(location);
    // i18n.changeLanguage(language);
=======
    console.log();
    setGov(location);
>>>>>>> dev
  };

  return (
    <Wrapper>
<<<<<<< HEAD

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

=======
>>>>>>> dev
      {/* <FormLabel>{t(...messages.selectLanguage())}</FormLabel> */}
      <Languages>
        <Radio
          id="1"
          label="أريانة"
<<<<<<< HEAD
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
=======
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
        <Radio
          id="8"
          label="جندوبة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="8"
          isSelected={gov === 8}
        />
        <Radio
          id="9"
          label="زغوان"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="9"
          isSelected={gov === 9}
        />
        <Radio
          id="10"
          label="سليانة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="10"
          isSelected={gov === 10}
        />
        <Radio
          id="11"
          label="سوسة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="11"
          isSelected={gov === 11}
        />
        <Radio
          id="12"
          label="سيدي بوزيد"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="12"
          isSelected={gov === 12}
        />
        <Radio
          id="13"
          label=" صفاقس"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="13"
          isSelected={gov === 13}
        />
        <Radio
          id="14"
          label=" قابس"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="14"
          isSelected={gov === 14}
        />
        <Radio
          id="15"
          label=" القصرين"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="15"
          isSelected={gov === 15}
        />
        <Radio
          id="16"
          label="قفصة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="16"
          isSelected={gov === 16}
        />
        <Radio
          id="17"
          label="القيروان"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="17"
          isSelected={gov === 17}
        />
        <Radio
          id="18"
          label="الكاف"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="18"
          isSelected={gov === 18}
        />
        <Radio
          id="19"
          label="مدنين"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="19"
          isSelected={gov === 19}
        />
        <Radio
          id="20"
          label="مدنين"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="20"
          isSelected={gov === 20}
        />
        <Radio
          id="21"
          label="المنستير"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="21"
          isSelected={gov === 21}
        />
        <Radio
          id="22"
          label="منوبة"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="22"
          isSelected={gov === 22}
        />
        <Radio
          id="23"
          label="المهدية"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="23"
          isSelected={gov === 23}
        />
        <Radio
          id="24"
          label="نابل"
          className="radio"
          name="language"
          onChange={handleLocationChange}
          value="24"
          isSelected={gov === 24}
>>>>>>> dev
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
  flex-wrap: wrap;
  .radio {
<<<<<<< HEAD
    margin-right: 5rem;
=======
    margin-right: 1.5rem;
    width: 20%;
>>>>>>> dev
  }
`;
