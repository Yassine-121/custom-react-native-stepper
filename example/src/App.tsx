import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Stepper from 'custom-react-native-stepper';

const MyComponent = (props: {
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const content = [
  <MyComponent title="Component 1" />,
  <MyComponent title="Component 2" />,
  <MyComponent title="Component 3" />,
];

const App = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => console.warn('Finish')}
        onNext={() => setActive((p) => p + 1)}
      />
    </View>
  );
};

export default App;
