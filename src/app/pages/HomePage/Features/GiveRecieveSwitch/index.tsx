import * as React from "react";
import { RadioChoice2 } from "app/components/RadioChoice2";
import styled from "styled-components/macro";

export function GiveRecieveSwitch() {
  const [choice, setChoice] = React.useState("give");
  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const choices = event.target.value;

    setChoice(choices);
  };

  return (
    <Wrapper>
      <Languages>
        <RadioChoice2
          id="give"
          label="تزويد عبوة"
          className="radio"
          name="choice"
          onChange={handleChoiceChange}
          value="give"
          isSelected={choice === "give"}
        />
        <RadioChoice2
          id="recieve"
          label="بحث عن عبوة"
          className="radio"
          name="choice"
          onChange={handleChoiceChange}
          value="recieve"
          isSelected={choice === "recieve"}
        />
      </Languages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Languages = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
