import "./PageTitle.css";

const PageTitle = ({ title, className }) => {
  return (
    <div>
      <h1 className={`form-header ${className}`}>{title}</h1>
    </div>
  );
};

export default PageTitle;
