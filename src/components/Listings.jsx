import classes from './Listings.modules.css'
import Ad from "./Ad";
import {useLoaderData} from "react-router-dom";
function Listings({actionType}) {
    const listings = useLoaderData();
       return (
        <>
            {listings.length > 0 && (
                <ul className='ads'>
                    {listings.map((listings) => (
                        <Ad id={listings.id}
                            name={listings.name}
                            price={listings.price}
                            views={listings.views}
                            actionType = {actionType}
                        />
                    ))}
                </ul>
            )}
            {listings.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
</>
);
}
export default Listings;