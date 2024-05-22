import React from "react";

const FeedbackButton = () => {
  const email = "bltycxkk@gmail.com";
  const subject = "WebApp Geliştirme";
  const body = "Merhaba, görüş ve fikirlerinizi buraya yazabilirsiniz.";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center mt-2">
      <button className="btn btn-primary" onClick={handleClick}>
        Fikirlerinizi belirterek uygulamamızı geliştirmemize yardımcı olun.
      </button>
    </div>
  );
};

export default FeedbackButton;