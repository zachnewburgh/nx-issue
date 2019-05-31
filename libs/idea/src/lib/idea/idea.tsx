import { ReactUi } from '@nx-issue/react-ui';
import React from 'react';
import './idea.scss';

/* tslint:disable:no-empty-interface */
export interface IdeaProps {}

export const Idea = (props: IdeaProps) => {
  return (
    <>
      <h1>From Idea Component:</h1>
      <ReactUi />
    </>
  );
};

export default Idea;
