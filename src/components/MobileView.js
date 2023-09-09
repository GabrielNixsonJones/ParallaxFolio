import React from 'react'

import { Page1 } from './SmPage/Page1';
import { Page2 } from './SmPage/Page2';
import { Page3 } from './SmPage/page3';
import { Page4 } from './SmPage/Page4';
import { Page5 } from './SmPage/Page5';
import { Page6 } from './SmPage/Page6';
import { Page7 } from './SmPage/Page7';
import { Page8 } from './SmPage/Page8';
import { Page9 } from './SmPage/Page9';
import { Page10 } from './SmPage/Page10';
import { FinalPage } from './SmPage/FinalPage';

export const MobileView = React.memo(() => {

    return (
        <div>

            <div>
                <Page1 />
            </div>

            <div>
                <Page2 />
            </div>

            <div>
                <Page3 />
            </div>

            <div>
                <Page4 />
            </div>

            <div>
                <Page5 />
            </div>

            <div>
                <Page6 />
            </div>

            <div>
                <Page7 />
            </div>

            <div>
                <Page8 />
            </div>

            <div>
                <Page9 />
            </div>

            <div>
                <Page10 />
            </div>

            <div>
                <FinalPage />
            </div>


        </div>
    )
})
