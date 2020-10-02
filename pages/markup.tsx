import React, { useEffect } from "react";

const MarkupPage = () => {

  useEffect(() => {
    // Use storybook
    document.location.href = "http://localhost:4000" },
  []);
  return <div className="container" />
}

MarkupPage.displayName = "MarkupPage";
export default MarkupPage;
