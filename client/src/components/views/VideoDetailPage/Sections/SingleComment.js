import React from 'react';
import { Comment, Avatar, Button, Input } from 'antd';

function SingleComment(props) {
    return;
    <div>
        <Comment actions author avatar={<Avatar src alt />} />
        <form style={{ display: 'flex' }} onSubmit>
            <textarea style={{ width: '100%', borderRadius: '5px' }} onChange value placeholder="코멘트를 작성해 주세요 " />
            <br />
            <button style={{ width: '20%', height: '52px' }} onClick>
                Submit
            </button>
        </form>
    </div>;
}

export default SingleComment;
