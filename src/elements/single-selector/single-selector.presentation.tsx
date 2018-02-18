import * as React from 'react';

import './single-selector.scss';

import {
  SingleSelectorDispatchProps,
  SingleSelectorStateProps,
} from './';

interface SingleSelectorCombinedProps
  extends SingleSelectorStateProps, SingleSelectorDispatchProps {}

export const SingleSelectorPresentation: React.SFC<SingleSelectorCombinedProps>
= ({
  choices, selectedId,
  onSelected,
}) => {
  const handleClick = (id: string, isSelected: boolean) => {
    if (!isSelected) {
      onSelected(id);
    }
  };
  return (
    <div>
      { choices.map((choice) => {
        const isSelected = selectedId === choice._id;
        return (
          <div key={ choice._id }
            onClick={ () => handleClick(choice._id, isSelected) }
            className={ 'o-spacing-bottom ' +
              'c-single-selector__option ' +
              (isSelected ? 'c-single-selector__option--selected' : '')
            }
          >
            { choice.label }
          </div>
        );
      }) }
    </div>
  );
};
