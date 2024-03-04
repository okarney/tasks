import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🌲");

    function alphabetical(): void {
        if (holiday === "🌲") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🌲");
        }
        // Christmas, Halloween, New Year's, St. Patrick's Day, Valentine's Day
    }

    function byDate(): void {
        if (holiday === "🎃") {
            setHoliday("🌲");
        } else if (holiday === "🌲") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🎃");
        }

        // Halloween, Christmas,  New Year's, Valentine's Day, St. Patrick's Day
    }

    // function alphabetical(): void {
    //     if (holiday === "Christmas: 🌲") {
    //         setHoliday("Halloween: 🎃");
    //     } else if (holiday === "Halloween: 🎃") {
    //         setHoliday("New Year's: 🎆");
    //     } else if (holiday === "New Year's: 🎆") {
    //         setHoliday("St. Patrick's Day: 🍀");
    //     } else if (holiday === "St. Patrick's Day: 🍀") {
    //         setHoliday("Valentine's Day: ❤️");
    //     } else if (holiday === "Valentine's Day: ❤️") {
    //         setHoliday("Christmas: 🌲");
    //     }
    //     // Christmas, Halloween, New Year's, St. Patrick's Day, Valentine's Day
    // }

    // function byDate(): void {
    //     if (holiday === "Halloween: 🎃") {
    //         setHoliday("Christmas: 🌲");
    //     } else if (holiday === "Christmas: 🌲") {
    //         setHoliday("New Year's: 🎆");
    //     } else if (holiday === "New Year's: 🎆") {
    //         setHoliday("Valentine's Day: ❤️");
    //     } else if (holiday === "Valentine's Day: ❤️") {
    //         setHoliday("St. Patrick's Day: 🍀");
    //     } else if (holiday === "St. Patrick's Day: 🍀") {
    //         setHoliday("Halloween: 🎃");
    //     }

    //     // Halloween, Christmas,  New Year's, Valentine's Day, St. Patrick's Day
    // }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <br></br>
            <Button onClick={alphabetical}>Advance by Alphabet</Button>
            <Button onClick={byDate}>Advance by Year</Button>
        </div>
    );
}
