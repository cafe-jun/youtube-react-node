import React, { useEffect } from 'react';
import SingleComment from './SingleComment';

function ReplyComment(props) {
    const [ChildCommentNumber, setChildCommentNumber] = useState(0);
    const [OpenReplyComments, setOpenRelayComments] = useState(initialState);
    useEffect(() => {
        let commentNumber = 0;
        props.CommentLists.map((comment) => {
            if (comment.responseTo === props.parentCommentId) {
                commentNumber++;
            }
        });
        setChildCommentNumber(commentNumber);
    }, [props.CommentLists]);
    const renderReplyComment = (parentCommentId) => {
        props.commentLists.map((comment, index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId && (
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={videoId} key={index} />
                        <ReplyComment commentLists={props.commentLists} />
                    </div>
                )}
            </React.Fragment>
        ));
    };
    const onHanleChage = () => {
        setOpenRelayComments(!OpenReplyComments);
    };
    return (
        <div>
            {ChildCommentNumber > 0 && (
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }} onClick={onHanleChage}>
                    view {ChildCommentNumber} more comment(s)
                </p>
            )}

            {!OpenReplyComments && renderReplyComment(props.parentCommentId)}
        </div>
    );
}

export default ReplyComment;
