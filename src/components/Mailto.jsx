import React from "react";

const FeedbackButton = () => {
  const email = "bltycxkk@gmail.com";
  const subject = "hepsijet dağıtıma çıktı";
  const body = "Merhaba, saat kaçta ve nerede görmüştün?";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center mx-3">
      <button className="btn btn-lg btn-primary" onClick={handleClick}>
        HEPSİJET FİRMA DAĞITIMA ÇIKTI GÖRDÜM.
      </button>
    </div>
  );
};

export default FeedbackButton;
