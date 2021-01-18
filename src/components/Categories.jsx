import React from 'react';
import Category from './Category';

const Categories = ({ categories, activeCategoryId }) => {
  const [isVisibleAllCategories, setVisibleAllCategories] = React.useState(
    false,
  );

  React.useEffect(() => {
    const handleResizeWindow = () => {
      const screenWidth = window.screen.width;
      screenWidth > 450
        ? setVisibleAllCategories(true)
        : setVisibleAllCategories(false);
    };

    handleResizeWindow();
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [setVisibleAllCategories]);

  const toggleVisiblePopup = () => {
    setVisibleAllCategories(
      (isVisibleAllCategories) => !isVisibleAllCategories,
    );
  };

  return (
    <div className="categories">
      <ul>
        <span
          className={isVisibleAllCategories ? 'rotated' : ''}
          onClick={toggleVisiblePopup}
        ></span>
        <Category
          activeCategoryId={activeCategoryId}
          index={0}
          name={categories[0]}
        />
        {isVisibleAllCategories && (
          <>
            {categories &&
              categories.map((category, index) =>
                index === 0 ? (
                  ''
                ) : (
                  <Category
                    activeCategoryId={activeCategoryId}
                    key={category}
                    name={category}
                    index={index}
                  />
                ),
              )}
          </>
        )}
      </ul>
    </div>
  );
};

export default React.memo(Categories);
