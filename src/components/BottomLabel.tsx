import { useVersion } from '~hooks/useVersion';
import './BottomLabel.css';

export function BottomLabel() {
  const version = useVersion({ prefixed: true });

  return (
    <h3 className="bottom-label">
      {version}
      <div className="dot" />
      V-Stream
      <div className="dot" />
      <a href="https://github.com/vivzio/v-stream-extension" target="_blank" rel="noopener noreferrer" className="github-link">
        Github ↗
      </a>
    </h3>
  );
}

export function TopRightLabel() {
  const version = useVersion({ prefixed: true });

  return <h3 className="top-right-label">{version}</h3>;
}
