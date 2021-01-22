import React from 'react';
import Category from './Category';

const CategoriesScreenLess450 = ({ categories, activeCategoryId }) => {
  const [isVisibleAllCategories, setVisibleAllCategories] = React.useState(
    false,
  );

  const toggleVisiblePopup = () => {
    setVisibleAllCategories(
      (isVisibleAllCategories) => !isVisibleAllCategories,
    );
  };

  return (
    <ul>
      <span
        className={isVisibleAllCategories ? 'rotated' : ''}
        onClick={toggleVisiblePopup}
      ></span>
      <Category
        activeCategoryId={activeCategoryId}
        index={activeCategoryId}
        name={categories[activeCategoryId]}
      />
      {isVisibleAllCategories &&
        categories &&
        categories.map((category, index) =>
          index === activeCategoryId ? (
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
    </ul>
  );
};

export default React.memo(CategoriesScreenLess450);
