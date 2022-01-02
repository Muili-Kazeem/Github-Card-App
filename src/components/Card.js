import React from "react";
import "./Card.css";

const CardList = (props) => {

    const profiles = props.profiles.map(profile => {
        return <Card {...profile} key={profile.id}/>
    })
    return(
        <div>
            {profiles}
        </div>
    )
}


class Card extends React.Component {
    render() {
        const profile = this.props;

        return (
        <div className="github-profile">
            <img src={profile.avatar_url} alt="profile img" className="profile-img"/>
            <div className="info">
                <div className="name align">{profile.name ? profile.name : "Recent data exists not. Try another"}</div>
                <div className="company align">{profile.company ? profile.company : "Company name not updated. I no fit lie give you"}</div>
                <div className="location align">{profile.location ? profile.location : "Maybe on mars, who knows?"}</div>
            </div>
        </div>
        )
    }
}

export default CardList