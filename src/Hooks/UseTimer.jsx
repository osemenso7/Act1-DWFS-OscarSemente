import { useState, useEffect } from 'react';

const useTimer = (time) => {
    const [loading, setLoading] = useState(true);

    function handleSetLoading(loading) {
        setLoading(loading);
    }

    const waitTime = async (time) => {
        handleSetLoading(true);
        await new Promise(resolve => setTimeout(resolve, time));
        handleSetLoading(false);
    };

    useEffect(() => {
        waitTime(time);
    }, []);

    return { loading };
};

export default useTimer;
