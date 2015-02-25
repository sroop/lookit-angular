class CommentsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def create
    post = Post.find(params[:post_id])
    comment = post.comments.create(permitted_params.merge(user_id: current_user.id))
    respond_with post, comment
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with post, comment
  end

  private

  def permitted_params
    params.require(:comment).permit(:body, :upvotes, :author)
  end

end
