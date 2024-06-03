import facilitiesRegist from "../../../models/CampGround/facilitiesRegist";
import axios from "axios";

export default function CampGroundRegister() {
    const data = {
        userNo: 2,
        facilitiesInfoNo: 1,
        mannerStartTime: new Date('2020-05-01 22:00:00').toISOString().slice(0, 19).replace('T', ' '),
        mannerEndTime: new Date('2020-05-01 09:00:00').toISOString().slice(0, 19).replace('T', ' '),
        campGroundImages: '["a","b","c"]',
        name: "Happy",
        location: "house",
        type: "CAMPING",
        callNum: "123",
        campingInfo: "Happy House",
        enterTime: new Date('0001-01-01 22:00:00').toISOString().slice(0, 19).replace('T', ' '),
        leaveTime: new Date('0001-01-01 22:00:00').toISOString().slice(0, 19).replace('T', ' ')
    }

    function onClick() {
        axios.post(facilitiesRegist,data).then((res) => {
            console.log(res.data);
        })
    }

    return <div>
        <button onClick={() => onClick()}>btn</button>
    </div>
}