import React from "react";
import propTypes from "prop-types";
import Button, {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../components/base/forms/Button";
import Message, { SuccessMessage, ErrorMessage } from "../components/Messages";

export const TextExamples = ({ text }) => (
  <>
    <h1>{text}</h1>
    <h2>{text}</h2>
    <h3>{text}</h3>
    <h4>{text}</h4>
    <p>{text}</p>
    <p>{text}</p>
    <div>
      <a href="#">{text}</a>
    </div>
    <div>
      <strong>{text}</strong>
    </div>
  </>
);
export const MessagesExamples = ({ text }) => (
  <>
    <Message>{text}</Message>
    <SuccessMessage>{text}</SuccessMessage>
    <ErrorMessage>{text}</ErrorMessage>
  </>
);

export const ButtonExamples = ({ text }) => (
  <>
    <Button>{text}</Button>
    <ButtonPrimary>{text}</ButtonPrimary>
    <ButtonSecondary>{text}</ButtonSecondary>
    <ButtonTertiary>{text}</ButtonTertiary>
  </>
);

ButtonExamples.propTypes = {
  text: propTypes.string,
};
ButtonExamples.defaultProps = {
  text: "Text",
};
TextExamples.propTypes = {
  text: propTypes.string,
};
MessagesExamples.propTypes = {
  text: propTypes.string,
};
MessagesExamples.defaultProps = {
  text: "Text",
};
TextExamples.defaultProps = {
  text: "Text",
};
