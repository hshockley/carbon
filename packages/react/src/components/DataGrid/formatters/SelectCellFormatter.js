import React from 'react';
import cx from 'classnames';

export function SelectCellFormatter({
  value,
  disabled,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}) {
  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }

  return (
    <label
      className={cx('rdg-checkbox-label', {
        'rdg-checkbox-label-disabled': disabled,
      })}>
      <input
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        type="checkbox"
        className="rdg-checkbox-input"
        disabled={disabled}
        onChange={handleChange}
        checked={value}
      />
      <div className="rdg-checkbox" />
    </label>
  );
}
