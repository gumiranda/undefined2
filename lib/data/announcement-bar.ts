export interface Announcement {
  text: string;
  link?: { label: string; href: string };
  badge?: string;
}

export const announcement: Announcement = {
  text: "Introducing v3.0 — our biggest release yet with 50+ new features.",
  link: { label: "Learn more →", href: "#" },
  badge: "New",
};
