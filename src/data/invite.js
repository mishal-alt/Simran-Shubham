// Single source of truth for the invitation. Edit here; components read from this.
export const invite = {
  couple: {
    bride: 'Simran Vishwakarma',
    brideShort: 'Simran',
    groom: 'Shubham Vishwakarma',
    groomShort: 'Shubham',
    hashtag: '#Shubhran',
  },
  invite: {
    kicker: 'Together with their families',
    line: 'cordially invite you to celebrate their engagement',
  },
  families: {
    groom: {
      label: 'The Groom',
      name: 'Shubham Vishwakarma',
      parents: 'S/O Mr. Srikanth Vishwakarma & Mrs. Gyanthi Vishwakarma',
    },
    bride: {
      label: 'The Bride',
      name: 'Simran Vishwakarma',
      parents: 'D/O Mr. Jayprakash Vishwakarma & Mrs. Savitha Vishwakarma',
    },
  },
  event: {
    title: 'The Engagement of Shubham & Simran',
    startsAt: '2026-10-24T17:00:00+05:30',
    endsAt: '2026-10-24T21:00:00+05:30', // assumed; adjust if needed
    dateLabel: '24 . 10 . 2026',
    dayLabel: 'Saturday',
    timeLabel: '5 PM onwards',
    dressCode: 'Traditional / Festive Attire',
    note: 'Dinner to follow',
  },
  venue: {
    name: 'The Neela Convention Hall',
    address: '3Q57+V5V, Main Rd, Nimbekaipura, Huskur, Karnataka 560049',
    url: 'https://maps.app.goo.gl/tvtDbFo5Ltpj7oRh6',
  },
  // Placeholder story copy (no dates invented). Edit freely.
  // `position` picks which part of the painting shows inside the arch frame.
  story: [
    {
      label: 'Chapter One',
      title: 'The First Meeting',
      text: 'A warm introduction, shared smiles, and a conversation that effortlessly turned into something meaningful.',
      image: '/assets/story-2.jpg',
      position: '50% 40%',
    },
    {
      label: 'Chapter Two',
      title: 'Growing Together',
      text: 'Cherished memories, mutual understanding, and two souls discovering their perfect match.',
      image: '/assets/story-1.jpg',
      position: '50% 55%',
    },
    {
      label: 'Chapter Three',
      title: 'The Engagement',
      text: 'Surrounded by our loved ones, we celebrate this joyous milestone and begin our journey together.',
      image: '/assets/hero-arch.jpg',
      position: '50% 57%',
    },
  ],
  blessing: {
    line: 'May your intentions be one, may your hearts beat as one.',
    translation: 'Two families, one thread of gold — and a lifetime of happiness made luminous together.',
    source: 'A blessing from both families',
  },
  footer: {
    families: 'With love & warm wishes from the Families',
  },
}
