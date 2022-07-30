import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
const socket = io("localhost:3002");

export type Props = {};
export interface Queue {
    chanel: number;
    queue: number;
}
const Queue: React.FC<Props> = () => {
    const [chanel, setChanel] = useState(0);
    const [queue, setQueue] = useState(0);

    const [start_que, setStartQue] = useState<boolean>(false);

    const next = () => {
        const url = process.env.NEXT_PUBLIC_API_LOCAL_URL_API;
        axios
            .get(
                `http://localhost:3000/api/queue?number=${queue}&chanel=${chanel}&type=1`
            )
            .then((res) => {
                const response = res.data as any;
                if (response.status === "success") {
                    setTimeout(() => {
                        const file_name = `/mp3/${queue}_${chanel}.mp3`;
                        console.log(file_name);
                        let myAudio = new Audio(file_name);
                        // myAudio.muted = true;
                        myAudio.play();
                    }, 500);
                }
            })
            .catch((error) => console.log(error));
    };

    //init numberSelect
    useEffect(() => {
        socket.on("queue-message", (payload) => {
            const result = payload as Queue;
            setChanel(result.chanel);
            setQueue(result.queue);
        });
    }, []);

    useEffect(() => {
        if (queue > 0) {
            next();
        }
    }, [queue]);

    return (
        <>
            {start_que === true ? (
                <>
                    {/* <h2>
                        {queue} ช่องที่ {chanel}
                    </h2> */}
                    <div className="row">
                        <div className="col-12 ">
                            <h1 className="text-center">CASHLESS</h1>
                            <div className="text-success text-center"><i className="bi bi-calendar"></i> 07/08/2022 12:23:6</div>
                        </div>
                    </div>
                    <div className="row header-queue">
                        <div className="col-6 text-center ">
                            <h2>เชิญหมายเลข</h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>ช่องบริการ</h2>
                        </div>
                    </div>
                    <div className="row body-queue justify-content-center">
                        <div className="col-5 text-center btn btn-primary btn-lg mt-2 me-2">
                            <h2 className="font-lg">1</h2>
                        </div>
                        <div className="col-5 text-center mt-2 btn btn-primary btn-lg">
                            <h2 className="font-lg">1</h2>
                        </div>
                        <div className="col-5 text-center btn btn-primary btn-lg mt-2  me-2">
                            <h2 className="font-lg">2</h2>
                        </div>
                        <div className="col-5 text-center mt-2 btn btn-primary btn-lg">
                            <h2 className="font-lg">2</h2>
                        </div>
                        <div className="col-5 text-center btn btn-primary btn-lg mt-2  me-2">
                            <h2 className="font-lg">3</h2>
                        </div>
                        <div className="col-5 text-center mt-2 btn btn-primary btn-lg">
                            <h2 className="font-lg">3</h2>
                        </div>
                        <div className="col-5 text-center btn btn-primary btn-lg mt-2  me-2">
                            <h2 className="font-lg">4</h2>
                        </div>
                        <div className="col-5 text-center mt-2 btn btn-primary btn-lg">
                            <h2 className="font-lg">4</h2>
                        </div>
                    </div>


                    <div className="row mt-5">
                        <h1 className="text-center">เชิญหมายเลข 12 ที่ช่องบริการ 1 ค่ะ</h1>
                    </div>
                </>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h1 className="text-center">CASHLESS</h1>
                        <button className="btn btn-lg btn-primary" onClick={() => setStartQue(true)}>เริ่มต้นทำงาน</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Queue;
