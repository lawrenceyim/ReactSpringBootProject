import { useEffect, useState } from "react";
import '../css/FlexBox.css';
import React from "react";

// For least pain, make sure the interface keys match the JSON message keys
interface CounterGameEvent {
    id: number,
    title: string,
    message: string
}

export default function EventsList(): JSX.Element {
    const [events, setEvents] = useState<CounterGameEvent[]>([]);

    // Call event once to initialize events list. 
    // Replace this logic later
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/getEvents');
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            const data = await response.text();
            setEvents(ParseData(data));
        }

        fetchData();
    }, []);

    return <div className="eventList">
        <h1>Events</h1>
        <div>
            {events.map(event => (
                <EventSlot
                    key={event.id}
                    {...event}
                />
            ))}
        </div>
    </div>;
}

function EventSlot(prop: CounterGameEvent): JSX.Element {
    return <>
        <div className="eventSlot">
            <h2>{prop.title}</h2>
            <p>{prop.message}</p>
        </div>
    </>;
}

function ParseData(data: string): CounterGameEvent[] {
    return JSON.parse(data).events;
}