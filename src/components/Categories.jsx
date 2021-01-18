import React from 'react';
import Category from './Category';

const Categories = ({ categories }) => {
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
      {/* <ul>
        <span
          className={isVisibleAllCategories ? 'rotated' : ''}
          onClick={toggleVisiblePopup}
        ></span>
        <li className="active">{categories[0]}</li>
        {isVisibleAllCategories && (
          <>
            {categories &&
              categories.map((category, index) =>
                index === 0 ? '' : <li key={category}>{category}</li>,
              )}
          </>
        )}
      </ul> */}
      <ul>
        <span
          className={isVisibleAllCategories ? 'rotated' : ''}
          onClick={toggleVisiblePopup}
        ></span>
        {/* <li className="active">{categories[0]}</li> */}
        <Category name={categories[0]} />
        {isVisibleAllCategories && (
          <>
            {categories &&
              categories.map((category, index) =>
                index === 0 ? '' : <Category key={category} name={category} />,
              )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Categories;
