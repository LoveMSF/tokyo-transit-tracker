export type Station = { id: string; name: string; jp: string; lat: number; lng: number };
export type TransitLine = { id: string; name: string; short: string; color: string; stations: string[]; loop?: boolean };
export const stations: Station[] = [
  {id:'tokyo',name:'Tokyo',jp:'東京',lat:35.6812,lng:139.7671},{id:'shinagawa',name:'Shinagawa',jp:'品川',lat:35.6284,lng:139.7387},{id:'shibuya',name:'Shibuya',jp:'渋谷',lat:35.6580,lng:139.7016},{id:'shinjuku',name:'Shinjuku',jp:'新宿',lat:35.6896,lng:139.7006},{id:'ikebukuro',name:'Ikebukuro',jp:'池袋',lat:35.7295,lng:139.7109},{id:'ueno',name:'Ueno',jp:'上野',lat:35.7138,lng:139.7773},{id:'akihabara',name:'Akihabara',jp:'秋葉原',lat:35.6984,lng:139.7731},
  {id:'omotesando',name:'Omotesando',jp:'表参道',lat:35.6653,lng:139.7123},{id:'ginza',name:'Ginza',jp:'銀座',lat:35.6717,lng:139.7649},{id:'nihombashi',name:'Nihombashi',jp:'日本橋',lat:35.6819,lng:139.7744},{id:'asakusa',name:'Asakusa',jp:'浅草',lat:35.7118,lng:139.7967},
  {id:'ogikubo',name:'Ogikubo',jp:'荻窪',lat:35.7048,lng:139.6201},{id:'otemachi',name:'Otemachi',jp:'大手町',lat:35.6840,lng:139.7630},{id:'ochanomizu',name:'Ochanomizu',jp:'御茶ノ水',lat:35.6994,lng:139.7650},{id:'nakano',name:'Nakano',jp:'中野',lat:35.7056,lng:139.6659},{id:'kichijoji',name:'Kichijoji',jp:'吉祥寺',lat:35.7033,lng:139.5798}
];
export const lines: TransitLine[] = [
  {id:'yamanote',name:'JR Yamanote Line',short:'JY',color:'#9ACD32',loop:true,stations:['tokyo','shinagawa','shibuya','shinjuku','ikebukuro','ueno','akihabara']},
  {id:'ginza',name:'Tokyo Metro Ginza Line',short:'G',color:'#FF9500',stations:['shibuya','omotesando','ginza','nihombashi','ueno','asakusa']},
  {id:'marunouchi',name:'Tokyo Metro Marunouchi Line',short:'M',color:'#F62E36',stations:['ogikubo','shinjuku','ginza','tokyo','otemachi','ikebukuro']},
  {id:'chuo',name:'JR Chuo Rapid Line',short:'JC',color:'#EB5C01',stations:['tokyo','ochanomizu','shinjuku','nakano','kichijoji']}
];
export const getStation=(id:string)=>stations.find(s=>s.id===id)!;
