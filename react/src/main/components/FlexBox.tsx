import { useState } from "react";
import '../css/FlexBox.css';

interface CounterGameEvent {
    eventId: number,
    eventTitle: string,
    eventMessage: string
}

export default function EventsList(): JSX.Element {
    const [events, setEvents] = useState<CounterGameEvent[]>([ {
        eventId: 1,
        eventTitle: "eventTitle",
        eventMessage:  `eventMessage adsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfa
        adsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfa 
        adsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfaadsfa `
    }]);
    const numberOfSlots = 5;
    const eventSlots: JSX.Element[] = [];

    function AddEvent(eventId: number, eventTitle: string, eventMessage: string) {
        const newEvents = events;
        const newEvent: CounterGameEvent = {
            eventId: eventId,
            eventTitle: eventTitle,
            eventMessage: eventMessage
        }
        newEvents.unshift(newEvent);
        if (newEvents.length > numberOfSlots) {
            newEvents.pop();
        }
        setEvents(newEvents);
    }

    for (let i = 0; i < events.length; i++) {
        eventSlots.push(<EventSlot {...events[i]}/>);
    }
    for (let i = 0; i < numberOfSlots - events.length; i++) {
        eventSlots.push(<EventSlot {...{} as CounterGameEvent}/>);
    }

    return <div className="eventList">
        <h1>Events</h1>
        <div >
            {eventSlots}
        </div>
    </div>;
}

function EventSlot(prop: CounterGameEvent): JSX.Element {
    return <div className="eventSlot">
        <h2>{prop.eventTitle}</h2>
        <p>{prop.eventMessage}</p>
    </div>;
}
