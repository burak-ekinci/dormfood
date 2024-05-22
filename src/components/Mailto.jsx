import React from "react";

const FeedbackButton = () => {
  const email = "bltycxkk@gmail.com";
  const subject = "WebApp Geliştirme";
  const body =
    "Merhaba, görüş ve fikirlerinizi buraya yazabilirsiniz. Örneğin, Yemekler için yüzdelik olarak beğendim, beğenmedim oranı olsun.";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center m-3">
      <button className="btn btn-primary" onClick={handleClick}>
        Fikirlerinizi belirterek uygulamamızı geliştirmemize yardımcı
        olabilirsiniz.
      </button>
    </div>
  );
};

export default FeedbackButton;
