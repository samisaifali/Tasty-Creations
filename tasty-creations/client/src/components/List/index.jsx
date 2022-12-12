import React from "react";

const List = ({ data, renderItem, keyExtractor, SeparatorComponent }) => {
  return data.map((item, index) => (
    <React.Fragment key={keyExtractor(item)}>
      {renderItem(item)}
      {index < data.length - 1 && <SeparatorComponent />}
    </React.Fragment>
  ));
};

export default React.memo(List);
