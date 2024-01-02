export interface EventProp {
    id: string;
    name: { th: string; en: string };
    faculty: { code: string; name: { th: string; en: string } };
    department: { code: string; name: { th: string; en: string } };
    require_registration: boolean;
    max_capacity: number;
    schedules: {
      id: number;
      current_attendee: number;
      ends_at: string;
      starts_at: string;
      period: string;
    }[];
    location: { th: string; en: string };
    description: { th: string; en: string };
}
