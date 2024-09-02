import "./Field.css";
const Field = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
  disabled,
}) => {
  return (
    <div className="custom-input-wrapper" style={style}>
      {label && <label className="custom-input-label">{label}</label>}
      {/* Render label if provided */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="custom-input"
        disabled={disabled}
      />
    </div>
  );
};

export default Field;
