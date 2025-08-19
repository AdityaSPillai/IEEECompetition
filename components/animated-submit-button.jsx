import React from 'react';
import { UserPlus } from 'lucide-react';

export function AnimatedSubmitButton({ isSubmitting, disabled }) {
  if (isSubmitting) {
    return (
      <button type="submit" className="animated-submit-btn" disabled>
        <div className="form__submit-btn-content">
          <div className="spinner" />
          <span>Submitting...</span>
        </div>
      </button>
    );
  }

  return (
    <button type="submit" className="animated-submit-btn" disabled={disabled}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">Submit Application</span>
    </button>
  );
}