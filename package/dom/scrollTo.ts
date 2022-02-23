export function scrollTo (to = 0, duration = 16) {
  if (duration < 0) return;

  const diff = to - this.getDocumentScrollTop();

  if (diff === 0) {
    return;
  }

  const perTick = diff / duration * 10;

  requestAnimationFrame(() => {
    if (Math.abs(perTick) > Math.abs(diff)) {
      this.setDocumentScrollTop(this.getDocumentScrollTop() + diff);

      return;
    }
    this.setDocumentScrollTop(this.getDocumentScrollTop() + perTick);

    if (diff > 0 && this.getDocumentScrollTop() >= to || diff < 0 && this.getDocumentScrollTop() <= to) {
      return;
    }

    this.scrollTo(to, duration - 16);
  })
}