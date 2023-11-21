import React, { ComponentType, useEffect } from "react";

const withScrollToTop = <T extends object>(
  WrappedComponent: ComponentType<T>
): React.FC<T> => {
  return (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withScrollToTop;
