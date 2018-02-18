import * as React from 'react';

import './multi-selector.scss';

import {
  MultiSelectorDispatchProps,
  MultiSelectorStateProps,
} from './';

interface MultiSelectorCombinedProps
  extends MultiSelectorStateProps, MultiSelectorDispatchProps {}

export const MultiSelectorPresentation: React.SFC<MultiSelectorCombinedProps> =
({
  choices, selectedIds,
  onDeselected, onSelected,
}) => {
  const handleClick = (id: string, isSelected: boolean) => {
    if (isSelected) {
      onDeselected(id);
    } else {
      onSelected(id);
    }
  };
  return (
    <div>
      { choices.map((choice) => {
        const isSelected = selectedIds.indexOf(choice._id) > -1;
        return (
          <div key={ choice._id }
            onClick={ () => handleClick(choice._id, isSelected) }
            className={ 'o-spacing-bottom ' +
              'c-multi-selector__option ' +
              (isSelected ? 'c-multi-selector__option--selected' : '')
            }
          >
            { choice.label }
          </div>
        );
      }) }
    </div>
  );
};
