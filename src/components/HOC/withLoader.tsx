import React, { Component, PropsWithChildren} from "react";

type IProps = {
    loading: boolean;
}

export const withLoader = (Component: PropsWithChildren<div>) => ({ loading, ...props}: IProps) => {
  return loading ? (
    <div data-testid="test-loader" className="loader-overlay">
      <div className="loader-circle-wrap">
        <div className="loader-circle" />
      </div>
    </div>
  ) : (<Component {...props} />)
};

export default withLoader;
