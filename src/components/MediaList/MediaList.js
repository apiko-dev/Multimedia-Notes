import React from 'react';
import T from 'prop-types';
import R from 'ramda';
import { FlatList } from 'react-native';
import { pure } from 'recompose';
import { globalStyles } from '../../styles';
import { EmptyCover, Separator } from '../../components';

const List = ({
  items,
  noItemsTitle,
  noItemsCaption,
  ListItem,
  needSeparator = false,
  rowDirection = false,
  ...props
}) => (
  <FlatList
    style={[globalStyles.fillAll]}
    keyExtractor={R.prop('id')}
    ListEmptyComponent={
      <EmptyCover
        title={noItemsTitle}
        caption={noItemsCaption}
        center
      />}
    containerStyle={[globalStyles.fillAll]}
    numColumns={rowDirection ? 2 : undefined}
    columnWrapperStyle={rowDirection ? globalStyles.rowDirection : undefined}
    data={items}
    ItemSeparatorComponent={needSeparator && (() => <Separator small />)}
    renderItem={({ item }) => (
      <ListItem item={item} {...props} key={item.id} />
    )}
    ListFooterComponent={R.isEmpty(items) || !needSeparator ? undefined : (() => (
      <Separator
        withBorderTop
        withBorderBottom={false}
      />
    ))}
  />
);

List.propTypes = {
  items: T.arrayOf(T.object),
  fetchMore: T.func,
  noItemsTitle: T.string,
  noItemsCaption: T.string,
  ListItem: T.func,
  needSeparator: T.bool,
  rowDirection: T.bool,
};

export default pure(List);
