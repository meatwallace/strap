import React from 'react';
import { Body, Header as HeaderNB, Title, View } from 'native-base';
import variables from '@common/styles/variables';

const { primary } = variables;

const styles = {
  container: {
    backgroundColor: primary,
    maxHeight: 64,
    minHeight: 64,
  },
  body: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
};

const Header = () => (
  <View style={styles.container}>
    <HeaderNB>
      <Body style={styles.body}>
        <Title>Title</Title>
      </Body>
    </HeaderNB>
  </View>
);

export default Header;
