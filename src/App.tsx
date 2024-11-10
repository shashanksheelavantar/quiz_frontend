import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import Question from './components/Question';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="flex">
        <QuestionList />
        <Question />
      </div>
    </div>
  );
}

export default App;