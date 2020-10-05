export const distanceCalculator = (lat1:number, long1:number, lat2:number, long2:number) =>{
    const R = 6371; // km
    const dLat = toRad(lat2-lat1);
    const dLong = toRad(long2-long1);
    const newLat1 = toRad(lat1);
    const newLat2 = toRad(lat2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLong/2) * Math.sin(dLong/2) * Math.cos(newLat1) * Math.cos(newLat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const dinstance = R * c;
    return dinstance;
}
export const toRad = (Value:number) =>{
    return Value * Math.PI / 180;
}

export const ifFloat = (n:number) =>{
    return Number(n) === n && n % 1 !== 0;
}