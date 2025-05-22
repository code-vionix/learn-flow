import CommentItem from "./CommentItem";

const CommentList = ({
  comments,
  replyText,
  setReplyText,
  replyToId,
  setReplyToId,
  handleReply,
}) => {
  return comments.map((comment) => (
    <CommentItem
      key={comment.id}
      comment={comment}
      replyText={replyText}
      setReplyText={setReplyText}
      replyToId={replyToId}
      setReplyToId={setReplyToId}
      handleReply={handleReply}
      isNested={false}
    />
  ));
};

export default CommentList;
