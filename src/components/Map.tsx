import { useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Station } from '../data/tokyoTransit';
import { getStation } from '../data/tokyoTransit';
import type { Train } from './TrainDetails';
function FlyTo({target}:{target:{lat:number;lng:number}|null}) { const map=useMap(); if(target) map.flyTo([target.lat,target.lng],14,{duration:1.2}); return null; }
function trainIcon(color:string,label:string,bearing:number) { return L.divIcon({className:'train-marker-wrap',html:`<div class="train-marker" style="--train-color:${color};transform:rotate(${bearing}deg)"><span></span></div><div class="train-marker-label" style="--train-color:${color}">${label}</div>`,iconSize:[36,36],iconAnchor:[18,18]}); }
export default function TransitMap({visibleLines,trains,onSelectTrain,onSelectStation,flyTarget}:{visibleLines:string[];trains:Train[];onSelectTrain:(id:string)=>void;onSelectStation:(station:Station)=>void;flyTarget:{lat:number;lng:number}|null}) {
  const visible=useMemo(()=>trains.filter(t=>visibleLines.includes(t.lineId)),[trains,visibleLines]);
  const markerStations=useMemo(()=>Array.from(new Set(visibleLines.flatMap(id=> (lines.find(l=>l.id===id)?.stations??[])))),[visibleLines]);
  return <MapContainer center={[35.6812,139.7671]} zoom={12} zoomControl={false} className="transit-map"><TileLayer className="osm-dark-tiles" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/><FlyTo target={flyTarget}/>
    {visibleLines.map(id=>{const line=lines.find(l=>l.id===id)!;const pts=line.stations.map(getStation).map(s=>[s.lat,s.lng] as [number,number]);if(line.loop)pts.push(pts[0]);return <Polyline key={id} positions={pts} pathOptions={{color:line.color,weight:4,opacity:.9,lineCap:'round',lineJoin:'round'}}/>;})}
    {markerStations.map(id=>{const s=getStation(id);const connected=lines.filter(l=>visibleLines.includes(l.id)&&l.stations.includes(id));return <CircleMarker key={id} center={[s.lat,s.lng]} radius={5} pathOptions={{color:'#dfe5f0',weight:2,fillColor:'#101722',fillOpacity:1}} eventHandlers={{click:()=>onSelectStation(s)}}><Popup><div className="station-popup"><b>{s.name}</b><span>{s.jp}</span><small>{connected.map(l=>l.short).join(' · ')}</small></div></Popup></CircleMarker>;})}
    {visible.map(t=>{const line=lines.find(l=>l.id===t.lineId)!;const route=line.stations.map(getStation);if(line.loop)route.push(route[0]);const p=t.progress*(route.length-1);const i=Math.min(Math.floor(p),route.length-2);const f=p-i;const a=route[i],b=route[i+1];const lat=a.lat+(b.lat-a.lat)*f,lng=a.lng+(b.lng-a.lng)*f;const bearing=Math.atan2(b.lng-a.lng,b.lat-a.lat)*180/Math.PI;const nxt=route[(i+1)%route.length];return <Marker key={t.id} position={[lat,lng]} icon={trainIcon(line.color,line.short,bearing)} eventHandlers={{click:()=>onSelectTrain(t.id)}}><Popup><div className="station-popup"><b>{t.id}</b><span>{line.name}</span><small>Next: {nxt.name}</small></div></Popup></Marker>;})}
  </MapContainer>;
}
import { lines } from '../data/tokyoTransit';
