import React from 'react';
import Category from './Category';

const CategoriesScreenMore450 = ({ categories, activeCategoryId }) => {
  return (
    <ul>
      <Category
        activeCategoryId={activeCategoryId}
        index={0}
        name={categories[0]}
      />
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
    </ul>
  );
};

export default React.memo(CategoriesScreenMore450);
