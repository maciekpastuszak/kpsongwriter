export type Song = {
  _id: string;
  title: string;
  description?: string;
  duration?: string;
  audioUrl: string;
  genre?: string;
  status: "Dostępny" | "W trakcie" | "Sprzedany";
};
