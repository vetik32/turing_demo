export interface Channel {
  id?: string;
  name: string;
}

export const channels: {
  [key: string]: Channel;
} = {
  makeschool: {
    name: 'Make School'
  },
  newsycombinator: {
    name: 'Hacker News'
  },
  ycombinator: {
    name: 'Y Combinator'
  }
};
