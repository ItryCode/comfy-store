import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "submitting") {
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-spinner">sending</span>
      ) : (
        { text } || "submit"
      )}
    </button>;
  }
  return <div>SubmitBtn</div>;
};

export default SubmitBtn;
