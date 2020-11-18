import React from 'react';
const About = (props) => {
    const arr = []
    Object.keys(props).map((k, i) => {
        if (props[i]) arr.push(props[i]);
    });
    return (
        <div className="about">
            <div>
                Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit
           </div>
            <div className="info">
                {arr.map((e) => {
                    return <div className="infoCard">
                        <div className="infoPhoto"></div>
                        <div>
                        <h6 className="generalInfo">Name: {e.name}</h6>
                        <h6 className="generalInfo">Position: {e.position} </h6>
                        <h6 className="generalInfo">Phone: {e.phone}</h6>
                        <h6 className="generalInfo">Email: {e.email}</h6>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default About

