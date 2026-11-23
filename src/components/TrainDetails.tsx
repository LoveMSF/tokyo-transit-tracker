import { ArrowUpRight, TrainFront, X } from 'lucide-react';
import type { TransitLine } from '../data/tokyoTransit';
export type Train = { id:string; lineId:string; progress:number; phase:number };
export function TrainDetails({train,line,next,onClose}:{train:Train;line:TransitLine;next:string;onClose:()=>void}) {
  const status=train.progress<.12||train.progress>.88?'At station':'In transit';
  const eta=Math.max(1,Math.ceil((1-train.progress)*5));
  const crowd=['Low','Moderate','High'][train.phase%3];
  return <section className="detail-card glass">
    <button className="icon-button close-detail" onClick={onClose} aria-label="Close train details"><X size={16}/></button>
    <div className="detail-eyebrow"><span className="live-dot"/> LIVE TELEMETRY <span className="mono">{train.id}</span></div>
    <div className="train-heading"><div className="large-line-badge" style={{background:line.color}}>{line.short}</div><div><h2>{line.name}</h2><span className="muted">Service train · {train.id}</span></div></div>
    <div className="telemetry-grid"><div><span>STATUS</span><strong className="status-value">{status}</strong></div><div><span>NEXT STATION</span><strong>{next}</strong></div><div><span>ARRIVAL</span><strong>~{eta} min</strong></div><div><span>CROWD LEVEL</span><strong className={`crowd crowd-${crowd.toLowerCase()}`}>{crowd}</strong></div></div>
    <div className="route-next"><div className="route-icon"><TrainFront size={15}/></div><div><small>Following the line</small><b>{line.name}</b></div><ArrowUpRight size={15} className="muted"/></div>
  </section>;
}
