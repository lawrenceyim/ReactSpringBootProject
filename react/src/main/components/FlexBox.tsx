import { useEffect, useState } from "react";
import '../css/FlexBox.css';

interface CounterGameEvent {
    eventId: number,
    eventTitle: string,
    eventMessage: string
}

export default function EventsList(): JSX.Element {
    const [events, setEvents] = useState<CounterGameEvent[]>([]);

    // Call event once to initialize events list. \
    // Replace this logic later
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/getEvents');
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            const data = await response.json();
            if (Array.isArray(data.events)) {
                setEvents(data.events);
            }
        }

        fetchData();
    }, []);

    return <div className="eventList">
        <h1>Events</h1>
        <div>
            {events.map(event => (
                <EventSlot
                    key={event.eventId}
                    eventTitle={event.eventTitle}
                    eventMessage={event.eventMessage}
                />
            ))}
        </div>
    </div>;
}

interface EventSlotProps {
    key: number
    eventTitle: string;
    eventMessage: string;
}

function EventSlot(prop: EventSlotProps): JSX.Element {
    return <div className="eventSlot">
        <h2>{prop.eventTitle}</h2>
        <p>{prop.eventMessage}</p>
    </div>;
}
