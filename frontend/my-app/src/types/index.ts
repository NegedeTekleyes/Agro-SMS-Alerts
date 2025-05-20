// frontend/src/types/index.ts
export interface Farmer {
  id: number;
  phone: string;
  name: string | null;
  region: string | null;
  createdAt: Date;
}

export interface Message {
  id: number;
  content: string;
  channel: MessageChannel;
  type: MessageType;
  sentAt: Date;
  status: string | null;
  farmerId: number;
  farmer: Farmer;
  weatherId?: number | null;
  productId?: number | null;
}

export enum MessageChannel {
  SMS = 'SMS',
  VOICE = 'VOICE'
}

export enum MessageType {
  WEATHER = 'WEATHER',
  PRODUCT = 'PRODUCT',
  CUSTOM = 'CUSTOM'
}