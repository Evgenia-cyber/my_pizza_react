import React from 'react';
import CategoriesScreenLess450 from './CategoriesScreenLess450';
import CategoriesScreenMore450 from './CategoriesScreenMore450';

const Categories = ({ categories, activeCategoryId }) => {
  const [isScreenWidthLess450, setIsScreenWidthLess450] = React.useState(false);

  React.useEffect(() => {
    const handleResizeWindow = () => {
      const screenWidth = window.screen.width;
      screenWidth > 450
        ? setIsScreenWidthLess450(false)
        : setIsScreenWidthLess450(true);
    };

    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <div className="categories">
      {isScreenWidthLess450 ? (
        <CategoriesScreenLess450
          categories={categories}
          activeCategoryId={activeCategoryId}
        />
      ) : (
        <CategoriesScreenMore450
          categories={categories}
          activeCategoryId={activeCategoryId}
        />
      )}
    </div>
  );
};

export default React.memo(Categories);
