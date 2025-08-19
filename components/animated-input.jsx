import React from 'react';

// A helper function to create the animated label spans
const createAnimatedLabel = (label) => {
  return label.split('').map((letter, index) => (
    <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));
};

export function AnimatedInput({ id, label, type = "text", value, onChange, required = false, placeholder = " " }) {
  return (
    <div className="animated-form-control">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        // The placeholder is used to keep the label floated when there's a value (e.g., autofill)
        placeholder={placeholder}
      />
      <label htmlFor={id}>
        {createAnimatedLabel(label)}
      </label>
    </div>
  );
}