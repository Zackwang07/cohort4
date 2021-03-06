import React, { useState, useEffect } from 'react';
import func from './business/FifoLifoFunc';
import FifoLifoComp from './FifoLifoComp';

function QueueStackComp() {

    const [fifo, setFifo] = useState();
    const [lifo, setLifo] = useState();
    const [fifoNode, setFifoNode] = useState(1);
    const [lifoNode, setLifoNode] = useState(1);

    const [message, setMessage] = useState({ text: "", class: "" });

    const [queueCtrl] = useState(new func.FifoQueue());
    const [stackCtrl] = useState(new func.LifoStack());

    useEffect(() => {
        // This effect will run any time a state variable changes
        console.log('----useEffect: general');
       
        
    });

    useEffect(() => {
        function fetchData() {
            try {
                userMsg("Queue & Stack", "status");
            } catch (e) {
                userMsg("***** Error*****", "error");
            }
        }
        fetchData();
    }, []);

    


    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function onSave() {
        
        setFifoNode(fifoNode + 1);
        queueCtrl.enqueue(fifoNode);
        setFifo(queueCtrl.show());

        setLifoNode(lifoNode + 1);
        stackCtrl.putIn(lifoNode)
        setLifo(stackCtrl.show());

        userMsg();
    }

    function onDelete() {
        queueCtrl.dequeue();
        setFifo(queueCtrl.show());

        stackCtrl.takeOut();
        setLifo(stackCtrl.show());
    }

    return (
        <div>
            <FifoLifoComp
                queue={fifo}
                stack={lifo}
                onSave={onSave}
                onDelete={onDelete}
                userMsg={userMsg} />
            <label className={message.class}>{message.text}</label>
        </div>
    )
}

export default QueueStackComp; 