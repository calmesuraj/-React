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
    <div
      className={`custom-input-wrapper ${value ? "filled" : ""}`}
      style={style}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" " // Keep placeholder empty to avoid duplication with label
        className="custom-input"
        disabled={disabled}
      />
      {label && (
        <label className="custom-input-label">{placeholder || label}</label>
      )}
      {/* Label acts as the floating placeholder */}
    </div>
  );
};

export default Field;
