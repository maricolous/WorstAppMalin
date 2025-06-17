import React, { useState, useCallback } from "react";
import { Animated, TextInput } from "react-native";

const RandomPositionWrapper = ({ children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveRandomly = useCallback(() => {
    const newTop = Math.random() * 300;
    const newLeft = Math.random() * 300;
    setPosition({ top: newTop, left: newLeft });
  }, []);

  const enhanceChildren = (children) =>
    React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;

      if (child.type === TextInput) {
        return React.cloneElement(child, {
          onFocus: () => {
            moveRandomly();
            if (child.props.onFocus) {
              child.props.onFocus();
            }
          },
        });
      }

      if (child.props?.children) {
        return React.cloneElement(child, {
          children: enhanceChildren(child.props.children),
        });
      }

      return child;
    });

  return (
    <Animated.View
      style={{ position: "relative", top: position.top, left: position.left }}
    >
      {enhanceChildren(children)}
    </Animated.View>
  );
};

export default RandomPositionWrapper;
