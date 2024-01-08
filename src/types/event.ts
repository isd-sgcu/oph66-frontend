export interface Event {
  id: string;
  department: {
    code: string;
    name: {
      th: string;
      en: string;
    };
  };
  description: {
    th: string;
    en: string;
  };
  faculty: {
    code: string;
    name: {
      th: string;
      en: string;
    };
  };
  location: {
    th: string;
    en: string;
  };
  max_capacity: number;
  name: {
    th: string;
    en: string;
  };
  require_registration: boolean;
  schedules: [
    {
      current_attendee: number;
      ends_at: string;
      id: number;
      period: string;
      starts_at: string;
    },
  ];
}
