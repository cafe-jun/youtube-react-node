import React from 'react';

function Comment() {
    return (
        <div>
            <br />
            <p> Reples</p>
            <hr />
            {/* Comment List */}

            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit>
                <textarea style={{ width: '100%', borderRadius: '5px' }} onChange value placeholder="코멘트를 작성해 주세요 " />
                <br />
                <button style={{ width: '20%', height: '52px' }} onClick>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Comment;
