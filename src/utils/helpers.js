export const handleAccessibilityKeyPress = (e, handler) => {
  const enterOrSpace =
    e.key === 'Enter' ||
    e.key === ' ' ||
    e.key === 'Spacebar' ||
    e.which === 13 ||
    e.which === 32;
  /* istanbul ignore else */
  if (enterOrSpace) {
    e.preventDefault();
    handler();
  }
};
