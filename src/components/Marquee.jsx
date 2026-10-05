// Oversized scrolling section title, e.g. "SELECTED WORK · SELECTED WORK".
export default function Marquee({ text, italic = false, tone = 'ink' }) {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i}>
      {text}
      <span className="marquee__dot">·</span>
    </span>
  ));
  return (
    <div className={`marquee marquee--${tone} ${italic ? 'marquee--italic' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {items}
        {items}
      </div>
    </div>
  );
}
