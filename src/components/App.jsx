import Profile from './Profile';
import user from '../data/user.json';
import Statistics from './Statistics';
import stats from '../data/statistics.json';

import './app.css';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
    </div>
  );
};
