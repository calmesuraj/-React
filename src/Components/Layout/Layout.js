import "./Layout.css";

const Layout = ({ title, children, style, onSubmit }) => {
  return (
    <form className="box" style={style} onSubmit={onSubmit}>
      {title && <h1 className="box-title">{title}</h1>}
      <div className="box-content">{children}</div>
    </form>
  );
};

export default Layout;
