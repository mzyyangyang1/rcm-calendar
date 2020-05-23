import React from 'react';
import {ICalendarProps} from './types';
import Day from './day/index';
import Week from './week/index';
import Month from './month/index';

// scss
import './style/base.scss';
import './index.scss';

export default function Calendar(props: ICalendarProps) {
    const {
        date,
        viewType,
        isWhichHour,
        schedules,
        alldayName,
        monthVisibleWeeksCount,
        isVisibleSolar2lunar,
        clickSchedule,
        clickBlank,
        dbclickBlank,
        rightMouseClick,
        monthClickMore,
        renderHeaderTemplate,
    } = props;
    
    const getViewType = (type: string) => {
        switch(type) {
            case 'day':
                return <Day 
                            date={date}
                            isWhichHour={isWhichHour}
                            schedules={schedules}
                            clickSchedule={clickSchedule}
                            clickBlank={clickBlank}
                            dbclickBlank={dbclickBlank}
                            rightMouseClick={rightMouseClick}
                            renderHeaderTemplate={renderHeaderTemplate}
                        />;
            case 'week':
                return <Week 
                            name={'week'}
                            date={date}
                            isWhichHour={isWhichHour}
                            schedules={schedules}
                            clickSchedule={clickSchedule}
                            clickBlank={clickBlank}
                            dbclickBlank={dbclickBlank}
                            rightMouseClick={rightMouseClick}
                            renderHeaderTemplate={renderHeaderTemplate}
                       />;
            case 'month':
                return <Month 
                            name={'month'}
                            date={date}
                            schedules={schedules}
                            monthVisibleWeeksCount={monthVisibleWeeksCount}
                            isVisibleSolar2lunar={isVisibleSolar2lunar}
                            renderHeaderTemplate={renderHeaderTemplate}
                            clickSchedule={clickSchedule}
                            rightMouseClick={rightMouseClick}
                            clickBlank={clickBlank}
                            dbclickBlank={dbclickBlank}
                            monthClickMore={monthClickMore}
                        />;
        }
    }
    
    return (
        <div className="rm-calendar-container">
            {
                getViewType(viewType)
            }
        </div>
    )
}