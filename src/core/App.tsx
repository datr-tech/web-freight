import { PostList } from '@app-dtw/core/components/organisms';
import { HomePage } from '@app-dtw/core/components/pages';

export const App = () => {
  return (
    <div className="App bg-dark text-white">
      <HomePage />
      <PostList />
    </div>
  );
};
