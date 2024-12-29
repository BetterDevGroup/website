export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} title-logo`}>
      {caption} <span>{title}</span>
    </h1>
  );
};

export const TitleSm = ({ title }) => {
  return <h1 className="titleSm">{title}</h1>;
};

export const SubTitleSm = ({ title }) => {
  return <h2 className="subtitleSm">{title}</h2>;
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};

export const SimpleLogo = () => {
  return (
    <img src="/images/logo_develop_better.svg" height="30px" className="mt-4" />
  );
};

export const FullLogo = () => {
  return (
    <img
      src="/images/logo_develop_better_full.svg"
      height="100px"
      className="mb-10"
    />
  );
};
