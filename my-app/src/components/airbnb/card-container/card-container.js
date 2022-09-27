import AirbnbCard from "../card/card";
import airbnbcard1 from "../../../img/hero-banner.jpeg";
import "./card-container.css";
export default function AirbnbCardList() {
    const events = [
        {
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":2
        },
        {
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        },{
            "rating": "5",
            "reviews": "88",
            "img": {airbnbcard1},
            "country":"USA",
            "cost":"125",
            "description":"Learn about photography",
            "openSlots":0
        }
    ];

    return (
        <div className="cards-list">
            {
                events.map(e => (
                    <AirbnbCard  data={e} />
                ))
            }
        </div>
    )
}   