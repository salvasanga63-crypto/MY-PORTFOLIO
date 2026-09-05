export default function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Abstract intelligent system diagram" role="img">
      <div className="visual-caption mono">SYSTEM / 001</div>
      <div className="visual-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="node node-core"><span>AI</span></div>
      <div className="node node-top"><span>DATA</span></div>
      <div className="node node-right"><span>API</span></div>
      <div className="node node-bottom"><span>IoT</span></div>
      <div className="node node-left"><span>ML</span></div>
      <div className="connection connection-a" />
      <div className="connection connection-b" />
      <div className="connection connection-c" />
      <div className="connection connection-d" />
      <div className="signal signal-one" />
      <div className="signal signal-two" />
      <div className="visual-footer mono">
        <span>CONNECTED SYSTEMS</span>
        <span>● ONLINE</span>
      </div>
    </div>
  )
}
