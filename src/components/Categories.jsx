import React from 'react';

const Categories = () => {
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
        <li className="active">Все</li>
        {isVisibleAllCategories && (
          <>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Categories;
