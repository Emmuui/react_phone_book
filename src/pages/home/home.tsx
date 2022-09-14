import React, { ReactElement } from 'react';
import {Contacts} from "src/features/contact/components";

const HomePage = (): ReactElement => {
  return (
    <div>
      <Contacts />
    </div>
  );
};

export default HomePage;
