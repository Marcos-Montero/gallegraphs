import { useEffect, useState } from "react";
import { useTicker } from "../../context/tickerContext";
import { TextField } from "../TextField/TextField";
import {
  SummaryContainer,
  OpenButton,
  TextFieldContainer,
  Title,
} from "./style";

export const Summary = () => {
  const { summary } = useTicker();
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);
  useEffect(() => {
    setOpen(open);
  }, [summary]);
  return (
    <>
      {summary && (
        <SummaryContainer open={open}>
          <OpenButton onClick={toggleOpen}>{open ? ">" : "<"}</OpenButton>
          <Title>Summary</Title>
          <TextFieldContainer>
            {summary &&
              Object.entries(summary).map(([k, v]: any, i: number) => (
                <TextField key={i} k={k} v={v} />
              ))}
          </TextFieldContainer>
        </SummaryContainer>
      )}
    </>
  );
};
