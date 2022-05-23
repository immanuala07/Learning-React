import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    console.log('DemoOutput Running')
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

// Using memo will cause React to skip rendering a component if its props have not changed.
// This can improve performance.
export default React.memo(DemoOutput);
