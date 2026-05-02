export type Song = {
  _id: string;
  title: string;
  description?: string;
  duration?: number;
  audioUrl: string;
  genre?: string;
  status?: "Dostępny" | "W trakcie" | "Sprzedany";
  statusColor?: string;
};
