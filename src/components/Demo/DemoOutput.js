import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    console.log('DemoOutput Ru nning')
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default DemoOutput;
