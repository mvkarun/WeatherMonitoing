import { Iminmax } from './iminmax';

export interface Iweather {
  date: number;
  weather: string;
  temp2m: Iminmax;
  wind10m_max: number;
}
