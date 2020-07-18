import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Subscribe(props) {
    const userTo = props.userTo;
    const userFrom = props.userFrom;

    const [SubscribeNumber, setSubscribeNumber] = useState(0);
    const [Subscribed, setSubscribed] = useState(false);

    const onSubscribe = () => {
        let subscribeVariable = {
            userTo: userTo,
            userFrom: userFrom,
        };

        if (Subscribed) {
            console.log('Subscribed', Subscribed);
            Axios.post('/api/subscribe/unsubscribe', subscribeVariable).then((response) => {
                if (response.data.success) {
                    setSubscribeNumber(SubscribeNumber - 1);
                    setSubscribed(!Subscribed);
                } else {
                    alert('Fail to subscribe');
                }
            });
        } else {
            console.log('Subscribed', Subscribed);
            Axios.post('/api/subscribe/subscribe', subscribeVariable).then((response) => {
                if (response.data.success) {
                    setSubscribeNumber(SubscribeNumber + 1);
                    setSubscribed(!Subscribed);
                } else {
                    alert('Fail to subscribe');
                }
            });
        }
    };

    useEffect(() => {
        let variables = {
            userTo: props.userTo,
        };
        Axios.post('/api/subscribe/subscribeNumber', variables).then((response) => {
            if (response.data.success) {
                setSubscribeNumber(response.data.subscribeNumber);
            } else {
                alert('Fail to subscribe Number');
            }
        });
        let subscribedVariable = {
            userTo: props.userTo,
            userFrom: localStorage.getItem('userId'),
        };

        Axios.post('/api/subscribe/subscribed', subscribedVariable).then((response) => {
            if (response.data.success) {
                setSubscribed(response.data.subscribed);
            } else {
                alert('Fail to subscribe');
            }
        });
    }, []);
    return (
        <div>
            <button
                onClick={onSubscribe}
                style={{
                    backgroundColor: `${Subscribed ? '#AAAAAA' : '#CC0000'}`,
                    borderRadius: '4px',
                    color: 'white',
                    padding: '10px 16px',
                    fontWeight: '500',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                }}
            >
                {SubscribeNumber} {Subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    );
}

export default Subscribe;
