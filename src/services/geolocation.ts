import api from './api';

const API_KEY = 'at_ZTDn2V1MwzMOP5T9dwnylNxC2wk0C';
const BASE_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

export interface InfoProps {
  ip: string;
  location: {
    postalCode: string;
    lat: number;
    lng: number;
    region: string;
    country: string;
    city: string;
    timezone: string;
  };
  isp: string;
}

export default {
  searchIP(ip: number | string) {
    return api<InfoProps>(`${BASE_URL}&ipAddress=${ip}`);
  },
};
